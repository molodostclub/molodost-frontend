import Link from 'next/link';

export default function NotFound() {
	return (
		<main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
			<h1 style={{ fontSize: '3rem', margin: 0 }}>404</h1>
			<p style={{ marginTop: '0.5rem' }}>Страница не найдена</p>
			<Link href="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
				На главную
			</Link>
			<meta name="robots" content="noindex,nofollow" />
		</main>
	);
}
