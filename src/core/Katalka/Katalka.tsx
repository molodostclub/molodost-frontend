import { FC } from 'react';

import * as styles from './Katalka.css';
import cn from 'classnames';

export const Katalka: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<h1 className={styles.textRed96}>Каталка с&nbsp;&laquo;Молодостью&raquo; в&nbsp;Манжероке</h1>
				<br />
				<br />
				<p className={styles.textRed55}>«ТЁПЛЫЙ ПРИЁМ В&nbsp;ХОЛОДНОМ МЕСТЕ»</p>
				<p className={styles.textBlack55}>ЛЕТЕТЬ КАК ДО СОЧИ</p>
				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>C&nbsp;13&nbsp;ФЕВРАЛЯ по&nbsp;10&nbsp;марта 2026&nbsp;ГОДА</p>
					{/* <p className={styles.textRed36}>ЛУЧШАЯ КАТАЛКА НА АЛТАЕ</p> */}
				</div>

				<div className={styles.katalkaColumnsWide}>
					<div className={styles.katalkaColumn}>
						<img alt="Дом в Манжероке" src="/images/katalka/ski.png" className={styles.katalkaImg} />
					</div>
					<div className={styles.katalkaColumn}>
						<div className={styles.cardRotated}>
							<p>
								Лавина денег Сбера
								<br />
								сошла с&nbsp;гор
								<br />
								в&nbsp;Манжероке,
								<br />
								и&nbsp;теперь лучшая каталка
								<br />
								в&nbsp;стране появилась всего
								<br />
								в&nbsp;15 минутах от&nbsp;&laquo;Молодости&raquo;
							</p>
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className={styles.katalkaColumns}>
					<div className={styles.katalkaColumn}>
						<p className={styles.textBlack25Lines}>
							МЫ ПОМОЖЕМ ВАМ ЗАБРОНИРОВАТЬ
							<br />
							ГОРНОЛЫЖНОЕ СНАРЯЖЕНИЕ У НАШИХ
							<br />
							ПАРТНЕРОВ И ЗАРАНЕЕ ОФОРМИТЬ SKI PASS.
							<br />
							<span className={styles.accentText}>А ВОТ КАТАТЬСЯ ВЫ БУДЕТЕ САМИ!)</span>
						</p>
						<img alt="Дом в Манжероке" src="/images/katalka/snowboarding.jpg" className={styles.katalkaImgSmall} />
					</div>
					<div className={styles.katalkaColumn}>
						<p className={styles.textBlack34}>
							<span className={styles.textBlack40}>МОЛОДОСТЬ ВКЛЮЧАЕТ ВСЁ:</span>
							<br />
							ЖАРИМ, ПАРИМ, КОРМИМ, ВОЗИМ!
						</p>
						<ul className={styles.katalkaList}>
							<li className={styles.katalkaListItem}>Проживание в «ЗАМЕЧАТЕЛЬНОЙ СПАЛЬНЕ»;</li>
							<li className={styles.katalkaListItem}>Еда весь день и всю ночь в ГАСТРОТРАКТИРЕ «ДОВОЛЬНЫЙ ДРАКОН»;</li>
							<li className={styles.katalkaListItem}>Трансфер из аэропорта Горно-Алтайска и обратно;</li>
							<li className={styles.katalkaListItem}>Ежедневный шаттл до горнолыжки и обратно;</li>
							<li className={styles.katalkaListItem}>Культурная программа на базе.</li>
						</ul>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className={styles.paragraphCard}>
					<p className={styles.textBlack36}>
						<span className={styles.katalkaPriceRedHighlight}>СТОИМОСТЬ</span>
						<br />
						<span className={styles.accentText}>28&nbsp;000&nbsp;₽*</span> В СУТКИ НА&nbsp;ОДНОГО
						<br />
						<span className={styles.accentText}>40&nbsp;000&nbsp;₽*</span> В СУТКИ ЗА&nbsp;ДВОИХ
						<br />
						5-12&nbsp;ЛЕТ <span className={styles.accentText}>+6&nbsp;000&nbsp;₽</span> В СУТКИ
						<br />
					</p>
					<div className={styles.textLine}>ПЯТАЯ&nbsp;НОЧЬ В&nbsp;ПОДАРОК!</div>
				</div>
				<br />
				<br />
				<br />
				<div className={styles.paragraph}>
					<p className={styles.textRed24Centered}>Стоимость указана с&nbsp;учетом проживания в&nbsp;замечательной спальне. Если вы&nbsp;хотите жить в&nbsp;доме, напишите нам, и&nbsp;мы&nbsp;посчитаем сумму доплаты за&nbsp;размещение</p>
				</div>
				<p className={styles.textBlack40Medium}>ПО ВСЕМ ВОПРОСАМ:</p>
				<a href="tel:+79647002112" className={styles.textRed40}>
					+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
				</a>
			</div>
		</>
	);
};
