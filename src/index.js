import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import {store} from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);
