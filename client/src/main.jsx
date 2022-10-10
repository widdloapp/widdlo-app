import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {LocaleProvider} from "@douyinfe/semi-ui";
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LocaleProvider locale={en_US}>
          <App />
      </LocaleProvider>
  </React.StrictMode>
)
