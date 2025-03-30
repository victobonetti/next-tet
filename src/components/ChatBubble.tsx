import { motion } from 'framer-motion';

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
  return (
    <div className={`relative max-w-[85%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
      <div
        className={`relative rounded-2xl p-4 shadow-sm ${
          isUser 
            ? 'bg-emerald-500 text-white rounded-tr-xs' 
            : 'bg-gray-100 text-gray-900 rounded-tl-xs'
        }`}
      >
        <div className="whitespace-pre-wrap break-words font-light font-sans">{text}</div>
      </div>
    </div>
  );
} 