import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

function LiveChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { id: 1, from: 'bot', text: 'Hi! How can we help you today?' },
  ]);
  const [input, setInput] = React.useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: 'user', text: input.trim() }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: "Thanks! A specialist will be with you shortly." },
      ]);
    }, 600);
  };

  return (
    <div className="fixed z-[70] bottom-4 right-4">
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-zinc-950 shadow-xl">
          <div className="px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-400 text-black font-semibold">Live Chat</div>
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-zinc-900/50">
            {messages.map(m => (
              <div key={m.id} className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${m.from === 'user' ? 'ml-auto bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 flex items-center gap-2 bg-zinc-900/60">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
            <button onClick={send} className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-emerald-500 text-black hover:bg-emerald-400">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        aria-label="Open live chat"
        onClick={() => setOpen((v) => !v)}
        className="h-12 w-12 rounded-full bg-emerald-500 text-black shadow-lg grid place-items-center hover:bg-emerald-400"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

export default LiveChatWidget;
