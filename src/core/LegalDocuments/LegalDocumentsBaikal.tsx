import { FC } from 'react';

import { uikit } from '@styles';

import { Description, SectionHeading } from '@uikit';
import * as styles from './LegalDocuments.css';

export const LegalDocumentsBaikal: FC = () => (
	<>
		<div className={styles.content}>
			<div className={uikit.headingWrapper}>
				<SectionHeading>реквизиты</SectionHeading>
			</div>

			<div className={styles.textContent}>
				<Description>
					<strong>Услуги предоставляет:</strong> <br />
					Общество с&nbsp;ограниченной ответственностью &laquo;МОЛОДОСТЬ. БАЙКАЛ.&raquo;
					<br />
					(ООО &laquo;МОЛОДОСТЬ. БАЙКАЛ.&raquo;)
				</Description>
				<br />
				<br />
				<Description>
					ОГРН 1220300000909
					<br />
					ИНН 0300002760
					<br />
					КПП 030001001
					<br />
					БИК 044525823
				</Description>
				<br />
				<br />
				<Description>
					<strong>Юридический адрес:</strong> <br />
					671273, Республика Бурятия, район Прибайкальский, село Турка, микрорайон Турка, д.&nbsp;3, офис 21
				</Description>
				<br />
				<br />
				<Description>
					<strong>Генеральный директор:</strong> <br />
					Уманский Алексей Евгеньевич
				</Description>
				<br />
				<br />
				<Description>Тел.:</Description>{' '}
				<a href="tel:+79240142070">
					<Description colorBrand inlineBlock>
						+7 (924) 014 20 70
					</Description>
				</a>
				<span style={{ display: 'inline-block', width: 40 }} />
				<Description>Email:</Description>{' '}
				<a href="mailto:molodostbaikal@yandex.ru">
					<Description colorBrand inlineBlock>
						molodostbaikal@yandex.ru
					</Description>
				</a>
			</div>
		</div>
	</>
);
