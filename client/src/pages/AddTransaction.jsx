import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux"; // Import useSelector

const AddTransaction = () => {
  // Get userId from the Redux store
  const currentUserId = useSelector((state) => state.user?.id);

  const [formData, setFormData] = useState({
    userId: currentUserId || "",
    type: "income", // default option
    amount: "",
    description: "",
    date: "", // New date field
  });

  // Set userId in formData when currentUserId is available
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, userId: currentUserId }));
  }, [currentUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Transaction added:", data);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A3A] via-[#2C3E50] to-[#3498DB]"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-[#2C3E50] text-center mb-6">
          Add a Transaction
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Transaction Type */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative"
          >
            <label
              htmlFor="type"
              className="text-[#2C3E50] font-semibold text-lg"
            >
              Transaction Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </motion.div>

          {/* Amount */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative"
          >
            <label
              htmlFor="amount"
              className="text-[#2C3E50] font-semibold text-lg"
            >
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative"
          >
            <label
              htmlFor="description"
              className="text-[#2C3E50] font-semibold text-lg"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
            />
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative"
          >
            <label
              htmlFor="date"
              className="text-[#2C3E50] font-semibold text-lg"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-[#2980B9] transition duration-300"
          >
            <div className="flex items-center justify-center space-x-3">
              <span>Add Transaction</span>
              <IoMdArrowDroprightCircle size={24} />
            </div>
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddTransaction;
