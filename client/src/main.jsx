import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ErrorBoundary from "./components/ui/main/error/error-boundary/error-boundary";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <BrowserRouter>
            <ErrorBoundary content={<App />} />
        </BrowserRouter>
    </ChakraProvider>
)
