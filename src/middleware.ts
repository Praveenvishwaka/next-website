import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  DEFAULT_WINGIFY_ACCOUNT_ID,
  WINGIFY_ACCOUNT_ID_HEADER,
} from '@/lib/wingify'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const accountId =
    request.nextUrl.searchParams.get('id')?.trim() || DEFAULT_WINGIFY_ACCOUNT_ID

  requestHeaders.set(WINGIFY_ACCOUNT_ID_HEADER, accountId)

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:html|css|js|map|svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
