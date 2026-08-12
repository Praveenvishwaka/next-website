import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { WingifyScript } from 'wingify-smartcode-nextjs'
import Layout from '@/components/Layout'
import {
  DEFAULT_WINGIFY_ACCOUNT_ID,
  WINGIFY_ACCOUNT_ID_HEADER,
} from '@/lib/wingify'
import './globals.css'

export const metadata: Metadata = {
  title: 'React Test Playground',
  description: 'React test playground for automation and manual QA',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const headersList = await headers()
  const accountId =
    headersList.get(WINGIFY_ACCOUNT_ID_HEADER) || DEFAULT_WINGIFY_ACCOUNT_ID

  return (
    <html lang="en">
      <head>
        <WingifyScript accountId={accountId} type="ASYNC" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
