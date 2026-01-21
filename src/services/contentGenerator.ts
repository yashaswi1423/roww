// Instagram Reels Content Generator Service
// This service contains comprehensive knowledge about Instagram Reels trends, formats, and content strategies

interface ContentTemplate {
  hooks: string[];
  formats: string[];
  hashtags: string[];
  captions: string[];
}

interface TrendingTopics {
  [key: string]: ContentTemplate;
}

// Comprehensive trending topics and content templates
const trendingTopics: TrendingTopics = {
  lifestyle: {
    hooks: [
      "POV: You're living your best life",
      "Things that just hit different",
      "This changed my entire routine",
      "Plot twist: I actually love this",
      "Tell me you're [lifestyle] without telling me"
    ],
    formats: [
      "Day in my life",
      "Morning/Night routine",
      "What I eat in a day",
      "Outfit transitions",
      "Room makeover"
    ],
    hashtags: [
      "#lifestyle", "#dayinmylife", "#routine", "#aesthetic", "#vibes",
      "#selfcare", "#mindset", "#productivity", "#wellness", "#motivation"
    ],
    captions: [
      "Living proof that small changes make big differences ✨",
      "This is your sign to prioritize yourself 💫",
      "Romanticizing my life one day at a time 🌸"
    ]
  },
  
  business: {
    hooks: [
      "Business tips that actually work",
      "I wish I knew this when I started",
      "This mistake cost me $10k",
      "How I made my first $1k online",
      "Red flags in business partnerships"
    ],
    formats: [
      "Behind the scenes",
      "Mistake to success story",
      "Tool recommendations",
      "Process breakdown",
      "Client testimonial recreation"
    ],
    hashtags: [
      "#entrepreneur", "#businesstips", "#startup", "#hustle", "#success",
      "#marketing", "#socialmedia", "#onlinebusiness", "#passive income", "#mindset"
    ],
    captions: [
      "Your biggest competition is who you were yesterday 📈",
      "Success isn't overnight, but it's worth the wait 💪",
      "Building an empire one post at a time 🏗️"
    ]
  },

  fitness: {
    hooks: [
      "Exercises that changed my body",
      "Why you're not seeing results",
      "This workout hits different",
      "Gym mistakes everyone makes",
      "How I stay motivated"
    ],
    formats: [
      "Workout routine",
      "Form check",
      "Transformation",
      "Meal prep",
      "Gym outfit"
    ],
    hashtags: [
      "#fitness", "#workout", "#gym", "#health", "#transformation",
      "#motivation", "#fitnessmotivation", "#exercise", "#strength", "#cardio"
    ],
    captions: [
      "Your only limit is you 💪",
      "Progress over perfection every single time ⚡",
      "Strong is the new beautiful 🔥"
    ]
  },

  food: {
    hooks: [
      "Recipes that broke the internet",
      "This food hack will save you",
      "Rating viral food trends",
      "Cooking fails vs wins",
      "Foods that taste like childhood"
    ],
    formats: [
      "Recipe tutorial",
      "Food review",
      "Cooking hacks",
      "Ingredient swaps",
      "Restaurant recreation"
    ],
    hashtags: [
      "#food", "#recipe", "#cooking", "#foodie", "#viral",
      "#easyrecipe", "#foodhack", "#homemade", "#delicious", "#yummy"
    ],
    captions: [
      "This recipe is about to be your new obsession 🤤",
      "Proof that good food brings people together 🍽️",
      "Made with love and a little bit of chaos 👩‍🍳"
    ]
  },

  fashion: {
    hooks: [
      "Outfit formulas that never fail",
      "This styling trick changed everything",
      "Expensive vs cheap fashion finds",
      "Outfits for every occasion",
      "Fashion mistakes to avoid"
    ],
    formats: [
      "Outfit transition",
      "Styling tips",
      "Thrift finds",
      "Seasonal wardrobe",
      "Accessory styling"
    ],
    hashtags: [
      "#fashion", "#style", "#outfit", "#ootd", "#styling",
      "#thrift", "#vintage", "#trendy", "#fashioninspo", "#styleinspo"
    ],
    captions: [
      "Confidence is the best accessory you can wear ✨",
      "Style is a way to say who you are without speaking 👗",
      "Fashion fades, but style is eternal 💫"
    ]
  },

  tech: {
    hooks: [
      "Tech hacks that save time",
      "Apps you didn't know you needed",
      "This changed how I work",
      "Tech mistakes costing you money",
      "Future of technology predictions"
    ],
    formats: [
      "App review",
      "Tech setup tour",
      "Productivity tips",
      "Gadget unboxing",
      "Software tutorial"
    ],
    hashtags: [
      "#tech", "#technology", "#productivity", "#apps", "#gadgets",
      "#innovation", "#digital", "#software", "#ai", "#future"
    ],
    captions: [
      "Technology is best when it brings people together 📱",
      "The future is now, and it's in your pocket 🚀",
      "Innovation distinguishes between a leader and a follower 💡"
    ]
  }
};

