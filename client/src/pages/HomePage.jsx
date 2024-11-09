import React, { useState, useEffect } from "react";
import {
  BarChart2,
  IndianRupee,
  PieChart,
  TrendingUp,
  AlertTriangle,
  CreditCard,
  Users,
  Zap,
  Calendar,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentItem from "../component/PaymentItem";
import Navbar from "../component/Navbar";

const HomePage = () => {
  // const [reload,setReload]=useState(0)
  const [loading, setLoading] = useState(true);
  const [request, setRequest] = useState([]);
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user);
  const userId = currentUser.currentUser._id;
  const [income, setincome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState();
  const [recentTrans, setRecentTrans] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const pendingRequest = async () => {
    const res = await axios.get(`/api/request/get/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.data;
    setRequest([...request, ...data]);
    console.log("data", data);
  };


  const getIncome = async () => {
    try {
      const res = await axios.get("/api/dashboard/get-income", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      setincome(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getExpense = async () => {
    try {
      const res = await axios.get("/api/dashboard/get-expense", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      setexpense(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaction = async () => {
    try {
      if (!loading) {
        const res = await axios.get(`/api/transaction/get-all/${user._id}`, {
          headers: { "Content-type": "application/json" },
        });
        const data = res.data;
        console.log(data);
        console.log(data.slice(-3));
        setTransactions(data);
        setRecentTrans(data.slice(-3));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentTrans = async () => {};

  const getUser = () => {
    // setUser(JSON.parse(localStorage.getItem('persist:root')).user || '')

    const currentUser = async () => {
      const res = await JSON.parse(localStorage.getItem("persist:root")).user;
      return JSON.parse(res);
    };
    currentUser()
      .then((res) => {
        console.log(res.currentUser);
        setUser(res.currentUser);
        setLoading(false);
        if (
          res.currentUser.name !== null &&
          res.currentUser.name !== undefined
        ) {
          setLoggedIn(true);
          console.log(res.currentUser.name);
          console.log("loggedIn");
        } else {
          setLoggedIn(false);
          console.log("notloggedin");
          navigate("/");
          window.alert("Please sign in to continue");
        }
      })
      .catch((error) => console.error(error));
    if (!loading) {
      window.location.reload();
      if (loggedIn == false) {
        navigate("/");
        window.alert("Please sign in to continue");
      } else {
        setUser(currentUser);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getTransaction();
    getIncome();
    getExpense();
    getRecentTrans;
    pendingRequest();
  }, [loading]);
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {!loading && (
        <div>
          <div>
            <Navbar/>
          </div>

          <main className="container mx-auto px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome back, User!
            </h2>
            {/* Revenue, Profit, Expenses, Growth */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {/* Revenue, Profit, Expenses, Growth Cards */}
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <IndianRupee className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  Total Revenue
                </h3>
                <p className="text-3xl font-bold text-gray-800">₹{income}</p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <BarChart2 className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  Profit
                </h3>
                <p className="text-3xl font-bold text-gray-800">
                  ₹{income - expense}
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <PieChart className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  Expenses
                </h3>
                <p className="text-3xl font-bold text-gray-800">₹{expense}</p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <TrendingUp className="text-4xl text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  Growth
                </h3>
                <p className="text-3xl font-bold text-gray-800">
                  {expense !== 0
                    ? `₹${(((income - expense) / expense) * 100).toFixed(2)}%`
                    : "0"}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <Link to={`/recent-transactions/${user._id}`}>
                  <div className="flex flex-col items-center justify-center p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition duration-300">
                    <FileText className="text-indigo-500 mb-2" />
                    <span className="text-sm font-semibold">
                      Recent Transactions
                    </span>
                  </div>
                </Link>
                <div className="overflow-x-auto">
                  {recentTrans && (
                    <div>{console.log("recentTrans :", recentTrans)}</div>
                  )}
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3">Date</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTrans &&
                        recentTrans.map((trans, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3">
                              {new Date(trans.date).toLocaleDateString()}
                            </td>
                            <td className="p-3">{trans.description}</td>
                            <td
                              className={`p-3 ${
                                trans.type == "income"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {trans.amount}
                            </td>
                            <td className="p-3">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                Completed
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Financial Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-100 rounded-lg">
                    <TrendingUp className="text-2xl text-green-500 mr-4" />
                    <div>
                      <h4 className="font-semibold">Positive Cash Flow</h4>
                      <p className="text-sm text-gray-600">
                        Your business is maintaining a healthy cash flow this
                        month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-yellow-100 rounded-lg">
                    <AlertTriangle className="text-2xl text-yellow-500 mr-4" />
                    <div>
                      <h4 className="font-semibold">Upcoming Payment Due</h4>
                      <p className="text-sm text-gray-600">
                        You have a payment of ₹500 due in 3 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Pending Payments
                </h3>
                <ul className="space-y-4">
                 {
                  request.length<0 ? "No request to display":
                  request.map(({description,email, deadline, amount, _id})=>(
                    <PaymentItem key={_id} description={description} email={email} deadline={deadline} amount={amount}/>
                  ))
                }
                </ul>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/add-transaction">
                    <div className="flex flex-col items-center justify-center p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition duration-300">
                      <CreditCard className="text-indigo-500 mb-2" />
                      <span className="text-sm font-semibold">
                        Add Transaction
                      </span>
                    </div>
                  </Link>
                  <button className="flex flex-col items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition duration-300">
                    <Users className="text-green-500 mb-2" />
                    <span className="text-sm font-semibold">
                      Manage Vendors
                    </span>
                  </button>
                  <Link to={`/reports/${user._id}`}>
                    <div className="flex flex-col items-center justify-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition duration-300">
                      <FileText className="text-purple-500 mb-2" />
                      <span className="text-sm font-semibold">
                        Generate Report
                      </span>
                    </div>
                  </Link>
                  <button className="flex flex-col items-center justify-center p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition duration-300">
                    <Zap className="text-yellow-500 mb-2" />
                    <span className="text-sm font-semibold">Get Insights</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md mt-8 md:mt-8"
              data-aos="fade-up"
            >
              <Link to="/smart-deal">
                <div className="flex flex-col items-center justify-center p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition duration-300">
                  <Zap className="text-pink-500 mb-2" />
                  <span className="text-sm font-semibold">
                    Smart Deal Recommendation
                  </span>
                </div>
              </Link>
            </div>
            <button
              onClick={() => navigate("/chat")}
              className="fixed bottom-6 right-6 p-4 text-white bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            >
              🤖 Ask me!
            </button>
          </main>

        </div>
      )}
    </div>
  );
};

export default HomePage;
