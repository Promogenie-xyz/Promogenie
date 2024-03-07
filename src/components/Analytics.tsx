// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

if (typeof window !== 'undefined') {
  posthog.init(process.env.POSTHOG_KEY ?? "", {
    api_host: process.env.POSTHOG_HOST,
  })
}
export function CSPostHogProvider({children}:Props) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}