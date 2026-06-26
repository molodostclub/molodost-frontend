export async function submitFormRequest(
	body: Record<string, unknown>,
	options?: { signal?: AbortSignal },
): Promise<number> {
	const response = await fetch('/api/form-request', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
		signal: options?.signal,
	});

	return response.status;
}
