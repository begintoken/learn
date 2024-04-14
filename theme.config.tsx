import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
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
  // logo: <span>Begin Token</span>,
  logo: (
    <>
      <span>
        Begin Token 
      </span>
    </>
  ),
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
