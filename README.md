# ROWW - Instagram Reels Content Generator

ROWW is an AI-powered chatbot designed specifically for generating viral Instagram Reels content. It provides comprehensive content ideas, trending hooks, captions, hashtags, and posting strategies tailored for Instagram's algorithm.

## Features

🎬 **Comprehensive Content Generation**
- Viral hooks and opening lines
- Content format suggestions
- Trending captions
- Strategic hashtag recommendations
- Audio/music suggestions
- Optimal posting times

🎯 **Category-Specific Expertise**
- Lifestyle & Wellness
- Business & Entrepreneurship
- Fitness & Health
- Food & Recipes
- Fashion & Style
- Technology & Apps

✨ **Modern Dark Theme UI**
- Sleek gradient design
- Responsive layout
- Smooth animations
- Mobile-optimized

🚀 **Smart Features**
- Quick suggestion buttons
- Real-time typing indicators
- Message timestamps
- Scrollable chat history

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd roww-content-bot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Start a Conversation**: Type your content request in the chat input
2. **Use Quick Suggestions**: Click on the suggested prompts for instant ideas
3. **Get Comprehensive Results**: Receive detailed content packages including:
   - Multiple hook variations
   - Format recommendations
   - Ready-to-use captions
   - Trending hashtags
   - Audio suggestions
   - Posting strategy tips

### Example Prompts

- "Generate viral fitness content ideas"
- "Create business growth reel concepts"
- "Food recipe content for trending"
- "Lifestyle content that converts"
- "Fashion outfit transition ideas"
- "Tech review content suggestions"

## Content Categories

### Lifestyle
Perfect for daily routines, self-care, productivity, and aesthetic content.

### Business
Ideal for entrepreneurs, startups, marketing tips, and success stories.

### Fitness
Great for workout routines, transformations, nutrition, and motivation.

### Food
Excellent for recipes, cooking hacks, food reviews, and meal prep.

### Fashion
Perfect for outfit ideas, styling tips, thrift finds, and trends.

### Technology
Ideal for app reviews, tech tips, gadget unboxings, and tutorials.

## Built With

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Lucide React** - Icon library
- **CSS3** - Styling with gradients and animations

## Project Structure

```
src/
├── components/
│   ├── ChatBot.tsx          # Main chat interface
│   ├── ChatBot.css          # Chat styling
│   ├── QuickSuggestions.tsx # Quick action buttons
│   └── QuickSuggestions.css # Suggestions styling
├── services/
│   └── contentGenerator.ts  # Content generation logic
├── App.tsx                  # Main app component
├── App.css                  # Global app styles
└── index.css               # Root styles
```

## Customization

### Adding New Content Categories
1. Update the `trendingTopics` object in `contentGenerator.ts`
2. Add new category detection logic
3. Include category-specific pro tips

### Modifying the UI Theme
1. Update CSS custom properties in the component stylesheets
2. Modify gradient colors in the header and buttons
3. Adjust the dark theme colors as needed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Instagram for the inspiration and platform
- React community for the amazing ecosystem
- Content creators who make the platform vibrant

---

**Ready to create viral content? Start chatting with ROWW! 🚀**