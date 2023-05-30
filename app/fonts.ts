import localFont from 'next/font/local';

export const lordish = localFont({
  src: './fonts/Lordish-Regular.woff',
  weight: 'normal',
});

export const futura = localFont({
  src: [
    {
      path: './fonts/FuturaLT-Book.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-BookOblique.woff',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './fonts/FuturaLT-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-LightOblique.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/FuturaLT.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-Oblique.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/FuturaLT-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-BoldOblique.woff',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './fonts/FuturaLT-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-ExtraBoldOblique.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/FuturaLT-Heavy.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/FuturaLT-HeavyOblique.woff',
      weight: '900',
      style: 'normal',
    }
  ],
});