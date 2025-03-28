import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const modalOverlay = style([
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '30px 15px',
    zIndex: 10000,
  },
])

export const modalOverlayCenter = style([
  {
    alignItems: 'center',
  },
])

export const modalWrapper = style([
  {
    position: 'relative',
    maxWidth: 330,
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#FFF',
    padding: '30px 15px',
    borderRadius: 30,
  },
])

const btnSize = 30

export const modalCloseBtn = style([
  {
    position: 'absolute',
    top: 15,
    right: 15,
    width: btnSize,
    height: btnSize,
    border: `1px solid ${vars.color.brand}`,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: vars.color.brand,
    fontSize: 20,
    lineHeight: '16px',
    cursor: 'pointer',
  },
])
