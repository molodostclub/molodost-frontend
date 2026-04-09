function onlyDigits(s: string) {
	return s.replace(/\D/g, '');
}

export type NormalizeRuPhoneResult = { formatted: string; valid: boolean; digits: string };

export function normalizeRuPhone(raw: string): NormalizeRuPhoneResult {
	let digits = onlyDigits(raw);
	if (!digits) return { formatted: '', valid: false, digits: '' };

	if (digits[0] === '8') digits = '7' + digits.slice(1);
	if (digits[0] !== '7') {
		if (digits[0] === '9') digits = '7' + digits;
		else digits = '7' + digits;
	}

	digits = digits.slice(0, 11);
	const valid = digits.length === 11 && digits[0] === '7';

	const p1 = digits.slice(1, 4);
	const p2 = digits.slice(4, 7);
	const p3 = digits.slice(7, 9);
	const p4 = digits.slice(9, 11);

	let formatted = '+7';
	if (p1) formatted += ` ${p1}`;
	if (p2) formatted += ` ${p2}`;
	if (p3) formatted += `-${p3}`;
	if (p4) formatted += `-${p4}`;

	return { formatted, valid, digits };
}
