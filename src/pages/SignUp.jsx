import { register } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("profileImage", profileImage);
    if (role === "Auctioneer") {
      formData.append("bankAccountName", bankAccountName);
      formData.append("bankAccountNumber", bankAccountNumber);
      formData.append("bankName", bankName);
      formData.append("upiId", upiId);
      formData.append("paypalEmail", paypalEmail);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated, navigateTo]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };

  return (
    <section className="w-full px-6 lg:pl-[320px] min-h-screen flex flex-col py-12 bg-[#f9f7f5]">
      <div className="bg-white mx-auto w-full max-w-4xl p-8 rounded-xl shadow-md flex flex-col gap-6">
        <h1 className="text-[#d6482b] text-3xl md:text-5xl font-extrabold text-center mb-6">
          Register
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleRegister}>
          <p className="font-semibold text-xl">Personal Details</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-stone-600">Full Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-stone-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-stone-600">Phone</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-stone-600">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-stone-600">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              >
                <option value="">Select Role</option>
                <option value="Auctioneer">Auctioneer</option>
                <option value="Bidder">Bidder</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-stone-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={profileImagePreview || "/imageHolder.jpg"}
              alt="profile preview"
              className="w-16 h-16 rounded-full border"
            />
            <input type="file" onChange={imageHandler} />
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-semibold text-lg">
              Payment Method Details
              <span className="block text-sm text-stone-500 font-normal">
                Fill only if registering as Auctioneer
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
                disabled={role === "Bidder"}
              >
                <option value="">Select Bank</option>
                <option value="Indian Bank">Indian Bank</option>
                <option value="SBI">State Bank Of India</option>
                <option value="Axis">Axis Bank</option>
                <option value="CUB">City Union Bank</option>
              </select>
              <input
                type="text"
                value={bankAccountNumber}
                placeholder="Bank Account Number"
                onChange={(e) => setBankAccountNumber(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
                disabled={role === "Bidder"}
              />
              <input
                type="text"
                value={bankAccountName}
                placeholder="Bank Account Name"
                onChange={(e) => setBankAccountName(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
                disabled={role === "Bidder"}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={upiId}
                placeholder="UPI ID"
                onChange={(e) => setUpiId(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
                disabled={role === "Bidder"}
              />
              <input
                type="email"
                value={paypalEmail}
                placeholder="Paypal Email (Optional)"
                onChange={(e) => setPaypalEmail(e.target.value)}
                className="py-2 border-b border-stone-500 focus:outline-none"
                disabled={role === "Bidder"}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#d6482b] text-white py-3 rounded-lg font-semibold hover:bg-[#b8381e] transition-all duration-300 w-full"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
