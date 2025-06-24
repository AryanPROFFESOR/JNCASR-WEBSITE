import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Optional: Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global <head> tag for SEO */}
      <Head>
        <title>Our Research Lab</title>
        <meta name="description" content="Innovating the future through science and research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar on all pages */}
      <Navbar />

      {/* Page content with animated transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  )
}
