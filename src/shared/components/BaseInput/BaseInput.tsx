import { ChangeEvent, FC, useEffect } from 'react';

import * as styles from './BaseInput.css'

type InputEvent = ChangeEvent<HTMLInputElement>

type Props = {
  value: string | number
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
  regExp?: RegExp
  required?: boolean
  onChange: (e: InputEvent) => void
}
export const BaseInput: FC<Props> = (
  {
    value,
    type = 'text',
    placeholder,
    regExp,
    // TODO: add react-hook-form validation
    required = false,
    onChange,
  }
) => {
  const onChangeHandler = (e: InputEvent) => {
    if (regExp) {
      e.target.value = e.target.value.replace(regExp, '')
      onChange(e)
      return
    }

    onChange(e)
  }

  return (
    <>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        required={required}
        onChange={(e) => onChangeHandler(e)}
      />
    </>
  )
}
