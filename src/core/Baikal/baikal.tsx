import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Description, FlexContainer, PageHeading, SectionHeading } from '@uikit';

import * as styles from './baikal.css';
import { indent } from '@/styles';
import cn from 'classnames';
import { HousesSplit } from '@/utils';
import { Housing } from '../WhereWeLive/Housing/Housing';
import { OurBaseSection } from './OurBase';
import { BaikalTerritoryMapSection } from './MapLegend';
import { LuxipingSection } from './Luxiping';
import { BaikalBookingCta } from './BaikalBookingCta';
import { WhatWeEatBaikal, WhatWeEatBaikalGrid, WhatWeEatBaikalPricing } from './WhatWeEatBaikal';
import { CenteredBrandQuote } from '@shared/components';
import { HowWeTrip } from '@core/HowWeTrip';
import { TurburoBaikalSection } from './TurburoBaikalSection';
import { BAIKAL_TRIPS_FOR_PAGE, HOW_WE_TRAVEL_BAIKAL_INTRO } from '@core/PricesPageBaikal/PricesPageBaikal.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = HousesSplit;

const photos = ['/images/baikal/photo1.jpg', '/images/baikal/photo2.jpg', '/images/baikal/photo3.jpg', '/images/baikal/photo4.jpg', '/images/baikal/photo5.jpg', '/images/baikal/photo6.jpg', '/images/baikal/photo7.jpg', '/images/baikal/photo8.jpg'];

export const GallerySlider = () => {
	const prevRef = useRef<HTMLDivElement>(null);
	const nextRef = useRef<HTMLDivElement>(null);
	const paginationRef = useRef<HTMLDivElement>(null);
	const [swiperInstance, setSwiperInstance] = useState<any>(null);

	useEffect(() => {
		if (swiperInstance && prevRef.current && nextRef.current && paginationRef.current && swiperInstance.params) {
			swiperInstance.params.navigation.prevEl = prevRef.current;
			swiperInstance.params.navigation.nextEl = nextRef.current;
			swiperInstance.navigation.init();
			swiperInstance.navigation.update();

			swiperInstance.params.pagination.el = paginationRef.current;
			swiperInstance.pagination.init();
			swiperInstance.pagination.render();
			swiperInstance.pagination.update();
		}
	}, [swiperInstance]);

	return (
		<div className={styles.wrapper}>
			<Swiper modules={[Navigation, Pagination]} onSwiper={setSwiperInstance} loop spaceBetween={30} slidesPerView={1} className={styles.mySwiper}>
				{photos.map((src, i) => (
					<SwiperSlide key={i} className={styles.mySwiperSlide}>
						<Image src={src} alt={`Фото ${i + 1}`} width={1200} height={800} className={styles.slideImage} />
					</SwiperSlide>
				))}
			</Swiper>

			<div ref={prevRef} className={styles.navPrev}>
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
					<circle cx="17.5" cy="17.5" r="17.5" transform="rotate(-180 17.5 17.5)" fill="#F4F4F4" />
					<path d="M21 10.5L14 17.5L21 24.5" stroke="#E03823" strokeOpacity="0.9" strokeWidth="1.7" />
				</svg>
			</div>
			<div ref={nextRef} className={styles.navNext}>
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
					<circle cx="17.5" cy="17.5" r="17.5" transform="rotate(-90 17.5 17.5)" fill="#F4F4F4" />
					<path d="M14 24.5L21 17.5L14 10.5" stroke="#E03823" strokeOpacity="0.9" strokeWidth="1.7" />
				</svg>
			</div>
			<div ref={paginationRef} className={styles.pagination} />
		</div>
	);
};

