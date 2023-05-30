import { futura } from 'app/fonts';

import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={futura.className}>{children}</body>
    </html>
  )
}
