import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const useNextSeoProps = () => {
  const { asPath } = useRouter()
  if (asPath !== '/') {
    return {
      titleTemplate: 'Begin Token'
    }
  }
}

const config: DocsThemeConfig = {
  logo: (
    <>
    <span style={{
        display: 'inline-block',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        overflow: 'hidden'
      }}>
        <img src="/begintoken.ico" alt="" style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }} />
      </span>
    </>
  ),
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    return (
      <>
      <link rel="icon" href="/favicon.svg" type='image/svg+xml' />
      <link rel="robots" href="/robots.txt" />
      <link rel="sitemap" type='application/xml' href="/sitemap.xml" />
      {/* <!-- HTML Meta Tags --> */}
        <title>Begin Token: Learn Crypto for Free!</title>
        <meta name="description" content="Empowering the crypto community with free and accessible education. Let's $BEGIN !"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://learn.begintoken.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Begin Token: Learn Crypto for Free!"/>
        <meta property="og:description" content="Empowering the crypto community with free and accessible education. Let's $BEGIN !"/>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/6f91d5a3-1727-439f-9928-6ad5c6808064.png?token=bbACaMH_w_ZchI41Iv-efleHEUK89lW7AYj61GLkdts&height=675&width=1200&expires=33249176483"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="learn.begintoken.com"/>
        <meta property="twitter:url" content="https://learn.begintoken.com"/>
        <meta name="twitter:title" content="Begin Token: Learn Crypto for Free!"/>
        <meta name="twitter:description" content="Empowering the crypto community with free and accessible education. Let's $BEGIN !"/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/6f91d5a3-1727-439f-9928-6ad5c6808064.png?token=bbACaMH_w_ZchI41Iv-efleHEUK89lW7AYj61GLkdts&height=675&width=1200&expires=33249176483"/>

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </>
    )

  },
  project: {
    link: 'https://github.com/begintoken/learn',
  },
  docsRepositoryBase: 'https://github.com/begintoken/learn',
  footer: {
    text: '© Begin Token Project 2024',
  },
  useNextSeoProps,
  search: {
    placeholder: 'Search the Knowledge Hub'
  },
  sidebar: {
    toggleButton: true
  },
  primaryHue: 116,
}

export default config
