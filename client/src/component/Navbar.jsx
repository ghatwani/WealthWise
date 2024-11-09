import React, { useState } from "react";
import { Bell, LogOut, Check, X, SquareMinus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ bgColor = "bg-white" }) => {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Payment of ₹200 received", type: "alert", read: false },
    {
      id: 2,
      message: "Payment request: ₹500 from Vendor",
      type: "paymentRequest",
      read: false,
    },
    {
      id: 3,
      message: "Your subscription will renew tomorrow",
      type: "reminder",
      read: false,
    },
    { id: 4, message: "Stock ABC up by 5%", type: "alert", read: false },
    {
      id: 5,
      message: "Investment update: New mutual fund available",
      type: "alert",
      read: false,
    },
    {
      id: 6,
      message: "Interest rate change for savings",
      type: "reminder",
      read: false,
    },
  ]);
  const toggleNotificationPanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: !notification.read }
          : notification
      )
    );
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const handlePaymentAction = (id, action) => {
    console.log(`Payment request ${action}ed`);
    removeNotification(id);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };
  return (
    <div>
      <nav className={`${bgColor} shadow-md`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <button
            onClick={() => navigate("/home")}
            className="text-2xl font-bold text-indigo-600"
          >
            WealthWise
          </button>
          <div className="flex items-center">
            <button
              onClick={toggleNotificationPanel}
              className="mr-4 text-gray-600 hover:text-indigo-500 transition duration-300 relative"
            >
              <Bell />
              {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                4
              </span> */}
              {notifications.filter((notification) => !notification.read)
                .length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {
                    notifications.filter((notification) => !notification.read)
                      .length
                  }
                </span>
              )}
            </button>
            <button
              onClick={() => {
                console.log("Signout");
                localStorage.clear();
                localStorage.removeItem("persist:root");
                // setLoggedIn(false);
                navigate("/");
              }}
              className="text-gray-600 hover:text-indigo-500 transition duration-300"
            >
              <LogOut />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            key="notificationPanel"
            initial={{ opacity: 0, y: "100%", x: "20%", rotate: -10 }}
            animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
            exit={{ opacity: 0, y: "100%", x: "20%", rotate: -10 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="fixed bottom-0 right-0 w-full max-w-md bg-white shadow-lg z-[1000] overflow-hidden rounded-t-lg"
          >
            <div className="p-6 bg-indigo-500 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="text-lg font-bold">Notifications</h3>
              <button
                onClick={toggleNotificationPanel}
                className="text-white hover:opacity-75"
              >
                Close
              </button>
            </div>

            <div className="flex justify-between items-center px-6 py-2 bg-gray-50">
              <button
                onClick={markAllAsRead}
                className="text-indigo-500 hover:text-indigo-700 font-medium"
              >
                Mark All as Read
              </button>
            </div>

            <ul className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.li
                    key={notification.id}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`flex justify-between items-center p-4 rounded-lg shadow transition ${
                      notification.read ? "bg-gray-200" : "bg-blue-50"
                    }`}
                  >
                    <div
                      onClick={() => toggleReadStatus(notification.id)}
                      className="flex-1 cursor-pointer"
                    >
                      <p className="font-semibold">
                        {notification.type === "alert" && (
                          <span className="text-yellow-500 mr-2">⚠️</span>
                        )}
                        {notification.type === "paymentRequest" && (
                          <span className="text-green-500 mr-2">💸</span>
                        )}
                        {notification.type === "reminder" && (
                          <span className="text-purple-500 mr-2">🔔</span>
                        )}
                        {notification.message}
                      </p>
                    </div>
                    {notification.type === "paymentRequest" ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            handlePaymentAction(notification.id, "accept")
                          }
                          className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
                        >
                          <Check size={16} />
                        </button>
                        <button
                          onClick={() =>
                            handlePaymentAction(notification.id, "decline")
                          }
                          className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="ml-4 text-gray-600 hover:text-black transition"
                      >
                        <SquareMinus size={20} />
                      </button>
                    )}
                  </motion.li>
                ))
              ) : (
                <p className="text-gray-500">No new notifications</p>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
