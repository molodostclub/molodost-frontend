import { FC, useState } from 'react';
import Image from 'next/image';
import { Container, Description, FlexContainer, PageHeading, SectionHeading } from '@uikit';

import * as styles from './mars.css';
import { indent } from '@/styles';
import cn from 'classnames';
import { Video } from '@/shared/components/Video';
import { HousesSplit, formatPriceWithSign } from '@/utils';
import { ADDITIONAL_SERVICES } from '../PricesPage/PricesPage.constants';
import { Housing } from '../WhereWeLive/Housing/Housing';

type Props = HousesSplit;

export const Mars: FC<Props> = ({ inHouse, individual }) => {
	const filteredIndividual = individual.filter((house) => house.attributes.isMars);

	// Фильтруем дома (inHouse), оставляя только те, где isMars === false
	const filteredInHouse = inHouse.filter((house) => house.attributes.isMars);

	return (
		<Container className={indent.mt_6}>
			<PageHeading colorBrand>ГОСТЕВОЙ ДОМ &laquo;ПРИЮТ&nbsp;НА&nbsp;МАРСЕ&raquo;</PageHeading>
			<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>Когда задумали построить экосистему на&nbsp;Алтае, то&nbsp;появление гостевого дома на&nbsp;Марсе было главной географической мечтой Алексея Карахана&nbsp;&mdash; основателя и&nbsp;худрука Молодости.</Description>
			<Description className={indent.mt_4}>
				Было сложно, но&nbsp;нам удалось создать в&nbsp;условиях вечной мерзлоты, <span className={styles.attentionRed}>на&nbsp;высоте 1758&nbsp;м</span>, уютный дизайнерский приют с&nbsp;баней для изысканных путешествий.
			</Description>
			<Description className={indent.mt_4}>Здесь есть даже горячий чан, чтобы в&nbsp;разреженном воздухе горной пустыни было откуда любоваться ослепительным звездным небом, и&nbsp;бескрайним простором настоящей тюркской степи.</Description>
			<div className={cn(indent.tablet_mt_10, indent.mt_6, styles.imageWrapper)}>
				<Image fill alt="Равнина" src="/images/house-on-mars-cover-new.jpg" className={styles.image} />
			</div>
			<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_4, indent.mt_4)}>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid-1.jpg" className={styles.image} />
					</div>
				</div>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid-2.jpg" className={styles.image} />
					</div>
				</div>
			</FlexContainer>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_6)}>
				<div className={cn(styles.border)}>&nbsp;</div>
				<Description className={cn(indent.tablet_mt_8, indent.mt_6, styles.accent)}>
					Чтобы попасть в&nbsp;наш приют, надо проехать 450&nbsp;км по&nbsp;Чуйскому тракту, входящему в&nbsp;десятку самых красивых дорог мира по&nbsp;версии National Geographic, в&nbsp;село Тобелер, расположенное в&nbsp;20&nbsp;км от&nbsp;Монгольской границы.
				</Description>
				<div className={cn(styles.border, indent.tablet_mt_8, indent.mt_6)}>&nbsp;</div>
			</div>
			<div className={cn(indent.tablet_mt_16, indent.mt_6, styles.imageWrapper)}>
				<Image fill alt="Равнина" src="/images/mars/views.jpeg" className={styles.image} />
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Наш приют</SectionHeading>
				<div className={cn(indent.tablet_mt_10, indent.mt_4, styles.mapGrid)}>
					<ul className={styles.mapList}>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>1</div>
							<div className={styles.mapListText}>
								<span>Конторский дом</span>
								<span className={styles.mapListDescription}>где мы&nbsp;отдыхаем, едим и&nbsp;смотрим фильмы на&nbsp;большом экране</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>2</div>
							<div className={styles.mapListText}>
								<span>Логово Вавилонского тигра</span>
								<span className={styles.mapListDescription}>большой номер с&nbsp;печкой в&nbsp;отдельном доме</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>3</div>
							<div className={styles.mapListText}>
								<span>Келья</span>
								<span className={styles.mapListDescription}>просторный отдельно стоящий номер с&nbsp;терассой и&nbsp;видом на&nbsp;степь</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>4</div>
							<div className={styles.mapListText}>
								<span>Спальни</span>
								<span className={styles.mapListDescription}>мотель на&nbsp;7&nbsp;гостевых спален</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>5</div>
							<div className={styles.mapListText}>
								<span>Баня</span>
								<span className={styles.mapListDescription}>небольшая кедровая баня</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>6</div>
							<div className={styles.mapListText}>
								<span>Чан</span>
								<span className={styles.mapListDescription}>с&nbsp;видом на&nbsp;бескрайние просторы</span>
							</div>
						</li>
						<li className={styles.mapListItem}>
							<div className={styles.mapListNumber}>7</div>
							<div className={styles.mapListText}>
								<span>Пространство самобытного искусства</span>
								<span className={styles.mapListDescription}>с&nbsp;работами Гриши Дубинова &mdash;&nbsp;художника граффитиста</span>
							</div>
						</li>
					</ul>

					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/map.png" className={cn(styles.image, styles.imageContain)} />
					</div>
				</div>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>КОНТОРСКИЙ ДОМ</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>Общее пространство под названием &laquo;Конторский дом&raquo;, где мы&nbsp;отдыхаем, едим и&nbsp;смотрим фильмы на&nbsp;большом экране.</Description>
				<div className={cn(indent.tablet_mt_10, indent.mt_6, styles.imageWrapper)}>
					<Image fill alt="Равнина" src="/images/mars/kont-dom.jpeg" className={styles.image} />
				</div>
				<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_4, indent.mt_4)}>
					<div className={cn(indent.tablet_mt_10, styles.foodGrid)}>
						<Video videoSrc="/video/food.mov" poster="/images/mars/video-poster.png"></Video>
						<div className={styles.foodColumn}>
							<Description>Наш бренд-шеф Алексей Федин и&nbsp;его команда разработали степное, но&nbsp;привычное для городского жителя, меню из&nbsp;сезонных овощей, фруктов, зелени и&nbsp;мясных блюд, в&nbsp;том числе из&nbsp;наших барашков из&nbsp;Кош-Агача.</Description>
							<div className={cn(styles.foodPrices, indent.tablet_mt_10, indent.mt_6)}>
								<div className={styles.foodItem}>
									<div className={styles.foodRow}>
										<p className={styles.foodItemTitle}>ЗАВТРАК</p>
										<p className={styles.foodItemPrice}>
											<span className={styles.attentionRed}>{formatPriceWithSign(ADDITIONAL_SERVICES[0].price)}</span>/чел.
										</p>
									</div>
									<p className={cn(styles.foodItemDescription, indent.tablet_mt_2, indent.mt_1)}>входит в стоимость проживания</p>
								</div>
								<div className={cn(styles.foodItem, indent.mt_4)}>
									<div className={styles.foodRow}>
										<p className={styles.foodItemTitle}>ОБЕД</p>
										<p className={styles.foodItemPrice}>
											<span className={styles.attentionRed}>{formatPriceWithSign(ADDITIONAL_SERVICES[1].price)}</span>/чел.
										</p>
									</div>
								</div>
								<div className={cn(styles.foodItem, indent.mt_4)}>
									<div className={styles.foodRow}>
										<p className={styles.foodItemTitle}>УЖИН</p>
										<p className={styles.foodItemPrice}>
											<span className={styles.attentionRed}>{formatPriceWithSign(ADDITIONAL_SERVICES[2].price)}</span>/чел.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</FlexContainer>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<div className={styles.border}>&nbsp;</div>
				<Description className={cn(indent.tablet_mt_8, indent.mt_6, styles.attentionRed, styles.apercu16)}>Мы&nbsp;считаем, что вода и&nbsp;воздух на&nbsp;Алтае должны быть бесплатными, и&nbsp;не&nbsp;хотим торговать ни&nbsp;тем ни&nbsp;другим.</Description>
				<Description className={cn(indent.mt_4, styles.apercu16)}>
					При этом на&nbsp;закупку воды Petroglyph и&nbsp;переработку пластика, который возим в&nbsp;Новосибирск, мы&nbsp;тратим миллионы рублей в&nbsp;год. Поэтому посчитали справедливым включать в&nbsp;ваш счёт водяной сбор 350&nbsp;рублей. Все деньги, которые мы&nbsp;получим за&nbsp;эту
					услугу, пойдут на&nbsp;реализацию образовательных и&nbsp;экологических проектов на&nbsp;Алтае.
				</Description>
				<div className={cn(styles.border, indent.tablet_mt_8, indent.mt_6)}>&nbsp;</div>
			</div>
			<div className={cn(indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Баня</SectionHeading>
				<Description className={cn(indent.tablet_mt_8, indent.mt_6)}>И&nbsp;конечно, какой высокогорный Приют без бани?</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>Наша&nbsp;&mdash; выглядит как бочка, ее&nbsp;хватит, чтобы согреться после путешествия в&nbsp;степь, а&nbsp;потом повариться в&nbsp;чане с&nbsp;видом на&nbsp;Южно-Чуйский хребет под невероятно звездным небом.</Description>
				<FlexContainer gap={30} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<div className={styles.halfWidthInTablet}>
						<div className={styles.imageWrapper}>
							<Image fill alt="Баня" src="/images/mars/bana1.jpeg" className={styles.image} />
						</div>
						<div className={cn(styles.foodRowGap, indent.mt_4)}>
							<p className={styles.foodItemTitle}>Баня</p>
							<p className={styles.foodItemPrice}>
								<span className={styles.attentionRed}>{formatPriceWithSign(15_000)}</span>/час.
							</p>
						</div>
					</div>
					<div className={styles.halfWidthInTablet}>
						<div className={styles.imageWrapper}>
							<Image fill alt="Чан" src="/images/mars/chan.jpeg" className={styles.image} />
						</div>
						<div className={cn(styles.foodRowGap, indent.mt_4)}>
							<p className={styles.foodItemTitle}>Чан</p>
							<p className={cn(styles.foodItemDescription)}>входит в стоимость бани</p>
						</div>
					</div>
				</FlexContainer>
			</div>
			<div id="roomsOnMars" className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Где живем?</SectionHeading>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>
					Приют на Марсе включает в себя <span className={styles.attention}>9 спален</span>.
				</Description>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>размещение в&nbsp;номерах</p>
				</div>
				<div className={styles.housingBlock}>
					{filteredIndividual.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
				<div className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<p className={styles.flatsTitle}>размещение в отдельно стоящих домах</p>
				</div>
				<div className={styles.housingBlock}>
					{filteredInHouse.map((house) => (
						<Housing house={house} key={house.id} />
					))}
				</div>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>
					АВТОРСКИЙ ТУР <br />
					&laquo;НА&nbsp;МАРС РАНЬШЕ МАСКА&raquo;
				</SectionHeading>
				<div className={cn(indent.tablet_mt_10, indent.mt_6, styles.imageWrapper)}>
					<Image fill alt="Марс" src="/images/mars/sphere.jpeg" className={styles.image} />
				</div>
				<Description className={cn(indent.tablet_mt_10, indent.mt_6)}>
					Если вы&nbsp;ищете уникальные приключения, мы&nbsp;предлагаем вам принять участие в&nbsp;нашем авторском туре <span className={styles.attention}>МИССИЯ НА&nbsp;МАРС</span>.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>Этот маршрут всегда можно настроить под ваши предпочтения, добавив дополнительные дни и&nbsp;посещение уникальных локаций.</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>
					Поездка по&nbsp;Чуйскому тракту, одной из&nbsp;самых красивых дорог в&nbsp;мире по&nbsp;версии National Geographic. Дорожное путешествие с&nbsp;остановками на&nbsp;уникальных природных и&nbsp;исторических достопримечательностях: Каракольская долина с&nbsp;тюркскими курганами,
					перевалы Семинский и&nbsp;Чике-Таман, гейзерное озеро и&nbsp;горный район Марс.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>
					Проводим 2&nbsp;ночи в&nbsp;приюте Молодости на&nbsp;Марсе рядом с&nbsp;Монгольской границей, исследуем Чуйскую степь, гоняем на&nbsp;джипах архаров, ездим встречать рассветы на&nbsp;одинокую гору Джалгыз-Тобе.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4, styles.attentionRed, styles.attention)}>ПУТЕШЕСТВИЕ ЗАНИМАЕТ ОТ&nbsp;3-Х ДНЕЙ И&nbsp;2-Х НОЧЕЙ.</Description>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Билет на&nbsp;Марс</SectionHeading>
				<div className={cn(styles.bilet, indent.tablet_mt_6, indent.mt_4)}>
					<div className={cn(styles.biletPrice)}>
						<span className={cn(styles.attentionRed, styles.attention)}>{formatPriceWithSign(122_000)}</span>
						<span>за машину</span>
					</div>
					<p className={cn(styles.biletPriceDescription, indent.mt_3)}>до&nbsp;3&nbsp;пассажиров, в&nbsp;стоимость входит трансфер, сопровождение следопытом и&nbsp;бензин.</p>
				</div>
				<Description className={cn(indent.tablet_mt_6, indent.mt_4)}>Точная цена билета рассчитывается индивидуально и&nbsp;может значительно увеличиваться в&nbsp;зависимости от&nbsp;количества участников поездки и&nbsp;конкретных пожеланий.</Description>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_6)}>
				<div className={cn(styles.border, indent.mb_8)}>&nbsp;</div>
				<SectionHeading>
					Чтобы купить &laquo;Билет на&nbsp;Марс&raquo;, пишите на&nbsp;единый номер турклуба &laquo;Молодость&raquo;{' '}
					<a className={cn(styles.attentionRed)} href="https://wa.me/+79647002112" target="_blank">
						+7&nbsp;(964)&nbsp;700-21-12
					</a>
				</SectionHeading>
				<div className={cn(styles.border, indent.tablet_mt_8, indent.mt_6)}>&nbsp;</div>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>КАК К НАМ ПОПАСТЬ САМОСТОЯТЕЛЬНО?</SectionHeading>
				<FlexContainer gap={30} flexDirection="columnReverse" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_10, indent.mt_6)}>
					<div className={cn(styles.imageWrapper)}>
						<Image fill alt="Марс" src="/images/mars/auto.jpeg" className={styles.image} />
					</div>
					<div className={cn(styles.foodItem)}>
						<Description>Наши двери всегда открыты для гостей и&nbsp;путешественников, независимо от&nbsp;того, отправляются они в&nbsp;путь в&nbsp;одиночку, с&nbsp;семьей, с&nbsp;друзьями или в&nbsp;составе группы.</Description>
						<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>
							<a className={cn(styles.attentionRed)} href="/kak-my-puteshevstvuem#scrollto=avtoprokat" target="_blank">
								АРЕНДОВАТЬ АВТОМОБИЛЬ
							</a>{' '}
							и&nbsp;добраться до&nbsp;нашего Приюта самостоятельно.
						</Description>
					</div>
				</FlexContainer>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_6)}>
				<Description>
					Отправляйтесь по&nbsp;самой живописной дороге России по&nbsp;версии National Geographic&nbsp;&mdash; Чуйскому тракту. Этот путь простирается на&nbsp;тысячу километров, начиная с&nbsp;Новосибирской области и&nbsp;заканчивая перевалом Дурбэт-Даба на&nbsp;границе с&nbsp;Монголией.
					Проехав через величественные перевалы, вы&nbsp;сможете ощутить дух археологических памятников, возраст которых превышает несколько тысяч лет. Вам откроются великолепие небесно-голубых озер и&nbsp;горы, покрытые вечными льдами.
				</Description>
				<Description className={cn(indent.tablet_mt_5, indent.mt_4)}>
					Поездка от&nbsp;Турбазы Молодость до&nbsp;нашего Приюта на&nbsp;Марсе займет около 7&nbsp;часов на&nbsp;автомобиле, но&nbsp;также есть возможность выбрать премиальный и&nbsp;более быстрый вариант&nbsp;&mdash; полет на&nbsp;вертолете, который займет всего 1&nbsp;час.
				</Description>
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_6, styles.imageWrapper)}>
				<Image fill alt="Равнина" src="/images/house-on-mars/image-1-new.jpg" className={styles.image} />
			</div>
			<div className={cn(styles.blockContainer, indent.tablet_mt_16, indent.mt_14)}>
				<SectionHeading>Аренда приюта</SectionHeading>
				<div className={cn(styles.bilet, indent.tablet_mt_6, indent.mt_4)}>
					<div className={cn(styles.biletPrice)}>
						<span className={cn(styles.attentionRed, styles.attention)}>{formatPriceWithSign(500_000)}</span>
						<span className={styles.biletPriceDescription}>1 сутки</span>
					</div>
					<p className={cn(styles.foodItemDescription, indent.tablet_mt_3, indent.mt_2)}>до 18 человек</p>
					<p className={cn(styles.biletPriceDescription, indent.tablet_mt_4, indent.mt_2)}>с&nbsp;завтраком, обедом и&nbsp;ужином, кофейней, б/а напитками, водяным сбором, а&nbsp;также посещением бани и&nbsp;чана.</p>
				</div>
			</div>
			<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_10, indent.mt_6)}>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid1.jpeg" className={styles.image} />
					</div>
				</div>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid2.jpeg" className={styles.image} />
					</div>
				</div>
			</FlexContainer>
			<FlexContainer gap={20} flexDirection="column" desktopFlexDirection="row" desktopJustifyContent="between" desktopGap={20} className={cn(indent.tablet_mt_4, indent.mt_4)}>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid3.jpeg" className={styles.image} />
					</div>
				</div>
				<div className={styles.halfWidthInTablet}>
					<div className={styles.imageWrapper}>
						<Image fill alt="Равнина" src="/images/mars/grid4.jpeg" className={styles.image} />
					</div>
				</div>
			</FlexContainer>
		</Container>
	);
};
