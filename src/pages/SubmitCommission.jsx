import { postCommissionProof } from "@/store/slices/commissionSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitCommission = () => {
  const [proof, setProof] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const proofHandler = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.commission);

  const handlePaymentProof = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
  };

  return (
    <section className="w-full ml-0 m-0 h-fit px-6 lg:pl-[320px] flex flex-col min-h-screen py-12 bg-[#f9f7f5] justify-start">
      <div className="bg-white mx-auto max-w-3xl w-full px-6 py-8 rounded-xl shadow-md flex flex-col gap-6">
        <h3 className="text-[#D6482B] text-2xl md:text-3xl font-bold text-center">
          Upload Payment Proof
        </h3>

        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handlePaymentProof}
        >
          <div className="flex flex-col gap-2">
            <label className="text-stone-500 text-lg">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-stone-500 text-lg">
              Payment Proof (Screenshot)
            </label>
            <input
              type="file"
              onChange={proofHandler}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-stone-500 text-lg">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={6}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
            />
          </div>

          <button
            className="bg-[#d6482b] hover:bg-[#b8381e] transition-all duration-300 text-white font-semibold text-xl py-3 px-6 rounded-lg mx-auto"
            type="submit"
          >
            {loading ? "Uploading..." : "Upload Payment Proof"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitCommission;
