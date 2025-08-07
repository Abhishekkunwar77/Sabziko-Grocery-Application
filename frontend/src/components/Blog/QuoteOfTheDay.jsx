import React from "react";

const quotes = [
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Your time is limited, so don\u2019t waste it living someone else\u2019s life.",
    author: "Steve Jobs",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Your time is limited, so don\u2019t waste it living someone else\u2019s life.",
    author: "Steve Jobs",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "Your time is limited, so don\u2019t waste it living someone else\u2019s life.",
    author: "Steve Jobs",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Perseverance is not a long race; it's many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "Perseverance is not a long race; it's many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "It\u2019s not whether you get knocked down, it\u2019s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "You do not find the happy life. You make it.",
    author: "Camilla Eyring Kimball",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "It\u2019s not whether you get knocked down, it\u2019s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Perseverance is not a long race; it's many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "I have not failed. I\u2019ve just found 10,000 ways that won\u2019t work.",
    author: "Thomas Edison",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "I have not failed. I\u2019ve just found 10,000 ways that won\u2019t work.",
    author: "Thomas Edison",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "I have not failed. I\u2019ve just found 10,000 ways that won\u2019t work.",
    author: "Thomas Edison",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Turn your can'ts into cans and your dreams into plans.",
    author: "Unknown",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It\u2019s not whether you get knocked down, it\u2019s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Turn your can'ts into cans and your dreams into plans.",
    author: "Unknown",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "I have not failed. I\u2019ve just found 10,000 ways that won\u2019t work.",
    author: "Thomas Edison",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Your time is limited, so don\u2019t waste it living someone else\u2019s life.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Turn your can'ts into cans and your dreams into plans.",
    author: "Unknown",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "Turn your can'ts into cans and your dreams into plans.",
    author: "Unknown",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Your time is limited, so don\u2019t waste it living someone else\u2019s life.",
    author: "Steve Jobs",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Don\u2019t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Perseverance is not a long race; it's many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Keep your face always toward the sunshine\u2014and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    text: "Try to be a rainbow in someone\u2019s cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Stay close to anything that makes you glad you are alive.",
    author: "Hafez",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "It always seems impossible until it\u2019s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "It\u2019s not whether you get knocked down, it\u2019s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Limit your 'always' and your 'nevers'.",
    author: "Amy Poehler",
  },
  {
    text: "Some people look for a beautiful place. Others make a place beautiful.",
    author: "Hazrat Inayat Khan",
  },
  {
    text: "Be brave. Take risks. Nothing can substitute experience.",
    author: "Paulo Coelho",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "It\u2019s not whether you get knocked down, it\u2019s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Don\u2019t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    text: "I have not failed. I\u2019ve just found 10,000 ways that won\u2019t work.",
    author: "Thomas Edison",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Turn your can'ts into cans and your dreams into plans.",
    author: "Unknown",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Try new things. Don\u2019t be afraid. Step out of your comfort zones and soar.",
    author: "Michelle Obama",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "You miss 100% of the shots you don\u2019t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
];

const getTodayQuote = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % quotes.length;
  return quotes[index];
};

const QuoteOfTheDay = () => {
  const quote = getTodayQuote();

  return (
    <div id='quoteoftheday' className=" bg-gradient-to-r from-[#388E3C] to-[#009688] p-6 rounded-xl shadow-lg max-w-2xl mx-auto  text-center border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Quote of the Day
      </h2>
      <p className="text-lg italic text-gray-700 mb-2">"{quote.text}"</p>
      <p className="text-sm font-medium text-gray-600">– {quote.author}</p>
    </div>
  );
};

export default QuoteOfTheDay;
