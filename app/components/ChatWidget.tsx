'use client';

import { useState } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! 👋 How can we help you today?', isBot: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: newMessage, isBot: false }]);
    setNewMessage('');
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thanks for your message! Our customer support team will get back to you soon. Feel free to browse our FAQs while you wait.", 
          isBot: true 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col w-80 h-96 border border-gray-200 dark:border-gray-700 transition-all transform">
          {/* Chat header */}
          <div className="bg-[#ffd200] text-gray-900 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-[#ffd200] font-bold text-xs">L</span>
              </div>
              <div>
                <h3 className="font-medium">Loomé Support</h3>
                <div className="text-xs flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-gray-700"
              aria-label="Close chat"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`${
                  message.isBot 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'bg-[#ffd200] text-gray-900 ml-auto'
                } rounded-lg py-2 px-3 max-w-[80%] break-words`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-2 flex">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#ffd200] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button 
              type="submit"
              className="bg-[#ffd200] text-gray-900 px-3 py-2 rounded-r-md hover:bg-[#e6bd00] transition-colors"
              disabled={!newMessage.trim()}
            >
              <FiSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ffd200] text-gray-900 p-4 rounded-full shadow-lg hover:bg-[#e6bd00] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd200]"
          aria-label="Open chat"
        >
          <FiMessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget; 