import axios from 'axios';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true); // State to control welcome message visibility
    const [showPrompts, setShowPrompts] = useState(true); // State to control sample prompts visibility

    useEffect(() => {
        AOS.init({
          duration: 1000,    // Duration of animation
          easing: 'ease-out-back',  // Easing for smooth transition
          once: true,        // Make sure animation runs only once
        });
    }, []);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        // Hide the welcome message and sample prompts when the user sends the first message
        if (showWelcome || showPrompts) {
            setShowWelcome(false);
            setShowPrompts(false);
        }

        const userMessage = { text: message, sender: 'user' };
        const botResponse = { text: '...', sender: 'bot' };

        setMessages([...messages, userMessage, botResponse]);
        setMessage('');

        try {
            const res = await axios.post('https://8f36-34-41-123-25.ngrok-free.app/chat', { message });
            const botMessage = { text: res.data.response, sender: 'bot' };
            setMessages([...messages, userMessage, botMessage]);
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error communicating with the chatbot:", error);
            const errorMessage = { text: 'Sorry, I could not process your request.', sender: 'bot' };
            setMessages([...messages, userMessage, errorMessage]);
        }
    };

    return (
        <div className="flex bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 min-h-screen flex-col px-4">
            {/* Chat Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white p-6 rounded-lg shadow-md mb-4" data-aos="fade-down">
                <h2 className="text-3xl font-extrabold">BudgetBot</h2>
            </div>

            {/* Welcome Message in the Center */}
            {showWelcome && (
                <div
                    className="flex flex-col justify-center items-center flex-1 text-center text-white opacity-90 transform transition duration-500 ease-in-out"
                    data-aos="fade-up"
                >
                    <h1 className="text-4xl font-semibold mb-4">Welcome to BudgetBot</h1>
                    <p className="text-lg mb-8">Ask me anything related to managing your budget and finances!</p>
                    <p className="text-sm">Your conversation will begin once you send your first message.</p>
                </div>
            )}

            {/* Sample Prompts Section */}
            {showPrompts && (
                <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="zoom-in">
                    <div
                        className="bg-teal-800 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-teal-700 transition-all"
                        onClick={() => setMessage("How can I manage my monthly expenses?")}
                    >
                        How can I manage my monthly expenses?
                    </div>
                    <div
                        className="bg-teal-800 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-teal-700 transition-all"
                        onClick={() => setMessage("Tell me about the best investment strategies.")}
                    >
                        Tell me about the best investment strategies.
                    </div>
                    <div
                        className="bg-teal-800 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-teal-700 transition-all"
                        onClick={() => setMessage("What are some tips for saving money?")}
                    >
                        What are some tips for saving money?
                    </div>
                    <div
                        className="bg-teal-800 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-teal-700 transition-all"
                        onClick={() => setMessage("Can you help me track my expenses?")}
                    >
                        Can you help me track my expenses?
                    </div>
                </div>
            )}

            {/* Chat Messages Section */}
            <div className="flex-1 overflow-auto p-4 space-y-6 flex flex-col-reverse">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-bubble p-4 rounded-lg max-w-[75%] ${msg.sender === 'user'
                            ? 'bg-teal-700 text-white self-end rounded-tl-xl transform transition-all shadow-xl'
                            : 'bg-gray-200 text-black self-start rounded-tr-xl transform transition-all shadow-lg'}`}
                        data-aos={msg.sender === 'user' ? "fade-left" : "fade-right"}
                    >
                        <div className="flex items-center space-x-2">
                            <div
                                className={`w-8 h-8 rounded-full ${msg.sender === 'user' ? 'bg-teal-800' : 'bg-gray-300'} flex justify-center items-center`}
                            >
                                <span className="text-white font-bold">{msg.sender === 'user' ? 'U' : 'B'}</span>
                            </div>
                            <p className="text-lg">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Input Section with Gradient Background and Rounded Borders */}
            <div className="flex justify-between items-center bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 text-white p-6 rounded-lg shadow-md mb-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me something..."
                    className="w-full p-3 rounded-lg bg-transparent text-white shadow-none focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:text-gray-300 transition-all"
                />
                <button
                    onClick={sendMessage}
                    className="p-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 transform hover:scale-110"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
