import { createAuction } from "@/store/slices/auctionSlice";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const CreateAuction = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const auctionCategories = [
    "Electronics",
    "Home & Kitchen",
    "Automotive",
    "Industrial & Commercial",
    "Furniture",
    "Art & Antiques",
    "Jewelry & Watches",
    "Automobiles",
    "Real Estate",
    "Collectibles",
    "Fashion & Accessories",
    "Sports Memorabilia",
    "Education & Books",
    "Others",
  ];

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
    };
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auction);

  const handleCreateAuction = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("condition", condition);
    formData.append("startingBid", startingBid);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    dispatch(createAuction(formData));
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
  }, [isAuthenticated, user, navigateTo]);

  return (
    <article className="w-full px-5 pt-20 lg:pl-[320px] flex flex-col">
      <h1 className="text-[#d6482b] text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6">
        Create Auction
      </h1>

      <div className="bg-white shadow-lg border rounded-xl w-full max-w-5xl mx-auto p-6">
        <form className="flex flex-col gap-8" onSubmit={handleCreateAuction}>
          <p className="font-semibold text-2xl border-b pb-2">Auction Details</p>

          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              >
                <option value="">Select Category</option>
                {auctionCategories.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Condition & Starting Bid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="mt-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              >
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Starting Bid</label>
              <input
                type="number"
                value={startingBid}
                onChange={(e) => setStartingBid(e.target.value)}
                className="mt-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="mt-2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
            />
          </div>

          {/* Start & End Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Auction Start Time</label>
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="mt-2 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">Auction End Time</label>
              <DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="mt-2 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d6482b] focus:outline-none"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Auction Item Image</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex flex-col items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt={title}
                      className="w-44 h-auto rounded-lg shadow-md"
                    />
                  ) : (
                    <>
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 
                             6.5 5.5 5.5 0 0 0 5.207 
                             5.021C5.137 5.017 5.071 5 5 
                             5a4 4 0 0 0 0 8h2.167M10 
                             15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium">Click to upload</span> or drag & drop
                      </p>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF up to 800x400px</p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={imageHandler}
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#d6482b] hover:bg-[#b8381e] text-white font-semibold text-lg py-3 rounded-lg transition w-full sm:w-[320px] mx-auto"
          >
            {loading ? "Creating Auction..." : "Create Auction"}
          </button>
        </form>
      </div>
    </article>
  );
};

export default CreateAuction;
