import React from 'react'

import { createRoot } from 'react-dom/client'

import '../src/common/styles/index.scss'

import { App } from './app/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
