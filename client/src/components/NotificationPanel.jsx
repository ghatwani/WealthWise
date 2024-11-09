// NotificationPanel.js
import React from "react";
import { Bell, Check, X, CreditCard, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationPanel = ({
  notifications,
  toggleNotificationPanel,
  isPanelOpen,
  toggleReadStatus,
  removeNotification,
  handlePaymentAction,
  markAllAsRead,
}) => {
  return (
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
                  {/* <label className="text-gray-500 text-sm">
                Auto-close
                <input
                  type="checkbox"
                  checked={autoClose}
                  onChange={() => setAutoClose(autoClose)}
                  className="ml-2"
                />
              </label> */}
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
    // <AnimatePresence>
    //   {isPanelOpen && (
    //     <motion.div
    //       className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50"
    //       initial={{ x: "100%" }}
    //       animate={{ x: 0 }}
    //       exit={{ x: "100%" }}
    //       transition={{ type: "spring", stiffness: 300 }}
    //     >
    //       <div className="p-4 flex justify-between items-center border-b">
    //         <h3 className="font-semibold text-lg">Notifications</h3>
    //         <button onClick={toggleNotificationPanel}>
    //           <X className="text-xl text-gray-500" />
    //         </button>
    //       </div>

    //       <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-4">
    //         {notifications.length === 0 ? (
    //           <p className="text-gray-500">No notifications</p>
    //         ) : (
    //           notifications.map((notification) => (
    //             <div
    //               key={notification.id}
    //               className="flex items-center justify-between p-2 border-b"
    //             >
    //               <div className="flex items-center space-x-2">
    //                 {notification.type === "alert" && (
    //                   <CreditCard className="text-gray-500" />
    //                 )}
    //                 {notification.type === "paymentRequest" && (
    //                   <FileText className="text-blue-500" />
    //                 )}
    //                 <p
    //                   className={`text-sm ${
    //                     notification.read ? "text-gray-500" : "text-gray-800"
    //                   }`}
    //                 >
    //                   {notification.message}
    //                 </p>
    //               </div>
    //               <div className="flex space-x-2">
    //                 <button
    //                   className="text-green-500"
    //                   onClick={() => toggleReadStatus(notification.id)}
    //                 >
    //                   <Check />
    //                 </button>
    //                 <button
    //                   className="text-red-500"
    //                   onClick={() => removeNotification(notification.id)}
    //                 >
    //                   <X />
    //                 </button>
    //               </div>
    //             </div>
    //           ))
    //         )}
    //       </div>

    //       <div className="p-4 border-t flex justify-between items-center">
    //         <button
    //           onClick={markAllAsRead}
    //           className="text-blue-500 text-sm font-semibold"
    //         >
    //           Mark All as Read
    //         </button>
    //         <button
    //           onClick={handlePaymentAction}
    //           className="text-blue-500 text-sm font-semibold"
    //         >
    //           View All
    //         </button>
    //       </div>
    //     </motion.div>
    //   )}
    // </AnimatePresence>
  );
};

export default NotificationPanel;
