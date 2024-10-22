import React from 'react';
import { BarChart2, DollarSign, PieChart, Bell, LogOut, TrendingUp, AlertTriangle, CreditCard, Users, Zap, Calendar, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">WealthWise</h1>
          <div className="flex items-center">
            <button className="mr-4 text-gray-600 hover:text-indigo-500 transition duration-300">
              <Bell />
            </button>
            <button className="text-gray-600 hover:text-indigo-500 transition duration-300">
              <LogOut />
            </button>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome back, User!</h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <DollarSign className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Total Revenue</h3>
            <p className="text-3xl font-bold text-gray-800">$24,500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
            <BarChart2 className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Profit</h3>
            <p className="text-3xl font-bold text-gray-800">$8,200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
            <PieChart className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Expenses</h3>
            <p className="text-3xl font-bold text-gray-800">$16,300</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="600">
            <TrendingUp className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Growth</h3>
            <p className="text-3xl font-bold text-gray-800">+15%</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto">
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
                  <tr className="border-b">
                    <td className="p-3">2023-03-15</td>
                    <td className="p-3">Client Payment</td>
                    <td className="p-3 text-green-500">+$1,200</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">2023-03-14</td>
                    <td className="p-3">Office Supplies</td>
                    <td className="p-3 text-red-500">-$250</td>
                    <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="p-3">2023-03-13</td>
                    <td className="p-3">Freelance Work</td>
                    <td className="p-3 text-green-500">+$800</td>
                    <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-green-100 rounded-lg">
                <TrendingUp className="text-2xl text-green-500 mr-4" />
                <div>
                  <h4 className="font-semibold">Positive Cash Flow</h4>
                  <p className="text-sm text-gray-600">Your business is maintaining a healthy cash flow this month.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-yellow-100 rounded-lg">
                <AlertTriangle className="text-2xl text-yellow-500 mr-4" />
                <div>
                  <h4 className="font-semibold">Upcoming Payment Due</h4>
                  <p className="text-sm text-gray-600">You have a payment of $500 due in 3 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Recommendations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <BarChart2 className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Optimize Expenses</h4>
                  <p className="text-gray-600">Consider reducing office supply expenses by 10% to improve your profit margin.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <DollarSign className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Increase Revenue</h4>
                  <p className="text-gray-600">Based on your current growth rate, consider expanding your services to increase revenue by 20%.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Reward Points</h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold">Current Points:</p>
              <p className="text-3xl font-bold text-indigo-600">1,250</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">How to Earn More Points</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Make timely payments to vendors</li>
                <li>Maintain a positive account balance</li>
                <li>Refer new businesses to WealthWise</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Payments</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="text-indigo-500 mr-3" />
                  <div>
                    <p className="font-semibold">Vendor Invoice #1234</p>
                    <p className="text-sm text-gray-500">Due: March 25, 2023</p>
                  </div>
                </div>
                <p className="font-bold text-red-500">$1,500</p>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="text-indigo-500 mr-3" />
                  <div>
                    <p className="font-semibold">Utility Bill</p>
                    <p className="text-sm text-gray-500">Due: March 30, 2023</p>
                  </div>
                </div>
                <p className="font-bold text-red-500">$250</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition duration-300">
                <CreditCard className="text-indigo-500 mb-2" />
                <span className="text-sm font-semibold">Add Payment</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition duration-300">
                <Users className="text-green-500 mb-2" />
                <span className="text-sm font-semibold">Manage Vendors</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition duration-300">
                <FileText className="text-purple-500 mb-2" />
                <span className="text-sm font-semibold">Generate Report</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition duration-300">
                <Zap className="text-yellow-500 mb-2" />
                <span className="text-sm font-semibold">Get Insights</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;