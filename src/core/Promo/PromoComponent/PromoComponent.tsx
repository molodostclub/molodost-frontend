import { BaseInput } from '@/shared/components/BaseInput';
import { Label } from '@/shared/components/Label';
import { indent } from '@/styles';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import * as styles from './PromoComponent.css';
import cn from 'classnames';
import { BaseCheckbox } from '@/shared/components/BaseCheckbox';
import { Checkbox } from '@/shared/components/BaseCheckbox/types';
import { FormState, normalizeRuPhone } from '@/utils';
import Link from 'next/link';
import { Description, SectionHeading } from '@/uikit';

const API_BASE = process.env.NEXT_PUBLIC_STRAPI_API ?? 'https://admin.molodost.club/api';

type InputEvent = ChangeEvent<HTMLInputElement>;

type WhatsAppInputChange = { formatted: string; digits: string; valid: boolean };

function WhatsAppInput({ value, onValueChange, placeholder = '+7 999 999-99-99', required = true }: { value: string; onValueChange: (v: WhatsAppInputChange) => void; placeholder?: string; required?: boolean }) {
	const [error, setError] = useState<string | null>(null);
	const formatError = 'Введите номер формата +7 XXX XXX-XX-XX';

	const handleChange = (e: InputEvent) => {
		const res = normalizeRuPhone(e.target.value);
		onValueChange(res);
		if (!res.formatted) setError(null);
		else setError(res.valid ? null : formatError);
	};

	const handleBlur = () => {
		const res = normalizeRuPhone(value);
		onValueChange(res);
		setError(res.formatted && !res.valid ? formatError : null);
	};

	return (
		<>
			<input type="tel" className={styles.input} placeholder={placeholder} value={value} onChange={handleChange} onBlur={handleBlur} inputMode="tel" maxLength={16} required={required} />
			{error && (
				<div className={styles.errorText} style={{ marginTop: 6 }}>
					{error}
				</div>
			)}
		</>
	);
}

