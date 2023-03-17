import './globals.css'

export const metadata = {
  title: 'R6s Picker',
  description: 'R6s Random Operator Picker by .jannik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
