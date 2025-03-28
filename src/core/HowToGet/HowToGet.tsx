import { FC, useState } from 'react';

import { uikit } from '@styles';

import { Description, SectionHeading } from '@uikit';
import * as styles from './HowToGet.css';
import { CardInfo, ContactsBox } from '@/shared/components';
import { Modal } from '@/shared/components/Modal';
import { ContactForm } from '../ContactForm';
import { HousesSplit, formatPriceWithSign } from '@/utils';

type Props = HousesSplit;

export const HowToGet: FC<Props> = ({ inHouse, individual }) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  // options for select
  const getOptions = () => {
    return [...inHouse, ...individual]
      .sort((a, b) => a.attributes.basePrice - b.attributes.basePrice)
      .map((item) => {
        const {
          attributes: { title, basePrice },
        } = item;
        const val = `${title.trim()}.\n От ${formatPriceWithSign(basePrice)} / ночь`;

        return {
          value: val,
          label: val,
        };
      });
  };

  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ContactForm options={getOptions()} />
      </Modal>
      <div className={styles.content}>
        <div style={{ marginBottom: 60, maxWidth: 300 }}>
          <p className={styles.accentText} style={{ marginBottom: 30 }}>
            Чтобы забронировать проживание, свяжитесь с&nbsp;нами по&nbsp;номеру
          </p>

          <div className={styles.contacts}>
            <ContactsBox type="small" />
          </div>

          {/* <button onClick={openModal} className={styles.ctaBtn}>
            Вступить в клуб
          </button> */}
          <a href="https://wa.me/79647002112?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BA%D1%83" className={styles.ctaBtn}>
            Вступить в клуб
          </a>
        </div>
        {/* <div className={uikit.headingWrapper}>
          <SectionHeading>Как к нам попасть</SectionHeading>
        </div>

        <div className={styles.textContent}>
          <Description>
            Мы&nbsp;работаем в&nbsp;формате &laquo;для своих&raquo; и&nbsp;принимаем
            бронирование только у&nbsp;тех, кто является членом нашего сообщества, которое
            формируется по&nbsp;принципу взаимных рекомендаций.
            <br />
            <br />
            Если вы&nbsp;узнали о&nbsp;нас не&nbsp;от&nbsp;друзей &mdash; давайте
            созвонимся и&nbsp;обсудим, подойдет&nbsp;ли Вам наш формат приключений.
            Мы&nbsp;хотим, чтобы все сюрпризы в&nbsp;Молодости были только приятными.
            <br />
            <br />
            Наши сотрудники&nbsp;&mdash; это не&nbsp;роботы, надрессированные
            на&nbsp;конкретную сервисную модель, и&nbsp;наш приоритет&nbsp;&mdash; это
            не&nbsp;выученность и&nbsp;вышколенность, а&nbsp;искреннее гостеприимство.
            <br />
            <br />
            У&nbsp;нас очень культурная турбаза с&nbsp;классификацией &laquo;без
            звезд&raquo;, а&nbsp;наши звезды &mdash; это наши гости и&nbsp;наши
            сотрудники.
          </Description>
        </div>

        <div className={styles.textContent}>
          <div className={styles.separator}></div>
          <Description colorBrand>
            Если вы&nbsp;хотите особого подхода&nbsp;&mdash; покупайте пакет Black Khan.
            Всего за&nbsp;23&nbsp;456&nbsp;₽ у вас будет персональный батлер
            и&nbsp;гид-следопыт с&nbsp;самого момента бронирования и&nbsp;на время всего
            путешествия.
          </Description>
          <div className={styles.separator}></div>
        </div>

        <CardInfo src="/images/kak-popast/card-1.jpg">
          <SectionHeading size="M" color="brand" bold>
            Живой сезон
          </SectionHeading>
          <SectionHeading size="S" bold>
            ● с&nbsp;10&nbsp;по&nbsp;20&nbsp;февраля
          </SectionHeading>
          <SectionHeading size="S" bold>
            ● с&nbsp;11&nbsp;мая по&nbsp;9&nbsp;июня
          </SectionHeading>
          <SectionHeading size="S" bold>
            ● с&nbsp;1&nbsp;октября по&nbsp;4&nbsp;ноября
          </SectionHeading>
          <br />
          <Description sizeSmallOnDesktop>
            &mdash;&nbsp;Минимальный срок размещения 2&nbsp;дня.
          </Description>
        </CardInfo>

        <CardInfo src="/images/kak-popast/card-2.jpg">
          <SectionHeading size="M" color="brand" bold>
            наши каникулы
          </SectionHeading>
          <br />
          <Description sizeSmallOnDesktop>
            Команде Молодости вашей тоже нужно иногда отдыхать :)
          </Description>
          <br />
          <SectionHeading size="S" bold>
            ● 11&nbsp;января&nbsp;&mdash; 9&nbsp;февраля
          </SectionHeading>
          <SectionHeading size="S" bold>
            ● 11&nbsp;марта&nbsp;&mdash; 24&nbsp;апреля
          </SectionHeading>
          <SectionHeading size="S" bold>
            ● 5&nbsp;ноября&nbsp;&mdash; 24&nbsp;декабря
          </SectionHeading>
          <br />
          <Description sizeSmallOnDesktop>
            &mdash;&nbsp;В&nbsp;эти даты база работает только для групповых заездов
            по&nbsp;предварительному бронированию.
            <br />
            <br />
            &mdash;&nbsp;Также в&nbsp;эти дни мы&nbsp;можем сдавать наши дома без
            полноценного обслуживания.
          </Description>
        </CardInfo>

        <CardInfo src="/images/kak-popast/card-3.jpg">
          <SectionHeading size="M" color="brand" bold>
            Сезонные заезды
          </SectionHeading>
          <br />
          <br />
          <SectionHeading size="S" bold>
            &laquo;Унылый Новый Год&raquo;
          </SectionHeading>
          <SectionHeading size="S" color="brand" bold>
            25&nbsp;декабря&nbsp;&mdash; 10&nbsp;января
          </SectionHeading>
          <br />
          <SectionHeading size="S" bold>
            Майская &laquo;искра&raquo;
          </SectionHeading>
          <SectionHeading size="S" color="brand" bold>
            25&nbsp;апреля&nbsp;- 10&nbsp;мая
          </SectionHeading>
          <br />
          <SectionHeading size="S" bold>
            &laquo;Молодость Только Начинается&raquo;
          </SectionHeading>
          <SectionHeading size="S" color="brand" bold>
            1&nbsp;июля&nbsp;&mdash; 1&nbsp;октября
          </SectionHeading>
          <br />
          <Description sizeSmallOnDesktop>
            В&nbsp;этот период включается стоимость сезонного билета взрослый
            6&nbsp;000&nbsp;₽ в&nbsp;день, ребенок 4&nbsp;000&nbsp;₽ в&nbsp;день
          </Description>
          <br />
          <br />
          <SectionHeading size="S" bold>
            Наша сезонная программа:
          </SectionHeading>
          <br />
          <br />
          <Description sizeSmallOnDesktop>
            – Жжем алтайского &laquo;Горячего Человека&raquo;;
            <br />
            <br />
            – Пляшем как чертяки под Dj-сеты в&nbsp;Клубе Сруб;
            <br />
            <br />
            – Устраиваем настоящий степник на&nbsp;Стоянке Черного Хана
            с&nbsp;ландшафтотерапией, концертом группы &laquo;Покров Этно&raquo;
            и&nbsp;нашим вкуснейшим пловом;
            <br />
            <br />
            – Жарим фермерского барана на&nbsp;вертеле и&nbsp;едим его на&nbsp;берегу
            Катуни;
            <br />
            <br />
            – Слушаем настоящее алтайское горловое пение, концерты этно- и&nbsp;бардовской
            песни;
            <br />
            <br />– Проводим практики йоги, поющих чаш и&nbsp;стояния на&nbsp;гвоздях.
          </Description>
        </CardInfo> */}
      </div>
    </>
  );
};
