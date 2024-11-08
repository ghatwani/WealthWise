import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const SmartDealPage = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [expectedProfit, setExpectedProfit] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [resultData, setResultData] = useState(null);
  const [pieData, setPieData] = useState(null);

  const handleGenerate = () => {
    setLoading(true);
    setCurrentStep(3);

    setTimeout(() => {
      const parsedIncome = parseFloat(income);
      const parsedExpenses = parseFloat(expenses);
      const parsedExpectedProfit = parseFloat(expectedProfit);

      if (
        !isNaN(parsedIncome) &&
        !isNaN(parsedExpenses) &&
        !isNaN(parsedExpectedProfit)
      ) {
        const netProfit = parsedIncome - parsedExpenses;
        const profitPercentage = (netProfit / parsedIncome) * 100;
        const meetsExpectation = profitPercentage >= parsedExpectedProfit;

        setResultData({
          income: parsedIncome,
          expenses: parsedExpenses,
          netProfit,
          profitPercentage,
          meetsExpectation,
          profitDifference: profitPercentage - parsedExpectedProfit,
        });

        setPieData({
          labels: ["Income", "Expenses", "Profit"],
          datasets: [
            {
              label: "Deal Summary",
              data: [parsedIncome, parsedExpenses, netProfit],
              backgroundColor: ["#1e88e5", "#e53935", "#43a047"],
            },
          ],
        });

        setIsRecommended(meetsExpectation);
      }

      setLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (currentStep === 1) setCurrentStep(2);
  };

  return (
    <div className="flex flex-col font-sans">
      {/* Header */}
      <header className="text-center py-4 bg-gray-200 text-gray-800 fixed top-0 w-full z-10">
        <h3 className="text-xl font-semibold">Smart Deal Recommendation</h3>
        <div className="flex justify-center space-x-6 mt-2">
          <div
            className={`${
              currentStep === 1 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            1. Enter Details
          </div>
          <span className="text-gray-500">→</span>
          <div
            className={`${
              currentStep === 2 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            2. Generate Recommendation
          </div>
          <span className="text-gray-500">→</span>
          <div
            className={`${
              currentStep === 3 ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            3. View Analysis
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-screen pt-20">
        {/* Sidebar for Input */}
        <aside className="w-1/4 bg-gray-800 text-white p-6 flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Enter Deal Details</h4>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">💰 Deal Income</label>
            <input
              type="number"
              placeholder="Enter income..."
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-green-500"
              value={income}
              onChange={handleInputChange(setIncome)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">💸 Deal Expenses</label>
            <input
              type="number"
              placeholder="Enter expenses..."
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-red-500"
              value={expenses}
              onChange={handleInputChange(setExpenses)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">
              📈 Expected Profit (%)
            </label>
            <input
              type="number"
              placeholder="Enter profit percentage..."
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
              value={expectedProfit}
              onChange={handleInputChange(setExpectedProfit)}
            />
          </div>
          <button
            onClick={handleGenerate}
            className={`py-2 px-4 rounded font-semibold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Calculating..." : "Generate Recommendation"}
          </button>
        </aside>

        {/* Right Panel with Analysis */}
        <main className="flex-1 bg-white p-6 flex flex-col items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                Calculating optimal deal...
              </p>
            </div>
          ) : showResults && resultData ? (
            <div className="w-full max-w-6xl">
              <h2 className="text-2xl font-bold mb-4 mt-5">
                Deal Analysis Report
              </h2>
              <p className="text-lg font-semibold mb-4">
                {isRecommended ? (
                  <span className="text-green-600 text-xl font-bold">
                    This is a recommended deal! 🎉
                  </span>
                ) : (
                  <span className="text-red-600 text-xl font-bold">
                    This deal may not meet your profit expectations.
                  </span>
                )}
              </p>

              {/* Analysis Content */}
              <div className="flex gap-8">
                {/* Pie Chart */}
                <div className="w-1/2 flex flex-col items-center">
                  {pieData && (
                    <>
                      <Pie
                        data={pieData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: { display: false },
                          },
                        }}
                        width={180}
                        height={180}
                      />
                      {/* Legend with Flex Layout for Indications */}
                      <div className="flex justify-start mt-4 gap-6">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: "#1e88e5" }}
                          ></div>
                          <span className="ml-2 font-semibold text-gray-700">
                            Income: ${resultData.income}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: "#e53935" }}
                          ></div>
                          <span className="ml-2 font-semibold text-gray-700">
                            Expenses: ${resultData.expenses}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{
                              backgroundColor:
                                resultData.netProfit < 0 ? "red" : "#43a047",
                            }}
                          ></div>
                          <span className="ml-2 font-semibold text-gray-700">
                            {resultData.netProfit < 0 ? "Loss: " : "Profit: "} $
                            {resultData.netProfit < 0
                              ? -1 * resultData.netProfit
                              : resultData.netProfit}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Interactive Cards */}
                <div className="flex flex-col gap-4 w-1/2">
                  <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-green-50">
                    <p className="text-lg font-semibold text-green-700">
                      Income
                    </p>
                    <span className="text-2xl font-bold">
                      ${resultData.income}
                    </span>
                    <p className="text-gray-500">100% of Deal</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-red-50">
                    <p className="text-lg font-semibold text-red-700">
                      Expenses
                    </p>
                    <span className="text-2xl font-bold">
                      ${resultData.expenses}
                    </span>
                    <p className="text-gray-500">
                      {(
                        (resultData.expenses / resultData.income) *
                        100
                      ).toFixed(1)}
                      % of Income
                    </p>
                  </div>
                  <div
                    className={`flex flex-col items-center p-4 border rounded-lg shadow-lg ${
                      resultData.netProfit < 0 ? "bg-red-50" : "bg-blue-50"
                    }`}
                  >
                    <p
                      className={`text-lg font-semibold ${
                        resultData.netProfit < 0
                          ? "text-red-700"
                          : "text-blue-700"
                      }`}
                    >
                      {resultData.netProfit < 0 ? "Loss" : "Profit"}
                    </p>
                    <span className="text-2xl font-bold">
                      {resultData.netProfit < 0
                        ? -1 * resultData.netProfit
                        : resultData.netProfit}
                    </span>
                    <p className="text-gray-500">
                      {resultData.profitPercentage.toFixed(1)}% of Income
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Enter deal details and click “Generate Recommendation” to view
              analysis.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default SmartDealPage;
