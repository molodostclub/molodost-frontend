import { FC } from 'react';

import { uikit } from '@styles';

import { SectionHeading } from '@uikit';
import * as styles from './TalkAboutUs.css';

export const TalkAboutUs: FC = () => (
	<>
		<div className={styles.content}>
			<div className={uikit.headingWrapper}>
				<SectionHeading>Про нас пишут</SectionHeading>
			</div>

			<div className={styles.textContent}>
				<p className={styles.reviewTextSmall}>
					Я хотел создать идеальный «мальдивский» курорт, в котором есть все, чтобы человек не выходил за пределы нашего «острова». В итоге у нас получилась туристическая экосистема полного цикла, у нас есть все, что хотят гости с момента прилета и до момента отлета. Они могут кататься на
					велосипедах, сплавляться на рафтах, ходить в горы на скорость или до ближайшего холма, чтобы посмотреть закат, или ехать по всему Алтаю, чтобы изучить одно из самых красивых мест на Земле.
				</p>
				<p className={styles.reviewAuthor}>
					— так написал{' '}
					<a href="https://www.forbes.ru/forbeslife/490618-tolkienovskoe-sredizem-e-kak-aleksej-karahan-otkryl-turbazu-molodost-na-altae" target="_blank" className={styles.reviewLink}>
						Forbes
					</a>
				</p>
			</div>
		</div>

		<div className={styles.contentLarge}>
			<div className={styles.reviewWrap}>
				{/* left col */}
				<div className={styles.reviewCol}>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>«Молодость» — это Подмосковье, перенесенное на Алтай, на берег реки Катунь. Добавьте к этому горный воздух, холмы, леса и возможность в оказаться в очень красивых местах в радиусе часа-двух езды на машине.</p>
						<p className={styles.reviewAuthor}>
							— так написал{' '}
							<a href="https://moskvichmag.ru/lyudi/eto-moj-gorod-hudruk-turbazy-molodost-aleksej-karahan/" target="_blank" className={styles.reviewLink}>
								Москвич Mag
							</a>
						</p>
					</div>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>«Молодость» рассчитана на разборчивого горожанина, которому нужен не только свежий воздух и вид из окна, но и Wi-Fi и неограниченный доступ к латте с миндальным молоком</p>
						<p className={styles.reviewAuthor}>
							— так написал{' '}
							<a href="https://www.kommersant.ru/doc/5314895" target="_blank" className={styles.reviewLink}>
								Коммерсантъ
							</a>
						</p>
					</div>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>ТОСКА ПО «МОЛОДОСТИ» ОДОЛЕЛА СРАЗУ ПО ВОЗВРАЩЕНИИ. НА РЕДКОСТЬ ЧУДЕСНОЕ, ТОНКО И УМНО УСТРОЕННОЕ ПРОСТРАНСТВО СВАЯЛОСЬ! НЕ СОМНЕВАЮСЬ, ЧТО ОНО БУДЕТ РАСПУХАТЬ И УЛЫБАТЬСЯ...</p>
						<p className={styles.reviewAuthor}>
							Татьяна Черниговская
							<br />
							(мыслитель)
						</p>
					</div>
				</div>
				{/* right col */}
				<div className={styles.reviewCol}>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>«Молодость» это как проход через шкаф в страну Нарнию, которую мне напоминает волшебный Алтай</p>
						<p className={styles.reviewAuthor}>
							Константин Крюков <br />
							(звезда)
						</p>
					</div>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>Ребята! Вы лучшие! Атмосфера, воздух, люди - все на высшем уровне! Спасибо!</p>
						<p className={styles.reviewAuthor}>
							Милана Королева <br /> 1.06.2022
						</p>
					</div>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>Спасибо за это райское место! Отдохнули и телом, и душой. У вас очень красиво, вкусно, интересно и душевно. PS кровать 1000000/10 картошка 1000000/10</p>
						<p className={styles.reviewAuthor}>Катя и Майя</p>
					</div>
					<div className={styles.textContent}>
						<p className={styles.reviewTextMedium}>Огромная благодарность всей команде “Молодость”. Потрясающая атмосфера, которая создает ощущение дома, тепла, любви. пусть Молодость будет вечной. Пусть у всех исполнятся мечты в этом необыкновенном месте силы - Алтай.</p>
						<p className={styles.reviewAuthor}>С любовью, Ольга Билык</p>
					</div>
				</div>
			</div>
		</div>

		<div className={styles.content}>
			<div className={styles.textContent}>
				<p className={styles.reviewTextSmall}>
					В «Конторском доме», где располагаются ресепшен, ресторан и кафе, повсюду виднеются надписи: «План на завтра вы узнаете завтра». Это девиз «Молодости» и ее философия, основанная на том, чтобы гости наслаждались моментом здесь и сейчас. Не беспокоились ни о чем. Команда турбазы
					внимательно следит за эмоциональным состоянием гостей и принимает решения о том, чем их занять, в режиме реального времени. Алексей Карахан, называющий себя худруком «Молодости», неустанно генерирует идеи. Разброс очень широкий — от уютного гастрономического ужина на берегу реки
					с задушевными разговорами до коллективного выезда в родную деревню Шукшина и мастер-класса по посадке картофеля с песнями и плясками. И никакого жесткого планирования: план на завтра вы узнаете завтра.
				</p>
				<p className={styles.reviewAuthor}>
					— так написал{' '}
					<a href="https://style.rbc.ru/impressions/628e2c499a794749df23de4c" target="_blank" className={styles.reviewLink}>
						РБК Стиль
					</a>
				</p>
			</div>
		</div>

		<div className={styles.content}>
			<div className={styles.textContent}>
				<p className={styles.reviewTextLarge}>«РЕБЯТ, НУ ВЫ ВООБЩЕ ДАЕТЕ»</p>
				<p className={styles.reviewAuthor}>
					Максим Виторган
					<br />
					(товарищ)
				</p>
			</div>
		</div>
	</>
);
