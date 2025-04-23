import { FC } from 'react';
import Image from 'next/image';
import { Container, Description, FlexContainer, InfoCard, PageHeading, SectionHeading } from '@uikit';

import * as styles from './Price.css';
import { indent } from '@/styles';
import cn from 'classnames';
import { ArrowButton } from '@/uikit/Button';
import { PriceList } from '@/shared/components';

import { inRoom, inHouse, gastrotavern, food, foodNoFisher, drink, drinkBranded, bar, comfort, bathhouse, coffe, fitness, movement, carRent, merch, tours, guide, drive } from './Price.constants';

export const Price: FC = () => {
	return (
		<Container className={indent.mt_6}>
			<PageHeading>Что почём</PageHeading>

			<div className={indent.mt_9}>
				<ArrowButton direction="right" size="large">
					Проживание
				</ArrowButton>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">размещение в номерах</SectionHeading>
				<div className={indent.mt_6}>
					<PriceList data={inRoom} />
				</div>

				<div className={indent.mt_10}>
					<SectionHeading size="M">размещение в отдельно стоящих домах</SectionHeading>
					<div className={indent.mt_6}>
						<PriceList data={inHouse} />
					</div>
				</div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">премиальный пакет black khan</SectionHeading>
				<Description element="div" className={indent.mt_6}>
					Если вы хотите чтобы мы носили вас на руках, то это еще 23 456 рублей в день на семью или компанию до 6 человек.
					<br />
					<br />
					В премиальный пакет входят:
					<br />
					<br />
					<ul className={styles.list}>
						<li className={styles.listItem}>VIP трансфер из/в аэропорт</li>
						<li className={styles.listItem}>Welcome Pack для каждого гостя</li>
						<li className={styles.listItem}>Бронь лучшего стола для вашей компании в гастротрактире “Довольный дракон”</li>
						<li className={styles.listItem}>Первый ряд на культурных мероприятиях на базе</li>
					</ul>
					<br />
					Также на протяжении всего времени вас будут сопровождать:
					<br />
					<br />
					<ul className={styles.list}>
						<li className={styles.listItem}>Персональный батлер решающий любой вопрос 27/7</li>
						<li className={styles.listItem}>Следопыт, составляющий для вас уникальный маршрут и сопровождающий в путешествиях по всему Алтаю</li>
					</ul>
				</Description>
			</div>

			<div className={indent.mt_10}>
				<div className={styles.separator}></div>
				<Description colorBrand>Каждый дополнительный человек в&nbsp;спальне и&nbsp;доме: +7&nbsp;500&nbsp;₽ взрослый; +4&nbsp;500&nbsp;₽ ребенок от&nbsp;5&nbsp;до&nbsp;12&nbsp;лет. Дети до&nbsp;5&nbsp;лет&nbsp;&mdash; комплиментарно.</Description>
				<div className={styles.separator}></div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">Сезонные заезды</SectionHeading>

				<FlexContainer desktopJustifyContent="between" flexWrap="wrap" gap={20} className={indent.mt_6}>
					<div className={styles.festivalItem}>
						<SectionHeading size="S" color="brand">
							“10 дней нового года”
						</SectionHeading>
						<SectionHeading size="S">25 декабря – 15 января</SectionHeading>
					</div>
					<div className={styles.festivalItem}>
						<SectionHeading size="S" color="brand">
							“45 дней лета”
						</SectionHeading>
						<SectionHeading size="S">15 июля – 30 августа</SectionHeading>
					</div>
					<div className={styles.festivalItem}>
						<SectionHeading size="S" color="brand">
							майская “искра”
						</SectionHeading>
						<SectionHeading size="S">28 апреля – 12 мая</SectionHeading>
					</div>
				</FlexContainer>

				<div className={indent.mt_8}>
					<Description element="div">
						Наша сезонная программа:
						<br />
						<br />
						<ul className={styles.list}>
							<li className={styles.listItem}>Жжем алтайского “Горячего Человека”</li>
							<li className={styles.listItem}>Пляшем как чертяки в Клубе “Сруб”</li>
							<li className={styles.listItem}>Устраиваем настоящий степник на Стоянке Черного Хана с нашим вкуснейшим пловом</li>
							<li className={styles.listItem}>Жарим фермерского барана на вертеле</li>
							<li className={styles.listItem}>Слушаем настоящее алтайское горловое пение, концерты этно- и бардовской песни</li>
							<li className={styles.listItem}>Проводим практики йоги, поющих чаш и стояния на гвоздях</li>
						</ul>
					</Description>
				</div>
				<div className={indent.mt_10}>
					<div className={styles.separator}></div>
					<Description colorBrand>
						В&nbsp; сезон, дополнительно включается сезонный билет, cтоимость билета: 6&nbsp;543 рубля&nbsp;&mdash; взрослый в&nbsp;сутки, 4&nbsp;321 рубля&nbsp;&mdash; детский в&nbsp;сутки.
						<br />
						<br />
						Минимальный срок бронирования&nbsp;&mdash; 4&nbsp;ночи.
					</Description>
					<div className={styles.separator}></div>
				</div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">наши каникулы</SectionHeading>

				<div className={indent.mt_5}>
					<Description>Команде Молодости вашей тоже нужно иногда отдыхать :)</Description>
				</div>
				<div className={indent.mt_5}>
					<SectionHeading size="S">5 ноября - 20 декабря</SectionHeading>
					<SectionHeading size="S">15 января - 15 февраля</SectionHeading>
					<SectionHeading size="S">10 марта - 20 апреля</SectionHeading>
				</div>
				<div className={indent.mt_5}>
					<Description>
						В эти даты база работает только для групповых заездов по предварительному бронированию.
						<br />
						Также в эти дни мы можем сдавать наши дома без полноценного обслуживания.
					</Description>
				</div>

				<div className={indent.mt_10}>
					<div className={styles.separator}></div>
					<Description colorBrand>
						Обратите внимание, в ваш счет мы включим сервисный сбор в размере 6%. <br />
						Если по итогу отдыха вы захотите оставить чаевые, мы с благодарностью включим их в счет в размере 5-10%.
						<br />
						<br />
						В&nbsp;организации корпоративных заездов нам помогает наш постоянный партнер Агентство &laquo;Маури&raquo;, которые берут сервисный сбор&nbsp;10% начиная от&nbsp;12&nbsp;человек.
						{/*<br />
            <br />
            При оплате по&nbsp;карте за&nbsp;экваринг банка 2,3%.*/}
					</Description>
					<div className={styles.separator}></div>
				</div>
			</div>

			<div className={indent.mt_9}>
				<ArrowButton direction="right" size="large">
					на базе
				</ArrowButton>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">гастротрактир “довольный дракон”</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={gastrotavern} />
			</div>

			<div className={indent.mt_20}>
				<SectionHeading size="M" color="brand">
					что едим?
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={food} />
			</div>

			<div className={cn(indent.mt_5, indent.mb_5)}>
				<Description>А если рыбаки сегодня не привезли, то всегда можно взять:</Description>
			</div>

			<div>
				<PriceList data={foodNoFisher} />
			</div>

			<div className={indent.mt_20}>
				<SectionHeading size="M" color="brand">
					что пьем?
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={drink} />
			</div>

			<div className={cn(indent.mt_5, indent.mb_5)}>
				<Description>И обязательно попробуйте наши фирменные угощения:</Description>
			</div>

			<div>
				<PriceList data={drinkBranded} />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">бар “я догоню”</SectionHeading>
			</div>

			<div className={cn(indent.mt_5, indent.mb_5)}>
				<Description>У нас приличная винная карта и большой выбор крепкого алкоголя. Мы верим, что воздух Алтая пьянит и дурманит сам по себе, поэтому цены в нашем баре специально высокие:</Description>
			</div>

			<div>
				<PriceList data={bar} direction="column" />
			</div>

			<div className={indent.mt_10}>
				<div className={styles.separator}></div>
				<Description colorBrand>Если вы&nbsp;приносите алкоголь с&nbsp;собой, наш пробковый сбор составляет 1&nbsp;000&nbsp;₽ с&nbsp;бутылки слабого алкоголя и&nbsp;5&nbsp;000&nbsp;₽ за&nbsp;крепкий.</Description>
				<div className={styles.separator}></div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">комфорт</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={comfort} direction="column" />
			</div>

			<div className={indent.mt_10}>
				<div className={styles.separator}></div>
				<Description colorBrand>Если вам что-то хочется, а&nbsp;мы&nbsp;об&nbsp;этом еще не&nbsp;подумали&nbsp;&mdash; скажите нам, и&nbsp;мы&nbsp;вместе решим сколько это будет стоить.</Description>
				<div className={styles.separator}></div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">банно-оздоровительный комплекс «Лаборатория тепла»</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={bathhouse} />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">кофейня “трикстер”</SectionHeading>
			</div>

			<div className={indent.mt_10}>
				<div className={styles.separator}></div>
				<Description colorBrand>С&nbsp;9:00 до&nbsp;12:00 фильтр кофе включен в&nbsp;ваш завтрак в&nbsp;любом количестве. Полный ассортимент и&nbsp;цены уточняйте за&nbsp;нашей стойкой кофейни.</Description>
				<div className={styles.separator}></div>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M" color="brand">
					некоторые позиции
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={coffe} />
			</div>

			<div className={indent.mt_5}>
				<SectionHeading size="M">спортивный центр “надежда”</SectionHeading>
			</div>

			<div className={indent.mt_5}>
				<SectionHeading size="M" color="brand">
					фитнес
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={fitness} />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M" color="brand">
					движение
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={movement} />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">автопрокат “бывалый рейнджер”</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={carRent} />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">для детей</SectionHeading>
			</div>

			<Description className={indent.mt_5} element="div">
				Дети в “Молодости” считаются от 5 до 12 лет.
				<br />
				<br />
				На территории базы есть:
				<br />
				<br />
				<ul className={styles.list}>
					<li className={styles.listItem}>Детская площадка имени Дамблдора</li>
					<li className={styles.listItem}>Домашний и уличный кинотеатры</li>
					<li className={styles.listItem}>Спортивные игры</li>
					<li className={styles.listItem}>Услуги няни (стоимость обсуждается индивидуально)</li>
				</ul>
			</Description>

			<div className={indent.mt_10}>
				<SectionHeading size="M">concept store</SectionHeading>
			</div>

			<Description className={indent.mt_5}>А еще не забудьте заглянуть в наш Concept Store, в котором собраны брендированный мерч “Молодости” и премиальные алтайские сувениры.</Description>

			<div className={indent.mt_10}>
				<SectionHeading size="M" color="brand">
					рекомендуем приобрести:
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={merch} direction="column" />
			</div>

			<div className={indent.mt_20}>
				<ArrowButton direction="right" size="large">
					путешествия
				</ArrowButton>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">индивидуальные авторские приключения</SectionHeading>
			</div>

			{tours &&
				tours.map((item) => (
					<div key={item.title}>
						<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
							<SectionHeading size="M" color="brand">
								{item.title}
							</SectionHeading>
						</div>
						<FlexContainer className={cn(indent.tablet_mt_5, indent.mt_2)} key={item.title} flexDirection="column" desktopFlexDirection="row" justifyContent="between" gap={20} desktopGap={30}>
							<Description>{item.description}</Description>
							<div className={styles.toursRightCol}>
								<SectionHeading size="S">{item.details}</SectionHeading>
								<div className={cn(indent.tablet_mt_3, indent.mt_1)}>
									<SectionHeading size="S" color="brand">
										{item.priceInfo}
									</SectionHeading>
								</div>
							</div>
						</FlexContainer>
					</div>
				))}

			<div className={indent.mt_20}>
				<SectionHeading size="M">гиды-следопыты и водители</SectionHeading>
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M" color="brand">
					сопровождающие
				</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={guide} direction="column" />
			</div>

			<div className={indent.mt_10}>
				<SectionHeading size="M">поездки на 2-3 часа</SectionHeading>
			</div>

			<div className={indent.mt_6}>
				<PriceList data={drive} />
			</div>

			<div className={indent.mt_10}>
				<div className={styles.separator}></div>
				<Description colorBrand>
					Обратите внимание, в ваш счет мы включим сервисный сбор в размере 6%
					<br />
					Если по итогу отдыха вы захотите оставить чаевые, мы с благодарностью включим их в счет в размере 5-10%.
					<br />
					<br />В организации корпоративных заездов нам помогает наш постоянный партнер Агентство «Маури», которые берут сервисный сбор 10% начиная от 12 человек.
					{/*При оплате по карте за экваринг банка 2,3%.*/}
				</Description>
				<div className={cn(styles.separator)}></div>
			</div>
		</Container>
	);
};
