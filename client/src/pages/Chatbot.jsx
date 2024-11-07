import axios from 'axios';
import { useState } from 'react';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('https://8f36-34-41-123-25.ngrok-free.app/chat', { message });
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error communicating with the chatbot:", error);
        }
    };

    return (
        <div>
            <h1>BudgetBot Chat</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
            <p><strong>Bot Response:</strong> {response}</p>
        </div>
    );
};

export default ChatBot;
