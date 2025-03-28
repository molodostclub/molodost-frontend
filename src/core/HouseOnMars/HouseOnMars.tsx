import { FC } from 'react';
import Image from 'next/image';
import { Container, Description, FlexContainer, InfoCard, PageHeading, SectionHeading } from '@uikit';

import * as styles from './HouseOnMars.css';
import { indent } from '@/styles';
import cn from 'classnames';

export const HouseOnMars: FC = () => {
	return (
		<Container className={indent.mt_6}>
			<PageHeading colorBrand>Мы добрались до Марса раньше Илона&nbsp;Маска</PageHeading>
			<FlexContainer gap={30} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_10, indent.mt_6)}>
				<div className={styles.halfWidthInTablet}>
					<SectionHeading>Приют на марсе</SectionHeading>
					<Description className={indent.mt_6}>В&nbsp;&laquo;Молодости&raquo; всегда есть место открытию. Наше главное открытие 2023&nbsp;&mdash; это &laquo;Молодость на&nbsp;Марсе&raquo;!</Description>
				</div>
				<div className={styles.halfWidthInTablet}>
					<SectionHeading>пошли на марс!</SectionHeading>
					<Description className={indent.mt_6}>Там звёзды становятся ближе! До&nbsp;Монголии рукой подать, а&nbsp;на&nbsp;карте так и&nbsp;написано: Марс&nbsp;1, Марс 2&nbsp;и&nbsp;Марс&nbsp;3.</Description>
				</div>
			</FlexContainer>
			<div className={cn(indent.tablet_mt_10, indent.mt_6, styles.imageWrapper)}>
				<Image fill alt="Равнина" src="/images/house-on-mars/image-1-new.jpg" className={styles.image} />
			</div>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<SectionHeading color="brand">Мы будем искать новое в вечном.</SectionHeading>
				<FlexContainer className={cn(indent.tablet_mt_8, indent.mt_6)} desktopAlignItems="start" flexDirection="column" desktopFlexDirection="row" gap={20}>
					<FlexContainer className={styles.halfWidthInTablet} flexDirection="column" desktopFlexDirection="column" gap={20} desktopGap={30}>
						<Description>Будем совершать собственные открытия в&nbsp;культурных наслоениях, которые тысячелетиями возникали в&nbsp;этих местах.</Description>
						<Description>
							Увидим такое разнообразие ландшафтов, что покажется, что мы&nbsp;проехали по&nbsp;толкиновскому Средиземью от&nbsp;Хоббитании до&nbsp;Мордора и&nbsp;обратно, побывав в&nbsp;гостях и&nbsp;у&nbsp;эльфов, и&nbsp;у&nbsp;гномов, и&nbsp;у&nbsp;древесных Энтов, и, конечно,
							у&nbsp;конников Рохана.
						</Description>
						<Description>Проедем 440&nbsp;км по&nbsp;Чуйскому тракту до&nbsp;границы с&nbsp;Монголией.</Description>
						<Description>Увидим петроглифы Каракольской долины и&nbsp;красоту Катунских террас.</Description>
					</FlexContainer>
					<FlexContainer className={styles.halfWidthInTablet} flexDirection="column" desktopFlexDirection="column" gap={20} desktopGap={30}>
						<Description>Помолчим у&nbsp;вековых курганов великих воинов, поищем золото скифов и&nbsp;пофотографируем лошадей, потомки которых пришли сюда с&nbsp;воинами Чингисхана.</Description>
						<Description>Обнимем кедры на&nbsp;священных перевалах, потому что деревьям, как и&nbsp;людям, важно, чтобы их&nbsp;любили и&nbsp;обнимали.</Description>
						<Description>Полюбуемся на&nbsp;соленые озера Чуйской степи, проступающие из&nbsp;вечной мерзлоты, окруженные верблюдами и&nbsp;снежными хребтами.</Description>
					</FlexContainer>
				</FlexContainer>
			</div>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<div className={cn(styles.imageWrapper)}>
					<Image fill alt="Пруд" src="/images/house-on-mars/new-arc.jpg" className={styles.image} />
				</div>
			</div>

			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<div className={cn(styles.imageWrapper)}>
					<Image fill alt="Пруд" src="/images/house-on-mars/1.jpg" className={styles.image} />
				</div>
				<div className={cn(styles.border, indent.mt_6, indent.tablet_mt_13)}></div>
				<Description colorBrand className={cn(indent.mt_6, indent.tablet_mt_8, indent.mb_6, indent.tablet_mb_8)}>
					Лучше всего космическую невесомость этих мест переживать, крепко чувствуя земную гравитацию под ногами.
				</Description>
				<div className={cn(styles.border, indent.mb_6, indent.tablet_mb_13)}></div>
			</div>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<SectionHeading>Где живем?</SectionHeading>
				<FlexContainer desktopGap={20} gap={30} flexDirection="column" desktopFlexDirection="row" className={cn(indent.tablet_mt_15, indent.mt_6)}>
					<div className={cn(styles.imageWrapper, styles.halfWidthInTablet)}>
						<Image fill alt="дом" src="/images/house-on-mars/5.jpg" className={styles.image} />
					</div>
					<Description className={styles.halfWidthInTablet}>
						В&nbsp;нашем новом гостевом доме &laquo;Молодость на&nbsp;Марсе&raquo; в&nbsp;селе Тобелер в&nbsp;20&nbsp;км от&nbsp;границы с&nbsp;Монголией. Мы&nbsp;как всегда пытались проникнуть в&nbsp;суть места, и&nbsp;наш шеф-дизайнер Оля Дмитриева искала и&nbsp;соединяла архаичные
						и&nbsp;современные архитектурные, отделочные и&nbsp;интерьерные решения, связанные с&nbsp;жизнью местных народов: алтайцев, казахов, китайцев, монголов и&nbsp;русских.
					</Description>
				</FlexContainer>
				<FlexContainer desktopGap={20} gap={30} flexDirection="column" desktopFlexDirection="row" className={cn(indent.tablet_mt_13, indent.mt_6)}>
					<div className={cn(styles.imageWrapper, styles.halfWidthInTablet)}>
						<Image fill alt="стейк" src="/images/house-on-mars/image-5.jpg" className={styles.image} />
					</div>
					<Description className={styles.halfWidthInTablet}>
						Гастро-трактир &laquo;Довольный дракон&raquo; создал специальное степное меню из&nbsp;местных и&nbsp;заморских продуктов. Наши кош-агачские бараны чудесно запивать хоть Сан-пелегрино, хоть нашим фирменным можжевеловым квасом, хоть аперольчиком с&nbsp;апельсинчиком.
					</Description>
				</FlexContainer>
				<div className={cn(indent.tablet_mt_15, indent.mt_6, styles.imageWrapper)}>
					<Image fill alt="номер" src="/images/house-on-mars/image-6.jpg" className={styles.image} />
				</div>
				<div className={cn(styles.border, indent.mt_6, indent.tablet_mt_13)}></div>
				<Description colorBrand className={cn(indent.mt_6, indent.tablet_mt_8, indent.mb_6, indent.tablet_mb_8)}>
					Ну&nbsp;и&nbsp;конечно: какая&nbsp;же Молодость без современных петроглифов и&nbsp;настенной живописи граффитиста Григория Дубинова.
				</Description>
				<div className={cn(styles.border, indent.mb_6, indent.tablet_mb_13)}></div>
			</div>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<p className={styles.attention}>
					Цены актуальны <span className={styles.attentionRed}>до 31 марта 2025 года</span>.
				</p>
			</div>
			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<SectionHeading>Билет на марс</SectionHeading>
				<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" className={cn(indent.mt_6, indent.tablet_mt_8)}>
					<div className={styles.halfWidthInTablet}>
						<Description colorBrand bold uppercase>
							От&nbsp;108&nbsp;000&nbsp;₽ за машину.
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							до 3 пассажиров, сопровождение следопытом и заправка.
							<br />
							<br />
							<span style={{ color: '#929292' }}>* в&nbsp;стоимость не&nbsp;входит пребывание на&nbsp;культурной турбазе &laquo;Молодость&raquo; в&nbsp;центре республики.</span>
						</Description>
					</div>
					{/* <div className={styles.halfWidthInTablet}>
						<Description colorBrand bold uppercase>
							От&nbsp;123&nbsp;456&nbsp;₽
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							рублей на&nbsp;двоих
							<br />
							<br />
							<span style={{ color: '#929292' }}>В стоимость входит: проживание, питание, трансфер, сопровождение следопытом, поездка в степь</span>
						</Description>
					</div> */}
				</FlexContainer>
				<br />
				<br />
				<Description>Точная цена билета рассчитывается индивидуально и&nbsp;может значительно увеличиваться в&nbsp;зависимости от&nbsp;количества участников поездки и&nbsp;конкретных пожеланий.</Description>
			</div>

			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<SectionHeading>ПРОЖИВАНИЕ</SectionHeading>
				<FlexContainer flexWrap="wrap" gap={20} justifyContent="between" className={cn(indent.mt_3, indent.tablet_mt_4)}>
					<div className={styles.priceItem}>
						<Description colorBrand bold uppercase>
							От&nbsp;25&nbsp;000&nbsp;₽
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							Замечательная спальня (1-2 человека)
						</Description>
					</div>
					<div className={styles.priceItem}>
						<Description colorBrand bold uppercase>
							От&nbsp;35&nbsp;000&nbsp;₽
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							Келья (1-2 человека)
						</Description>
					</div>
					<div className={styles.priceItem}>
						<Description colorBrand bold uppercase>
							От&nbsp;50&nbsp;000&nbsp;₽
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							Логово Вавилонского тигра (1-2 человека)
						</Description>
					</div>
				</FlexContainer>
			</div>

			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<SectionHeading>АРЕНДА ПРИЮТА ПОЛНОСТЬЮ</SectionHeading>
				<FlexContainer flexWrap="wrap" gap={20} justifyContent="between" className={cn(indent.mt_3, indent.tablet_mt_4)}>
					<div className={styles.priceItem}>
						<Description colorBrand bold uppercase>
							500&nbsp;000&nbsp;₽ &mdash;&nbsp;1&nbsp;сутки
						</Description>
						<Description sizeSmallOnDesktop className={indent.mt_2}>
							входит:
							<br />
							<span style={{ color: '#929292' }}> проживание до 18 человек, трехразовое питание, баня и чан, водный сбор, кофейня и все безалкогольные напитки.</span>
						</Description>
					</div>
				</FlexContainer>
			</div>

			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<Description>
					Мы&nbsp;считаем, что вода и&nbsp;воздух на&nbsp;Алтае должны быть бесплатными и&nbsp;не&nbsp;хотим торговать ни&nbsp;тем ни&nbsp;другим.
					<br />
					<br />
					При этом на&nbsp;закупку воды Petroglyph и&nbsp;переработку пластика, который возим в&nbsp;Новосибирск, мы&nbsp;тратим миллионы рублей в&nbsp;год. Поэтому посчитали справедливым включать в&nbsp;ваш счёт водяной сбор 350&nbsp;рублей. Все деньги, которые мы&nbsp;получим за&nbsp;эту
					услугу, пойдут на&nbsp;реализацию образовательных и&nbsp;экологических проектов на&nbsp;Алтае. Если вам это не&nbsp;подходит, то&nbsp;мы&nbsp;не&nbsp;будем вам это считать.
				</Description>
			</div>

			<div className={cn(styles.border, indent.mt_6, indent.tablet_mt_13, indent.mb_6, indent.tablet_mb_8)}></div>
			<SectionHeading>Чтобы купить &laquo;Билет на Марс&raquo; пишите на&nbsp;единый номер турклуба &laquo;Молодость&raquo;</SectionHeading>
			<SectionHeading color="brand">
				<a href="tel:+79647002112" style={{ color: 'inherit' }}>
					+7&nbsp;(964)&nbsp;700 21&nbsp;12
				</a>
			</SectionHeading>
			<div className={cn(styles.border, indent.mb_6, indent.tablet_mb_13, indent.mt_6, indent.tablet_mt_8)}></div>

			<div className={cn(indent.tablet_mt_15, indent.mt_6)}>
				<InfoCard image="/images/house-on-mars/image-7.jpg" title="Худрук «Молодости» Алексей Карахан:" shade={false} smallTitle smallHeight />
				<Description className={cn(indent.mt_6, indent.tablet_mt_8)}>
					&laquo;Создать &laquo;Молодость на&nbsp;Марсе&raquo; было моей главной географической мечтой, когда мы&nbsp;задумали построить нашу эко-систему. Теперь можно просто прилететь на&nbsp;Алтай, через 15&nbsp;минут оказаться на&nbsp;нашей культурной турбазе на&nbsp;берегу Катуни,
					взять машину в&nbsp;нашем автопрокате &laquo;Бывалый рейнджер&raquo;, получить все ценные советы от&nbsp;наших следопытов и&nbsp;отправиться на&nbsp;Марс по&nbsp;одной из&nbsp;самых красивых дорог в&nbsp;мире. По&nbsp;Чуйскому тракту теперь можно добраться до&nbsp;самых
					потрясающих видов и&nbsp;не&nbsp;выпадать из&nbsp;нашего хипстерского уюта&raquo;.
				</Description>
			</div>
		</Container>
	);
};
