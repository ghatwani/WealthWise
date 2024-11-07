import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // To get the passed state and navigate
import { motion } from "framer-motion";

const AddTransactionSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { userId, type, amount, description, tags: initialTags } = location.state || {};

  // State for tags, initialized with the tags passed from the previous page
  const [tags, setTags] = useState(initialTags || []);

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setTags((prevTags) => {
      if (checked) {
        // Add tag if checked
        return [...prevTags, value];
      } else {
        // Remove tag if unchecked
        return prevTags.filter((tag) => tag !== value);
      }
    });
  };

  const handleSaveTags = () => {
    // You can now save the updated tags if needed
    console.log("Updated Tags: ", tags);
    // For example, make an API call to save the updated tags
    navigate("/add-transaction"); // Navigate back to the AddTransaction page (or another page)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A3A] to-[#2C3E50]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-[#2C3E50] text-center mb-6">
          Transaction Added Successfully
        </h2>
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>User ID:</strong> {userId}
        </div>
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>Amount:</strong> ${amount}
        </div>
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>Description:</strong> {description}
        </div>
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>Transaction Type:</strong> {type}
        </div>

        {/* Display selected tags */}
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>Tags:</strong>
          <div className="flex justify-center space-x-4 mt-4">
            {tags && tags.map((tag, index) => (
              <span key={index} className="bg-[#3498DB] text-white px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Option to select tags */}
        <div className="text-lg text-[#2C3E50] mb-4">
          <strong>Select Tags (Optional)</strong>
          <div className="space-y-2 mt-4">
            {["food", "entertainment", "salary", "investment"].map((tag, index) => (
              <label key={index} className="block">
                <input
                  type="checkbox"
                  value={tag}
                  checked={tags.includes(tag)}
                  onChange={handleTagChange}
                  className="mr-2"
                />
                {tag}
              </label>
            ))}
          </div>
        </div>

        {/* Save Tags Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSaveTags}
          className="w-full bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-[#2980B9] transition duration-300"
        >
          Save Tags and Return
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AddTransactionSuccess;
