import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '長野県の不用品回収なら片付け屋.jp | 即日対応・無料見積もり',
  description: '長野県の不用品回収・遺品整理なら片付け屋.jp。即日対応、無料見積もり、家具・家電・粗大ごみの回収処分。松本市、長野市、上田市など長野県全域対応。',
  keywords: '不用品回収,長野県,松本市,長野市,上田市,遺品整理,粗大ごみ,家具回収,家電回収,即日対応',
  
  // Open Graph
  openGraph: {
    title: '長野県の不用品回収なら片付け屋.jp | 即日対応・無料見積もり',
    description: '長野県の不用品回収・遺品整理なら片付け屋.jp。即日対応、無料見積もり、家具・家電・粗大ごみの回収処分。松本市、長野市、上田市など長野県全域対応。',
    url: 'https://katazukeya.jp/',
    siteName: '片付け屋.jp',
    locale: 'ja_JP',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '長野県の不用品回収なら片付け屋.jp | 即日対応・無料見積もり',
    description: '長野県の不用品回収・遺品整理なら片付け屋.jp。即日対応、無料見積もり、家具・家電・粗大ごみの回収処分。松本市、長野市、上田市など長野県全域対応。',
  },
  
  // Others
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://katazukeya.jp/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: '片付け屋.jp',
              description: '長野県の不用品回収・遺品整理専門店',
              url: 'https://katazukeya.jp/',
              telephone: '080-7383-0972',
              email: 'info@akatsuki.works',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '大字鶴賀緑町1418番地',
                addressLocality: '長野市',
                addressRegion: '長野県',
                postalCode: '380-0834',
                addressCountry: 'JP'
              },
              parentOrganization: {
                '@type': 'Corporation',
                name: '株式会社曉',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '大字鶴賀緑町1418番地',
                  addressLocality: '長野市',
                  addressRegion: '長野県',
                  postalCode: '380-0834',
                  addressCountry: 'JP'
                },
                email: 'info@akatsuki.works'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.2048,
                longitude: 138.2529
              },
              areaServed: [
                { '@type': 'City', name: '長野市' },
                { '@type': 'City', name: '松本市' },
                { '@type': 'City', name: '上田市' },
                { '@type': 'State', name: '長野県' }
              ],
              serviceType: [
                '不用品回収',
                '遺品整理', 
                'オフィス移転'
              ],
              openingHours: 'Mo-Su 00:00-23:59',
              priceRange: '¥15000-¥65000',
              paymentAccepted: ['Cash', 'Credit Card']
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}