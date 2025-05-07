import { FC } from 'react';

import * as styles from './Adults.css';
import cn from 'classnames';

export const Adults: FC = () => {
	return (
		<>
			<div className={styles.content}>
				<h1 className={styles.textRed55}>&laquo;МОЛОДОСТЬ ПО-ВЗРОСЛОМУ&raquo; ЗАЕЗД ДЛЯ ТЕХ, КТО ПОСТАРШЕ <span className={styles.textBlack40}>60+</span></h1>
				
				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>2-12 октября</p>
					<br />
					<p className={styles.textBlack36}>
						КОГДА <span className={styles.textRed40}>ДЕРЕВЬЯ АЛТАЯ СТАНУТ ЗОЛОТИСТЫМИ А&nbsp;ВОДА</span> В&nbsp;КАТУНИ <span className={styles.textRed40}>БИРЮЗОВОЙ</span>!
					</p>
					<br />
					<p className={styles.textBlack36}>
						КОГДА <span className={styles.textRed40}>НЕ&nbsp;БУДЕТ ЖАРЫ</span>, ТОЛПЫ И&nbsp;ПРОБОК НА&nbsp;ДОРОГАХ!
					</p>
					<br />
					<p className={styles.textBlack36}>
						МЫ&nbsp;ЖДЕМ НА&nbsp;БАЗЕ ТЕХ, КТО ПОСТАРШЕ И&nbsp;МОЖЕТ СЕБЕ ПОЗВОЛИТЬ РОСКОШЬ <span className={styles.textRed40}>ОТДЫХАТЬ НЕ&nbsp;ТОЛЬКО ЛЕТОМ</span>.
					</p>
				</div>

				<div className={styles.paragraph}>
					<p className={styles.textBlack36}>
						<span className={styles.textRed40}>ЧТО БУДЕТ?</span>
					</p>
					<ul className={cn(styles.katalkaList, styles.katalkaListNone)}>
						<li className={styles.katalkaListItem}>
							<span className={styles.textRed}>Интересная</span> и&nbsp;в&nbsp;меру активная <span className={styles.textRed}>программа</span>, рассчитанная на&nbsp;10&nbsp;дней.
						</li>
						<li className={styles.katalkaListItem}>
							Поедем на&nbsp;<span className={styles.textRed}>родину Шукшина</span> и&nbsp;на&nbsp;наш <span className={styles.textRed}>легендарный Степник</span> с&nbsp;горловым пением.
						</li>
						<li className={styles.katalkaListItem}>
							Прогуляемся по&nbsp;<span className={styles.textRed}>парку Рериха</span> и&nbsp;музею в&nbsp;Горно-Алтайске.
						</li>
						<li className={styles.katalkaListItem}>
							<span className={styles.textRed}>Отправимся</span> на&nbsp;родину наших солнцеголовых шаманов&nbsp;&mdash; <span className={styles.textRed}>в&nbsp;Каракольскую Долину</span>.
						</li>
						<li className={styles.katalkaListItem}>
							По&nbsp;вечерам будем <span className={styles.textRed}>смотреть кино, слушать бардовские песни</span> у&nbsp;костра, и&nbsp;обязательно устроим <span className={styles.textRed}>концерт национальных песен</span> с&nbsp;Динарам.
						</li>
						<li className={styles.katalkaListItem}>
							А&nbsp;утром будем <span className={styles.textRed}>заниматься цигуном, рыбачить</span>, смотреть на&nbsp;течение Катуни и&nbsp;дышать алтайским воздухом.
						</li>
					</ul>
				</div>

				<div className={styles.katalkaColumns}>
					<div className={styles.katalkaColumn}>
						<img alt="Отдых в молодости" src="/images/adults/three.jpg" className={styles.katalkaImg} />
					</div>
					<div className={styles.katalkaColumn}>
						<img alt="Турбаза Молодость на Алтае" src="/images/adults/two.jpg" className={styles.katalkaImg} />
					</div>
				</div>
				<div className={styles.paragraph}>
					<p className={styles.textBlack40}>МОЛОДОСТЬ ВКЛЮЧАЕТ ВСЁ:</p>
					<br />
					<p className={styles.textRed36Medium}>ЖАРИМ, КОРМИМ И ВОЗИМ!</p>
				</div>
				<div className={cn(styles.katalkaColumns, styles.katalkaColumnsReverse)}>
					<div className={styles.katalkaColumn}>
						<p className={styles.textBlack36}>
							<span className={styles.katalkaPriceRedHighlight}>ЗА 10 ДНЕЙ</span>
							<br />
							ЦЕНА НА&nbsp;ОДНОГО: 230&nbsp;000&nbsp;₽
							<br />
							ВТОРОЙ ВЗРОСЛЫЙ В СПАЛЬНЕ: 120&nbsp;000&nbsp;₽
						</p>
					</div>
					<div className={styles.katalkaColumn}>
						<p className={cn(styles.textBlack40Medium, styles.textCenter)}>&laquo;ПЛАН НА&nbsp;ЗАВТРА ВЫ&nbsp;УЗНАЕТЕ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЗАВТРА&raquo;</p>
						<img src="/images/katalka/author.png" alt="А.Карахан, худрук на базе Молодость на Алтае" className={styles.authorImg} />
					</div>
				</div>

				<div className={styles.paragraph}>
					<ul className={styles.katalkaList}>
						<li className={styles.katalkaListItem}>Размещение в номере Хорошая спальня;</li>
						<li className={styles.katalkaListItem}>Трёхразовое питание в формате общего стола в нашем гастротрактире «Довольный дракон»;</li>
						<li className={styles.katalkaListItem}>Трансфер из/в аэропорта Горно-Алтайска;</li>
						<li className={styles.katalkaListItem}>Кофе, какао и алтайские чаи;</li>
						<li className={styles.katalkaListItem}>Групповые поездки;</li>
						<li className={styles.katalkaListItem}>Кофе, какао и&nbsp;алтайский чай;</li>
						<li className={styles.katalkaListItem}>Культурная программа;</li>
						<li className={styles.katalkaListItem}>Налоги.</li>
					</ul>
				</div>

				<div className={styles.paragraph}>
					{/* <p className={styles.textBlack40Medium}>
						А&nbsp;ЕЩЕ С&nbsp;1&nbsp;МАЯ ВЫ&nbsp;МОЖЕТЕ ПОПАСТЬ В&nbsp;НАШ
						<br />
						<a href="/mars" className={cn(styles.textRed40, styles.textUnderline)}>
							ГОСТЕВОЙ ДОМ &laquo;ПРИЮТ НА&nbsp;МАРСЕ&raquo;
						</a>
					</p> */}
					<br />
					<p className={styles.textBlack40Medium}>ПО ВСЕМ ВОПРОСАМ:</p>
					<a href="tel:+79647002112" className={styles.textRed40}>
						+7&nbsp;964&nbsp;700&nbsp;21&nbsp;12
					</a>
				</div>
			</div>
		</>
	);
};
