'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import Header from '@/components/Header';

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = { role: 'assistant' as const, content: 'This is a simulated response.' };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col mt-21">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow mx-auto w-full max-w-4xl px-4 py-8"
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="flex-grow overflow-y-auto mb-4">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="mt-auto w-full">
            <form onSubmit={handleSubmit} className="w-full relative">
              <div className="relative w-full">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-4 pr-16 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-32 placeholder-gray-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
                    ${isLoading 
                      ? 'bg-emerald-100 text-emerald-500 cursor-not-allowed' 
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <ArrowPathIcon className="h-6 w-6 animate-spin" />
                  ) : (
                    <PaperAirplaneIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.main>
    </div>
  );
}