// Viral content patterns and structures
const viralPatterns = [
  "POV: [scenario]",
  "Tell me you're [thing] without telling me you're [thing]",
  "This is your sign to [action]",
  "Plot twist: [unexpected outcome]",
  "Things that just hit different:",
  "Red flags in [topic]:",
  "Green flags in [topic]:",
  "How to [achieve something] in [timeframe]:",
  "I tried [trend] for [duration] and here's what happened:",
  "Rating [category] as someone who [qualification]:"
];

// Trending audio and music suggestions
const trendingAudio = [
  "Trending pop songs",
  "Viral TikTok sounds",
  "Motivational speeches",
  "Comedy audio clips",
  "Nostalgic throwbacks",
  "Upbeat workout music",
  "Chill aesthetic vibes",
  "Dramatic movie quotes"
];

// Content timing and posting strategies
const postingStrategies = {
  bestTimes: [
    "6-9 AM (morning scroll)",
    "12-2 PM (lunch break)",
    "5-7 PM (after work)",
    "8-10 PM (evening entertainment)"
  ],
  frequency: "1-3 reels per day for optimal engagement",
  consistency: "Post at the same times daily to train your audience"
};

export const generateReelContent = async (userInput: string): Promise<string> => {
  // Simulate API delay for realistic experience
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

  const input = userInput.toLowerCase();
  
  // Determine content category based on user input
  let category = 'lifestyle'; // default
  
  if (input.includes('business') || input.includes('entrepreneur') || input.includes('money') || input.includes('startup')) {
    category = 'business';
  } else if (input.includes('fitness') || input.includes('workout') || input.includes('gym') || input.includes('health')) {
    category = 'fitness';
  } else if (input.includes('food') || input.includes('recipe') || input.includes('cooking') || input.includes('meal')) {
    category = 'food';
  } else if (input.includes('fashion') || input.includes('outfit') || input.includes('style') || input.includes('clothing')) {
    category = 'fashion';
  } else if (input.includes('tech') || input.includes('app') || input.includes('software') || input.includes('gadget')) {
    category = 'tech';
  }

  const template = trendingTopics[category];
  
  // Generate comprehensive content response
  const response = `🎬 **ROWW Content Generation for ${category.toUpperCase()}** 🎬

**🔥 VIRAL HOOK IDEAS:**
${template.hooks.slice(0, 3).map((hook, i) => `${i + 1}. ${hook}`).join('\n')}

**📱 CONTENT FORMAT SUGGESTIONS:**
${template.formats.slice(0, 3).map((format, i) => `${i + 1}. ${format}`).join('\n')}

**✨ TRENDING CAPTION:**
"${template.captions[Math.floor(Math.random() * template.captions.length)]}"

**#️⃣ HASHTAG STRATEGY:**
${template.hashtags.slice(0, 10).join(' ')}

**🎵 AUDIO SUGGESTIONS:**
• ${trendingAudio[Math.floor(Math.random() * trendingAudio.length)]}
• ${trendingAudio[Math.floor(Math.random() * trendingAudio.length)]}

**⏰ OPTIMAL POSTING TIME:**
${postingStrategies.bestTimes[Math.floor(Math.random() * postingStrategies.bestTimes.length)]}

**💡 PRO TIP:**
${getProTip(category)}

**🚀 VIRAL PATTERN TO USE:**
"${viralPatterns[Math.floor(Math.random() * viralPatterns.length)]}"

Want me to generate more specific ideas or dive deeper into any of these suggestions? Just let me know! 🎯`;

  return response;
};

const getProTip = (category: string): string => {
  const tips = {
    lifestyle: "Use natural lighting and keep your content authentic. People connect with real moments!",
    business: "Share your failures along with successes. Vulnerability builds trust and engagement.",
    fitness: "Show proper form and include modifications. Safety and inclusivity boost credibility.",
    food: "Film the sizzle, the pour, the final bite. Sensory content performs incredibly well!",
    fashion: "Mix high and low-end pieces. Your audience loves accessible style inspiration.",
    tech: "Keep explanations simple and show real-world applications. Practical beats complex every time."
  };
  
  return tips[category as keyof typeof tips] || tips.lifestyle;
};