'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, ArrowPathIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import Header from '@/components/Header';
import ChatBubble from '@/components/ChatBubble';

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus the textarea on mount and after any interaction
  useEffect(() => {
    const focusTextarea = () => {
      if (document.activeElement !== textareaRef.current) {
        textareaRef.current?.focus();
      }
    };
    
    // Focus on mount
    focusTextarea();
    
    // Focus after any click on the document
    document.addEventListener('click', focusTextarea);
    
    // Focus after any key press
    document.addEventListener('keydown', focusTextarea);
    
    // Focus after any scroll
    document.addEventListener('scroll', focusTextarea);
    
    // Focus after any touch
    document.addEventListener('touchstart', focusTextarea);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', focusTextarea);
      document.removeEventListener('keydown', focusTextarea);
      document.removeEventListener('scroll', focusTextarea);
      document.removeEventListener('touchstart', focusTextarea);
    };
  }, []);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center w-full max-w-4xl mx-auto px-4 pt-24 pb-8"
      >
        <div className="w-full h-[calc(100vh-10rem)] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 relative">
            <div className="space-y-6">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                  <BanknotesIcon className="h-16 w-16 text-emerald-500 mb-4" />
                  <p className="text-gray-600 text-lg max-w-md text-justify font-light font-sans">
                    Welcome to FinChat! I'm here to help you with your financial questions. 
                    Feel free to ask anything about money management, investments, or personal finance.
                  </p>
                </motion.div>
              )}
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} px-2`}
                  >
                    <div className="w-full max-w-[85%]">
                      <ChatBubble
                        text={message.content}
                        isUser={message.role === 'user'}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="mt-auto">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
                  className="w-full p-4 pr-16 text-gray-900 bg-white border border-gray-200 rounded-lg outline-none focus:outline-none focus:ring-1 focus:ring-emerald-100 focus:border-emerald-100 resize-none h-32 placeholder-gray-500 [&:focus]:ring-emerald-100 [&:focus]:border-emerald-100 font-light font-sans"
                  disabled={isLoading}
                  autoFocus
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