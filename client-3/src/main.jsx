import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";

import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import {LocaleProvider} from "@douyinfe/semi-ui";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <LocaleProvider locale={en_US}>
              <App />
          </LocaleProvider>
      </BrowserRouter>
  </React.StrictMode>
)
