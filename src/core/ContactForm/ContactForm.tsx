import { BaseInput } from '@/shared/components/BaseInput';
import { Label } from '@/shared/components/Label';
import { indent } from '@/styles';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { BaseDatepicker } from '@/shared/components/BaseDatepicker';
import * as styles from './ContactForm.css'
import { FieldSelect } from '@/shared/components/FieldSelect';
import { OnChangeValue } from 'react-select';
import cn from 'classnames'
import { BaseCheckbox } from '@/shared/components/BaseCheckbox';
import { Checkbox } from '@/shared/components/BaseCheckbox/types';
import { FormState, backendApi } from '@/utils';
import Link from 'next/link';
import { Description, SectionHeading } from '@/uikit';

type InputEvent = ChangeEvent<HTMLInputElement>

type Option = {
  value: string
  label: string
}
type Props = {
  options: Option[]
}

// TODO: add react-hook-form validation
export const ContactForm: FC<Props> = ({ options }) => {
  const currentDate = new Date()

  const checkboxes: Checkbox[] = [
    {label: 'Дальние поездки по Чуйскому тракту', value: '1', checked: false},
    {label: 'Хайкинг в горы', value: '2', checked: false},
    {label: 'Банный отдых', value: '3', checked: false},
    {label: 'Семейные поездки', value: '4', checked: false},
  ]

  const agreementLink = () => (
    <Link
      target='_blank'
      href='/docs/personal-data-agreement.pdf'
      className={styles.agreementLink}
    >
      обработку моих персональных данных
    </Link>
  )
  const personalAgreementInit: Checkbox[] = [{
    label: 'Я даю согласие на',
    linkText: agreementLink(),
    value: '5',
    checked: false,
  }]

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [source, setSource] = useState<string>('')
  const [date, setDate] = useState<Date>(currentDate)
  const [nights, setNights] = useState<string>('')
  const [apartments, setApartments] = useState<string>('')
  const [relaxTypes, setRelaxTypes] = useState<Checkbox[]>(checkboxes)
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [personalAgreement, setPersonalAgreement] = useState<Checkbox[]>(personalAgreementInit)

  // form state
  const [StateForm, setStateForm] = useState<number>(FormState.Default)

  const onChangeSelect = (newValue: OnChangeValue<Option, boolean>) => {
    setApartments((newValue as Option).value)
  }

  const onChangeCheckbox = (
    value: string,
    checkboxes: Checkbox[],
    callback: (data: any) => void,
  ) => { 
    const copyItem = [...checkboxes]
    const modifiedData = copyItem.map(item => {
      if (value === item.value) {
        item.checked = !item.checked
      }
      return item
    })

    callback(modifiedData)
  }

  const localeDate = (date: Date) => date.toLocaleDateString('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  const checkedTypes = (checkboxes: Checkbox[]) => checkboxes
    .map(item => item.checked ? item.label : null)
    .filter(x => x)
    .join(', ')

  const onSuccess = () => {
    setStateForm(FormState.Success)
  }
  const onError = () => {
    setStateForm(FormState.Error)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formRequestObject = {
      name,
      source,
      date: localeDate(date),
      nights,
      apartments,
      relaxTypes: checkedTypes(relaxTypes),
      phone,
      email,
    }
    
    try {
      const { status } = await backendApi.post('form-requests', formRequestObject)

      if (status === 200) {
        onSuccess()
      }
      
    } catch (e) {
      onError()
      console.error(e)
    }
  }

  return (
    <>
      {
        StateForm === FormState.Default && (
          <>
            <SectionHeading bold color='brand' size='S'>
              Оставьте заявку,
            </SectionHeading>
            <p className={styles.modalDescription}>
              и мы свяжемся с вами в ближайшее время
            </p>
            <form onSubmit={onSubmit}>
              <div className={indent.mt_4}>
                <Label caption='Как вас зовут?'>
                  <BaseInput
                    value={name}
                    required={true}
                    onChange={(e: InputEvent) => setName(e.target.value)}
                  />
                </Label>
              </div>
              <div className={indent.mt_4}>
                <Label caption='Ваша фамилия'>
                  <BaseInput
                    value={surname}
                    required={true}
                    onChange={(e: InputEvent) => setSurname(e.target.value)}
                  />
                </Label>
              </div>
              <div className={indent.mt_4}>
                <Label caption='Кто рассказал о нас?'>
                  <BaseInput
                    value={source}
                    onChange={(e: InputEvent) => setSource(e.target.value)}
                  />
                </Label>
              </div>
              <div className={indent.mt_4}>
                <div className={styles.formRow}>
                  <div className={styles.fromCol}>
                    <div style={{marginBottom: 2}}>
                      <Label caption='Когда?' />
                    </div>
                    <BaseDatepicker
                      selected={date}
                      onChange={(date: Date) => setDate(date)}
                    />
                  </div>
                  <div className={styles.fromCol}>
                    <Label caption='Насколько дней?'>
                      <BaseInput
                        value={nights}
                        type='tel'
                        regExp={/[^\d]/gi}
                        required={true}
                        onChange={(e: InputEvent) => setNights(e.target.value)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <div className={indent.mt_4}>
                <FieldSelect
                  label='Где живём?'
                  placeholder='Выберите дом/номер'
                  options={options}
                  onChange={onChangeSelect}
                />
                <small className={cn(indent.mt_2, styles.note)}>
                  * Стоимость указана  за одноместное размещение
                </small>
              </div>
              <div className={indent.mt_4}>
                <Label caption='Что интересно?' />
              </div>
              {relaxTypes.map((item, i) => (
                  <div
                    key={i}
                    className={indent.mt_4}
                  >
                    <BaseCheckbox
                      name='relaxTypes'
                      item={item}
                      onChange={
                        () => onChangeCheckbox(
                          item.value,
                          relaxTypes,
                          (data) => setRelaxTypes(data)
                        )
                      }
                    />
                  </div>
                ))
              }
              <div className={indent.mt_4}>
                <Label caption='Куда звонить?'>
                  <BaseInput
                    type='tel'
                    placeholder='+7 999 999 99 99'
                    value={phone}
                    regExp={/[^+\s\d]/gi}
                    required={true}
                    onChange={(e: InputEvent) => setPhone(e.target.value)}
                  />
                </Label>
                <small className={cn(indent.mt_2, styles.note)}>
                  У нас индивидуальный подход, поэтому прежде чем бронировать поездку, нам нужно поближе познакомиться
                </small>
              </div>
              <div className={indent.mt_4}>
                <Label caption='Ваш E-mail'>
                  <BaseInput
                    type='email'
                    value={email}
                    regExp={/[^\w\d\@\.-_]/gi}
                    onChange={(e: InputEvent) => setEmail(e.target.value)}
                  />
                </Label>
              </div>

              <div className={indent.mt_4}>
                <BaseCheckbox
                  name='personalAgreement'
                  item={personalAgreement[0]}
                  required={true}
                  onChange={
                    () => onChangeCheckbox(
                      personalAgreement[0].value,
                      personalAgreement,
                      (data) => setPersonalAgreement(data)
                    )
                  }
                />
              </div>

              <button 
                onClick={() => onSubmit}
                className={cn(styles.ctaBtn, indent.mt_4)}
              >
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </>
        )
      }
      {
        StateForm === FormState.Success && (
          <>
            <SectionHeading bold color='brand' size='S'>
              Спасибо!
            </SectionHeading>
            <div className={indent.mt_4}>
              <Description >
                Мы приняли вашу заявку и свяжемся с вами в ближайшее время
              </Description>
            </div>
          </>
        )
      }
      {
        StateForm === FormState.Error && (
          <>
            <SectionHeading bold color='brand' size='S'>
              Упс!
            </SectionHeading>
            <div className={indent.mt_4}>
              <Description>
                Что-то пошло не так, пожалуйста попробуйте ещё раз
              </Description>
            </div>
          </>
        )
      }
    </>
  )
}
