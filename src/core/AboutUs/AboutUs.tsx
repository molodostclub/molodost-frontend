import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cn from 'classnames';
import { uikit } from '@styles';
import { Description, PageHeading } from '@uikit';

import { COMMAND_MEMBERS_LIST } from './AboutUs.constants';
import * as styles from './AboutUs.css';

const COMMAND_ROW_TWO = COMMAND_MEMBERS_LIST.slice(0, 2);
const COMMAND_ROW_THREE = COMMAND_MEMBERS_LIST.slice(2, 5);
const COMMAND_ROW_ONE = COMMAND_MEMBERS_LIST.slice(5);

const ComandMember: FC<{ member: (typeof COMMAND_MEMBERS_LIST)[number] }> = ({ member }) => {
	return (
		<div className={styles.comandMember}>
			<Image src={member.imageSrc} alt={member.name} width={186} height={186} />
			<h3 className={styles.comandMemberName}>{member.name}</h3>
			<p className={styles.comandMemberDescription}>{member.description}</p>
		</div>
	);
};

export const AboutUs: FC = () => {
	return (
		<div className={styles.content}>
			<div className={styles.navButtons}>
				<Link href="/pravila-zhizni" className={styles.navButton} prefetch={false}>
					ПРАВИЛА ЖИЗНИ
				</Link>
				<Link href="/pro-nas-govoryat" className={styles.navButton} prefetch={false}>
					О НАС ГОВОРЯТ
				</Link>
			</div>
			<PageHeading>СЛОВО ХУДРУКУ</PageHeading>

			<div className={uikit.descriptionSpacing.short}>
				<Description>
					В&nbsp;детстве, когда началась Перестройка, кто‑то из&nbsp;взрослых спросил меня, хочу&nbsp;ли я&nbsp;поехать в&nbsp;Диснейленд,&nbsp;&mdash; я&nbsp;ответил, что хочу, чтобы Диснейленд приехал к&nbsp;нам, и&nbsp;возник между Питером и&nbsp;Москвой.
					<br />
					<br />
					Чего я&nbsp;хочу сейчас, когда уже сам объехал 70&nbsp;стран, полюбил размеренность Бутана, разнообразие ландшафтов Новой Зеландии, мишек с&nbsp;Аляски, деревушку Хосе Игнасио в&nbsp;Уругвае, рёберную &laquo;у&nbsp;Джоуи&raquo; в&nbsp;Кентукки, феерию водопада Скоугафосс
					в&nbsp;Исландии, ощущение конца мира на&nbsp;Мысе доброй надежды и&nbsp;на&nbsp;Шпицбергене?
					<br />
					<br />
					Художник Сезан сказал, что хочет &laquo;поразить Париж с&nbsp;помощью моркови и&nbsp;яблок&raquo;.
					<br />
					<br />
					Мне&nbsp;бы хотелось примерно того&nbsp;же: поразить людей из&nbsp;моего круга такой простой мыслью: нам очень повезло со&nbsp;страной, где мы&nbsp;родились, и&nbsp;с&nbsp;эпохой, когда мы&nbsp;можем перемещаться и&nbsp;наслаждаться разнообразием наших городов, традиций
					и&nbsp;ландшафтов. &laquo;Молодость&raquo; только начинается, и&nbsp;сейчас моя мечта&nbsp;&mdash; поделиться тем, что у&nbsp;нас получается, с&nbsp;людьми, объединёнными потребностью делать открытия о&nbsp;себе, о&nbsp;других и&nbsp;об&nbsp;окружающем нас пространстве.
				</Description>
			</div>
			<div className={styles.hudruk}>
				<div className={styles.hudrukImageWrap}>
					<Image alt="«Молодость»" src="/images/about/hudruk.jpg" className={styles.hudrukImage} width={536} height={365} sizes="(max-width: 768px) 100vw, 536px" unoptimized />
				</div>
				<div className={styles.imageDescription}>
					<p className={styles.imageDescriptionTitle}>Алексей Карахан</p>
					<p className={styles.imageDescriptionText}>CEO творческого кооператива «Молодость» и&nbsp;художественный руководитель</p>
				</div>
			</div>
			<div className={styles.comandContainer}>
				<h2 className={styles.comandTitle}>КОМАНДА МОЛОДОСТИ</h2>
				<p className={styles.comandDescription}>
					&laquo;Молодость&raquo; делают талантливые люди&nbsp;&mdash; из&nbsp;Костромы, Братска, Новосибирска, Барнаула, Горно-Алтайска, Хабаровска, Краснодара, Ростова, чувашской глубинки, Республик Хакасия и&nbsp;Марий-Эл, Санкт-Петербурга и&nbsp;Москвы.
					<br />
					Мы&nbsp;действительно любим наш край и&nbsp;стараемся сами узнавать его глубже по&nbsp;мере того, как взрослеет наша &laquo;Молодость&raquo;.
				</p>
				<div className={styles.comandMembers}>
					<div className={styles.comandMembersRowTwo}>
						{COMMAND_ROW_TWO.map((member) => (
							<ComandMember key={member.id} member={member} />
						))}
					</div>
					<div className={styles.comandMembersRowThree}>
						{COMMAND_ROW_THREE.map((member) => (
							<div key={member.id} className={styles.comandMembersRowThreeCell}>
								<ComandMember member={member} />
							</div>
						))}
					</div>
					<div className={styles.comandMembersRowOne}>
						{COMMAND_ROW_ONE.map((member) => (
							<ComandMember key={member.id} member={member} />
						))}
					</div>
				</div>
			</div>
			<h2 className={cn(styles.comandTitle, styles.comandTitleCenter)}>МОЛОДОСТЬ ТОЛЬКО НАЧИНАЕТСЯ!</h2>
			<p className={styles.comandDescriptionBlack}>ТВОРЧЕСКИЙ КООПЕРАТИВ «МОЛОДОСТЬ»</p>
			<div className={styles.cooperativeContainer}>
				<div className={styles.cooperativeLeftColumn}>
					<p className={styles.cooperativeLeftColumnTitle}>Мы&nbsp;создаём туристические и&nbsp;культурные проекты разной степени сложности по&nbsp;всей стране.</p>
					<p className={styles.cooperativeLeftColumnDescription}>Мы&nbsp;начали работать в&nbsp;2021&nbsp;году и&nbsp;уже запустили:</p>
					<ul className={styles.cooperativeLeftColumnList}>
						<li className={styles.cooperativeLeftColumnListItem}>
							<span className={styles.cooperativeLeftColumnListItemBrand}>экосистему на&nbsp;Алтае</span>, которая включает в&nbsp;себя турбазу в&nbsp;Манжероке, недалеко от&nbsp;аэропорта, и&nbsp;ещё пять локаций в&nbsp;более удалённых регионах Алтая, в&nbsp;том числе &laquo;Приют
							на&nbsp;Марсе&raquo; и&nbsp;&laquo;Стоянка Чёрного Хана&raquo; за&nbsp;Ороктойским мостом.
						</li>
						<li className={styles.cooperativeLeftColumnListItem}>
							в&nbsp;2025 году мы&nbsp;запустили пляжный курорт <span className={styles.cooperativeLeftColumnListItemBrand}>&laquo;Молодость&raquo; на&nbsp;Байкале</span> и&nbsp;турклуб международных путешествий&nbsp;и, между прочим, сразу отправились{' '}
							<span className={styles.cooperativeLeftColumnListItemBrand}>в&nbsp;Намибию и&nbsp;Тибет.</span>
						</li>
						<li className={styles.cooperativeLeftColumnListItem}>
							в&nbsp;наших ближайших планах открыть приют <span className={styles.cooperativeLeftColumnListItemBrand}>&laquo;Молодость в&nbsp;начале земли&raquo;</span> на&nbsp;острове Итуруп, входящем в&nbsp;Курильскую гряду и&nbsp;туристический кампус{' '}
							<span className={styles.cooperativeLeftColumnListItemBrand}>ЭКОЦЕХ на&nbsp;южном берегу Байкала</span>, а&nbsp;также <span className={styles.cooperativeLeftColumnListItemBrand}>открытие новых локаций на&nbsp;Алтае</span>
						</li>
					</ul>
				</div>
				<div className={styles.cooperativeRightColumn}>
					<Image src="/images/about/collective.jpg" alt="Молодость" width={400} height={644} sizes="(max-width: 768px) 100vw, 536px" unoptimized className={styles.cooperativeRightColumnImage} />
				</div>
			</div>
			<h2 className={styles.comandTitle}>ЧТО МЫ ДЕЛАЕМ</h2>
			<div className={styles.whatWeDoContainer}>
				<Image src="/images/about/whatWeDoMobile.svg" alt="Направления деятельности творческого кооператива «Молодость»" width={338} height={631} className={styles.whatWeDoImageMobile} sizes="100vw" unoptimized />
				<Image src="/images/about/whatWeDo.svg" alt="Направления деятельности творческого кооператива «Молодость»" width={931} height={504} className={styles.whatWeDoImageDesktop} sizes="(min-width: 768px) 100vw, 100vw" unoptimized />
				<p className={styles.cooperativeLeftColumnListItem}>
					Творческий кооператив «Молодость» осуществляет полный цикл деятельности, включая управление, финансовое моделирование, строительство, найм и обучение персонала по <span className={styles.cooperativeLeftColumnListItemBrand}>собственному стандарту креативного гостеприимства.</span>
				</p>
			</div>
			<div className={styles.serviceModelContainer}>
				<h2 className={styles.comandDescriptionBlack}>ПРИОРИТЕТЫ И&nbsp;ПРЕИМУЩЕСТВА НАШЕЙ СЕРВИСНОЙ МОДЕЛИ</h2>
				<ul className={styles.serviceModelList}>
					<li className={styles.serviceModelListItem}>повышение загрузки низкого сезона;</li>
					<li className={styles.serviceModelListItem}>повышение среднего чека с проданной спальни за счет дополнительных услуг и индивидуального подхода;</li>
					<li className={styles.serviceModelListItem}>поиск и обучение локальных сотрудников по нашей системе креативного гостеприимства;</li>
					<li className={styles.serviceModelListItem}>полный объем обслуживания гостей, привыкших к высокому уровню комфорта с момента прилета и до вылета;</li>
					<li className={styles.serviceModelListItem}>создание вау-эффекта вокруг туристического бренда;</li>
					<li className={styles.serviceModelListItem}>глубинная и точечная работа с клиентской базой.</li>
				</ul>
				<Image src="/images/about/service.jpg" alt="Приоритеты и преимущества нашей сервисной модели" width={931} height={504} className={styles.serviceModelImage} sizes="(min-width: 768px) 100vw, 100vw" unoptimized />
			</div>
			<div className={styles.luxpingContainer}>
				<h2 className={styles.comandTitle}>ЛЮКСПИНГ</h2>
				<p className={styles.cooperativeLeftColumnListItem}>
					Мы&nbsp;<b>придумали</b> и&nbsp;<b>запатентовали</b> новую концепцию размещения&nbsp;&mdash; <b>люкспинг</b>&nbsp;&mdash; это уникальный проект, который позволяет организовать отдых на&nbsp;природе в&nbsp;близком соединении с&nbsp;ней и&nbsp;c&nbsp;привычными городскому жителю
					условиями комфорта.
				</p>
				<p className={styles.cooperativeLeftColumnListItem}>
					Это дома высокого качества и&nbsp;уникальных интерьерных решений, построенные с&nbsp;соблюдением экологических норм, с&nbsp;использованием лёгких строительных конструкций без вырубки деревьев с&nbsp;вписыванием в&nbsp;существующий ландшафт.
				</p>
				<p className={styles.cooperativeLeftColumnListItem}>
					<b>Люкспинг</b> это&nbsp;&mdash; не&nbsp;только функциональное качественное проживание, а&nbsp;ещё и&nbsp;бутиковый сервис, вкусная еда, авторские приключения и&nbsp;путешествия, помогающие гостям погрузиться в&nbsp;культуру и&nbsp;природу региона.
				</p>
				<div className={styles.luxpingImageWrap}>
					<Image src="/images/about/creative.png" alt="Люкспинг" width={540} height={225} className={styles.luxpingImage} sizes="(min-width: 768px) 100vw, 100vw" unoptimized />
				</div>
				<div className={styles.cooperativeContainer}>
					<div className={styles.cooperativeLeftColumn}>
						<p className={styles.cooperativeLeftColumnListItem}>
							Мы&nbsp;три года собирали, переписывали и&nbsp;уточняли{' '}
							<b>
								<span className={styles.cooperativeLeftColumnListItemBrand}>правила жизни</span>
							</b>{' '}
							на&nbsp;нашей базе, чтобы гостям было понятно, чего ждать от&nbsp;нас, чего не&nbsp;ждать и&nbsp;чего мы&nbsp;ждём от&nbsp;них.
							<br />
							<br />
							Эти правила легли в&nbsp;<b>основу нашей сервисной модели</b>, которой мы&nbsp;готовы делиться.
							<br />
							<br />
							<span className={styles.cooperativeLeftColumnListItemBrand}>
								&laquo;Главный принцип нашей работы&nbsp;&mdash; это не&nbsp;выученность и&nbsp;вышколенность, а&nbsp;искреннее гостеприимство, и&nbsp;мы&nbsp;верим, что лучшие сотрудники&nbsp;&mdash; это не&nbsp;роботы, выдрессированные на&nbsp;конкретную сервисную модель&raquo;
							</span>
							.
							<br />
							<br />
							Художественный руководитель творческого кооператива &laquo;Молодость&raquo; Алексей Карахан.
						</p>
					</div>
					<div className={styles.cooperativeRightColumn}>
						<Image src="/images/about/masterskaya.jpg" alt="Молодость" width={400} height={593} sizes="(max-width: 768px) 100vw, 536px" unoptimized className={styles.cooperativeRightColumnImage} />
					</div>
				</div>
				<div className={styles.projectsContainer}>
					<h2 className={styles.comandTitle}>НАШИ ПРОЕКТЫ</h2>
					<div className={styles.projectsList}>
						<div className={styles.project}>
							<Image src="/images/about/altay.png" alt="«Молодость на Алтае»" width={310} height={310} />
							<p className={styles.projectDescription}>
								<b>«Молодость на Алтае»</b> — это туристическая экосистема, которая позволяет побывать в самых интересных и красивых местах региона и сохранить привычный уровень комфорта и уюта.
							</p>
						</div>
						<div className={styles.project}>
							<Image src="/images/about/baikal.png" alt="«Молодость на Байкале»" width={310} height={310} />
							<p className={styles.projectDescription}>
								<b>«Молодость на Байкале»</b> — первый в России полноценный люкспинг на песчаном берегу Байкала в Бурятии откроется в тестовом режиме уже этим летом.
							</p>
						</div>
						<div className={styles.project}>
							<Image src="/images/about/ecoceh.png" alt="ЭКО.ЦЕХ на берегу озера Байкал" width={310} height={310} />
							<p className={styles.projectDescription}>
								<b>ЭКО.ЦЕХ на берегу озера Байкал</b> со стороны Иркутска (г. Байкальск). Проекта по развитию туристического кампуса, включает в себя модернизацию существующих и постройку новых объектов, а также продвижение, продажи, формирование команды и операционное управление
								другими процессами, связанными с полным циклом оказания гостиничных услуг.
							</p>
						</div>
						<div className={styles.project}>
							<Image src="/images/about/nachalo.png" alt="ПРИЮТ «МОЛОДОСТЬ» В НАЧАЛЕ ЗЕМЛИ" width={310} height={310} />
							<p className={styles.projectDescription}>
								<b>ПРИЮТ «МОЛОДОСТЬ» В НАЧАЛЕ ЗЕМЛИ</b> — первый пляжный курорт в России на берегу Тихого океана.
							</p>
						</div>
					</div>
					<div className={styles.projectRow}>
						<Image src="/images/about/turclub.png" alt="Турклуб «Молодость»" width={260} height={260} />
						<p className={styles.projectDescription}>
							<b>Турклуб «Молодость» — поездки по всей России и даже миру</b>. Мы начинаем с Намибии. Пока не построили здесь свою «Молодость», зато проехали сами и отобрали для вас лучшие легендарные африканские лоджи «Zanier» и «Gondwana», о которых можно только мечтать.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
