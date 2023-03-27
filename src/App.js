// // import logo from './logo.svg';
// import Home from './Component/home';

// // import Registration from './Component/signup';
// import Signin from './Component/signin';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './App.css';
// import Payment from './Component/Payment';
// import Signup from './Component/signup';
// import AddProduct from './Component/Product/AddProduct';
// import Dashboard from './Component/Dasboard';
// import ProductList from './Component/Product/ProductList';
// import Users from './Component/Users/UserList';
// import EditProduct from './Component/Product/EditProduct';
// import ViewProduct from './Component/Product/ViewProduct';
// import Navbar from './Component/Navbar';
// // import { initialState, reducer } from "./reducer/UseReducer";


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>

//       <Route path='/' element={<Home />}></Route>
//       <Route path='/registration' element={<Signup />} ></Route>
//       <Route path='/login' element={<Signin />} ></Route>
//       <Route path='/payment' element={<Payment/>} ></Route>
//       <Route path='/dashboard' element={<Dashboard/>}></Route>
//       <Route path='/addProduct' element={<AddProduct/>} ></Route>
//       <Route path='/editProduct' element={<EditProduct />} ></Route>

//       <Route path='/productList' element={<ProductList/>} ></Route>
//       <Route path='/viewproduct' element={<ViewProduct/>} ></Route>
//       <Route path='/userslist' element={<Users></Users>} ></Route>
//       <Route path='/navbar' element={<Navbar/>} ></Route>
      
//       </Routes>
//       </BrowserRouter>-
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////////
// import logo from './logo.svg';
// import Home from './Component/home';

// // import Registration from './Component/signup';
// import Signin from './Component/Signin';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './App.css';
// import Payment from './Component/Payment';
// import Signup from './Component/Signup';
// import AddProduct from './Component/Product/AddProduct';
// import Dashboard from './Component/Dasboard';
// import ProductList from './Component/Product/ProductList';
// import Users from './Component/Users/UserList';
// import EditProduct from './Component/Product/EditProduct';
// import ViewProduct from './Component/Product/ViewProduct';
// import Navbar from './Component/Navbar';
// import { createContext, useReducer } from 'react';
// import { initialState, reducer } from './Component/reducer/UseReducer';
// // import { initialState, reducer } from "./reducer/UseReducer";



  
//     export const UserContext= createContext();
//     const Routing =() =>{
//       return (
//         <BrowserRouter>
//         <Routes>
  
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/registration' element={<Signup />} ></Route>
//         <Route path='/login' element={<Signin />} ></Route>
//         <Route path='/payment' element={<Payment/>} ></Route>
//         <Route path='/dashboard' element={<Dashboard/>}></Route>
//         <Route path='/addProduct' element={<AddProduct/>} ></Route>
//         <Route path='/editProduct' element={<EditProduct />} ></Route>
  
//         <Route path='/productList' element={<ProductList/>} ></Route>
//         <Route path='/viewproduct' element={<ViewProduct/>} ></Route>
//         <Route path='/userslist' element={<Users></Users>} ></Route>
//         <Route path='/navbar' element={<Navbar/>} ></Route>
        
//         </Routes>
//         </BrowserRouter>
//       )
//     }
//     const App= () =>{
//       const [state,dispatch]=useReducer(reducer,initialState)
//   return (
    
//     <div>
//       <UserContext.Provider>
//        <Routing/>
//       </UserContext.Provider>

//     </div>
//   );
// }

// export default App;


 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import AddingProduct from './Component/Product/AddingProduct';
import ProductList from './Component/Product/ProductList';
// import AddProduct from './Component/Product/AddProduct';
// import Adproduct from './Component/Product/AddingProduct';
 function App(){
 return (

    
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Navbar />}></Route>
  <Route path='/productList' element={<ProductList/>} ></Route>
  <Route path='/addingproduct' element={<AddingProduct/>} ></Route>
  </Routes>
  </BrowserRouter>
    

        

 )
 }
 export default App

