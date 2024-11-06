import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, DollarSign, PieChart, TrendingUp, Shield, Award, CreditCard, Users, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-600">WealthWise</h1>
        <div>
          <Link to="/signin" className="mr-4 text-gray-600 hover:text-indigo-500 transition duration-300">Sign In</Link>
          <Link to="/signup" className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition duration-300">Sign Up</Link>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-12">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-5xl font-bold mb-4 text-gray-800">Empower Your Business Finances</h2>
              <p className="text-xl mb-8 text-gray-600">WealthWise: Your all-in-one solution for comprehensive payment tracking, insightful analytics, and smart recommendations tailored for small businesses.</p>
              <Link to="/signup" className="bg-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 inline-flex items-center">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-indigo-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <DollarSign className="text-4xl mb-4 text-indigo-500" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Payment Tracking</h3>
                <p className="text-gray-600">Easily categorize and track all your payments, including cash transactions.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                <BarChart2 className="text-4xl mb-4 text-indigo-500" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Financial Analytics</h3>
                <p className="text-gray-600">Access detailed profit and loss reports with WealthWise branded insights.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
                <PieChart className="text-4xl mb-4 text-indigo-500" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Smart Recommendations</h3>
                <p className="text-gray-600">Get data-driven suggestions to help you make informed business decisions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">Why Choose WealthWise?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <TrendingUp className="text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Optimize Cash Flow</h3>
              <p className="text-gray-600">Our intelligent system helps you manage and predict cash flow, ensuring your business stays financially healthy.</p>
            </div>
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
              <Shield className="text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Secure Transactions</h3>
              <p className="text-gray-600">Rest easy knowing that all your financial data and transactions are protected with bank-level security.</p>
            </div>
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
              <Award className="text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Reward System</h3>
              <p className="text-gray-600">Earn points for timely payments and maintaining healthy business relationships, enhancing your financial reputation.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-white rounded-3xl shadow-2xl p-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">More About WealthWise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right">
              <CreditCard className="text-4xl text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Comprehensive Payment Tracking</h3>
                <p className="text-gray-600">WealthWise allows you to categorize all types of payments, including digital and cash transactions. Create and manage pending payment requests with ease, ensuring no transaction goes unrecorded.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left">
              <Users className="text-4xl text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Automated Alerts</h3>
                <p className="text-gray-600">Our platform keeps both parties informed as payment deadlines approach, facilitating smoother transactions and better cash flow management for your business.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right">
              <BarChart2 className="text-4xl text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Detailed Financial Reports</h3>
                <p className="text-gray-600">Access WealthWise-branded quarterly and annual reports, providing deep insights into your business's financial performance and helping you make data-driven decisions.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left">
              <Zap className="text-4xl text-indigo-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Smart Deal Recommendations</h3>
                <p className="text-gray-600">Our advanced analytics engine analyzes your financial data to provide intelligent recommendations on potential deals, helping you make informed decisions to drive business growth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Take Control of Your Finances?</h2>
          <Link to="/signup" className="bg-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 inline-flex items-center">
            Join WealthWise Today <ArrowRight className="ml-2" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;