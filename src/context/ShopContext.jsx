// import { createContext, useState } from "react";
// import { useEffect } from "react";
// import {toast} from 'react-toastify'
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios'

// export const ShopContext = createContext()

// const ShopContextProvider = (props) => {

//     const currency = 'NGN';
//     const delivery_fee = 10000;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL
//     const [cartItems, setCartItems] = useState({})
//     const [products, setProducts] = useState([])
//     const [token, setToken] = useState('')
//     const navigate = useNavigate()


//     const addToCart = async (itemId, color) => {

//         if (!color) {
//             toast.error('Please Select Product Color')
//             return;
//         }
      
//         let cartData = structuredClone(cartItems)

//         if (!token) {
//           toast.error('Please click the profile-Icon to Login')
//           return;
//       }

//         if (cartData[itemId]) {
//             if (cartData[itemId][color]) {
//                 cartData[itemId][color] += 1
//             }
//             else{
//                 cartData[itemId][color] = 1
//             }
//         }
//         else{
//             cartData[itemId] = {}
//             cartData[itemId][color] = 1
//         }
//         setCartItems(cartData)

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/Cart/add', {itemId,color}, {headers:{token}})
//                 toast.success("Product added to cart");
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message)
//             }
//         }

//     }

// //    --------------- get cart count ----------------

//  const getCartCount = () => {
//     let totalCount = 0;
//     for(const items in cartItems){
//         for(const item in cartItems[items]){
//             try {
//                 if (cartItems[items][item] > 0) {
//                     totalCount += cartItems[items][item]
//                 }
//             } catch (error) {
                
//             }
//         }
//     }

//     return totalCount
//  }

// // ------------------------------------------------  Update quantity ------------------------

//   const updateQuantity = async (itemId,color,quantity) =>{
//      let cartData = structuredClone(cartItems)

//      cartData[itemId][color] = quantity

//      setCartItems(cartData)

//      if (token) {
//         try {
//             await axios.post(backendUrl + '/Cart/update', {itemId,color,quantity}, {headers:{token}})
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         }
//      }
//   }

// //   ------------------- getCart Amount ---------------------------------------

//   const getCartAmount =  () => {
//     let totalAmount = 0;
//     for(const items in cartItems){
//         let itemInfo = products.find((product)=> product._id === items);
//         for(const item in cartItems[items]){
//             try {
//                 if (cartItems[items][item] > 0) {
//                     totalAmount += itemInfo.price * cartItems[items][item]
//                 }
//             } catch (error) {
                
//             }
//         }
//     }
//     return totalAmount;
//   }

// //   ------------- get products data --------------------

// const getProductsData = async () => {
//     try {
        
//         const response = await axios.get(`${backendUrl}/Product/list`);

//         if (response.data.success) {
//             setProducts(response.data.products);
//           } else {
//             toast.error(response.data.message);
//           }

       
//     } catch (error) {
//         console.log(error);
        
//         toast.error(error.message);
//     }
// }


// const getUserCart = async (token, setCartItems) => {
//     try {
//       const response = await axios.post(
//         backendUrl + '/Cart/get',
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };
  
//   useEffect(() => {
//     getProductsData(); // Make sure this is defined somewhere
//   }, []);
  
//   useEffect(() => {
//     const localToken = localStorage.getItem('token');
//     if (!token && localToken) {
//       setToken(localToken);
//       getUserCart(localToken, setCartItems); // Pass the setter as an argument
//     }
//   }, [token]);
//     const value = {
//       products, currency, delivery_fee,
//       // search,setSearch,showSearch,setShowSearch,
//       cartItems,addToCart,
//       getCartCount,
//       updateQuantity,
//       getCartAmount,
//       navigate,
//       backendUrl,
//       setToken,token
//     }

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )

// }

// export default ShopContextProvider;