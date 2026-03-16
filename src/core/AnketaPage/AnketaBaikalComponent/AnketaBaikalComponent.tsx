import { BaseInput } from '@/shared/components/BaseInput';
import { Label } from '@/shared/components/Label';
import { indent } from '@/styles';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { BaseDatepicker } from '@/shared/components/BaseDatepicker';
import * as styles from '../AnketaComponent/AnketaComponent.css';
import cn from 'classnames';
import { BaseCheckbox } from '@/shared/components/BaseCheckbox';
import { Checkbox } from '@/shared/components/BaseCheckbox/types';
import { FormState, backendApi } from '@/utils';
import { SiberiaNavButtons } from '@shared/components';
import Link from 'next/link';
import { Description, SectionHeading } from '@/uikit';

type InputEvent = ChangeEvent<HTMLInputElement>;

export function AnketaBaikalComponent() {
	const currentDate = new Date();

	const checkboxesHowManyTimes: Checkbox[] = [
		{ label: 'Я в первый раз', value: '1', checked: false },
		{ label: '2-3 раза', value: '2', checked: false },
		{ label: '3-6 раз', value: '3', checked: false },
		{ label: 'Более 6 раз', value: '4', checked: false },
	];

	const checkboxesFood: Checkbox[] = [
		{ label: 'Да, меня это устраивает', value: '1', checked: false },
		{ label: 'Нет, я хочу платить за еду на месте', value: '2', checked: false },
	];

	const checkboxesChildrenClub: Checkbox[] = [
		{ label: 'Да', value: '1', checked: false },
		{ label: 'Нет', value: '2', checked: false },
	];

	const checkboxesHouses: Checkbox[] = [
		{
			label: 'Кубик 24 000 р/в день за 2х',
			value: '1',
			checked: false,
		},
		{
			label: 'ГЭР в лесу 60 000 р/в день за 2х',
			value: '2',
			checked: false,
		},
		{
			label: 'ГЭР на берегу 70 000 р/в день за 2х',
			value: '3',
			checked: false,
		},
	];

	const checkboxesLuxping: Checkbox[] = [
		{
			label: 'Хочу узнать подробнее',
			value: '1',
			checked: false,
		},
	];

	const checkboxesTravelPriority: Checkbox[] = [
		{
			label: 'Быть за рулем самому (от 20 000 p)',
			value: '1',
			checked: false,
		},
		{
			label: 'Ездить с водителем или следопытом (от 3 500р/ в час)',
			value: '2',
			checked: false,
		},
		{
			label: 'Ездить в групповые поездки, это прикольно и значительно дешевле',
			value: '3',
			checked: false,
		},
	];

	const checkboxesPlany: Checkbox[] = [
		{
			label: 'Вы хотите посетить главную достопримечательность о. Ольхон (от 50 000 р/чел)',
			value: '1',
			checked: false,
		},
		{
			label: 'Вы хотите путешествовать на катере по Чивыркуйскому заливу и посмотреть нерп (стоимость от 40 000 р с человека)',
			value: '2',
			checked: false,
		},
		{
			label: 'Сплавиться на байдарках по реке Турке (от 8 500 p)',
			value: '3',
			checked: false,
		},
		{
			label: 'Покататься на квадроциклах (от 7 500 р)',
			value: '4',
			checked: false,
		},
	];

	const checkboxesNeEzdit: Checkbox[] = [
		{ label: 'Да', value: '1', checked: false },
		{ label: 'Нет', value: '2', checked: false },
	];

	const checkboxesNights: Checkbox[] = [
		{ label: 'Менее 3-х дней', value: '1', checked: false },
		{ label: '3-5 дней', value: '2', checked: false },
		{ label: '5-8 дней', value: '3', checked: false },
		{ label: '8-10 дней', value: '4', checked: false },
		{
			label: 'Приеду дней на 10, хочу посмотреть весь Байкал, хорошенько отдохнуть и никуда не торопиться',
			value: '5',
			checked: false,
		},
	];

	const checkboxesDateAccuracy: Checkbox[] = [
		{ label: 'Точные', value: '1', checked: false },
		{ label: 'Приблизительные', value: '2', checked: false },
	];

	const checkboxesSpecOrder: Checkbox[] = [
		{
			label: 'Да, я хотел бы воспользоваться услугой «Молодость по дружбе»',
			value: '1',
			checked: false,
		},
	];

	const agreementLink = () => (
		<Link target="_blank" href="/docs/personal-data-agreement.pdf" className={styles.agreementLink}>
			обработку моих персональных данных
		</Link>
	);
	const personalAgreementInit: Checkbox[] = [
		{
			label: 'Я даю согласие на',
			linkText: agreementLink(),
			value: '5',
			checked: false,
		},
	];

	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [source, setSource] = useState<string>('');
	const [howManyTimes, setHowManyTimes] = useState<Checkbox[]>(checkboxesHowManyTimes);
	const [date, setDate] = useState<Date>(currentDate);
	const [dateAccuracy, setDateAccuracy] = useState<Checkbox[]>(checkboxesDateAccuracy);
	const [nights, setNights] = useState<Checkbox[]>(checkboxesNights);
	const [adults, setAdults] = useState<string>('');
	const [children, setChildren] = useState<string>('');
	const [childrenAge1, setChildren1Age] = useState<string>('');
	const [childrenAge2, setChildren2Age] = useState<string>('');
	const [childrenAge3, setChildren3Age] = useState<string>('');
	const [childrenAge4, setChildren4Age] = useState<string>('');
	const [childrenClub, setChildrenClub] = useState<Checkbox[]>(checkboxesChildrenClub);
	const [apartments, setApartments] = useState<Checkbox[]>(checkboxesHouses);
	const [luxping, setLuxping] = useState<Checkbox[]>(checkboxesLuxping);
	const [howToFood, setFoodMethod] = useState<Checkbox[]>(checkboxesFood);
	const [travelPriority, setPriority] = useState<Checkbox[]>(checkboxesTravelPriority);
	const [allergy, setAllergy] = useState<string>('');
	const [whatsapp, setWhatsapp] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [plany, setPlany] = useState<Checkbox[]>(checkboxesPlany);
	const [neEzdit, setNeEzdit] = useState<Checkbox[]>(checkboxesNeEzdit);
	const [personalAgreement, setPersonalAgreement] = useState<Checkbox[]>(personalAgreementInit);
	const [specOrder, setSpecOrder] = useState<Checkbox[]>(checkboxesSpecOrder);

	const [StateForm, setStateForm] = useState<number>(FormState.Default);

	const abortRef = useRef<AbortController | null>(null);
	useEffect(() => {
		return () => {
			abortRef.current?.abort();
		};
	}, []);

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

	const localeDate = (date: Date) =>
		date.toLocaleDateString('ru', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

	const checkedTypes = (checkboxes: Checkbox[]) =>
		checkboxes
			.map((item) => (item.checked ? item.label : null))
			.filter((x) => x)
			.join(', ');

	const onSuccess = () => setStateForm(FormState.Success);
	const onError = () => setStateForm(FormState.Error);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formRequestObject = {
			name,
			surname,
			source,
			variant: 'baikal',
			howManyTimes: checkedTypes(checkboxesHowManyTimes),
			date: localeDate(date),
			nights: checkedTypes(checkboxesNights),
			dateAccuracy: checkedTypes(checkboxesDateAccuracy),
			adults,
			children,
			childrenAge1,
			childrenAge2,
			childrenAge3,
			childrenAge4,
			childrenClub: checkedTypes(childrenClub),
			apartments: checkedTypes(apartments),
			luxping: checkedTypes(luxping),
			howToFood: checkedTypes(howToFood),
			travelPriority: checkedTypes(travelPriority),
			allergy,
			whatsapp,
			email,
			plany: checkedTypes(plany),
			neEzdit: checkedTypes(checkboxesNeEzdit),
			specOrder: checkedTypes(checkboxesSpecOrder),
		};

		try {
			abortRef.current?.abort();
			abortRef.current = new AbortController();
			const { status } = await backendApi.post('form-requests', formRequestObject, {
				signal: abortRef.current.signal,
			});
			if (status === 200) onSuccess();
		} catch (e) {
			if (e instanceof Error && e.name === 'AbortError') return;
			onError();
			console.error(e);
		}
	};

	return (
		<>
			{StateForm === FormState.Default && (
				<>
					<div className={styles.introBlock} style={{ marginBottom: 24 }}>
						<p className={styles.introBold}>
							Заполните анкету и&nbsp;считайте, что ваше бронирование практически подтверждено.
						</p>
						<p className={styles.introRegular}>
							Мы&nbsp;спрашиваем гораздо больше вещей, чем принято обычно, потому что мы&nbsp;занимаемся не&nbsp;только проживанием, но&nbsp;и&nbsp;всеми вашими поездками и&nbsp;другими развлечениями на&nbsp;пляжном курорте &laquo;Молодость на&nbsp;Байкале&raquo;.
						</p>
						<p className={styles.introRegular}>
							И&nbsp;мы&nbsp;хотим убедиться, что вам у&nbsp;нас будет хорошо.
						</p>
						<p className={styles.introRegular} style={{ marginBottom: 0 }}>
							Обращаем Ваше внимание, что наш пляжный курорт работает с&nbsp;июня по&nbsp;октябрь.
						</p>
					</div>
					<form onSubmit={onSubmit}>
						<div>
							<div className={indent.mt_4}>
								<div className={styles.redBorder}>
									<p className={styles.contactFormIntro}>
										Я&nbsp;ничего не&nbsp;хочу заполнять, просто напишите мне.
									</p>
									<p className={styles.contactFormIntro} style={{ marginTop: 0 }}>
										Мы&nbsp;договоримся об&nbsp;удобном для меня времени и&nbsp;всё обсудим.
									</p>
									<div className={styles.formRow}>
										<div className={styles.fromCol}>
											<Label caption="Ваше имя">
												<BaseInput value={name} required={false} onChange={(e: InputEvent) => setName(e.target.value)} />
											</Label>
										</div>
										<div className={styles.fromCol}>
											<Label caption="Ваш номер">
												<BaseInput type="text" placeholder="+7 999 999 99 99" value={whatsapp} regExp={/[^+\s\d]/gi} required={false} onChange={(e: InputEvent) => setWhatsapp(e.target.value)} />
											</Label>
										</div>
										<div className={styles.fromCol}>
											<Label caption="Ваша почта">
												<BaseInput type="email" placeholder="example@mail.ru" value={email} required={true} onChange={(e: InputEvent) => setEmail(e.target.value)} />
											</Label>
										</div>
									</div>
									<button type="button" className={cn(styles.ctaBtn, styles.linkButton)} onClick={() => document.getElementById('sendForm')?.scrollIntoView({ behavior: 'smooth' })}>
										СВЯЖИТЕСЬ СО&nbsp;МНОЙ
									</button>
								</div>
							</div>
							<br />
							<br />
							<br />
							<p className={styles.pageTitle}>Анкета</p>
							<br />
							<br />
							<p className={styles.description}>ВЫ&nbsp;СМОЖЕТЕ ЗАПОЛНЯТЬ ТОЛЬКО ТЕ&nbsp;ПОЛЯ, КОТОРЫЕ КАЖУТСЯ ВАМ ВАЖНЫМИ ДЛЯ ВАС САМИХ.</p>
							<br />
							<div className={indent.mt_4}>
								<div className={styles.formRow}>
									<div className={styles.fromCol}>
										<Label caption="Ваше имя">
											<BaseInput value={name} required={false} onChange={(e: InputEvent) => setName(e.target.value)} />
										</Label>
									</div>
									<div className={styles.fromCol}>
										<Label caption="Ваша фамилия">
											<BaseInput value={surname} required={false} onChange={(e: InputEvent) => setSurname(e.target.value)} />
										</Label>
									</div>
								</div>
							</div>
							<br />
							<p className={styles.noteBlack}>Как с вами связаться?</p>
							<div className={indent.mt_4}>
								<div className={styles.formRow}>
									<div className={styles.fromCol}>
										<Label caption="MAX / Telegram">
											<BaseInput type="text" placeholder="+7 999 999 99 99" value={whatsapp} regExp={/[^+\s\d]/gi} required={false} onChange={(e: InputEvent) => setWhatsapp(e.target.value)} />
										</Label>
									</div>
									<p className={styles.noteBlack}>или</p>
									<div className={styles.fromCol}>
										<Label caption="Ваша почта">
											<BaseInput type="email" placeholder="example@mail.ru" value={email} required={true} onChange={(e: InputEvent) => setEmail(e.target.value)} />
										</Label>
									</div>
								</div>
							</div>
							<br />
							<div className={indent.mt_4}>
								<Label caption="&laquo;Молодость&raquo;&nbsp;&mdash; &laquo;открытый клуб для своих&raquo;, скажите, пожалуйста, кто вам рекомендовал к&nbsp;нам приехать?">
									<BaseInput value={source} onChange={(e: InputEvent) => setSource(e.target.value)} />
								</Label>
							</div>
							<br />
							<div className={styles.formRow}>
								<div className={styles.fromCol}>
									<div className={indent.mt_4}>
										<Label caption="Сколько раз вы у нас уже были?" />
									</div>
									{howManyTimes.map((item, i) => (
										<div key={i} className={indent.mt_2}>
											<BaseCheckbox name="howManyTimes" item={item} required={false} onChange={() => onChangeCheckbox(item.value, howManyTimes, (data) => setHowManyTimes(data))} />
										</div>
									))}
								</div>
							</div>
							<br />
							<div className={indent.mt_4}>
								<div className={styles.formRow}>
									<div className={styles.fromCol}>
										<Label caption="Количество взрослых">
											<BaseInput value={adults} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setAdults(e.target.value)} />
										</Label>
									</div>
									<div className={styles.fromCol}>
										<Label caption="Количество детей">
											<BaseInput value={children} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setChildren(e.target.value)} />
										</Label>
									</div>
								</div>
							</div>
							<div className={indent.mt_4}>
								<Label caption="Возраст детей"></Label>
								<br />
								<div className={styles.formRowChild}>
									<div className={styles.fromCol}>
										<Label caption="Ребенок 1">
											<BaseInput value={childrenAge1} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setChildren1Age(e.target.value)} />
										</Label>
									</div>
									<div className={styles.fromCol}>
										<Label caption="Ребенок 2">
											<BaseInput value={childrenAge2} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setChildren2Age(e.target.value)} />
										</Label>
									</div>
									<div className={styles.fromCol}>
										<Label caption="Ребенок 3">
											<BaseInput value={childrenAge3} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setChildren3Age(e.target.value)} />
										</Label>
									</div>
									<div className={styles.fromCol}>
										<Label caption="Ребенок 4">
											<BaseInput value={childrenAge4} type="text" regExp={/[^\d]/gi} required={false} onChange={(e: InputEvent) => setChildren4Age(e.target.value)} />
										</Label>
									</div>
								</div>
							</div>
							<br />
							<div className={indent.mt_4}>
								<div style={{ marginBottom: 2 }}>
									<Label caption="Когда хотите приехать?" />
								</div>
								<BaseDatepicker selected={date} onChange={(date: Date) => setDate(date)} />
								<br />
								<div className={indent.mt_4}>
									<Label caption="Ваши даты точные или приблизительные?" />
								</div>
								{dateAccuracy.map((item, i) => (
									<div key={i} className={indent.mt_2}>
										<BaseCheckbox name="dateAccuracy" item={item} required={false} onChange={() => onChangeCheckbox(item.value, dateAccuracy, (data) => setDateAccuracy(data))} />
									</div>
								))}
								<div className={indent.mt_4}>
									<Label caption="На сколько дней?" />
								</div>
								{nights.map((item, i) => (
									<div key={i} className={indent.mt_2}>
										<BaseCheckbox name="nights" item={item} required={false} onChange={() => onChangeCheckbox(item.value, nights, (data) => setNights(data))} />
									</div>
								))}
							</div>
						</div>
						<h2 className={styles.sectionHeading}>Проживание и&nbsp;питание</h2>
						<br />
						<div>
							<div className={indent.mt_4}>
								<Label caption="Варианты проживания на&nbsp;1&ndash;4&nbsp;человека:" />
							</div>
							{apartments.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="apartments" item={item} required={false} onChange={() => onChangeCheckbox(item.value, apartments, (data) => setApartments(data))} />
								</div>
							))}
							<br />
							<small>
								<span className={styles.note}>Каждый дополнительный человек в&nbsp;спальне или в&nbsp;доме:</span>{' '}
								<span className={styles.noteBlack}>8&nbsp;000&nbsp;р в&nbsp;сутки за&nbsp;взрослого, 6&nbsp;000&nbsp;р в&nbsp;сутки за&nbsp;ребенка с&nbsp;5&nbsp;до&nbsp;12&nbsp;лет. Дети младше 5&nbsp;лет наши бесплатные гости.</span>
							</small>
							<br />
							<br />
							<p className={styles.noteBlack}>
								Для тех кто всегда мечтал пожить в&nbsp;палатке на&nbsp;берегу Байкала, но&nbsp;не&nbsp;готов жертвовать привычным комфортом, мы&nbsp;придумали новый формат размещения&nbsp;&mdash; <span className={styles.noteRed}>Люкспинг</span>
							</p>
							<div className={indent.mt_2}>
								{luxping.map((item, i) => (
									<div key={i}>
										<BaseCheckbox name="luxping" item={item} required={false} onChange={() => onChangeCheckbox(item.value, luxping, (data) => setLuxping(data))} />
									</div>
								))}
							</div>
							<small className={styles.note}>С&nbsp;вами свяжется наш батлер и&nbsp;подберет идеальную конфигурацию.</small>
							<br />
							<br />
							<p className={styles.noteBlack}>Мы&nbsp;кормим целый день завтраком, обедом и&nbsp;ужином взрослых за&nbsp;8&nbsp;900&nbsp;р, детей с&nbsp;5&nbsp;до&nbsp;12&nbsp;лет за&nbsp;5&nbsp;500&nbsp;р.</p>
							<br />
							{howToFood.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="howToFood" item={item} required={false} onChange={() => onChangeCheckbox(item.value, howToFood, (data) => setFoodMethod(data))} />
								</div>
							))}
							<br />
							<small className={styles.checkBoxNote}>Предупреждаем, что в&nbsp;итоге вариант платить за&nbsp;еду на&nbsp;месте получится дороже, мы&nbsp;находимся в&nbsp;160&nbsp;км от&nbsp;города, только там есть рестораны, которые мы&nbsp;могли&nbsp;бы вам порекомендовать.</small>
							<br />
							<br />
							<div className={indent.mt_4}>
								<Label caption="Скажите нам, если у&nbsp;вас аллергия или специальные пожелания по&nbsp;еде:">
									<BaseInput value={allergy} required={false} onChange={(e: InputEvent) => setAllergy(e.target.value)} />
								</Label>
							</div>
						</div>
						<h2 className={styles.sectionHeading}>Путешествие по&nbsp;Байкалу</h2>
						<br />
						<div>
							<p className={styles.noteBlack}>Мы&nbsp;ничего не&nbsp;планируем заранее, единственное, скажите нам сейчас если:</p>
							<br />
							{plany.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="plany" item={item} required={false} onChange={() => onChangeCheckbox(item.value, plany, (data) => setPlany(data))} />
								</div>
							))}
							<br />
							<small className={styles.note}>Эти услуги оказывают наши партнеры и&nbsp;нам нужно договориться заранее, все остальное у&nbsp;нас свое.</small>
							<br />
							<br />
							<div className={indent.mt_4}>
								<Label caption="Что вам хочется во&nbsp;время поездок? (у&nbsp;нас есть джипы TANK)" />
							</div>
							{travelPriority.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="travelPriority" item={item} required={false} onChange={() => onChangeCheckbox(item.value, travelPriority, (data) => setPriority(data))} />
								</div>
							))}
							<br />
							<div className={indent.mt_4}>
								<Label caption="Вы&nbsp;не&nbsp;хотите лишний раз куда-либо ездить и&nbsp;хотите больше времени провести на&nbsp;базе в&nbsp;спокойной атмосфере у&nbsp;озера Байкал:" />
							</div>
							{neEzdit.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="neEzdit" item={item} required={false} onChange={() => onChangeCheckbox(item.value, neEzdit, (data) => setNeEzdit(data))} />
								</div>
							))}
						</div>
						<h2 className={styles.sectionHeading}>Комфорт и&nbsp;удобства</h2>
						<div>
							<div className={indent.mt_4}>
								<Label caption="Скажите, нужна&nbsp;ли вам услуга детского клуба?" />
							</div>
							{childrenClub.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="childrenClub" item={item} required={false} onChange={() => onChangeCheckbox(item.value, childrenClub, (data) => setChildrenClub(data))} />
								</div>
							))}
							<br />
							<div className={indent.mt_4}>
								<Label caption="У&nbsp;нас есть льготное проживание в&nbsp;низкий сезон для деятелей культуры и&nbsp;других представителей творческих профессий, если вы&nbsp;чувствуете, что вам к&nbsp;нам очень надо, то&nbsp;расскажите, почему вы&nbsp;к&nbsp;нам хотите и&nbsp;мы&nbsp;постараемся принять вас по&nbsp;льготному тарифу:" />
							</div>
							{specOrder.map((item, i) => (
								<div key={i} className={indent.mt_2}>
									<BaseCheckbox name="specOrder" item={item} onChange={() => onChangeCheckbox(item.value, specOrder, (data) => setSpecOrder(data))} />
								</div>
							))}
						</div>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<p className={styles.descriptionCenter}>Я&nbsp;МОЛОДЕЦ Я&nbsp;ВСЕ ПОНЯЛ, Я&nbsp;СО ВСЕМ СОГЛАСЕН, Я&nbsp;ВСЕ ХОЧУ</p>
						<br />
						<br />
						<div className={indent.mt_4}>
							<BaseCheckbox name="personalAgreement" item={personalAgreement[0]} required={true} onChange={() => onChangeCheckbox(personalAgreement[0].value, personalAgreement, (data) => setPersonalAgreement(data))} />
						</div>
						<button type="submit" className={cn(styles.ctaBtn, indent.mt_4)} id="sendForm">
							ОСТАВИТЬ ЗАЯВКУ
						</button>
					<div className={indent.mt_4}>
						<small className={styles.noteBlack}>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;течение 24&nbsp;часов, чтобы мы&nbsp;смогли ответить на&nbsp;все оставшиеся вопросы ваши к&nbsp;нам и&nbsp;наши к&nbsp;вам.</small>
					</div>
					<SiberiaNavButtons />
				</form>
				</>
			)}
			{StateForm === FormState.Success && (
				<>
					<SectionHeading bold color="brand" size="S">
						СПАСИБО ЗА ОТВЕТЫ!!
					</SectionHeading>
					<div className={indent.mt_4}>
						<Description>
							{name ? `${name}, ` : ''}мы свяжемся с вами в течение 24 часов, чтобы мы смогли ответить на все оставшиеся вопросы ваши к нам и наши к вам.
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
