import { FC } from 'react';

import * as styles from './BaseCheckbox.css'
import { Checkbox } from './types';

type Props = {
  name: string
  item: Checkbox
  required?: boolean
  onChange: () => void
}

export const BaseCheckbox: FC<Props> = (
  {
    name,
    item,
    required = false,
    onChange,
  }
) => {
  return (
    <>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          name={name}
          checked={item.checked}
          required={required}
          onChange={onChange}
        />
        <span className={styles.checkboxText}>{item.label}{' '}{item.linkText}</span>
      </label>
    </>
  )
}
