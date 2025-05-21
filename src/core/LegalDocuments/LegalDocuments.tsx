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
					КАРТОЧКА ОРГАНИЗАЦИИ: <br />
					Общество с ограниченной ответственностью «Молодость» (ООО «Молодость»)
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
				</Description>
				<br />
				<br />
				<Description>
					Юридический и фактический адрес: <br />
					649115, Республика Алтай, Майминский район, с. Соузга, тер. Молодость, зд. 1
				</Description>
				<br />
				<br />
				<Description>
					Почтовый адрес: <br />
					649100, Республика Алтай, Майминский район, с. Майма, ул. Ленина, 4 а/я 23
				</Description>
				<br />
				<br />
				<br />
				<Description colorBrand>Альфа Банк</Description>
				<br />
				<Description>
					р/с 40702810323620000248
					<br />
					к/с 30101810600000000774
					<br />
					БИК 045004774
				</Description>
				<br />
				<Description>В&nbsp;Филиал &laquo;Новосибирский&raquo; АО&nbsp;&laquo;АЛЬФА-БАНК&raquo;</Description>
				<br />
				<br />
				<br />
				{/* <Description colorBrand>ООО "Банк Точка"</Description>
				<br />
				<Description>
					р/с 40702810620000154461
					<br />
					к/с 30101810745374525104
					<br />
					БИК 044525104
				</Description>
				<br />
				<br /> */}
				<Description>
					Генеральный директор: <br />
					Лампарадзе Роман Нугзарович
				</Description>
				<br />
				<br />
				<Description>Тел.:</Description>
				<a href="tel:+79151479777">
					<Description colorBrand inlineBlock>
						+7 (915) 147 97 77
					</Description>
				</a>
				<br />
				<br />
				<Description>Email:</Description>
				<a href="mailto:rl@clubmolodost.ru">
					<Description colorBrand inlineBlock>
						rl@clubmolodost.ru
					</Description>
				</a>
			</div>
		</div>
	</>
);
