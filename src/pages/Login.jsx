import { login } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <section className="w-full px-6 lg:pl-[320px] min-h-screen flex flex-col py-12 bg-[#f9f7f5]">
      <div className="bg-white mx-auto w-full max-w-md p-8 flex flex-col gap-6 rounded-xl shadow-md">
        <h1 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-stone-500 text-sm md:text-base">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 border-b border-stone-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-stone-500 text-sm md:text-base">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 border-b border-stone-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#d6482b] text-white font-semibold py-3 rounded-lg hover:bg-[#b8381e] transition-all duration-300 w-full"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

// import { login } from "@/store/slices/userSlice";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated } = useSelector((state) => state.user);

//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, isAuthenticated, loading]);

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] sm:h-[450px]">
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Login
//           </h1>
//           <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <button
//               className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
//               type="submit"
//             >
//               {loading ? "Logging In..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;