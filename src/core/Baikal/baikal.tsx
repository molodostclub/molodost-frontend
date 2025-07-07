import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container, Description, FlexContainer, PageHeading, SectionHeading } from '@uikit';

import * as styles from './baikal.css';
import { indent } from '@/styles';
import cn from 'classnames';
import { HousesSplit } from '@/utils';
import { Housing } from '../WhereWeLive/Housing/Housing';
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
						<img src={src} alt={`Фото ${i + 1}`} className={styles.slideImage} />
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

export const BaikalPage: FC<Props> = ({ inHouse, individual }) => {
	const filteredIndividual = individual.filter((house) => house.attributes.isBaikal);
	// Фильтруем дома (inHouse), оставляя только те, где isBaikal === true
	const filteredInHouse = inHouse.filter((house) => house.attributes.isBaikal);
	return (
		<Container className={indent.mt_6}>
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
				<Image fill alt="Расположение" src="/images/baikal/map.jpg" className={styles.image} />
			</div>
			<div id="roomsOnBaikal" className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>размещение</SectionHeading>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>в&nbsp;гэрах</p>
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
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>ДОМ приемов</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>Здесь мы&nbsp;едим, пьем, отдыхаем и&nbsp;смотрим кино. Все основные продукты нам поставляют местные фермеры. Еда подается в&nbsp;формате общего стола.</Description>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<img src="/images/baikal/grid-top.jpg" alt="" className={cn(styles.fullWidthPhoto, indent.mb_4, indent.tablet_mb_0)} />
					<div className={cn(styles.gridContainer, indent.tablet_mt_4, indent.tablet_mb_4)}>
						<div className={styles.column}>
							<img src="/images/baikal/grid-top-left.jpg" alt="" className={styles.photo} />
							<img src="/images/baikal/grid-bottom-left.jpg" alt="" className={cn(styles.photo, styles.mobileHidden)} />
						</div>
						<div className={styles.column}>
							<img src="/images/baikal/grid-top-right.jpg" alt="" className={styles.photo} />
							<img src="/images/baikal/grid-bottom-right.jpg" alt="" className={styles.photo} />
						</div>
					</div>
					<img src="/images/baikal/grid-bottom.jpg" alt="" className={cn(styles.fullWidthPhoto, indent.mt_4, indent.tablet_mt_0)} />
				</div>
			</div>

			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>БАННЫЙ КОМПЛЕКС &laquo;БЛАГОДАТЪ&raquo;</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>
					Мы&nbsp;долго искали методику, как строить и&nbsp;как парить. И&nbsp;были поражены, когда поняли, что настоящее сибирское парение&nbsp;&mdash; медленное и&nbsp;не&nbsp;жаркое, а&nbsp;лучшие камни для сохранения тепла&nbsp;&mdash; нефритовые.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_6)}>
					Настоящее сибирское парение неспешное, и&nbsp;мы&nbsp;долго учили наших банщиков, чтобы человек находился в&nbsp;парилке 20-30&nbsp;минут. Температуры не&nbsp;сверхвысокие, выдерживаются достаточно легко и&nbsp;по-настоящему прогревают тело.
				</Description>
				<div>
					<Description className={cn(indent.tablet_mt_5, indent.mt_6, styles.attention)}>
						АРЕНДА БАНИ <span className={styles.attentionRed}>ОТ&nbsp;30&nbsp;000&nbsp;₽</span>
					</Description>
					<p className={cn(indent.mt_2, styles.foodItemDescription)}>до 5 человек</p>
				</div>
				<div className={cn(styles.galleryBlock, indent.tablet_mt_10, indent.mt_6)}>
					<div className={styles.row}>
						<img src="/images/baikal/sauna1.jpg" alt="" className={styles.spaPhoto} />
						<img src="/images/baikal/sauna2.jpg" alt="" className={styles.spaPhoto} />
					</div>
					<div className={styles.row}>
						<img src="/images/baikal/sauna3.jpg" alt="" className={styles.spaPhoto} />
						<img src="/images/baikal/sauna4.jpg" alt="" className={styles.spaPhoto} />
						<img src="/images/baikal/sauna5.jpg" alt="" className={styles.spaPhoto} />
					</div>
				</div>
			</div>

			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Дом звука</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>Уютное пространство вместимостью до&nbsp;25&nbsp;человек, идеально подходит для проведения медитаций, духовных практик, йога-ретритов и&nbsp;совместных встреч. Расположен на&nbsp;берегу Байкала, с&nbsp;потрясающим видом на&nbsp;озеро, что создает особую атмосферу спокойствия и&nbsp;гармонии.</Description>
				<div className={cn(styles.imageWrapperGrid, indent.tablet_mt_10, indent.mt_6)}>
					<Image fill alt="монгольская юрта" src="/images/baikal/houseSound-2.jpg" className={styles.image} />
					<Image fill alt="монгольская юрта" src="/images/baikal/houseSound-1.jpg" className={styles.image} />
				</div>
			</div>

			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>ПЛЯЖНЫЙ КЛУБ</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>У&nbsp;нас есть свой пляж и&nbsp;очень много песка.</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_6)}>Здесь мы&nbsp;купаемся, загораем, наслаждаемся закатными видами Байкала и&nbsp;согреваемся вечерами у&nbsp;костра.</Description>
				<div className={cn(styles.gridContainer, indent.tablet_mt_10, indent.mt_6)}>
					<div className={styles.column}>
						<img src="/images/baikal/beach1.jpg" alt="" className={styles.photo} />
						<img src="/images/baikal/beach2.jpg" alt="" className={styles.photo} />
						<img src="/images/baikal/beach3.jpg" alt="" className={styles.photo} />
					</div>
					<div className={styles.column}>
						<img src="/images/baikal/beach4.jpg" alt="" className={styles.photo} />
						<img src="/images/baikal/beach5.jpg" alt="" className={styles.photo} />
					</div>
				</div>
			</div>

			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_6)}>
				<div className={cn(styles.border, indent.mb_8)}>&nbsp;</div>
				<SectionHeading>
					Инвестор проекта <span className={styles.attentionRed}>ГОК &laquo;Озерный&raquo;</span>. Реализацией проекта занимается Творческий кооператив «Молодость».
				</SectionHeading>
				<br />
				<br />
				<SectionHeading>
					ЧТОБЫ СТАТЬ ЧЛЕНОМ ТУРКЛУБА «МОЛОДОСТЬ», СВЯЗЫВАЙТЕСЬ С НАМИ ПО ТЕЛЕФОНУ{' '}
					<a className={cn(styles.attentionRed)} href="https://wa.me/+79647002112" target="_blank">
						+7&nbsp;(964)&nbsp;700-21-12
					</a>
				</SectionHeading>
				<div className={cn(styles.border, indent.tablet_mt_8, indent.mt_6)}>&nbsp;</div>
			</div>
		</Container>
	);
};
