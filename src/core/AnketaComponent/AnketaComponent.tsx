import { BaseInput } from '@/shared/components/BaseInput';
import { Label } from '@/shared/components/Label';
import { indent } from '@/styles';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { BaseDatepicker } from '@/shared/components/BaseDatepicker';
import * as styles from './AnketaComponent.css';
import cn from 'classnames';
import { BaseCheckbox } from '@/shared/components/BaseCheckbox';
import { Checkbox } from '@/shared/components/BaseCheckbox/types';
import { FormState, backendApi } from '@/utils';
import Link from 'next/link';
import { Description, SectionHeading } from '@/uikit';
import { style } from '@vanilla-extract/css';

type InputEvent = ChangeEvent<HTMLInputElement>;

// TODO: add react-hook-form validation
export function AnketaComponent() {
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

  const checkboxesNanny: Checkbox[] = [
    { label: 'Да', value: '1', checked: false },
    { label: 'Нет', value: '2', checked: false },
  ];

  const checkboxesPriority: Checkbox[] = [
    { label: 'Быть за рулем самому (от 15 000 ₽)', value: '1', checked: false },
    {
      label: 'Ездить с водителем или следопытом (от 30 000 ₽)',
      value: '2',
      checked: false,
    },
    {
      label: 'Ездить в групповые поездки, это прикольно и значительно дешевле',
      value: '3',
      checked: false,
    },
  ];

  const checkboxesHouses: Checkbox[] = [
    {
      label: 'Хорошая спальня 12 345 р / в день',
      value: '1',
      checked: false,
    },
    {
      label: 'Замечательная спальня 16 000 ₽ / в день',
      value: '2',
      checked: false,
    },
    {
      label: 'Свой дом от 30 000 ₽ / в день',
      value: '3',
      checked: false,
    },
  ];

  const checkboxesHouses2: Checkbox[] = [
    {
      label: 'Семейный номер 30 000 ₽ / в день за 3 человека',
      value: '1',
      checked: false,
    },
    {
      label: 'Большой дом на компанию или семью от 40 000 ₽ в день за 4 человек',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesAirport: Checkbox[] = [
    { label: 'Да', value: '1', checked: false },
    { label: 'Не надо', value: '2', checked: false },
  ];

  const checkboxesPlany: Checkbox[] = [
    {
      label:
        'Вы хотите полететь на вертолете до Белухи (стоимость от 150 000 ₽ с человека)',
      value: '1',
      checked: false,
    },
    {
      label:
        'Вы хотите путешествовать на катере по Телецкому озеру (стоимость от 50 000 ₽ с человека)',
      value: '2',
      checked: false,
    },
    {
      label: 'Покататься на лошадях (от 4 000 ₽)',
      value: '3',
      checked: false,
    },
    {
      label: 'Покататься на квадроциклах (от 10 000 ₽)',
      value: '4',
      checked: false,
    },
  ];

  const checkboxesNaMars: Checkbox[] = [
    {
      label: 'Да',
      value: '1',
      checked: false,
    },
    {
      label: 'Нет',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesNeEzdit: Checkbox[] = [
    {
      label: 'Да',
      value: '1',
      checked: false,
    },
    {
      label: 'Нет',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesNights: Checkbox[] = [
    { label: 'Менее 3-х дней', value: '1', checked: false },
    { label: '3-5 дней', value: '2', checked: false },
    { label: '5-8 дней', value: '3', checked: false },
    { label: '8-10 дней', value: '4', checked: false },
    {
      label:
        'Приеду дней на 10, хочу посмотреть весь Алтай, хорошенько отдохнуть и никуда не торопиться',
      value: '5',
      checked: false,
    },
  ];

  const checkboxesAdultsPresent: Checkbox[] = [
    { label: 'Да, отличная идея', value: '1', checked: false },
    { label: 'Нет', value: '2', checked: false },
  ];

  const checkboxesWishes: Checkbox[] = [
    {
      label: 'Да, меня устраивает узнавать о планах на завтра завтра.',
      value: '1',
      checked: false,
    },
    {
      label:
        'Нет, я хочу приобрести пакет BLACK KHAN за 23 456₽ в день и чтобы мне индивидуально распланировали все мои поездки.',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesForChildren: Checkbox[] = [
    {
      label: 'Да, мне нужно будет много ездить с детьми',
      value: '1',
      checked: false,
    },
  ];

  const checkboxesStepnik: Checkbox[] = [
    {
      label: 'Мне это важно (целый день, 12 345 ₽ взрослый, 6 000 ₽ ребенок)',
      value: '1',
      checked: false,
    },
    {
      label: 'Как получится',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesNewProjects: Checkbox[] = [
    {
      label: 'Фестиваль «Горячий человек» на Байкале» для первых, смелых и своих',
      value: '1',
      checked: false,
    },
    {
      label: 'Лагерь «Молодости» в Намибии с 20 февраля по 10 марта',
      value: '2',
      checked: false,
    },
    { label: 'Курилы 2026 «Молодость на краю земли»', value: '3', checked: false },
  ];

  const checkboxesWantTry: Checkbox[] = [
    { label: 'Зажаренного барана на вертеле 40 000 ₽', value: '1', checked: false },
    { label: 'Алтайский рибай 3 000 ₽', value: '2', checked: false },
    { label: 'Легендарный алтайский таймень 3 000 ₽', value: '3', checked: false },
  ];

  const checkboxesCoffee: Checkbox[] = [
    { label: 'У вас и так нормальный выбор', value: '1', checked: false },
    {
      label: 'У меня особые пожелания, обсудим во время разговора',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesAlko: Checkbox[] = [
    {
      label: 'Мне нужно что-то особенное',
      value: '1',
      checked: false,
    },
    {
      label: 'Мне и так будет хорошо, понимаю, что алтайский воздух пьянит сам по себе',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesRestTime: Checkbox[] = [
    {
      label: 'Помедитировать под тибетские поющие чаши (15 000 ₽)',
      value: '1',
      checked: false,
    },
    {
      label: 'Заняться цигун или йогой на берегу реки (5 000 ₽)',
      value: '2',
      checked: false,
    },
    { label: 'Поехать к травнику (10 000 ₽)', value: '3', checked: false },
    { label: 'Попасть к вашему остеопату (8 000 ₽)', value: '4', checked: false },
    { label: 'Расслабиться на массаже  (7 000 ₽)', value: '5', checked: false },
    { label: 'Регулярно ходить на хайкинг (от 3 000 ₽)', value: '6', checked: false },
    { label: 'Определюсь на месте', value: '7', checked: false },
  ];

  const checkboxesBlagodat: Checkbox[] = [
    {
      label: 'Банную церемонию «Танец тепла» в четыре руки (45 000 ₽, до 2 чел, 120 мин)',
      value: '1',
      checked: false,
    },
    {
      label: 'Банную церемонию «Молодость» (35 000 ₽, до 2 чел, 120 мин)',
      value: '2',
      checked: false,
    },
    {
      label: 'Классическое парение (10 000 ₽, 1 чел, 30 мин)',
      value: '3',
      checked: false,
    },
    { label: 'Определюсь на месте', value: '4', checked: false },
  ];

  const checkboxesDateAccuracy: Checkbox[] = [
    { label: 'Точные', value: '1', checked: false },
    {
      label: 'Приблизительные',
      value: '2',
      checked: false,
    },
  ];

  const checkboxesSponsor: Checkbox[] = [
    { label: 'Легендарный бард марафон с Борисом Бергером', value: '1', checked: false },
    {
      label: 'Горловое пение «Тюрк-Кабай»',
      value: '2',
      checked: false,
    },
    {
      label: 'Диджейская вечеринка «Танцуем, как чертяки» в клубе «Сруб»',
      value: '3',
      checked: false,
    },
  ];

  const checkboxesSpecOrder: Checkbox[] = [
    {
      label: 'Да, я хотел бы воспользоваться услугой «Молодость по дружбе»',
      value: '1',
      checked: false,
    },
  ];

  const agreementLink = () => (
    <Link
      target="_blank"
      href="/docs/personal-data-agreement.pdf"
      className={styles.agreementLink}
    >
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
  const [nanny, setNanny] = useState<Checkbox[]>(checkboxesNanny);
  const [apartments, setApartments] = useState<Checkbox[]>(checkboxesHouses);
  const [apartments2, setApartments2] = useState<Checkbox[]>(checkboxesHouses2);
  const [howToFood, setFoodMethod] = useState<Checkbox[]>(checkboxesFood);
  const [coffee, setCoffee] = useState<Checkbox[]>(checkboxesCoffee);
  const [alko, setAlko] = useState<Checkbox[]>(checkboxesAlko);
  const [travelPriority, setPriority] = useState<Checkbox[]>(checkboxesPriority);
  const [allergy, setAllergy] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [airport, setAirport] = useState<Checkbox[]>(checkboxesAirport);
  const [plany, setPlany] = useState<Checkbox[]>(checkboxesPlany);
  const [naMars, setNaMars] = useState<Checkbox[]>(checkboxesNaMars);
  const [neEzdit, setNeEzdit] = useState<Checkbox[]>(checkboxesNeEzdit);
  const [forChildren, setForChildren] = useState<Checkbox[]>(checkboxesForChildren);
  const [wishes, setWishes] = useState<Checkbox[]>(checkboxesWishes);
  const [wantTry, setWantTry] = useState<Checkbox[]>(checkboxesWantTry);
  const [stepnik, setStepnik] = useState<Checkbox[]>(checkboxesStepnik);
  const [restTime, setRestTime] = useState<Checkbox[]>(checkboxesRestTime);
  const [blagodat, setBlagodat] = useState<Checkbox[]>(checkboxesBlagodat);
  const [sponsor, setSponsor] = useState<Checkbox[]>(checkboxesSponsor);
  const [personalAgreement, setPersonalAgreement] =
    useState<Checkbox[]>(personalAgreementInit);
  const [specOrder, setSpecOrder] = useState<Checkbox[]>(checkboxesSpecOrder);

  // form state
  const [StateForm, setStateForm] = useState<number>(FormState.Default);

  const onChangeCheckbox = (
    value: string,
    checkboxes: Checkbox[],
    callback: (data: any) => void,
  ) => {
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

  const onSuccess = () => {
    setStateForm(FormState.Success);
  };
  const onError = () => {
    setStateForm(FormState.Error);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formRequestObject = {
      name,
      surname,
      source,
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
      nanny: checkedTypes(checkboxesNanny),
      apartments: checkedTypes(checkboxesHouses),
      apartments2: checkedTypes(checkboxesHouses2),
      howToFood: checkedTypes(checkboxesFood),
      coffee: checkedTypes(checkboxesCoffee),
      alko: checkedTypes(checkboxesAlko),
      travelPriority: checkedTypes(checkboxesPriority),
      allergy,
      // phone,
      whatsapp,
      email,
      airport: checkedTypes(checkboxesAirport),
      plany,
      naMars: checkedTypes(checkboxesNaMars),
      neEzdit: checkedTypes(checkboxesNeEzdit),
      wishes: checkedTypes(checkboxesWishes),
      adultsPresent: checkedTypes(checkboxesAdultsPresent),
      newProjects: checkedTypes(checkboxesNewProjects),
      wantTry: checkedTypes(checkboxesWantTry),
      restTime: checkedTypes(checkboxesRestTime),
      blagodat: checkedTypes(checkboxesBlagodat),
      sponsor: checkedTypes(checkboxesSponsor),
      forChildren: checkedTypes(checkboxesForChildren),
      stepnik: checkedTypes(checkboxesStepnik),
      specOrder: checkedTypes(checkboxesSpecOrder),
    };

    try {
      const { status } = await backendApi.post('form-requests', formRequestObject);

      if (status === 200) {
        onSuccess();
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
          <br />
          <p
            className={styles.accentText}
            style={{ textTransform: 'none', fontWeight: 400 }}
          >
            Заполните эту анкету и&nbsp;считайте, что ваше бронирование практически
            подтверждено.
            <br />
            <br />
            Мы&nbsp;спрашиваем гораздо больше вещей, чем принято обычно, потому что
            мы&nbsp;занимаемся не&nbsp;только проживанием, но&nbsp;и&nbsp;всеми вашими
            поездками и&nbsp;другими развлечениями на&nbsp;Алтае.
            <br />
            <br />
            И&nbsp;мы&nbsp;хотим убедиться, что вам у&nbsp;нас будет хорошо.
          </p>
          <br />
          <form onSubmit={onSubmit}>
            <div>
              <div className={indent.mt_4}>
                <div className={styles.redBorder}>
                  <p className={styles.description} style={{ textTransform: 'none' }}>
                    Я&nbsp;ничего не&nbsp;хочу заполнять, просто напишите мне. <br />
                    <br /> Мы&nbsp;договоримся об&nbsp;удобном для меня времени и&nbsp;все
                    обсудим.
                  </p>
                  <br />
                  <div className={styles.formRow}>
                    <div className={styles.fromCol}>
                      <Label caption="Ваше имя">
                        <BaseInput
                          value={name}
                          required={false}
                          onChange={(e: InputEvent) => setName(e.target.value)}
                        />
                      </Label>
                    </div>
                    <div className={styles.fromCol}>
                      <Label caption="WhatsApp">
                        <BaseInput
                          type="text"
                          placeholder="+7 999 999 99 99"
                          value={whatsapp}
                          regExp={/[^+\s\d]/gi}
                          required={false}
                          onChange={(e: InputEvent) => setWhatsapp(e.target.value)}
                        />
                      </Label>
                    </div>
                    {/* <p className={styles.noteBlack}>или</p> */}
                    <div className={styles.fromCol}>
                      <Label caption="Ваша почта">
                        <BaseInput
                          type="email"
                          placeholder="email@email.ru"
                          value={email}
                          required={true}
                          onChange={(e: InputEvent) => setEmail(e.target.value)}
                        />
                      </Label>
                    </div>
                  </div>
                  <a className={cn(styles.ctaBtn, styles.linkButton)} href="#sendForm">
                    Свяжитесь со мной
                  </a>
                </div>
              </div>
              <br />
              <br />
              <br />
              <p className={styles.pageTitle}>Анкета</p>
              <br />
              <br />
              <p className={styles.description}>
                Вы&nbsp;можете заполнять только те&nbsp;поля, которые кажутся вам важными
                для вас самих.
              </p>
              <br />
              {/* kak zovut */}
              <div className={indent.mt_4}>
                <div className={styles.formRow}>
                  <div className={styles.fromCol}>
                    <Label caption="Ваше имя">
                      <BaseInput
                        value={name}
                        required={false}
                        onChange={(e: InputEvent) => setName(e.target.value)}
                      />
                    </Label>
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption="Ваша фамилия">
                      <BaseInput
                        value={surname}
                        required={false}
                        onChange={(e: InputEvent) => setSurname(e.target.value)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <br />
              {/* Kontakty */}
              <p className={styles.noteBlack}>Как с вами связаться?</p>
              <div className={indent.mt_4}>
                <div className={styles.formRow}>
                  <div className={styles.fromCol}>
                    <Label caption="WhatsApp">
                      <BaseInput
                        type="text"
                        placeholder="+7 999 999 99 99"
                        value={whatsapp}
                        regExp={/[^+\s\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setWhatsapp(e.target.value)}
                      />
                    </Label>
                  </div>
                  <p className={styles.noteBlack}>или</p>
                  <div className={styles.fromCol}>
                    <Label caption="Ваша почта">
                      <BaseInput
                        type="email"
                        placeholder="email@email.ru"
                        value={email}
                        required={true}
                        onChange={(e: InputEvent) => setEmail(e.target.value)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <br />
              {/* klub dlya svoih */}
              <div className={indent.mt_4}>
                <Label caption="&laquo;Молодость&raquo;&nbsp;&mdash; &laquo;открытый клуб для своих&raquo;, скажите, пожалуйста, кто вам рекомендовал к&nbsp;нам приехать?">
                  <BaseInput
                    value={source}
                    onChange={(e: InputEvent) => setSource(e.target.value)}
                  />
                </Label>
              </div>
              <br />
              <div className={styles.formRow}>
                <div className={styles.fromCol}>
                  {/* Kogda byli */}
                  <div className={indent.mt_4}>
                    <Label caption="Сколько раз вы у нас уже были?" />
                  </div>
                  {howManyTimes.map((item, i) => (
                    <div key={i} className={indent.mt_2}>
                      <BaseCheckbox
                        name="howManyTimes"
                        item={item}
                        required={false}
                        onChange={() =>
                          onChangeCheckbox(item.value, howManyTimes, (data) =>
                            setHowManyTimes(data),
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <br />
              {/* Kolich vzroslykh & detey*/}
              <div className={indent.mt_4}>
                <div className={styles.formRow}>
                  <div className={styles.fromCol}>
                    <div style={{ marginBottom: 2 }}>
                      <Label caption="Количество взрослых">
                        <BaseInput
                          value={adults}
                          type="text"
                          regExp={/[^\d]/gi}
                          required={false}
                          onChange={(e: InputEvent) => setAdults(e.target.value)}
                        />
                      </Label>
                    </div>
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption="Количество детей">
                      <BaseInput
                        value={children}
                        type="text"
                        regExp={/[^\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setChildren(e.target.value)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              {/* Vozrast detey */}
              <div className={indent.mt_4}>
                <Label caption="Возраст детей"></Label>
                <br />
                <div className={styles.formRowChild}>
                  <div className={styles.fromCol}>
                    <Label caption="Ребенок 1">
                      <BaseInput
                        value={childrenAge1}
                        type="text"
                        regExp={/[^\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setChildren1Age(e.target.value)}
                      />
                    </Label>
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption="Ребенок 2">
                      <BaseInput
                        value={childrenAge2}
                        type="text"
                        regExp={/[^\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setChildren2Age(e.target.value)}
                      />
                    </Label>
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption="Ребенок 3">
                      <BaseInput
                        value={childrenAge3}
                        type="text"
                        regExp={/[^\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setChildren3Age(e.target.value)}
                      />
                    </Label>
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption="Ребенок 4">
                      <BaseInput
                        value={childrenAge4}
                        type="text"
                        regExp={/[^\d]/gi}
                        required={false}
                        onChange={(e: InputEvent) => setChildren4Age(e.target.value)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <br />
              {/* Daty */}
              <div className={indent.mt_4}>
                <div style={{ marginBottom: 2 }}>
                  <Label caption="Когда хотите приехать?" />
                </div>
                <BaseDatepicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                />
                <br />
                {/* Tochnie daty */}
                <div className={indent.mt_4}>
                  <Label caption="Ваши даты точные или приблизительные?" />
                </div>
                {dateAccuracy.map((item, i) => (
                  <div key={i} className={indent.mt_2}>
                    <BaseCheckbox
                      name="dateAccuracy"
                      item={item}
                      required={false}
                      onChange={() =>
                        onChangeCheckbox(item.value, dateAccuracy, (data) =>
                          setDateAccuracy(data),
                        )
                      }
                    />
                  </div>
                ))}
                <div className={indent.mt_4}>
                  <Label caption="На сколько дней?" />
                </div>
                {nights.map((item, i) => (
                  <div key={i} className={indent.mt_2}>
                    <BaseCheckbox
                      name="nights"
                      item={item}
                      required={false}
                      onChange={() =>
                        onChangeCheckbox(item.value, nights, (data) => setNights(data))
                      }
                    />
                  </div>
                ))}
                <div style={{ marginTop: 30 }}>
                  <small className={cn(indent.mt_2, styles.note)}>
                    С&nbsp;15&nbsp;июля по&nbsp;1&nbsp;октября к&nbsp;цене проживания
                    добавляется сезонный билет 6&nbsp;000&nbsp;₽ в&nbsp;день
                    на&nbsp;человека.
                    <br />
                    <br />
                    В&nbsp;Новый год, на&nbsp;майские праздники и&nbsp;с&nbsp;1&nbsp;июля
                    по&nbsp;1&nbsp;октября бронирование возможно от&nbsp;3-х дней.
                  </small>
                </div>
              </div>
            </div>
            <h2 className={styles.separatorText}>Проживание и&nbsp;питание</h2>
            <br />
            <div>
              {/* Varianty prozhivania */}
              <div className={indent.mt_4}>
                <Label caption="Варианты проживания на&nbsp;1&nbsp;&mdash; 3&nbsp;человека:" />
              </div>
              {apartments.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="apartments"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, apartments, (data) =>
                        setApartments(data),
                      )
                    }
                  />
                </div>
              ))}
              <br />
              <small className={styles.note}>
                Каждый дополнительный человек в&nbsp;спальне или доме: 5&nbsp;000&nbsp;₽
                в&nbsp;сутки за&nbsp;взрослого, 3&nbsp;000&nbsp;₽ в&nbsp;сутки
                за&nbsp;ребенка с&nbsp;5&nbsp;до&nbsp;14&nbsp;лет. Дети младше 5&nbsp;лет
                наши бесплатные гости.
              </small>
              <br />
              <div className={indent.mt_4}>
                <Label caption="Для больших семей и&nbsp;компаний есть много вариантов размещения:" />
              </div>
              {apartments2.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="apartments2"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, apartments2, (data) =>
                        setApartments2(data),
                      )
                    }
                  />
                </div>
              ))}
              <br />
              <small className={styles.note}>
                С&nbsp;вами свяжется наш батлер и&nbsp;подберет идеальную конфигурацию.
              </small>
              <br />
              {/* Eda */}
              <div className={indent.mt_4}>
                <Label caption="Мы&nbsp;кормим целый день завтраком, обедом и&nbsp;ужином взрослых за&nbsp;6&nbsp;000&nbsp;₽, детей с&nbsp;5&nbsp;до&nbsp;14&nbsp;лет за&nbsp;4&nbsp;500&nbsp;₽:" />
              </div>
              {howToFood.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="howToFood"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, howToFood, (data) =>
                        setFoodMethod(data),
                      )
                    }
                  />
                </div>
              ))}
              <br />
              <small className={styles.checkBoxNote}>
                Предупреждаем, что в&nbsp;итоге вариант платить за&nbsp;еду на&nbsp;месте
                получится дороже, а&nbsp;вокруг не&nbsp;так много вкусных мест, хотя
                недавно у&nbsp;нас на&nbsp;Алтае появился прекрасный ресторан
                &laquo;Вкусно и&nbsp;точка&raquo;.
              </small>
              {/* Allergiya */}
              <br />
              <div className={indent.mt_4}>
                <Label caption="Скажите нам, есть ли у вас аллергия или специальные пожелания по еде:">
                  <BaseInput
                    value={allergy}
                    required={false}
                    onChange={(e: InputEvent) => setAllergy(e.target.value)}
                  />
                </Label>
              </div>
              <br />
              {/* Hoteli bi poprobovat */}
              <div className={indent.mt_4}>
                <Label caption="Когда буду в&nbsp;&laquo;Молодости&raquo; и&nbsp;бы хотел(а) попробовать:" />
              </div>
              {wantTry.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="wantTry"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, wantTry, (data) => setWantTry(data))
                    }
                  />
                </div>
              ))}
              <br />
              <br />
              <small className={styles.noteBlack}>
                У&nbsp;нас большой выбор напитков из&nbsp;коллекции нашего постоянно
                партнера Simple, но&nbsp;если для вас принципиально что-то особенное,
                то&nbsp;давайте это обсудим.
              </small>
              <br />
              {/* Alko */}
              {alko.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="alko"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, alko, (data) => setAlko(data))
                    }
                  />
                </div>
              ))}
              <br />
              {/* Coffee */}
              <div className={indent.mt_4}>
                <Label caption="Мы&nbsp;готовим кофе на&nbsp;миндальном, овсяном, банановом, соевом, коровьем, обезжиренном молоке. Если вам нужно какое-то особенное молоко, сообщите нам и&nbsp;мы&nbsp;подготовимся к&nbsp;вашему приезду." />
              </div>
              {coffee.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="coffee"
                    item={item}
                    required={false}
                    onChange={() =>
                      onChangeCheckbox(item.value, coffee, (data) => setCoffee(data))
                    }
                  />
                </div>
              ))}
            </div>
            <h2 className={styles.separatorText}>Отдых на&nbsp;базе</h2>
            <br />
            <div>
              {/* Vo vremya otdiha ya bi hotel */}
              <div className={indent.mt_4}>
                <Label caption="Во&nbsp;время отдыха в&nbsp;&laquo;Молодости&raquo;, я&nbsp;бы хотел(а):" />
              </div>
              {restTime.map((item, i) =>
                i === restTime.length - 1 ? (
                  <>
                    <div key={i} className={indent.mt_2}>
                      <div className={styles.separatorLine}></div>
                    </div>
                    <div key={i} className={indent.mt_2}>
                      <BaseCheckbox
                        name="restTime"
                        item={item}
                        required={false}
                        onChange={() =>
                          onChangeCheckbox(item.value, restTime, (data) =>
                            setRestTime(data),
                          )
                        }
                      />
                    </div>
                  </>
                ) : (
                  <div key={i} className={indent.mt_2}>
                    <BaseCheckbox
                      name="restTime"
                      item={item}
                      required={false}
                      onChange={() =>
                        onChangeCheckbox(item.value, restTime, (data) =>
                          setRestTime(data),
                        )
                      }
                    />
                  </div>
                ),
              )}
              <br />
              {/* V laboratorii tepla blagodat */}
              <div className={indent.mt_4}>
                <Label caption="В&nbsp;лаборатории тепла &laquo;БлагодатЪ&raquo; мне&nbsp;бы хотелось отправиться&nbsp;на:" />
              </div>
              {blagodat.map((item, i) =>
                i === blagodat.length - 1 ? (
                  <>
                    <div key={i} className={indent.mt_2}>
                      <div className={styles.separatorLine}></div>
                    </div>
                    <div key={i} className={indent.mt_2}>
                      <BaseCheckbox
                        name="blagodat"
                        item={item}
                        onChange={() =>
                          onChangeCheckbox(item.value, blagodat, (data) =>
                            setBlagodat(data),
                          )
                        }
                      />
                    </div>
                  </>
                ) : (
                  <div key={i} className={indent.mt_2}>
                    <BaseCheckbox
                      name="blagodat"
                      item={item}
                      onChange={() =>
                        onChangeCheckbox(item.value, blagodat, (data) =>
                          setBlagodat(data),
                        )
                      }
                    />
                  </div>
                ),
              )}
              <br />
              {/* bud sponsorom */}
              <div className={indent.mt_4}>
                <Label caption="Мы&nbsp;постоянно проводим на&nbsp;базе разные культурные события. Если вам важно что-то конкретное в&nbsp;ваши даты, вы&nbsp;можете стать спонсором нашего культурного вечера, это стоит 35&nbsp;000&nbsp;₽:" />
              </div>
              {sponsor.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="sponsor"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, sponsor, (data) => setSponsor(data))
                    }
                  />
                </div>
              ))}
              <div className={indent.mt_4}>
                <small className={styles.note}>
                  Кроме вас, на&nbsp;это мероприятие будут приглашены все гости базы.
                </small>
              </div>
              <br />
            </div>
            <h2 className={styles.separatorText}>Путешествия&nbsp;по Алтаю</h2>
            <br />
            <div>
              {/* Nichego ne planiruem */}
              <div className={indent.mt_4}>
                <Label caption="Мы&nbsp;ничего не&nbsp;планируем заранее, единственное, скажите нам сейчас если:" />
              </div>
              {plany.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="plany"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, plany, (data) => setPlany(data))
                    }
                  />
                </div>
              ))}
              <div className={indent.mt_4}>
                <small className={styles.note}>
                  Эти услуги оказывают наши партнеры и&nbsp;нам нужно договариваться
                  заранее, все остальное у&nbsp;нас свое.
                </small>
              </div>
              <br />
              {/* Na Mars */}
              <div className={indent.mt_4}>
                <Label caption="Еще нам нужно знать заранее, если вы&nbsp;хотите поехать с&nbsp;нами в&nbsp;путешествие &laquo;На&nbsp;Марс раньше Маска&raquo; в&nbsp;наш уникальный &laquo;Приют на&nbsp;Марсе&raquo; на&nbsp;границе с&nbsp;Монголией (стоимость от&nbsp;80&nbsp;000&nbsp;₽ с&nbsp;человека от&nbsp;2-х до&nbsp;3-х дней)?" />
              </div>
              {naMars.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="naMars"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, naMars, (data) => setNaMars(data))
                    }
                  />
                </div>
              ))}
              <br />
              {/* Chto hochetsa vo vremya poezdki */}
              <div className={indent.mt_4}>
                <Label caption="Что вам хочется во&nbsp;время поездок по&nbsp;Алтаю? (у&nbsp;нас есть джипы TANK, Range Rover и&nbsp;легковые автомобили Omoda)" />
              </div>
              {travelPriority.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="travelPriority"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, travelPriority, (data) =>
                        setPriority(data),
                      )
                    }
                  />
                </div>
              ))}
              <br />
              {/* Vo vremya puteshestvia */}
              <div className={indent.mt_4}>
                <Label caption="Мы&nbsp;работаем по&nbsp;принципу &laquo;План на&nbsp;завтра вы&nbsp;узнаете завтра&raquo;. Но, приобретая пакет BLACK KHAN вы&nbsp;можете выбрать из&nbsp;нашего списка прогулок и&nbsp;поездок&nbsp;то, что вам нравится:" />
                <div className={indent.mt_4}>
                  <small className={styles.labelDescription}>
                    Прогуляться по&nbsp;алтайской Хоббитании
                    <br />
                    Доехать до&nbsp;Каракольской долины <br />
                    Сходить в&nbsp;музей и&nbsp;увидеть легендарную Принцессу Укока <br />
                    Побывать в&nbsp;родной деревне Шукшина &laquo;Сростки&raquo; <br />
                    Сплавиться по&nbsp;реке Катунь на&nbsp;рафте <br />
                    Кататься на&nbsp;велосипедах и&nbsp;электробайках
                    <br />
                  </small>
                  <br />
                </div>
              </div>
              {wishes.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="wishes"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, wishes, (data) => setWishes(data))
                    }
                  />
                </div>
              ))}
              <div className={indent.mt_4}>
                <small className={styles.note}>
                  Мы&nbsp;очень любим зарабатывать, но&nbsp;не&nbsp;рекомендуем
                  пользоваться этой услугой, потому что все планы вы&nbsp;все равно
                  переиграете на&nbsp;месте.
                </small>
              </div>
              <br />
              {/* Bolshe poezdok dlya detei */}
              <div className={indent.mt_4}>
                <Label caption="У&nbsp;нас есть много поездок рассчитанных на&nbsp;детей:" />
                <div className={indent.mt_4}>
                  <small className={styles.labelDescription}>
                    &laquo;Палеопарк и&nbsp;лохматая ферма
                    <br />
                    Пасека &laquo;Медом в&nbsp;ухо&raquo;
                    <br />
                    &laquo;Алтайский триптих&raquo; (зубры + ботанический сад+моторафтинг)
                  </small>
                  <br />
                </div>
              </div>
              {forChildren.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="forChildren"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, forChildren, (data) =>
                        setForChildren(data),
                      )
                    }
                  />
                </div>
              ))}
              <br />
              {/* Hochu v daty so stepnikom */}
              <div className={indent.mt_4}>
                <Label caption="Я&nbsp;хочу попасть в&nbsp;те&nbsp;даты, когда будет проходить легендарный Степник на&nbsp;Стоянке Черного Хана за&nbsp;Ороктойским мостом:" />
              </div>
              {stepnik.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="stepnik"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, stepnik, (data) => setStepnik(data))
                    }
                  />
                </div>
              ))}
              <br />
              {/* Ne ezdit nikuda */}
              <div className={indent.mt_4}>
                <Label caption="Вы&nbsp;не&nbsp;хотите лишний раз куда-либо ездить и&nbsp;хотите больше времени провести на&nbsp;базе в&nbsp;спокойной атмосфере у&nbsp;реки:" />
              </div>
              {neEzdit.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="neEzdit"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, neEzdit, (data) => setNeEzdit(data))
                    }
                  />
                </div>
              ))}
            </div>
            <h2 className={styles.separatorText}>Комфорт и&nbsp;удобства</h2>
            <div>
              {/* Nyana */}
              <div className={indent.mt_4}>
                <Label caption="Скажите, нужна&nbsp;ли вам услуга няни?" />
              </div>
              {nanny.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="Nanny"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, nanny, (data) => setNanny(data))
                    }
                  />
                </div>
              ))}
              <br />
              {/* Airport */}
              <div className={indent.mt_4}>
                <Label caption="Пожалуйста, укажите, если вы&nbsp;хотите, чтобы мы&nbsp;встретили вас в&nbsp;бизнес-зале аэропорта:" />
              </div>
              {airport.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="airport"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, airport, (data) => setAirport(data))
                    }
                  />
                </div>
              ))}
              <br />
              <small className={cn(indent.mt_2, styles.note)}>
                Мы&nbsp;очень рекомендуем это сделать, стоимость услуги
                от&nbsp;2&nbsp;900&nbsp;&#8381; за&nbsp;человека с&nbsp;учетом нашей
                комиссии. В&nbsp;летнее время в&nbsp;нашем маленьком Горно-Алтайском
                аэропорту бывают столпотворения.
              </small>
              <br />
              <div className={indent.mt_4}>
                <Label caption="У&nbsp;нас есть льготное проживание в&nbsp;низкий сезон для деятелей культуры и&nbsp;других представителей творческих профессий, если вы&nbsp;чувствуете, что вам к&nbsp;нам очень надо, то&nbsp;расскажите, почему вы&nbsp;к&nbsp;нам хотите и&nbsp;мы&nbsp;постараемся принять вас по&nbsp;льготному тарифу:" />
              </div>
              {specOrder.map((item, i) => (
                <div key={i} className={indent.mt_2}>
                  <BaseCheckbox
                    name="specOrder"
                    item={item}
                    onChange={() =>
                      onChangeCheckbox(item.value, specOrder, (data) =>
                        setSpecOrder(data),
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
            {/* Text under form */}
            <p className={styles.noteBlack}>
              Все цены указаны без учета налога, который&nbsp;мы, как компания
              на&nbsp;упрощенной системе, платим в&nbsp;размере&nbsp;
              <span className={styles.noteRed}>
                <b>6%</b>
              </span>{' '}
              со&nbsp;всех поступающих платежей. 
              {/*При оплате банковской картой комиссия
              за&nbsp;эквайринг составляет{' '}
              <span className={styles.noteRed}>
                <b>2,3%</b>.
              </span>*/}
              <br />
              <br />
              Еще мы&nbsp;включим в&nbsp;ваш счет &laquo;водяной сбор&raquo;{' '}
              <span className={styles.noteRed}>
                <b>&mdash;350&nbsp;₽ с&nbsp;человека</b>
              </span>{' '}
              за&nbsp;безлимитное пользование водой petroglyph, эти деньги пойдут
              на&nbsp;социальные проекты на&nbsp;Алтае.
            </p>
            <br />
            <br />
            <br />
            <p className={styles.descriptionCenter}>Я МОЛОДЕЦ</p>
            <p className={styles.descriptionCenter}>
              Я ВСЕ ПОНЯЛ, Я СО ВСЕМ СОГЛАСЕН, Я ВСЕ ХОЧУ
            </p>
            <br />
            <br />
            <div className={indent.mt_4}>
              <BaseCheckbox
                name="personalAgreement"
                item={personalAgreement[0]}
                required={true}
                onChange={() =>
                  onChangeCheckbox(
                    personalAgreement[0].value,
                    personalAgreement,
                    (data) => setPersonalAgreement(data),
                  )
                }
              />
            </div>
            <button
              onClick={() => onSubmit}
              className={cn(styles.ctaBtn, indent.mt_4)}
              id="sendForm"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <div className={indent.mt_4}>
              <small className={styles.noteBlack}>
                Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;течение 24&nbsp;часов, чтобы
                мы&nbsp;смогли ответить на&nbsp;все оставшиеся вопросы ваши к&nbsp;нам
                и&nbsp;наши к&nbsp;вам.
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
              Мы приняли вашу заявку и свяжемся с вами в ближайшее время
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
