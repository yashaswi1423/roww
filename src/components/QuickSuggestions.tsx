import React from 'react';
import { Zap, TrendingUp, Target, Lightbulb } from 'lucide-react';
import './QuickSuggestions.css';

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  {
    icon: <TrendingUp size={16} />,
    text: "Generate viral fitness content ideas",
    category: "fitness"
  },
  {
    icon: <Zap size={16} />,
    text: "Create business growth reel concepts",
    category: "business"
  },
  {
    icon: <Target size={16} />,
    text: "Food recipe content for trending",
    category: "food"
  },
  {
    icon: <Lightbulb size={16} />,
    text: "Lifestyle content that converts",
    category: "lifestyle"
  }
];

const QuickSuggestions: React.FC<QuickSuggestionsProps> = ({ onSuggestionClick }) => {
  return (
    <div className="quick-suggestions">
      <h3>Quick Ideas</h3>
      <div className="suggestions-grid">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-button"
            onClick={() => onSuggestionClick(suggestion.text)}
          >
            <span className="suggestion-icon">{suggestion.icon}</span>
            <span className="suggestion-text">{suggestion.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSuggestions;