import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { generateReelContent } from '../services/contentGenerator';
import QuickSuggestions from './QuickSuggestions';
import './ChatBot.css';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! I'm ROWW, your Instagram Reels content generator! 🎬✨ I'm here to help you create viral content ideas, trending hooks, captions, and hashtags for your Instagram Reels. What kind of content are you looking to create today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await generateReelContent(inputText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble generating content right now. Please try again!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="header-content">
          <div className="bot-avatar">
            <Sparkles size={24} />
          </div>
          <div className="header-text">
            <h1>ROWW</h1>
            <p>Instagram Reels Content Generator</p>
          </div>
        </div>
      </div>

      {messages.length === 1 && (
        <QuickSuggestions onSuggestionClick={handleSuggestionClick} />
      )}

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-avatar">
              {message.isUser ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message bot-message">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe the type of reel content you want to create..."
            className="message-input"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="send-button"
            disabled={!inputText.trim() || isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;