export function PromoComponent() {
	const agreementLink = () => (
		<Link target="_blank" href="/docs/personal-data-agreement.pdf" className={styles.agreementLink}>
			обработку моих персональных данных
		</Link>
	);

	const marketingLink = () => (
		<Link target="_blank" href="/docs/promo/marketingAgreement.doc" className={styles.agreementLink}>
			на получение информационной и рекламной рассылки
		</Link>
	);

	const personalAgreementInit: Checkbox[] = [
		{
			label: 'Даю свое согласие на',
			linkText: agreementLink(),
			value: '6',
			checked: false,
		},
	];
	const marketingAgreementInit: Checkbox[] = [
		{
			label: 'Даю свое согласие на',
			linkText: marketingLink(),
			value: '7',
			checked: false,
		},
	];

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [waFormatted, setWaFormatted] = useState('');
	const [waDigits, setWaDigits] = useState('');
	const [waValid, setWaValid] = useState(false);

	const [personalAgreement, setPersonalAgreement] = useState<Checkbox[]>(personalAgreementInit);
	const [marketingAgreement, setMarketingAgreement] = useState<Checkbox[]>(marketingAgreementInit);
	const [StateForm, setStateForm] = useState<number>(FormState.Default);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onChangeCheckbox = (value: string, checkboxes: Checkbox[], callback: (data: any) => void) => {
		const copyItem = [...checkboxes];
		const modifiedData = copyItem.map((item) => {
			if (value === item.value) item.checked = !item.checked;
			return item;
		});
		callback(modifiedData);
	};

	const handleWaChange = (v: WhatsAppInputChange) => {
		setWaFormatted(v.formatted);
		setWaDigits(v.digits);
		setWaValid(v.valid);
	};

	const onSuccess = () => setStateForm(FormState.Success);
	const onError = () => setStateForm(FormState.Error);

	const isFormValid = useMemo(() => {
		const consentOk = personalAgreement[0]?.checked;
		return waValid && consentOk;
	}, [waValid, personalAgreement]);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!waValid || isSubmitting) return;

		setIsSubmitting(true);
		try {
			const res = await fetch(`${API_BASE}/form-requests`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, surname, whatsapp: `+${waDigits}` }),
			});

			if (res.ok) onSuccess();
			else onError();
		} catch {
			onError();
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{StateForm === FormState.Default && (
				<>
					<h1 className={cn(indent.mb_4, styles.pageTitle)}>АНКЕТА</h1>
					<p className={styles.descriptionCenter} style={{ textTransform: 'none', fontWeight: 400 }}>
						Заполните анкету, чтобы у&nbsp;нас остались ваши данные и&nbsp;мы&nbsp;могли прислать вам подарочный билет на&nbsp;бесплатное проживание в&nbsp;&laquo;Молодости&raquo; на&nbsp;Алтае!
					</p>
					<br />
					<form onSubmit={onSubmit}>
						<div className={indent.mt_4}>
							<div className={indent.mt_4}>
								<Label caption="Имя">
									<br />
									<BaseInput value={name} required={false} onChange={(e: InputEvent) => setName(e.target.value)} />
								</Label>
							</div>

							<div className={indent.mt_4}>
								<Label caption="Фамилия">
									<br />
									<BaseInput value={surname} required={false} onChange={(e: InputEvent) => setSurname(e.target.value)} />
								</Label>
							</div>

							<div className={indent.mt_4}>
								<Label caption="Контактный номер телефона">
									<br />
									<WhatsAppInput value={waFormatted} onValueChange={handleWaChange} />
								</Label>
							</div>

							{/*<div className={indent.mt_4}>
								<Label caption="Сумма чека">
									<br />
									<BaseInput type="text" placeholder="Введите сумму" value={checkAmount} required={true} onChange={(e: InputEvent) => setCheckAmount(e.target.value)} />
								</Label>
							</div>*/}
						</div>

						<div className={indent.mt_4}>
							<BaseCheckbox name="personalAgreement" item={personalAgreement[0]} required={true} onChange={() => onChangeCheckbox(personalAgreement[0].value, personalAgreement, (data) => setPersonalAgreement(data))} />
						</div>

						<div className={indent.mt_4}>
							<BaseCheckbox name="marketingAgreement" item={marketingAgreement[0]} required={true} onChange={() => onChangeCheckbox(marketingAgreement[0].value, marketingAgreement, (data) => setMarketingAgreement(data))} />
						</div>

						<button type="submit" className={cn(styles.ctaBtn, indent.mt_4)} id="sendForm" disabled={!isFormValid || isSubmitting} aria-busy={isSubmitting}>
							{isSubmitting ? 'Загрузка...' : 'ОСТАВИТЬ ЗАЯВКУ'}
						</button>

						<div className={indent.mt_4}>
							<small className={styles.noteBlack}>
								Нажимая кнопку &laquo;Отправить&raquo;, я&nbsp;подтверждаю, что ознакомлен с&nbsp;
								<Link target="_blank" href="/docs/promo/policy.doc" className={styles.agreementLink}>
									Политикой обработки персональных данных
								</Link>{' '}
								Общества с&nbsp;ограниченной ответственностью &laquo;Молодость&raquo;
							</small>
						</div>
					</form>
				</>
			)}

			{StateForm === FormState.Success && (
				<>
					<SectionHeading bold color="brand" size="S">
						Спасибо!
					</SectionHeading>
					<div className={indent.mt_4}>
						<Description>
							Спасибо, что заполнили анкету! <br />
							В&nbsp;течение 24&nbsp;часов мы&nbsp;вышлем вам билет в&nbsp;&laquo;Молодость&raquo; на&nbsp;Алтае.
						</Description>
					</div>
				</>
			)}

			{StateForm === FormState.Error && (
				<>
					<SectionHeading bold color="brand" size="S">
						Упс!
					</SectionHeading>
					<div className={indent.mt_4}>
						<Description>Что-то пошло не так, пожалуйста попробуйте ещё раз</Description>
					</div>
				</>
			)}
		</>
	);
}
