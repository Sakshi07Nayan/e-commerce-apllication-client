import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from '@react-oauth/google';
// import ChatBot from 'react-simple-chatbot';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <GoogleOAuthProvider
          clientId="661453363088-trmdqbb0osd987aeb504onjgalhlqaph.apps.googleusercontent.com"
        >
          <CookiesProvider defaultSetOptions={{ path: "/" }}>
            <App />
          </CookiesProvider>
        </GoogleOAuthProvider>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
