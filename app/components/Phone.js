import React, { useState } from 'react';

const Phone1 = ({ messages, isTyping, message, setMessage, handleSendMessage, setIsTyping }) => {
  const [isSending, setIsSending] = useState(false); // Track sending status

  const handleSend = async () => {
    if (message.trim() !== '') {
      setIsSending(true); // Start sending animation
      setIsTyping(false); // Stop typing indicator

    
      setTimeout(() => {
        handleSendMessage(); 
        setIsSending(false); 
      }, 1000);
    }
  };

  return (
    <div className="relative w-[320px] h-[600px] bg-white rounded-3xl shadow-xl border border-gray-300 overflow-hidden">

      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full z-10"></div>

      <div className="absolute inset-0 mt-4 mb-2 mx-4 bg-gray-100 rounded-xl flex flex-col p-4 space-y-4">
     
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`w-fit max-w-[70%] py-2 px-4 mb-2 rounded-lg ${
                msg.sender === 'phone1' ? 'bg-gray-800 text-white self-end' : 'bg-gray-300 text-black self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-400 text-sm">typing...</div>
          )}
        </div>

        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setIsTyping(true);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-700"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center"
          >
            {isSending ? (
              <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
              </svg>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone1;
