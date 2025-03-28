import { FC } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import { subDays, addYears } from 'date-fns' 
import "react-datepicker/dist/react-datepicker.css";
import * as styles from '@/shared/components/BaseInput/BaseInput.css';

registerLocale('ru', ru)
setDefaultLocale('ru')

type Props = {
  selected: Date,
  placeholderText?: string,
  onChange: (date: Date) => void,
}

export const BaseDatepicker: FC<Props> = (
  {
    selected,
    placeholderText = 'Выберите дату',
    onChange,
  }
) => {
  const currentDate = new Date()

  return (
    <>
      <DatePicker
        className={styles.input}
        placeholderText={placeholderText}
        dateFormat="dd.MM.yyyy"
        selected={selected}
        shouldCloseOnSelect={true}
        includeDateIntervals={
          [{start: subDays(currentDate, 1), end: addYears(currentDate, 1)}]
        }
        onChange={onChange}
      />
    </>
  )
}
