import { FC } from 'react';

import { telHref, telegramHref, whatsappHref } from '@/utils';
import * as styles from './ContactsBox.css';

import { Icon } from '@/uikit/icons';

type Props = {
  type?: 'small' | 'default';
};

export const ContactsBox: FC<Props> = ({ type = 'default' }) => {
  return (
    <div className={styles.box[type]}>
      <div className={styles.socialIcons}>
        <a href={telegramHref} target="_blank">
          <Icon name="tg" />
        </a>
        <a href={whatsappHref('+79647002112')} target="_blank">
          <Icon name="whatsapp" />
        </a>
      </div>
      <a className={styles.phoneNumber[type]} href={telHref('+79647002112')}>
      +7&nbsp;(964)&nbsp;700&nbsp;21&nbsp;12
      </a>
    </div>
  );
};
