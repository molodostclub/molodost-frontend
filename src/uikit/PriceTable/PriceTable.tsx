import { FC, PropsWithChildren } from 'react';

import { priceTable } from './PriceTable.css';

export const PriceTableHeader: FC<PropsWithChildren> = ({ children }) => (
  <div className={priceTable.headerRow}>
    <div className={priceTable.titleCell} aria-hidden />
    <div className={priceTable.options}>
      {children}
    </div>
  </div>
);

export const PriceTableRow: FC<PropsWithChildren<{
  title: string | React.ReactNode,
  /**
   * @default 'titleCell'
   */
  titleCell?: 'titleCell' | 'titleCellLarge',
  note?: React.ReactNode,
  /**
   * @default 'afterRow'
   */
  notePosition?: 'afterRow' | 'underCell'
}>> = ({ title, children, note, notePosition = 'afterRow', titleCell = 'titleCell' }) => {
  const hasNote = !!note;

  return (
    <div className={(hasNote ) ? priceTable.rowWrapperWithNote : priceTable.rowWrapper}>
      <div className={priceTable.row}>
        {!!title &&
          <div className={priceTable[titleCell]}>{title}
            {hasNote && notePosition === 'underCell' && <p className={priceTable.rowNote}>{note}</p>}
          </div>}
        <div className={priceTable.options}>
          {children}
        </div>
      </div>
      {hasNote && notePosition === 'afterRow' && <p className={priceTable.rowNote}>{note}</p>}
    </div>
  );
}

export const PriceTableCell: FC<PropsWithChildren> = ({ children }) => (
  <div className={priceTable.cell}>{children}</div>
);