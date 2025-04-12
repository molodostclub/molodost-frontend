import { FC } from 'react';

import * as styles from './May.css';
import cn from 'classnames';

export const May: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<h1 className={styles.textRed55}>МАЙСКИЕ ПРАЗДНИКИ</h1>
				<p className={styles.textBlack40}>С&nbsp;1&nbsp;по&nbsp;10&nbsp;мая&nbsp;2025&nbsp;года</p>
				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>
						Майские не за горами, <span className={styles.textRed50Bold}>а в компании гор!</span>
					</p>
					<br />
					<p className={styles.textBlack36}>
						Когда зацветёт легендарный маральник, а Катунь радостно забурлит, спускаясь с тающих ледников Белухи, «Молодость» начнет свой официальный <span className={styles.textRed40}>5-й сезон</span> на Алтае!
					</p>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>
						<span className={styles.textRed40}>Майские праздники в «Молодости»</span>
						<br />
						Будем париться в&nbsp;бане* и&nbsp;смотреть на&nbsp;красоту алтайских гор, есть легендарных баранов от&nbsp;Шефа Федина и&nbsp;слушать горловое пение на&nbsp;берегу!
					</p>
				</div>

				<div className={styles.katalkaColumns}>
					<div className={styles.katalkaColumn}>
						<img alt="Отдых в молодости" src="/images/may/one.jpg" className={styles.katalkaImg} />
					</div>
					<div className={styles.katalkaColumn}>
						<img alt="Дом на Алтае" src="/images/may/two.jpg" className={styles.katalkaImg} />
					</div>
				</div>
				<div className={styles.paragraph}>
					<p className={styles.katalkaListItem}>
						На&nbsp;майские у&nbsp;нас пройдет специальный детский заезд совместно с&nbsp;нашим партнером&nbsp;&mdash; бюро семейных впечатлений и&nbsp;образования &laquo;Искра&raquo;. У&nbsp;них отличная развивающая и&nbsp;развлекательная программа для детей с&nbsp;семейными
						мастер-классами. Подробности условия участия при бронировании.
					</p>
				</div>
				<div className={cn(styles.katalkaColumns, styles.katalkaColumnsReverse)}>
					<div className={styles.katalkaColumn}>
						<p className={styles.textBlack36}>
							<span className={styles.katalkaPriceRedHighlight}>СПАЛЬНЯ НА СУТКИ</span>
							<br />
							ЦЕНА НА&nbsp;ОДНОГО: 34&nbsp;567&nbsp;₽
							<br />
							ВТОРОЙ ВЗРОСЛЫЙ: 12&nbsp;345&nbsp;₽
							<br />
							РЕБЕНОК 5-14&nbsp;ЛЕТ: 6&nbsp;000&nbsp;₽
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
						<li className={styles.katalkaListItem}>Проживание в&nbsp;&laquo;хорошей спальне&raquo;;</li>
						<li className={styles.katalkaListItem}>Трансфер из/в аэропорт Горно-Алтайска;</li>
						<li className={styles.katalkaListItem}>Трехразовое питание в&nbsp;формате общего стола в&nbsp;нашем гастротрактире &laquo;Довольный дракон&raquo;;</li>
						<li className={styles.katalkaListItem}>Ночной дожор и&nbsp;мороженое;</li>
						<li className={styles.katalkaListItem}>Водяной сбор;</li>
						<li className={styles.katalkaListItem}>Кофе, какао и&nbsp;алтайский чай;</li>
						<li className={styles.katalkaListItem}>Культурная программа для души и&nbsp;тела, а&nbsp;также хорошая компания и&nbsp;уютные посиделки у&nbsp;костра на&nbsp;берегу Катуни;</li>
						<li className={styles.katalkaListItem}>Налоги и&nbsp;эквайринг;</li>
					</ul>
					<br />
					<br />
					<p className={styles.katalkaListItem}>* услуги бани не входят в стоимость пакета</p>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack40Medium}>
						А&nbsp;ЕЩЕ С&nbsp;1&nbsp;МАЯ ВЫ&nbsp;МОЖЕТЕ ПОПАСТЬ В&nbsp;НАШ
						<br />
						<a href='/mars' className={cn(styles.textRed40, styles.textUnderline)}>ГОСТЕВОЙ ДОМ &laquo;ПРИЮТ НА&nbsp;МАРСЕ&raquo;</a>
					</p>
					<br />
					<p className={styles.textBlack40Medium}>НОМЕР ТУРКЛУБА &laquo;МОЛОДОСТЬ&raquo;:</p>
					<a href="tel:+79647002112" className={styles.textRed40}>
						+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
					</a>
				</div>
			</div>
		</>
	);
};
