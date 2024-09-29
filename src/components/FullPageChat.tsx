import React, { useState } from 'react';

const query = async (data: any) => {
    try {
        const response = await fetch(
            "http://31.220.107.113:3000/api/v1/prediction/0d608277-8c35-417b-8948-dfd58c087ccf",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error querying the API:", error);
        return { error: (error as Error).message };
    }
};

const FullPageChat = () => {
    const [question, setQuestion] = useState('');
    const [chatHistory, setChatHistory] = useState<any[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userMessage = { sender: 'user', text: question };
        setChatHistory([...chatHistory, userMessage]);
        const result = await query({ question, systemPrompt: "You are an engaging sales rep named Carl. Speak only from Carl's perspective and always offer the cited links." });
        const botMessage = { sender: 'bot', text: result.error ? `Error: ${result.error}` : result.text };
        setChatHistory([...chatHistory, userMessage, botMessage]);
        setQuestion('');
    };

    const handleDefaultQuestionClick = async (defaultQuestion: string) => {
        setQuestion(defaultQuestion);
        const userMessage = { sender: 'user', text: defaultQuestion };
        setChatHistory([...chatHistory, userMessage]);
        const result = await query({ question: defaultQuestion, systemPrompt: "You are an engaging sales rep named Carl. Speak only from Carl's perspective and always offer the cited links." });
        const botMessage = { sender: 'bot', text: result.error ? `Error: ${result.error}` : result.text };
        setChatHistory([...chatHistory, userMessage, botMessage]);
    };

    const defaultQuestions = [
        "What services do you offer?",
        "Can you help with fullstack app development?", 
        "What is your experience with product data analysis?",
        "How can I hire you for a project?"
    ];

    return (
        <div className="flex flex-col h-full text-white bg-black">
            <div className="flex-1 overflow-y-auto p-4">
                {/* Chat history */}
                <div className="space-y-6">
                    {/* Render chat messages */}
                    {chatHistory.map((message, index) => (
                        <div key={index} className={`text-white ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-black p-6 shadow-lg border-t border-gray-700">
                <div className="flex flex-wrap space-x-4 mb-4">
                    {defaultQuestions.map((defaultQuestion, index) => (
                        <button
                            key={index}
                            className="rounded-lg bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black mb-2"
                            onClick={() => handleDefaultQuestionClick(defaultQuestion)}
                        >
                            {defaultQuestion}
                        </button>
                    ))}
                </div>
                <form className="flex flex-wrap space-x-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="flex-1 rounded-lg bg-gray-800 border-transparent focus:border-white focus:bg-gray-900 focus:ring-0 text-white mb-2"
                        placeholder="Type your message..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className="rounded-lg bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black mb-2"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FullPageChat;