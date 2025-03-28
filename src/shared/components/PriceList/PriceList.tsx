import {
  FlexContainer,
} from '@uikit';
import * as styles from './PriceList.css';

import { indent } from '@/styles';
import cn from 'classnames';
import { PriceItem } from '@/shared/components';
import { FC, useEffect, useState } from 'react';
import { PriceItemProps } from '../PriceItem/types';
import { sortPriceForMobile } from '@/shared/components/PriceItem/sortPriceForMobile';
import { useIsTablet } from '@shared/hooks';

interface PriceItems {
  data: PriceItemProps[]
  direction?: 'column' | 'row' 
}

export const PriceList: FC<PriceItems> = ({ data = [], direction = 'row' }) => {
  const isTablet = useIsTablet();

  const [sortedData, setSortedData] = useState<PriceItemProps[]>(data)

  useEffect(() => {
    if (isTablet) return

    setSortedData(sortPriceForMobile(data))
    
  }, [isTablet, data])

  return (
    <>
      <FlexContainer
        flexDirection={direction}
        desktopJustifyContent='between'
        flexWrap='wrap'
        gap={20}
      >
        {sortedData?.map((item) => (
          <PriceItem key={item.title} {...item} className={styles.priceItem} />
        ))}
      </FlexContainer>
    </>
  );
};
