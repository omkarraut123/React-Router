import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
import React from 'react';
const LazyAbout = React.lazy(() => import('./components/About'))
function App() {
  return (
    <>
        <NavBar />
        <Routes>
          
           <Route path='/' element={ <Home /> } />
           <Route path='/about' element={ 
           <React.Suspense fallback='Loading...'> 
              <LazyAbout />
           </React.Suspense>} />
           <Route path='/order-summary' element={ <OrderSummary/> } />
           <Route path='/products' element = { <Products /> } >
             <Route index element={<FeatureProducts />}/>
             <Route path='featured' element = { <FeatureProducts /> } />
             <Route path='new' element={<NewProducts />} />
           </Route>  
           <Route path='/users' element={<Users />}/>
           <Route path='/users/:userName' element={<UserDetails />}/>         
           <Route path='*' element={ <NoMatch /> } />
        </Routes>
    </>
  );
}

export default App;
