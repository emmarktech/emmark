// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ShopContext } from "../context/ShopContext";


// const Login = () => {
//   const [currentState, setCurrentState] = useState("Login");
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (currentState === "Sign Up") {
//         const response = await axios.post(
//           backendUrl + "/user/create",
//           { name, username, email, password },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//           toast.success("Sign Up Successful");
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         console.log("LOGIN URL:", backendUrl + "/user/login");

//         const response = await axios.post(
//           backendUrl + "/user/login",
//           { username, email, password }
//         );

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//           toast.success("Login Successful");
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       // console.error(error);
//       if (error.response && error.response.data && error.response.data.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error(error.message || "Something went wrong");
//       }
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate("/");
//     }
//   }, [token]);

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>

//       {currentState === "Login" ? null : (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Name"
//           required
//         />
//       )}

//       <input
//         onChange={(e) => setUsername(e.target.value)}
//         value={username}
//         type="text"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Username"
//         required
//       />

//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         type="email"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Email"
//         required
//       />

//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//         required
//       />

//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <p className="cursor-pointer">Forgot Your Password?</p>
//         {currentState === "Login" ? (
//           <p
//             onClick={() => setCurrentState("Sign Up")}
//             className="cursor-pointer"
//           >
//             Create Account
//           </p>
//         ) : (
//           <p
//             onClick={() => setCurrentState("Login")}
//             className="cursor-pointer"
//           >
//             Login Here
//           </p>
//         )}
//       </div>

//       <button className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === "Login" ? "Login" : "Sign Up"}
//       </button>
//     </form>
//   );
// };

// export default Login;
