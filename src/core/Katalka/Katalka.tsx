import { FC } from 'react';

import * as styles from './Katalka.css';
import cn from 'classnames';

export const Katalka: FC = () => {
	return (
		<>
			<div className={styles.content}>
				{/* <h1 className={styles.textRed96}>Каталка</h1> */}
				<p className={styles.textRed55}>«ТЁПЛЫЙ ПРИЁМ В&nbsp;ХОЛОДНОМ МЕСТЕ»</p>
				<p className={styles.textBlack40}>С&nbsp;ЯНВАРЯ ПО&nbsp;МАРТ 2025&nbsp;ГОДА</p>
				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>
						ЛАВИНА ДЕНЕГ СБЕРА СОШЛА С&nbsp;ГОР В&nbsp;МАНЖЕРОКЕ, И&nbsp;ТЕПЕРЬ <span className={styles.textRed50Bold}>ЛУЧШАЯ КАТАЛКА В&nbsp;СТРАНЕ</span> ПОЯВИЛАСЬ ВСЕГО В&nbsp;13&nbsp;МИНУТАХ ОТ&nbsp;
						<span className={styles.textBlack40}>&laquo;МОЛОДОСТИ&raquo;</span> И&nbsp;В&nbsp;26&nbsp;МИНУТАХ ОТ&nbsp;АЭРОПОРТА
					</p>
				</div>

				<div className={styles.katalkaColumns}>
					<div className={styles.katalkaColumn}>
						<img alt="Дом в Манжероке" src="/images/katalka/house.jpg" className={styles.katalkaImg} />
					</div>
					<div className={styles.katalkaColumn}>
						<img alt="Сноубордист в Манжероке" src="/images/katalka/snowboarding.jpg" className={styles.katalkaImg} />
					</div>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>
						<span className={styles.textBlack40}>Приезжайте к&nbsp;нам на&nbsp;Алтай</span>
						<br />
						БУДЕМ ЖАРИТЬ, ПАРИТЬ И&nbsp;ВОЗИТЬ ВАС ТУДА-СЮДА. <br />
						<span className={styles.textRed50Bold}>А&nbsp;ВОТ КАТАТЬСЯ ВЫ&nbsp;БУДЕТЕ САМИ!</span>
					</p>
				</div>

				<div className={cn(styles.katalkaColumns, styles.katalkaColumnsReverse)}>
					<div className={styles.katalkaColumn}>
						<p className={styles.textBlack36}>
							<span className={styles.katalkaPriceRedHighlight}>ОДНИ СУТКИ</span>
							<br />
							ЦЕНА НА&nbsp;ОДНОГО: 34&nbsp;567&nbsp;₽
							<br />
							ВТОРОЙ ВЗРОСЛЫЙ: 12&nbsp;345&nbsp;₽
							<br />
							РЕБЕНОК 5-14&nbsp;ЛЕТ: 6&nbsp;000&nbsp;₽
							<br />
							<span className={styles.textRed36Medium}>5&nbsp;НОЧЬ В&nbsp;ПОДАРОК!</span>
						</p>
					</div>
					<div className={styles.katalkaColumn}>
						<p className={cn(styles.textBlack40Medium, styles.textCenter)}>&laquo;ПЛАН НА&nbsp;ЗАВТРА ВЫ&nbsp;УЗНАЕТЕ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЗАВТРА&raquo;</p>
						<img src="/images/katalka/author.png" alt="А.Карахан, худрук на базе Молодость на Алтае" className={styles.authorImg} />
					</div>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>В&nbsp;ЭТУ СУММУ ВХОДИТ ВСЕ, ЧТО НУЖНО, ЧТОБЫ НИ&nbsp;О&nbsp;ЧЕМ НЕ&nbsp;ДУМАТЬ, КРОМЕ ОТДЫХА:</p>
					<ul className={styles.katalkaList}>
						<li className={styles.katalkaListItem}>Проживание в&nbsp;хорошей спальне;</li>
						<li className={styles.katalkaListItem}>Трансфер из/в аэропорт Горно-Алтайска;</li>
						<li className={styles.katalkaListItem}>Ежедневный шаттл до&nbsp;горнолыжки и&nbsp;обратно;</li>
						<li className={styles.katalkaListItem}>Трёхразовое питание в&nbsp;формате общего стола в&nbsp;нашем Гастротрактире &laquo;Довольный дракон&raquo;;</li>
						<li className={styles.katalkaListItem}>Ночной дожор и&nbsp;мороженое;</li>
						<li className={styles.katalkaListItem}>Водяной сбор;</li>
						<li className={styles.katalkaListItem}>Кофе, какао и&nbsp;алтайский чай;</li>
						<li className={styles.katalkaListItem}>Культурная программа в&nbsp;зависимости от&nbsp;сезона;</li>
						<li className={styles.katalkaListItem}>Стоимость включает налоги.</li>
					</ul>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack40Medium}>НОМЕР ТУРКЛУБА &laquo;МОЛОДОСТЬ&raquo;</p>
					<a href="tel:+79647002112" className={styles.textRed40}>
						+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
					</a>
				</div>
			</div>
		</>
	);
};
