import type { NextApiRequest, NextApiResponse } from 'next';

function getClientIp(req: NextApiRequest): string {
	const xForwardedFor = req.headers['x-forwarded-for'];
	if (typeof xForwardedFor === 'string' && xForwardedFor.trim()) {
		return xForwardedFor.split(',')[0].trim();
	}
	return req.socket.remoteAddress || 'unknown';
}

function getFormApiUrl(): string {
	const base = process.env.FORM_API_URL || 'http://127.0.0.1:1337';
	return `${base.replace(/\/$/, '')}/api/form-requests`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
	}

	try {
		const response = await fetch(getFormApiUrl(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-forwarded-for': getClientIp(req),
			},
			body: JSON.stringify(req.body || {}),
			signal: AbortSignal.timeout(30_000),
		});

		const body = await response.json().catch(() => ({ ok: false, error: 'INVALID_BACKEND_RESPONSE' }));
		return res.status(response.status).json(body);
	} catch (error) {
		console.error('Form proxy error', error);
		return res.status(502).json({ ok: false, error: 'FORM_API_UNAVAILABLE' });
	}
}
