import { useState, useRef, useEffect, type ComponentProps } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import Markdown from "react-markdown";
import { useChat, type ChatMessage } from "../../hooks/useChat";
import { chatFAQs } from "../../data/portfolio";

const markdownComponents: ComponentProps<typeof Markdown>["components"] = {
  p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-bold text-accent">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-1.5 last:mb-0 space-y-0.5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-1.5 last:mb-0 space-y-0.5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-2 hover:text-accent/80"
    >
      {children}
    </a>
  ),
  h3: ({ children }) => (
    <p className="font-bold mb-1">{children}</p>
  ),
};

function MessageBubble({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-accent text-white rounded-lg rounded-tr-none px-3 py-2 text-sm max-w-[85%]">
          {message.content}
        </div>
      </div>
    );
  }

  if (!message.content) return null;

  return (
    <div className="flex gap-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
        <Bot size={14} className="text-accent" strokeWidth={2.5} />
      </div>
      <div className="bg-muted rounded-lg rounded-tl-none px-3 py-2 text-sm max-w-[85%] leading-relaxed">
        <Markdown components={markdownComponents}>
          {message.content}
        </Markdown>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-2">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
        <Bot size={14} className="text-accent" strokeWidth={2.5} />
      </div>
      <div className="flex gap-1.5 items-center px-4 py-3 bg-muted rounded-lg rounded-tl-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const { messages, isLoading, sendMessage } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Show tooltip after 3 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !tooltipDismissed) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, tooltipDismissed]);

  // Hide tooltip when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      setTooltipDismissed(true);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const showFAQs = messages.length === 0;
  const showTyping =
    isLoading && messages.length > 0 && messages[messages.length - 1]?.content === "";

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 z-50 w-[calc(100vw-2rem)] sm:w-[380px] sm:right-6 animate-chat-open">
          <div className="flex flex-col h-[calc(100dvh-7rem)] sm:h-[500px] rounded-lg border-2 border-foreground bg-surface shadow-pop overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-accent text-white border-b-2 border-foreground">
              <div className="flex items-center gap-2">
                <Bot size={18} strokeWidth={2.5} />
                <span className="font-heading font-bold text-sm">
                  Ask Khybrie's AI
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Welcome message */}
              <div className="flex gap-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Bot size={14} className="text-accent" strokeWidth={2.5} />
                </div>
                <div className="bg-muted rounded-lg rounded-tl-none px-3 py-2 text-sm max-w-[85%] leading-relaxed">
                  Hey! I'm Khybrie's AI assistant. Ask me anything about his
                  skills, projects, or experience!
                </div>
              </div>

              {/* FAQ buttons */}
              {showFAQs && (
                <div className="flex flex-wrap gap-2 pl-9">
                  {chatFAQs.map((faq) => (
                    <button
                      key={faq}
                      onClick={() => sendMessage(faq)}
                      className="text-xs px-3 py-1.5 rounded-full border-2 border-foreground bg-surface text-foreground font-heading font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              )}

              {/* Message list */}
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Typing indicator */}
              {showTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t-2 border-foreground bg-surface">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 rounded-full border-2 border-foreground bg-cream text-sm font-body text-foreground placeholder:text-muted-fg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent disabled:opacity-50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-foreground bg-accent text-white flex items-center justify-center shadow-[2px_2px_0px_0px] shadow-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px] hover:shadow-foreground active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  aria-label="Send message"
                >
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip bubble */}
      {showTooltip && !isOpen && (
        <div className="fixed bottom-22 right-6 z-50 animate-chat-open">
          <div
            className="relative bg-accent text-white text-sm font-heading font-bold px-4 py-2.5 rounded-lg border-2 border-foreground shadow-pop cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => {
              setShowTooltip(false);
              setTooltipDismissed(true);
              setIsOpen(true);
            }}
          >
            Hey! Ask me anything
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 right-5 w-3 h-3 bg-accent border-r-2 border-b-2 border-foreground rotate-45" />
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse ring */}
        {!isOpen && !tooltipDismissed && (
          <span className="absolute inset-0 rounded-full bg-accent/40 animate-chat-pulse" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full border-2 border-foreground bg-accent text-white shadow-pop flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-pop-active transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer animate-pop-in"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X size={24} strokeWidth={2.5} />
          ) : (
            <MessageCircle size={24} strokeWidth={2.5} />
          )}
        </button>
      </div>
    </>
  );
}
