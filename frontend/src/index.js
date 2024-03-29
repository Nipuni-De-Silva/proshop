// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider
// } from 'react-router-dom'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/styles/index.css';
// import './assets/styles/bootstrap.custom.css'
// import App from './App';
// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './store.js';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route index={true} path="/" element={<HomeScreen />} />
//       <Route path='/product/:id' element={<ProductScreen />} />
//     </Route>
//   )
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomeScreen />} />
            <Route path="product/:id" element={<ProductScreen />} />
          </Route>
        </Routes>
      </Router>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();