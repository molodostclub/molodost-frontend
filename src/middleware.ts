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
