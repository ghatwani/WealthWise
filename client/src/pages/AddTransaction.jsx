// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { IoMdArrowDroprightCircle } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"; // Import useParams

// const AddTransaction = () => {
//   const { userId: paramUserId } = useParams(); // Get userId from URL params if available
//   const currentUserId = useSelector((state) => state.user?.id) || paramUserId; // Use either Redux store userId or URL param userId

//   const [formData, setFormData] = useState({
//     userId: currentUserId || "",
//     type: "income",
//     amount: "",
//     description: "",
//     date: "",
//   });

//   // Update formData with userId when currentUserId is available
//   useEffect(() => {
//     setFormData((prevData) => ({ ...prevData, userId: currentUserId }));
//   }, [currentUserId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/transactions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log("Transaction added:", data);
//     } catch (error) {
//       console.error("Error adding transaction:", error);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A3A] via-[#2C3E50] to-[#3498DB]"
//     >
//       <motion.div
//         initial={{ scale: 0.95 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg space-y-8"
//       >
//         <h2 className="text-4xl font-extrabold text-[#2C3E50] text-center mb-6">
//           Add a Transaction
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-8">

//           {/* User ID (Read-Only) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//             className="relative"
//           >
//             <label
//               htmlFor="userId"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               User ID
//             </label>
//             <input
//               type="text"
//               name="userId"
//               id="userId"
//               value={formData.userId}
//               readOnly
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:outline-none bg-gray-100 text-gray-600"
//             />
//           </motion.div>

//           {/* Transaction Type */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="relative"
//           >
//             <label
//               htmlFor="type"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Transaction Type
//             </label>
//             <select
//               name="type"
//               id="type"
//               value={formData.type}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             >
//               <option value="income">Income</option>
//               <option value="expense">Expense</option>
//             </select>
//           </motion.div>

//           {/* Amount */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//             className="relative"
//           >
//             <label
//               htmlFor="amount"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Amount
//             </label>
//             <input
//               type="number"
//               name="amount"
//               id="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.4 }}
//             className="relative"
//           >
//             <label
//               htmlFor="description"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Description
//             </label>
//             <input
//               type="text"
//               name="description"
//               id="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Date */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//             className="relative"
//           >
//             <label
//               htmlFor="date"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-[#2980B9] transition duration-300"
//           >
//             <div className="flex items-center justify-center space-x-3">
//               <span>Add Transaction</span>
//               <IoMdArrowDroprightCircle size={24} />
//             </div>
//           </motion.button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AddTransaction;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { IoMdArrowDroprightCircle } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"; // Import useParams

// const AddTransaction = () => {
//   const { userId: paramUserId } = useParams(); // Get userId from URL params if available
//   const currentUserId = useSelector((state) => state.user?.id) || paramUserId; // Use either Redux store userId or URL param userId

//   const [formData, setFormData] = useState({
//     userId: "",
//     type: "income",
//     amount: "",
//     description: "",
//     date: "",
//   });
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   // Update formData with userId when currentUserId is available
//   useEffect(() => {
//     if (currentUserId) {
//       setFormData((prevData) => ({ ...prevData, userId: currentUserId }));
//       setIsLoading(false); // Stop loading once userId is set
//     }
//   }, [currentUserId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/transactions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log("Transaction added:", data);
//     } catch (error) {
//       console.error("Error adding transaction:", error);
//     }
//   };

//   // Conditional rendering to wait for userId to load
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.6 }}
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A3A] via-[#2C3E50] to-[#3498DB]"
//     >
//       <motion.div
//         initial={{ scale: 0.95 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg space-y-8"
//       >
//         <h2 className="text-4xl font-extrabold text-[#2C3E50] text-center mb-6">
//           Add a Transaction
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-8">

//           {/* User ID (Read-Only) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//             className="relative"
//           >
//             <label
//               htmlFor="userId"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               User ID
//             </label>
//             <input
//               type="text"
//               name="userId"
//               id="userId"
//               value={formData.userId}
//               readOnly
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:outline-none bg-gray-100 text-gray-600"
//             />
//           </motion.div>

//           {/* Transaction Type */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="relative"
//           >
//             <label
//               htmlFor="type"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Transaction Type
//             </label>
//             <select
//               name="type"
//               id="type"
//               value={formData.type}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             >
//               <option value="income">Income</option>
//               <option value="expense">Expense</option>
//             </select>
//           </motion.div>

//           {/* Amount */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//             className="relative"
//           >
//             <label
//               htmlFor="amount"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Amount
//             </label>
//             <input
//               type="number"
//               name="amount"
//               id="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.4 }}
//             className="relative"
//           >
//             <label
//               htmlFor="description"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Description
//             </label>
//             <input
//               type="text"
//               name="description"
//               id="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Date */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//             className="relative"
//           >
//             <label
//               htmlFor="date"
//               className="text-[#2C3E50] font-semibold text-lg"
//             >
//               Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="w-full mt-2 p-4 border border-[#BDC3C7] rounded-xl shadow-sm focus:ring-2 focus:ring-[#3498DB] focus:outline-none transition-all"
//             />
//           </motion.div>

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#3498DB] to-[#2C3E50] text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-[#2980B9] transition duration-300"
//           >
//             <div className="flex items-center justify-center space-x-3">
//               <span>Add Transaction</span>
//               <IoMdArrowDroprightCircle size={24} />
//             </div>
//           </motion.button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AddTransaction;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const navigate = useNavigate()
  // const { userId: paramUserId } = useParams();
  // const currentUserId = useSelector((state) => state.user?.id) || paramUserId;
  const rootData = JSON.parse(localStorage.getItem('persist:root'));
  const currentUser = JSON.parse(rootData.user);
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
      const response = await axios.post("/api/transaction/new", formData);
      const data = await response.json();
      navigate("/home")
      console.log("Transaction added:", data);
    } catch (error) {
      console.error("Error adding transaction:", error);
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
          <h1 className="text-5xl font-bold">Track Your Transactions <br />{console.log(currentUser)}</h1>
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
            {/* User ID */}
            <div className="relative">
              <label
                htmlFor="userId"
                className="text-[#2C3E50] font-semibold text-lg"
              >
                User ID
              </label>
              <input
                type="text"
                name="userId"
                id="userId"
                value={formData.userId}
                readOnly
                className="w-full mt-2 p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none bg-gray-100 text-gray-600"
              />
            </div>

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