export const BaikalPage: FC<Props> = ({ inHouse, individual, luxiping }) => {
	const filteredIndividual = individual.filter((house) => house.attributes.isBaikal);
	// Фильтруем дома (inHouse), оставляя только те, где isBaikal === true
	const filteredInHouse = inHouse.filter((house) => house.attributes.isBaikal);
	const filteredLuxiping = luxiping.filter((house) => house.attributes.isBaikal);
	return (
		<Container className={cn(indent.mt_6, styles.container825)}>
			<PageHeading colorBrand>пляжный курорт &laquo;Молодость&raquo; на&nbsp;берегу&nbsp;байкала</PageHeading>
			<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>
				Мы&nbsp;хотим дать городскому человеку возможность погрузиться в&nbsp;природу, почувствовать себя первооткрывателем и&nbsp;при этом остаться в&nbsp;зоне психологического и&nbsp;бытового комфорта, без подвигов и&nbsp;палаток.
			</Description>
			<Description className={indent.mt_4}>
				Мы&nbsp;катаемся с&nbsp;песчаных дюн, как с&nbsp;горок, гуляем босиком по&nbsp;берегу, собираем грибы, водянку и&nbsp;бруснику. Ездим по&nbsp;бездорожью на&nbsp;джипах, гуляем на&nbsp;лодке до&nbsp;Ольхона, медитируем под тибетские чаши и&nbsp;сидим у&nbsp;костра.
			</Description>
			<Description className={indent.mt_4}>Мы&nbsp;помогаем путешественникам разного уровня и&nbsp;подготовки сориентироваться на&nbsp;местности&nbsp;&mdash; с&nbsp;момента прибытия и&nbsp;до&nbsp;самого отлёта.</Description>
			<Description className={indent.mt_4}>Команда Молодости вашей.</Description>
			<div className={cn(indent.tablet_mt_10, indent.mt_6, styles.imageWrapper)}>
				<GallerySlider />
			</div>
			<SectionHeading>расположение</SectionHeading>
			<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_10, indent.mt_4)}>
				<div>
					<Description>Пляжный курорт &laquo;Молодость&raquo; находится на&nbsp;берегу Байкала со&nbsp;стороны Республики Бурятия.</Description>
					<Description className={indent.mt_5}>Ехать от&nbsp;Аэропорта Улан-Удэ до&nbsp;нас около 2-х часов.</Description>
				</div>

				<div className={cn(styles.card)}>
					<p className={styles.cardTitle}>
						<span className={styles.cardTitleAccented}>Координаты:</span>&nbsp;52.902,&nbsp;108.152
					</p>
					<p className={styles.cardDescription}>(местность Пески, Особая экономическая зона туристскорекреационного типа Байкальская гавань, Прибайкальский район, Республика Бурятия).</p>
				</div>
			</FlexContainer>
			<div className={cn(styles.imageWrapper, indent.tablet_mt_10, indent.mt_6)}>
				<Image fill alt="Расположение" src="/images/baikal/baikal_map.png" className={styles.image} unoptimized />
			</div>
			<OurBaseSection />
			<div className={cn(indent.tablet_mt_16, indent.mt_14)}>
				<BaikalTerritoryMapSection />
			</div>
			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div id="roomsOnBaikal" className={styles.blockContainer825}>
				<SectionHeading>где мы живем</SectionHeading>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>в&nbsp;гэрах</p>
					<p className={styles.gersNoteLine}>
						<span className={styles.gersNotePrefix}>В&nbsp;ГЭРАХ&nbsp;— </span>
						Мы предлагаем два варианта домов: с одной большой спальней-гостинной и двухкомнатные
					</p>
				</div>
				<div className={styles.housingBlock}>
					{filteredIndividual.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>в&nbsp;кубиках</p>
				</div>
				<div className={styles.housingBlock}>
					{filteredInHouse.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>люкспинг</p>
					<LuxipingSection houses={filteredLuxiping} />
					<BaikalBookingCta />	
				</div>
				</div>
			</div>
			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={styles.blockContainer825}>
				<WhatWeEatBaikal />
				<div className={cn(indent.tablet_mt_10, indent.mt_8)}>
					<WhatWeEatBaikalGrid />
				</div>
				<div className={cn(indent.tablet_mt_10, indent.mt_10)}>
					<WhatWeEatBaikalPricing />
				</div>
				<div className={cn(indent.tablet_mt_10, indent.mt_10)}>
					<CenteredBrandQuote
						noMarginBottom
						attributionFont="cera"
						quote={
							<p>
								&laquo;Молодость&raquo; рассчитана на
								<br />
								разборчивого горожанина,
								<br />
								которому нужен не&nbsp;только свежий
								<br />
								воздух и&nbsp;вид из&nbsp;окна, но&nbsp;и&nbsp;WI-FI и
								<br />
								неограниченный доступ к&nbsp;латте с
								<br />
								миндальным молоком
							</p>
						}
						attribution="— так написал Коммерсантъ"
					/>
				</div>
				</div>
			</div>

			<div id="kak-my-puteshestvuem" className={cn(styles.howWeTravelBaikalOuter, styles.howWeTripAfterQuote)}>
				<HowWeTrip variant="baikal" trips={BAIKAL_TRIPS_FOR_PAGE} introText={HOW_WE_TRAVEL_BAIKAL_INTRO} />
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={styles.blockContainer825}>
					<TurburoBaikalSection />
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={cn(styles.blockContainer825)}>
				<h2 className={styles.blagodatHeading}>БАННЫЙ КОМПЛЕКС &laquo;БЛАГОДАТЬ&raquo;</h2>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>
					Мы&nbsp;долго искали методику, как строить и&nbsp;как парить. И&nbsp;были поражены, когда поняли, что настоящее сибирское парение&nbsp;&mdash; медленное и&nbsp;не&nbsp;жаркое, а&nbsp;лучшие камни для сохранения тепла&nbsp;&mdash; нефритовые.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_6)}>
					Настоящее сибирское парение неспешное, и&nbsp;мы&nbsp;долго учили наших банщиков, чтобы человек находился в&nbsp;парилке 20–30&nbsp;минут. Температуры не&nbsp;сверхвысокие, выдерживаются достаточно легко и&nbsp;по-настоящему прогревают тело.
				</Description>
				<div className={cn(styles.blagodatPricing, indent.tablet_mt_5, indent.mt_6)}>
					<div className={styles.blagodatPricingItem}>
						<span className={styles.blagodatPricingLabel}>ЦЕРЕМОНИЯ МОЛОДОСТЬ</span>
						<span className={styles.blagodatPricingPrice}>ОТ&nbsp;20&nbsp;000&nbsp;₽</span>
						<span className={styles.blagodatPricingNote}>с человека</span>
					</div>
					<div className={styles.blagodatPricingItem}>
						<span className={styles.blagodatPricingLabel}>МАССАЖ</span>
						<span className={styles.blagodatPricingPrice}>ОТ&nbsp;9&nbsp;000&nbsp;₽</span>
						<span className={styles.blagodatPricingNote}>с человека/час</span>
					</div>
				</div>
				<div className={cn(styles.blagodatGalleryBlock, indent.tablet_mt_10, indent.mt_6)}>
					<div className={styles.blagodatGalleryRow1}>
						<Image src="/images/baikal/blagodat/1.jpg" alt="Банный комплекс «Благодать»" width={600} height={400} className={styles.blagodatPhoto} />
						<Image src="/images/baikal/blagodat/2.jpg" alt="Банный комплекс «Благодать»" width={600} height={400} className={styles.blagodatPhoto} />
					</div>
					<div className={styles.blagodatGalleryRow2}>
						<Image src="/images/baikal/blagodat/3.jpg" alt="Банный комплекс «Благодать»" width={400} height={500} className={styles.blagodatPhoto} />
						<Image src="/images/baikal/blagodat/4.jpg" alt="Банный комплекс «Благодать»" width={600} height={400} className={styles.blagodatPhotoWide} />
						<Image src="/images/baikal/blagodat/5.jpg" alt="Банный комплекс «Благодать»" width={400} height={500} className={styles.blagodatPhoto} />
					</div>
				</div>
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={styles.blockContainer825}>
					<CenteredBrandQuote
						noMarginBottom
						attributionFont="cera"
						quote={
							<p>
								&laquo;МОЛОДОСТЬ&raquo; ЭТО КАК ПРОХОД ЧЕРЕЗ ШКАФ В СТРАНУ НАРНИЮ, КОТОРУЮ МНЕ НАПОМИНАЕТ ВОЛШЕБНЫЙ АЛТАЙ
							</p>
						}
						attribution="Константин Крюков (звезда)"
					/>
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_12, indent.mt_12)}>
				<div className={styles.blockContainer825}>
					<h2 className={styles.dekabristsHeading}>СРУБ ДЕКАБРИСТОВ</h2>
					<div className={cn(styles.dekabristsRow, indent.mt_6)}>
						<div className={styles.dekabristsCol}>
							<h3 className={styles.dekabristsSubheading}>ТАМ, ГДЕ СИБИРЬ ВСТРЕЧАЕТ ВОСТОК</h3>
							<p className={styles.dekabristsText}>
								Сруб Декабристов&nbsp;&mdash; архитектурный мост между эпохами. Традиционный русский сруб, посвященный памяти ссыльных просветителей, венчает крыша в&nbsp;восточном стиле. Изящные изгибы пагод и&nbsp;аутентичная черепица напоминают: здесь, на&nbsp;берегу Байкала, сибирская стать встречается с&nbsp;мудростью Востока.
							</p>
						</div>
						<div className={styles.dekabristsCol}>
							<Image src="/images/baikal/dekabrists/1.jpg" alt="Сруб Декабристов" width={600} height={400} className={styles.dekabristsPhoto} />
						</div>
					</div>
					<h3 className={styles.dekabristsSectionTitle}>ЧТО ВНУТРИ?</h3>
					<div className={styles.dekabristsRow}>
						<div className={styles.dekabristsCol}>
							<Image src="/images/baikal/dekabrists/2.jpg" alt="Интерьер Сруба Декабристов" width={600} height={400} className={styles.dekabristsPhoto} />
						</div>
						<div className={styles.dekabristsCol}>
							<p className={styles.dekabristsText}>
								<span className={styles.dekabristsLabel}>Ресепшен:</span> Здесь мы&nbsp;встречаем, обнимаем и&nbsp;решаем любые вопросы&nbsp;&mdash; от&nbsp;бытовых мелочей до&nbsp;организации ваших приключений.
								<br />
								<br />
								<span className={styles.dekabristsLabel}>Каминная:</span> Тепло и&nbsp;смыслы. Уютная гостиная с&nbsp;живым огнем. Место, где можно полистать редкую книгу о&nbsp;Байкале или просто помолчать, глядя на&nbsp;танцующее пламя.
								<br />
								<br />
								<span className={styles.dekabristsLabel}>Библиотека:</span> посвященная тем временам, когда в&nbsp;этом районе жили многие ссыльные декабристы, в&nbsp;том числе друг Пушкина&nbsp;&mdash; Вильгельм Кюхельбекер, тот самый легендарный Кюхля.
							</p>
						</div>
					</div>
					<p className={styles.dekabristsLowerText}>
						<span className={styles.dekabristsLabel}>Массажный кабинет:</span> Телесная настройка. Восточная эстетика снаружи продолжается глубоким расслаблением внутри. Идеальное место, чтобы «выключить» голову и&nbsp;восстановиться.
						<br />
						<br />
						<span className={styles.dekabristsLabel}>Караоке и&nbsp;Конференц-зал:</span> Энергия и&nbsp;идеи. Пространство-трансформер. Днем здесь рождаются новые стратегии и&nbsp;смыслы в&nbsp;конференц-зале, а&nbsp;вечером стены сруба наполняются драйвом и&nbsp;песнями, которые поются всем сердцем.
					</p>
					<div className={styles.dekabristsPhotoGrid}>
						<Image src="/images/baikal/dekabrists/3.jpg" alt="Камин в Срубе Декабристов" width={600} height={400} className={styles.dekabristsPhoto} />
						<Image src="/images/baikal/dekabrists/4.jpg" alt="Уютный уголок в Срубе Декабристов" width={600} height={400} className={styles.dekabristsPhoto} />
					</div>
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_12, indent.mt_12)}>
				<div className={styles.blockContainer825}>
				<h2 className={styles.zvukHeading}>ДОМ ЗВУКА И&nbsp;ТИШИНЫ</h2>
				<div className={styles.zvukTwoCol}>
					<div className={styles.zvukCol1}>
						<p className={styles.zvukDescription}>
							Медитации под тибетские поющие чаши с&nbsp;видом на&nbsp;бесконечный горизонт, йога под шум байкальских волн и&nbsp;лучшие закаты под звуки гонга.
						</p>
						<div className={styles.zvukPriceRow}>
							<span className={styles.zvukPriceLabel}>ИНДИВИДУАЛЬНАЯ МЕДИТАЦИЯ С&nbsp;ПОЮЩИМИ ЧАШАМИ</span>
							<span className={styles.zvukPriceValue}>15&nbsp;000&nbsp;₽</span>
						</div>
						<div className={styles.zvukPhotosRow}>
							<div className={styles.zvukPhotoWrap}>
								<Image src="/images/baikal/zvuk/2.jpg" alt="Йога в Доме звука" width={400} height={500} className={styles.zvukPhotoInRow} />
							</div>
							<div className={styles.zvukPhotoWrap}>
								<Image src="/images/baikal/zvuk/3.jpg" alt="Интерьер Дома звука" width={600} height={400} className={styles.zvukPhotoInRow} />
							</div>
						</div>
					</div>
					<div className={styles.zvukCol2}>
						<Image src="/images/baikal/zvuk/1.jpg" alt="Гонг на берегу Байкала" width={600} height={400} className={styles.zvukPhoto} />
						<Image src="/images/baikal/zvuk/4.jpg" alt="Тибетские поющие чаши" width={400} height={500} className={styles.zvukPhoto} />
					</div>
				</div>
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={styles.blockContainer825}>
					<h2 className={styles.flamingoHeading}>ПЛЯЖНЫЙ КЛУБ РОЗОВЫЙ ФЛАМИНГО</h2>
					<p className={cn(styles.flamingoDescription, indent.mt_6)}>
						У&nbsp;нас есть свой пляж и&nbsp;очень много песка.
					</p>
					<p className={cn(styles.flamingoDescription, indent.mt_5)}>
						Мы&nbsp;играем в&nbsp;волейбол и&nbsp;падел на&nbsp;песке, ходим на&nbsp;сапах по&nbsp;Байкалу, а&nbsp;по&nbsp;вечерам сидим за&nbsp;большим столом у&nbsp;огромного костра, который выше человеческого роста или смотрим кино на&nbsp;большом экране.
					</p>
					<div className={styles.flamingoGrid}>
						<div className={styles.flamingoGridTop}>
							<div className={styles.flamingoColLeft}>
								<div className={styles.flamingoPhotoWrap}>
									<Image src="/images/baikal/flamingo/left1.png" alt="Сапы на Байкале" width={400} height={500} className={styles.flamingoPhoto} />
								</div>
								<div className={styles.flamingoPhotoWrap}>
									<Image src="/images/baikal/flamingo/left2.jpg" alt="Пляж с зонтиками" width={400} height={500} className={styles.flamingoPhoto} />
								</div>
								<div className={styles.flamingoPhotoWrap}>
									<Image src="/images/baikal/flamingo/left3.jpg" alt="Шезлонги на песке" width={400} height={500} className={styles.flamingoPhoto} />
								</div>
							</div>
							<div className={styles.flamingoColCenter}>
								<div className={styles.flamingoPhotoHeroWrap}>
									<Image src="/images/baikal/flamingo/ctr.jpg" alt="Медитация на берегу" width={400} height={600} className={styles.flamingoPhoto} />
								</div>
							</div>
							<div className={styles.flamingoColRight}>
								<div className={styles.flamingoPhotoWrapRight}>
									<Image src="/images/baikal/flamingo/right1.jpg" alt="Закат на пляже" width={400} height={500} className={styles.flamingoPhoto} />
								</div>
								<div className={styles.flamingoPhotoWrapRight}>
									<Image src="/images/baikal/flamingo/right2.png" alt="Дети на фламинго" width={400} height={500} className={styles.flamingoPhoto} />
								</div>
							</div>
						</div>
						<div className={styles.flamingoGridBottom}>
							<div className={styles.flamingoPhotoWideWrap}>
								<Image src="/images/baikal/flamingo/bottom1.png" alt="Музыка у костра" width={800} height={450} className={styles.flamingoPhoto} />
							</div>
							<div className={styles.flamingoPhotoWideWrap}>
								<Image src="/images/baikal/flamingo/bottom2.jpg" alt="Ужин на пляже" width={800} height={450} className={styles.flamingoPhoto} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={cn(styles.block825Outer, indent.tablet_mt_16, indent.mt_6)}>
				<div className={cn(styles.blockContainer825, styles.finalBlock)}>
				<div className={cn(styles.border, indent.mb_8)}>&nbsp;</div>
				<p className={styles.finalBlockText}>
					ПРОЕКТ РЕАЛИЗУЕТСЯ СОВМЕСТНО С НАШИМИ ПАРТНЕРАМИ — ГРУППОЙ КОМПАНИЙ{' '}
					<span className={styles.attentionRed}>HIGHLAND GOLD</span> И{' '}
					<span className={styles.attentionRed}>ГОК &laquo;ОЗЕРНЫЙ&raquo;</span>
					<br />
					<br />
				</p>
				<p className={styles.finalBlockText}>
					ЧТОБЫ СТАТЬ ЧЛЕНОМ ТУРКЛУБА «МОЛОДОСТЬ», СВЯЗЫВАЙТЕСЬ С НАМИ ПО ТЕЛЕФОНУ{' '}
					<a className={styles.attentionRed} href="tel:+79647002112">
						+7 964 700–21–12
					</a>
				</p>
				<div className={cn(styles.border, indent.tablet_mt_8, indent.mt_8)}>&nbsp;</div>
				<div className={styles.finalBlockLinks}>
					<Link href="/pravovie-documenti-baikal" className={styles.finalBlockLink} prefetch={false}>
						<span>НАШИ</span>
						<span>РЕКВИЗИТЫ</span>
					</Link>
				</div>
				</div>
			</div>
		</Container>
	);
};
