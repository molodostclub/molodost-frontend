import { FC } from 'react';
import Image from 'next/image';
import * as styles from './AboutUs.css';

export const AboutUs: FC = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.heading}>Слово будущего</h1>
			<p className={styles.description}>
				Когда-то давно мы мечтали создать место, где горожане смогут
				по-настоящему отдохнуть и почувствовать себя частью природы.
				«Молодость» — это результат нашей мечты.
			</p>
			<div className={styles.imageWrapper}>
				<Image fill alt="Основатель" src="/images/about/founder.jpg" className={styles.image} unoptimized />
			</div>

			<h2 className={styles.sectionTitle}>Команда Молодость</h2>
			<p className={styles.description}>
				Наша команда — это люди, которые любят Алтай и делают всё,
				чтобы ваш отдых был незабываемым.
			</p>

			<h2 className={styles.sectionTitle}>Молодость только начинается</h2>
			<p className={styles.description}>
				Каждый год мы растём, развиваемся и создаём новые проекты.
				Молодость — это не возраст, это состояние души.
			</p>

			<h2 className={styles.sectionTitle}>Творческий кооператив «Молодость»</h2>
			<p className={styles.description}>
				Мы объединяем творческих людей со всей России для создания
				уникальных проектов в самых красивых местах.
			</p>

			<h2 className={styles.sectionTitle}>Что мы делаем</h2>
			<p className={styles.description}>
				Создаём пространства для жизни, творчества и отдыха в самых
				красивых местах России — от Алтая до Курил.
			</p>

			<h2 className={styles.sectionTitle}>Приоритеты и преимущества нашей сибирской модели</h2>
			<p className={styles.description}>
				Мы верим в устойчивое развитие, бережное отношение к природе
				и создание подлинного комфорта вдали от цивилизации.
			</p>

			<h2 className={styles.sectionTitle}>Мастерская креативного гостеприимства</h2>
			<p className={styles.description}>
				Наш подход к гостеприимству основан на креативности, внимании к деталям
				и искреннем желании удивлять наших гостей.
			</p>

			<h2 className={styles.sectionTitle}>Наши проекты</h2>
			<p className={styles.description}>
				«Молодость» на Алтае, «Молодость» в Манжероке, «Молодость» на Байкале,
				«Молодость» на Курилах — и это только начало.
			</p>
		</div>
	);
};
