import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddTransaction = () => {
  const navigate = useNavigate()
  // const { userId: paramUserId } = useParams();
  // const currentUserId = useSelector((state) => state.user?.id) || paramUserId;
  // const rootData = JSON.parse(localStorage.getItem('persist:root'));
  const currentUser= useSelector(state=> state.user)
  const currentUserId = currentUser.currentUser._id;
  const [formData, setFormData] = useState({
    userId: currentUserId,
    type: "income",
    amount: "",
    description: "",
    date: "",
  });

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
      console.log(formData)
      const response = await axios.post("/api/transaction/new", formData, {
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data = await response.data;
      navigate("/home")
      toast.success('Transaction added!')
      console.log("Transaction added:", data);
    } catch (error) {
      console.log("Error adding transaction:", error);
      
      toast.error('Error adding Transaction')
      navigate("/home")

    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#1A2A3A] to-[#3498DB]">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#2C3E50] p-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white space-y-4"
        >
          <h1 className="text-5xl font-bold">Track Your Transactions <br /></h1>
          <p className="text-lg font-light">
            Easily record, manage, and review your financial activities.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white p-8 rounded-3xl shadow-lg max-w-2xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-4">
            Add Transaction
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Transaction Type */}
            <div className="relative">
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
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            {/* Amount */}
            <div className="relative">
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
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none"
              />
            </div>

            {/* Description */}
            <div className="relative">
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
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none"
              />
            </div>

            {/* Date */}
            <div className="relative">
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
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white font-semibold py-4 rounded-xl shadow-lg focus:outline-none transition duration-300"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>Add Transaction</span>
                <IoMdArrowDroprightCircle size={24} />
              </div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddTransaction;