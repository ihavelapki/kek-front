// import { useCallback, useState, FormEvent, ChangeEvent } from "react";
// import classes from "./Login.module.css";
// import KekInput from "../../../shared/ui/KekInput";
// import { useAuth } from "../../../shared/auth";

// const Login: React.FC = () => {
//   const { isAuthenticated, login } = useAuth();

//   // Состояние формы
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // Обработка изменений в input
//   const handleInputChange = useCallback(
//     (event: ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = event.target;
//       console.log("handleInputChange:", name, value);
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     },
//     []
//   );

//   // Сабмит формы
//   const postLogin = useCallback(
//     async (event: FormEvent<HTMLButtonElement>) => {
//       event.preventDefault();
//       try {
//         // login может быть асинхронным (через BFF)
//         await login(formData.email, formData.password);
//       } catch (error) {
//         console.error("Error during login:", error);
//       } finally {
//         setFormData({ email: "", password: "" });
//       }
//     },
//     [login, formData]
//   );

//   return (
//     <div>
//       {isAuthenticated ? (
//         <div className="title">You are logged in ✅</div>
//       ) : (
//         <form className={classes.loginform}>
//           <h2 className="title">PLEASE LOG IN:</h2>

//           <KekInput
//             type="text"
//             name="email"
//             placeholder="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />

//           <KekInput
//             type="password"
//             name="password"
//             placeholder="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />

//           <button
//             className={classes.btn}
//             type="submit"
//             onClick={postLogin}
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;
