// import {Container} from 'react-bootstrap'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import HomeScreen from './screens/HomeScreen'

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <Header />
//       <main className='py-3'>
//         <Container>
//           <HomeScreen />
//         </Container>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />  {/* Child routes are rendered here . When we navigate to /product/:id, the ProductScreen component is rendered in the place of outlet. if no nested route is matches. nothing is rendering in place of the outlet */}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;