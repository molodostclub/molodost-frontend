import { Label } from '@/shared/components/Label';
import { FC } from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { vars } from '@/styles';

type Options = OptionsOrGroups<unknown, GroupBase<unknown>> | undefined

type Props = {
  options: Options
  label: string
  placeholder: string
  onChange: (item: any) => void
}

export const FieldSelect: FC<Props> = ({
  options,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <Label caption={label}>
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isSearchable={false}
        styles={{
          control: (_, state) => ({
            display: 'flex',
            border: '1px solid',
            borderColor: state.isFocused ? 'black' : 'rgba(0, 0, 0, 0.25)',
            borderRadius: 10,
            padding: 15,
            color: vars.color.black,
            fontFamily: vars.font.ApercuProRegular,
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            margin: 0,
            padding: 0,
            fontSize: 13,
            height: 0,
            display: 'contents',
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: vars.color.black,
            fontFamily: vars.font.ApercuProRegular,
            fontSize: 13,
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            color: vars.color.black,
            fontFamily: vars.font.ApercuProRegular,
            fontSize: 13,
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontSize: 13,
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            margin: 0,
            padding: 0,
          }),
          indicatorSeparator: () => ({ display: 'none' }),
          dropdownIndicator: () => ({
            padding: 0,
            color: vars.color.brand,
          }),
        }}
      />
    </Label>
  )
}
