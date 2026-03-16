import { FC } from 'react';

import { uikit } from '@styles';

import { Description, SectionHeading } from '@uikit';
import * as styles from './LegalDocuments.css';

export const LegalDocuments: FC = () => (
	<>
		<div className={styles.content}>
			<div className={uikit.headingWrapper}>
				<SectionHeading>реквизиты</SectionHeading>
			</div>

			<div className={styles.textContent}>
				<Description>
					<strong>Услуги предоставляет:</strong> <br />
					Общество с&nbsp;ограниченной ответственностью &laquo;Молодость&raquo;
					<br />
					(ООО &laquo;Молодость&raquo;)
				</Description>
				<br />
				<br />
				<Description>
					ОГРН 1210400000810
					<br />
					ИНН 0400016735
					<br />
					КПП 040001001
					<br />
					БИК 044525823
				</Description>
				<br />
				<br />
				<Description>
					<strong>Юридический и&nbsp;фактический адрес:</strong> <br />
					649115, Республика Алтай, Майминский район, с.&nbsp;Соузга, тер. Молодость, зд.&nbsp;1
				</Description>
				<br />
				<br />
				<Description>
					р/с 40702810600000236505
					<br />
					к/с 30101810200000000823
				</Description>
				<br />
				<Description>Банк ГПБ (АО)</Description>
				<br />
				<br />
				<Description>
					<strong>Генеральный директор:</strong> <br />
					Лампарадзе Роман Нугзарович
				</Description>
				<br />
				<br />
				<Description>Тел.:</Description>{' '}
				<a href="tel:+79151479777">
					<Description colorBrand inlineBlock>
						+7 (915) 147 97 77
					</Description>
				</a>
				<span style={{ display: 'inline-block', width: 40 }} />
				<Description>Email:</Description>{' '}
				<a href="mailto:rl@clubmolodost.ru">
					<Description colorBrand inlineBlock>
						rl@clubmolodost.ru
					</Description>
				</a>
			</div>
		</div>
	</>
);
