import { FC } from 'react';
import Image from 'next/image';
import * as styles from './PriceItem.css';
import cn from 'classnames';
import { Description, FlexContainer, SectionHeading } from '@/uikit';
import { formatPriceWithSign } from '@/utils';
import { indent } from '@/styles';
import { PriceItemProps } from './types';


export const PriceItem: FC<PriceItemProps> = ({
  title,
  price,
  pricePrefix = '',
  priceAfter = '',

  priceForChild = null,
  priceForChildPrefix = '',
  priceForChildAfter = '',
  
  persons = '',
  area = '',
  description = '',
  className,

  additionalTitles = [],
}) => {
  return (
    <div className={className}>
      <FlexContainer justifyContent='between' className={indent.mb_2}>
        <div className={styles.leftCol}>
          <SectionHeading size='S'>{title}</SectionHeading>

          <FlexContainer>
            {persons && (
              <FlexContainer className={cn(styles.personsCountWrapper, indent.mt_1)}>
                <div style={{position: 'relative', width: '14px', height: '14px'}}>
                <Image
                  fill
                  alt="user"
                  src="/icons/user.svg"
                  />
                </div>
                <div className={styles.personsCount}>{persons}</div>
              </FlexContainer>
            )}

            {area && (<div style={{marginLeft: '20px'}} className={cn(styles.area, indent.mt_1)}>{area}</div>)}
          </FlexContainer>

          <div className={cn(styles.description, indent.mt_1)}>{description}</div>
        </div>

        <FlexContainer className={cn(styles.priceContainer)} alignItems='start' flexDirection='column'>

          <FlexContainer alignItems='end'>
            <SectionHeading size='S' color='brand'>
              {
                typeof price === 'number'
                  ? `${pricePrefix} ${formatPriceWithSign(price)}`
                  : typeof price === 'string' 
                    ? price
                    : ''
              }
            </SectionHeading>
            {priceAfter && (<div className={styles.priceAfter}>{priceAfter}</div>)}
          </FlexContainer>

          <FlexContainer alignItems='end'>
            {priceForChild && (
              <SectionHeading size='S' color='brand'>
                {`${priceForChildPrefix} ${formatPriceWithSign(priceForChild)}`}
              </SectionHeading>
            )}
            {priceForChildAfter && (<div className={styles.priceAfter}>{priceForChildAfter}</div>)}
          </FlexContainer>

        </FlexContainer>
      </FlexContainer>

      {additionalTitles.length > 0 && additionalTitles.map(item => (
        <FlexContainer justifyContent='between' className={indent.mb_2} key={item.title}>
          <div>
            <Description>{item.title}</Description>
          </div>

          <FlexContainer className={cn(styles.priceContainer)} alignItems='start' flexDirection='column'>

            <FlexContainer alignItems='end'>
              <SectionHeading size='S' color='brand'>
                {`${formatPriceWithSign(item.price)}`}
              </SectionHeading>
              {item.priceSuffix && (<div className={styles.priceAfter}>{item.priceSuffix}</div>)}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      ))}
    </div>
  )
}
