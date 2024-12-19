// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { ResetSchema } from "@/schema/ResetSchema";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import axios from "axios";

// const ResetPassword = ({ setIsLogin }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,

//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(ResetSchema), // Connect Zod validation schema
//   });

//   const submitHandler = async (data) => {
//     console.log("Form data:", data); // Debugging
//     try {
//       console.log("Sending request to API...");
//       const response = await axios.post(
//         "https://api.novahome.care/api/jobseeker/resetpassword",
//         {
//           token: "token",
//           password: data.password,
//         }
//       );
//       console.log("API Response:", response);
//       if (response.status === 200) {
//         alert("Password reset successful. You can now log in.");
//         setIsLogin();
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Password reset failed:", error.response || error.message);
//       alert(error.response?.data?.message || "Failed to reset password.");
//     }
//   };

//   return (
//     <Card className="w-[350px] sm:w-[400px] m-auto shadow-lg">
//       <CardHeader>
//         <span
//           className="flex items-center gap-2 cursor-pointer mb-4"
//           onClick={setIsLogin}
//         >
//           <IoArrowBackCircleOutline size={20} />
//           <span onClick={() => navigate("/login")}>Back to login</span>
//         </span>
//         <CardTitle className="text-3xl">Reset your password</CardTitle>
//         <CardDescription className="text-md mb-2">
//           Enter your new password to reset your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form
//           className="flex justify-between space-x-2 flex-wrap gap-4"
//           onSubmit={submitHandler}
//         >
//           <div className="flex flex-col w-full gap-2 mb-4">
//             <Label htmlFor="password">New Password</Label>
//             <Input
//               id="password"
//               type="password"
//               {...register("password")}
//               placeholder="New Password"
//               className={`${errors.password && " !border-red-500"}`}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           <Button type="submit" size="sm" className="px-3 py-4 w-full">
//             Reset Password
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default ResetPassword;
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { ResetSchema } from "@/schema/ResetSchema";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { HiEye, HiEyeOff } from "react-icons/hi";
// import axios from "axios";

// const ResetPassword = ({}) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     register,

//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(ResetSchema),
//   });

//   const submitHandler = async (data) => {
//     if (data.password !== data.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://api.novahome.care/api/jobseeker/resetpassword",
//         {
//           token: "token",
//           password: data.password,
//         }
//       );
//       if (response.status === 200) {
//         alert("Password reset successful. You can now log in.");

//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Password reset failed:", error.response || error.message);
//       alert(error.response?.data?.message || "Failed to reset password.");
//     }
//   };

//   return (
//     <Card className="w-[350px] sm:w-[400px] m-auto shadow-lg">
//       <CardHeader>
//         <span
//           className="flex items-center gap-2 cursor-pointer mb-4"
//           onClick={() => navigate("/login")}
//         >
//           <IoArrowBackCircleOutline size={20} />
//           <span>Back to login</span>
//         </span>
//         <CardTitle className="text-3xl">Reset your password</CardTitle>
//         <CardDescription className="text-md mb-2">
//           Enter your new password to reset your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form
//           className="flex justify-between space-x-2 flex-wrap gap-4"
//           onSubmit={submitHandler}
//         >
//           {/* New Password Field */}
//           <div className="flex flex-col w-full gap-2 mb-4">
//             <Label htmlFor="password">New Password</Label>
//             <div className="relative">
//               <Input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 {...register("password")}
//                 placeholder="New Password"
//                 className={`${errors.password && " !border-red-500"}`}
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <HiEyeOff /> : <HiEye />}
//               </span>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Confirm Password Field */}
//           <div className="flex flex-col w-full gap-2 mb-4">
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <div className="relative">
//               <Input
//                 id="confirmPassword"
//                 type={showConfirmPassword ? "text" : "password"}
//                 {...register("confirmPassword")}
//                 placeholder="Confirm Password"
//                 className={`${errors.confirmPassword && " !border-red-500"}`}
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer text-gray-500"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
//               </span>
//             </div>
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" size="sm" className="px-3 py-4 w-full">
//             Reset Password
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default ResetPassword;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { use } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { token } = useParams();
  const resetPasswordHandler = async () => {
    // Basic Validation
    if (!password || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.novahome.care/api/jobseeker/resetpassword",
        {
          token: token,
          password,
        }
      );
      if (response.status === 200) {
        alert("Password reset successful. You can now log in.");
        navigate("/login");
      }
    } catch (err) {
      console.error("Password reset failed:", err.response || err.message);
      setError(
        err.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    }
  };

  return (
    <Card className="w-[350px] sm:w-[400px] m-auto shadow-lg">
      <CardHeader>
        <span
          className="flex items-center gap-2 cursor-pointer mb-4"
          onClick={() => navigate("/login")}
        >
          <span className="icon-back" /> Back to login
        </span>
        <CardTitle className="text-3xl">Reset your password</CardTitle>
        <CardDescription className="text-md mb-2">
          Enter your new password to reset your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between space-x-2 flex-wrap gap-4">
          {/* New Password Field */}
          <div className="flex flex-col w-full gap-2 mb-4">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col w-full gap-2 mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            onClick={resetPasswordHandler}
            size="sm"
            className="px-3 py-4 w-full"
          >
            Reset Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
