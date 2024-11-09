import { Calendar } from "lucide-react";
import React from "react";

const PaymentItem = ({email, description, deadline, amount}) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <Calendar className="text-indigo-500 mr-3" />
        <div>
          <p className="font-semibold">{description}</p>
          <p className="text-sm text-gray-500">Due:{deadline}</p>
        </div>
      </div>
      <p className="font-bold text-red-500">₹{amount}</p>
    </li>
  );
};

export default PaymentItem;
