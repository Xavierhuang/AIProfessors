import React from 'react';
import { Conversation } from './components/conversation';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="z-10 w-full max-w-3xl mx-auto">
        <div className="w-full">
          <header className="mb-8 text-center flex flex-col items-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-blue-600 shadow-lg">
              <Image 
                src="/images/professor.jpg" 
                alt="Professor James Brusseau" 
                fill
                className="object-cover" 
                priority
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2 sm:mb-3">Chat with Professor James Brusseau</h1>
          </header>
          
          <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
            <Conversation />
          </div>
          
          <footer className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm">
            <p className="mb-1">Click "Start Conversation" and allow microphone access to begin.</p>
            <p>Speak naturally to interact with Professor Brusseau - your voice conversation will appear in the chat interface.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
