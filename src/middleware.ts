import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const blockedUa = [/AhrefsBot/i, /MJ12bot/i, /SemrushBot/i, /DotBot/i, /PetalBot/i, /CensysInspect/i, /curl/i, /wget/i];
const blockedPaths = [/^\/wp-login\.php/i, /^\/wp-admin/i, /^\/xmlrpc\.php/i, /^\/\.env/i, /^\/composer\.(json|lock)/i, /^\/vendor/i, /^\/core/i, /^\/boaform/i, /^\/\.git/i, /^\/\.htaccess/i];

export function middleware(req: NextRequest) {
	const url = new URL(req.url);
	const pathname = url.pathname;

	// Инициализация кеша изображений выполняется через server-init.js при старте сервера
	// т.к. middleware работает в Edge Runtime без доступа к файловой системе

	if (req.method === 'HEAD' || req.method === 'OPTIONS') {
		return new NextResponse(null, { status: 204 });
	}

	// Защита от path traversal атак (например, /../../../../../../../proc/self/environ)
	// Нормализуем путь для проверки (убираем лишние слеши и декодируем)
	const normalizedPath = decodeURIComponent(pathname).replace(/\/+/g, '/');
	
	// Блокируем попытки path traversal и доступа к системным файлам
	const isPathTraversal = pathname.includes('..') || normalizedPath.includes('..') || pathname.includes('//');
	const isSystemPath = /^\/proc\//i.test(pathname) || 
		/^\/sys\//i.test(pathname) || 
		/^\/dev\//i.test(pathname) || 
		/^\/etc\//i.test(pathname) ||
		/^\/proc\//i.test(normalizedPath);
	const isEnvFile = /^\/app\/\.env/i.test(pathname) ||
		/^\/root\/\.env/i.test(pathname) ||
		/\/\.env$/i.test(pathname);
	const isAppRootAccess = /^\/app\//i.test(normalizedPath) && !/^\/app\/_next\//i.test(normalizedPath);
	const isRootAccess = /^\/root\//i.test(normalizedPath);
	
	if (isPathTraversal || isSystemPath || isEnvFile || isAppRootAccess || isRootAccess) {
		return new NextResponse('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex, nofollow' } });
	}

	if (blockedPaths.some((re) => re.test(pathname))) {
		return new NextResponse('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex, nofollow' } });
	}

	const ua = req.headers.get('user-agent') || '';
	if (blockedUa.some((re) => re.test(ua))) {
		return new NextResponse('Blocked', { status: 403 });
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/:path*'],
};
