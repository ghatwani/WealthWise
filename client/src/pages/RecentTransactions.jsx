import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";

const RecentTransactions = () => {
  const userId = useParams().userid;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });

    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`/api/transaction/get-all/${userId}`);
        setTransactions(res.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [userId]);

  // Custom PDF generation
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title Styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("WealthWise - Transactions Report", 14, 20);

    // Subtitle and some space
    doc.setFontSize(12);
    doc.text("This report contains a summary of recent transactions.", 14, 28);

    // Table Content
    const headers = [["Description", "Amount", "Type", "Date"]];
    const data = transactions.map((trans) => [
      trans.description,
      `₹${trans.amount}`,
      trans.type,
      new Date(trans.date).toLocaleDateString(),
    ]);

    // Table with Styling
    doc.autoTable({
      head: headers,
      body: data,
      startY: 40, // Start the table a little below the title
      headStyles: {
        fillColor: [45, 55, 72], // Dark Blue header color
        textColor: [255, 255, 255], // White text
        fontSize: 12,
        fontStyle: "bold",
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Black text
        fontSize: 10,
        cellPadding: 4,
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], // Light gray background for alternate rows
      },
      margin: { top: 30, left: 14, right: 14, bottom: 20 }, // Adjust margins
      theme: "grid", // Clean grid style
    });

    // Footer with page number
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 10);

    // Save the PDF
    doc.save("wealthwise_transactions_report.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-8 py-12 bg-gray-800 rounded-3xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Recent Transactions
          </h2>
          <button
            onClick={generatePDF}
            className="mt-6 px-10 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Download PDF Report
          </button>
        </div>

        <div className="overflow-x-auto bg-gray-700 rounded-lg shadow-lg">
          <table className="min-w-full text-center text-gray-300">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-4 py-4 font-semibold uppercase">Description</th>
                <th className="px-4 py-4 font-semibold uppercase">Amount</th>
                <th className="px-4 py-4 font-semibold uppercase">Type</th>
                <th className="px-4 py-4 font-semibold uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans, index) => (
                <motion.tr
                  key={trans._id}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className={`transition duration-200 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600`}
                >
                  <td className="px-4 py-3">{trans.description}</td>
                  <td
                    className={`px-4 py-3 font-bold ${
                      trans.type === "income" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    ₹{trans.amount}
                  </td>
                  <td className="px-4 py-3">{trans.type}</td>
                  <td className="px-4 py-3">{new Date(trans.date).toLocaleDateString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentTransactions;
