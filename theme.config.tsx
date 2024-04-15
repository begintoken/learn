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
