'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import Header from '@/components/Header';

export default function ChatPage() {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Header />
      <main className="flex-grow mx-auto w-full max-w-4xl px-4 py-8">
        <div className="flex flex-col h-[calc(100vh-200px)]">
          <div className="flex-grow overflow-y-auto mb-4">
            {/* Chat messages will go here */}
          </div>
          <div className="mt-auto">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-4 pr-16 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-32 placeholder-gray-500"
              />
              <button
                type="button"
                className="absolute bottom-4 right-4 p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}