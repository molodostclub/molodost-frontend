import { BaseInput } from '@/shared/components/BaseInput';
import { Label } from '@/shared/components/Label';
import { indent } from '@/styles';
import { ChangeEvent, FormEvent, useState } from 'react';
import * as styles from './PromoComponent.css';
import cn from 'classnames';
import { BaseCheckbox } from '@/shared/components/BaseCheckbox';
import { Checkbox } from '@/shared/components/BaseCheckbox/types';
import { FormState, backendApi } from '@/utils';
import Link from 'next/link';
import { Description, SectionHeading } from '@/uikit';

type InputEvent = ChangeEvent<HTMLInputElement>;

export function PromoComponent() {
	const agreementLink = () => (
		<Link target="_blank" href="/docs/promo/personalAgreement.doc" className={styles.agreementLink}>
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

	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [whatsapp, setWhatsapp] = useState<string>('');
	const [attachment, setAttachment] = useState<File | null>(null);
	const [personalAgreement, setPersonalAgreement] = useState<Checkbox[]>(personalAgreementInit);
	const [marketingAgreement, setMarketingAgreement] = useState<Checkbox[]>(marketingAgreementInit);

	const [StateForm, setStateForm] = useState<number>(FormState.Default);

	const onChangeCheckbox = (value: string, checkboxes: Checkbox[], callback: (data: any) => void) => {
		const copyItem = [...checkboxes];
		const modifiedData = copyItem.map((item) => {
			if (value === item.value) {
				item.checked = !item.checked;
			}
			return item;
		});
		callback(modifiedData);
	};

	const onSuccess = () => {
		setStateForm(FormState.Success);
	};

	const onError = () => {
		setStateForm(FormState.Error);
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', name);
		formData.append('surname', surname);
		formData.append('whatsapp', whatsapp);
		if (attachment) {
			formData.append('attachment', attachment, attachment.name);
		}

		try {
			const { status } = await backendApi.post('form-requests', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			if (status === 200) {
				onSuccess();
			} else {
				onError();
			}
		} catch (e) {
			onError();
			console.error(e);
		}
	};

	return (
		<>
			{StateForm === FormState.Default && (
				<>
					<h1 className={cn(indent.mb_4, styles.pageTitle)}>АНКЕТА</h1>
					<p className={styles.descriptionCenter} style={{ textTransform: 'none', fontWeight: 400 }}>
						Заполните анкету, чтобы у&nbsp;нас остались ваши данные и&nbsp;мы&nbsp;могли прислать вам билет на&nbsp;бесплатное проживание в&nbsp;&laquo;Молодости&raquo; на&nbsp;Алтае!
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
								<Label caption="Контактный номер WhatsApp">
									<br />
									<BaseInput type="text" placeholder="+7 999 999 99 99" value={whatsapp} regExp={/[^+\s\d]/gi} required={false} onChange={(e: InputEvent) => setWhatsapp(e.target.value)} />
								</Label>
							</div>

							<div className={indent.mt_4}>
								<Label caption="Фото чека">
									<input
										type="file"
										accept=".pdf,.jpg,.jpeg,.png"
										required
										className={styles.inputFile}
										onChange={(e: InputEvent) => {
											const f = e.target.files?.[0] || null;
											setAttachment(f);
										}}
									/>
								</Label>
							</div>
						</div>
						<div className={indent.mt_4}>
							<BaseCheckbox name="personalAgreement" item={personalAgreement[0]} required={true} onChange={() => onChangeCheckbox(personalAgreement[0].value, personalAgreement, (data) => setPersonalAgreement(data))} />
						</div>
						<div className={indent.mt_4}>
							<BaseCheckbox name="marketingAgreement" item={marketingAgreement[0]} required={true} onChange={() => onChangeCheckbox(marketingAgreement[0].value, marketingAgreement, (data) => setMarketingAgreement(data))} />
						</div>

						<button type="submit" className={cn(styles.ctaBtn, indent.mt_4)} id="sendForm">
							ОСТАВИТЬ ЗАЯВКУ
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
