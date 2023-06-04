import { futura } from 'app/fonts';

import './global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="any"
      />
      </head>
      <body className={futura.className}>{children}</body>
    </html>
  )
}
