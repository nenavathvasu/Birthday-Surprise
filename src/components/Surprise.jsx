import React, { useState, useEffect, useRef } from "react";
import {
  Container, Row, Col, Card, Button, Modal, Form, ProgressBar,
  Toast, OverlayTrigger, Tooltip, Carousel, Badge, ListGroup,
  Alert
} from "react-bootstrap";
import Confetti from "react-confetti";
import Fireworks from "react-fireworks";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import confetti from "canvas-confetti";

// ------------------------------------------------------------
// 60+ Surprise Features – Ultimate Birthday Experience
// ------------------------------------------------------------
const Surprise = ({ name }) => {
  // --------------------------------------
  // 1. Confetti on load
  // 2. Fireworks trigger
  // --------------------------------------
  const [showConfetti, setShowConfetti] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const triggerFireworks = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  // --------------------------------------
  // 3. Birthday Countdown (mock – tomorrow)
  // --------------------------------------
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextBirthday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = nextBirthday - now;
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // --------------------------------------
  // 4. Hidden Message
  // --------------------------------------
  const [hiddenVisible, setHiddenVisible] = useState(false);

  // --------------------------------------
  // 5. Memory Slideshow (images)
  // --------------------------------------
  const images = [
    "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400",
  ];

  // --------------------------------------
  // 6. 10 Reasons
  // --------------------------------------
  const reasons = [
    "Your smile lights up the room",
    "You always know how to cheer me up",
    "Your kindness is contagious",
    "You're an amazing listener",
    "You make every day brighter",
    "Your creativity inspires me",
    "You're incredibly thoughtful",
    "You have a great sense of humor",
    "You're loyal and trustworthy",
    "You're simply wonderful!",
  ];
  const [reasonIndex, setReasonIndex] = useState(0);
  useEffect(() => {
    if (reasonIndex < reasons.length) {
      const timer = setTimeout(() => setReasonIndex(prev => prev + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [reasonIndex]);

  // --------------------------------------
  // 7. Compliment Generator
  // --------------------------------------
  const compliments = [
    "You're a star!", "You're one of a kind!", "You're magical!",
    "You're brilliant!", "You're sunshine!", "You're fabulous!",
    "You're amazing!", "You're incredible!"
  ];
  const [compliment, setCompliment] = useState("");

  // --------------------------------------
  // 8. Quiz About You (original)
  // --------------------------------------
  const quizQuestions = [
    { q: "What is my favorite color?", options: ["Red", "Blue", "Green", "Yellow"], answer: 1 },
    { q: "Where did we first meet?", options: ["School", "Work", "Party", "Online"], answer: 0 },
    { q: "What's my go‑to birthday treat?", options: ["Chocolate cake", "Ice cream", "Donuts", "Cookies"], answer: 0 },
  ];
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const handleQuizAnswer = (idx) => {
    if (idx === quizQuestions[quizIndex].answer) setQuizScore(prev => prev + 1);
    if (quizIndex + 1 < quizQuestions.length) setQuizIndex(prev => prev + 1);
    else setQuizFinished(true);
  };

  // --------------------------------------
  // 9. Personalized Nickname
  // --------------------------------------
  const nicknames = ["Sunshine", "Champ", "Rockstar", "Sweetheart", "Legend"];
  const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];

  // --------------------------------------
  // 10. Fake Chat
  // --------------------------------------
  const chatMessages = [
    { sender: "them", text: "Hey! Guess what? 🎉" },
    { sender: "me", text: "What?" },
    { sender: "them", text: "It's your birthday!!! 🎂" },
    { sender: "me", text: "Oh wow, you remembered!" },
    { sender: "them", text: "Of course! I have a surprise for you..." },
    { sender: "them", text: "✨✨✨ HAPPY BIRTHDAY! ✨✨✨" },
  ];
  const [chatIndex, setChatIndex] = useState(0);
  useEffect(() => {
    if (chatIndex < chatMessages.length) {
      const timer = setTimeout(() => setChatIndex(prev => prev + 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [chatIndex]);

  // --------------------------------------
  // 11. Timeline
  // --------------------------------------
  const timeline = [
    { year: 2020, text: "First met!", img: "https://via.placeholder.com/50/ff6b6b/fff?text=1" },
    { year: 2021, text: "Became best friends", img: "https://via.placeholder.com/50/feca57/fff?text=2" },
    { year: 2022, text: "First birthday together", img: "https://via.placeholder.com/50/48dbfb/fff?text=3" },
    { year: 2023, text: "So many memories!", img: "https://via.placeholder.com/50/ff9ff3/fff?text=4" },
  ];

  // --------------------------------------
  // 12. Balloon Pop Game
  // --------------------------------------
  const [balloons, setBalloons] = useState(() =>
    Array.from({ length: 9 }, (_, i) => ({
      id: i,
      popped: false,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }))
  );
  const popBalloon = (id) => {
    setBalloons(prev => prev.map(b => (b.id === id ? { ...b, popped: true } : b)));
    confetti({ particleCount: 20, spread: 70, origin: { y: 0.6 } });
  };
  const resetGame = () => {
    setBalloons(
      Array.from({ length: 9 }, (_, i) => ({
        id: i,
        popped: false,
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      }))
    );
  };

  // --------------------------------------
  // 13. Scratch Card
  // --------------------------------------
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#aaa";
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, []);
  const handleScratch = (e) => {
    if (scratchRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) cleared++;
    }
    if (cleared / (canvas.width * canvas.height) > 0.4) {
      setScratchRevealed(true);
    }
  };

  // --------------------------------------
  // 14. Interactive Cake
  // --------------------------------------
  const [candlesLit, setCandlesLit] = useState(0);
  const lightCandle = () => {
    if (candlesLit < 5) setCandlesLit(prev => prev + 1);
  };

  // --------------------------------------
  // 15. Pop-up Toast
  // --------------------------------------
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const popups = ["You're awesome!", "Have a great day!", "Keep smiling!", "You rock!"];
  const showRandomPopup = () => {
    setToastMsg(popups[Math.floor(Math.random() * popups.length)]);
    setShowToast(true);
  };

  // --------------------------------------
  // 16. Typewriter Name
  // --------------------------------------
  const [typedName] = useTypewriter({
    words: [name],
    loop: 1,
    typeSpeed: 100,
  });

  // --------------------------------------
  // 17. Age Calculator
  // --------------------------------------
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    if (birthYear) {
      const currentYear = new Date().getFullYear();
      setAge(currentYear - parseInt(birthYear));
    }
  };

  // --------------------------------------
  // 18. Birthday Song Player
  // --------------------------------------
  const [songPlaying, setSongPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));
  const toggleSong = () => {
    if (songPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setSongPlaying(!songPlaying);
  };

  // --------------------------------------
  // 19. Virtual Gift Box
  // --------------------------------------
  const [giftOpen, setGiftOpen] = useState(false);

  // --------------------------------------
  // 20. Fortune Teller
  // --------------------------------------
  const fortunes = ["A wonderful surprise is coming your way!", "You will receive a big hug soon!", "Today is full of joy!", "Someone is thinking of you right now."];
  const [fortune, setFortune] = useState("");

  // --------------------------------------
  // 21. This or That
  // --------------------------------------
  const thisThat = [
    { option1: "Cake", option2: "Ice Cream" },
    { option1: "Party", option2: "Quiet dinner" },
    { option1: "Gifts", option2: "Surprises" },
  ];
  const [thisThatIndex, setThisThatIndex] = useState(0);

  // --------------------------------------
  // 22. Would You Rather
  // --------------------------------------
  const wyr = [
    "Have endless cake OR unlimited ice cream?",
    "Have a huge party OR a vacation with besties?",
    "Get a funny gift OR a sentimental one?",
  ];
  const [wyrIndex, setWyrIndex] = useState(0);

  // --------------------------------------
  // 23. Emoji Story
  // --------------------------------------
  const stories = [
    "🎂🎈🎉 You + Party = Awesome",
    "🎁💖✨ You deserve all the happiness",
    "🥳🎂🎊 Another year, another adventure",
  ];
  const [storyIndex, setStoryIndex] = useState(0);

  // --------------------------------------
  // 24. Playlist Suggestions
  // --------------------------------------
  const playlist = [
    "Happy Birthday Song",
    "Celebration by Kool & The Gang",
    "Best Day of My Life",
    "Happy by Pharrell",
  ];

  // --------------------------------------
  // 25. Birthday Predictions
  // --------------------------------------
  const predictions = [
    "You will have an amazing year ahead!",
    "A surprise adventure awaits you!",
    "Great success in your career!",
    "Love is in the air!",
  ];

  // --------------------------------------
  // 26. Virtual Party Hats
  // --------------------------------------
  const hats = ["🎩", "🧢", "👒", "🎓", "⛑️"];
  const [hat, setHat] = useState(hats[0]);

  // --------------------------------------
  // 27. Sparkles Mouse Trail
  // --------------------------------------
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --------------------------------------
  // 28. Midnight Countdown
  // --------------------------------------
  const [timeToMidnight, setTimeToMidnight] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeToMidnight(`${hours}h ${mins}m ${secs}s`);
      } else {
        setTimeToMidnight("It's party time!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // --------------------------------------
  // 29. Custom Message
  // --------------------------------------
  const [customMessage, setCustomMessage] = useState("You're the best! 🥳");

  // --------------------------------------
  // 30. Photo Upload
  // --------------------------------------
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPhoto(URL.createObjectURL(file));
    }
  };

  // --------------------------------------
  // 31. Floating Balloons (background)
  // --------------------------------------
  // Already in render.

  // ========== NEW FEATURES (31–60+) ==========

  // 32. Spin the Wheel
  const wheelOptions = ["🎂 Cake", "🍦 Ice Cream", "🎉 Party", "🎁 Gift", "✨ Surprise", "💃 Dance"];
  const [wheelResult, setWheelResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWheelResult(null);
    setTimeout(() => {
      const random = Math.floor(Math.random() * wheelOptions.length);
      setWheelResult(wheelOptions[random]);
      setSpinning(false);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
    }, 2000);
  };

  // 33. Memory Match Game
  const memoryIcons = ["🎂", "🎈", "🎁", "🎉", "🎊", "🥳", "🍰", "🧁"];
  const [memoryCards, setMemoryCards] = useState(() => {
    const shuffled = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - 0.5);
    return shuffled.map((icon, idx) => ({ id: idx, icon, flipped: false, matched: false }));
  });
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [memoryDisabled, setMemoryDisabled] = useState(false);
  const handleMemoryClick = (idx) => {
    if (memoryDisabled || memoryCards[idx].flipped || memoryCards[idx].matched) return;
    const newCards = [...memoryCards];
    newCards[idx].flipped = true;
    setMemoryCards(newCards);
    const newFlipped = [...flippedIndices, idx];
    setFlippedIndices(newFlipped);
    if (newFlipped.length === 2) {
      setMemoryDisabled(true);
      const [first, second] = newFlipped;
      if (memoryCards[first].icon === memoryCards[second].icon) {
        setTimeout(() => {
          setMemoryCards(prev => prev.map((c, i) =>
            i === first || i === second ? { ...c, matched: true } : c
          ));
          setFlippedIndices([]);
          setMemoryDisabled(false);
        }, 500);
      } else {
        setTimeout(() => {
          setMemoryCards(prev => prev.map((c, i) =>
            i === first || i === second ? { ...c, flipped: false } : c
          ));
          setFlippedIndices([]);
          setMemoryDisabled(false);
        }, 500);
      }
    }
  };
  const resetMemory = () => {
    const shuffled = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - 0.5);
    setMemoryCards(shuffled.map((icon, idx) => ({ id: idx, icon, flipped: false, matched: false })));
    setFlippedIndices([]);
  };

  // 34. Tic-Tac-Toe (Birthday edition)
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of lines) {
      const [a,b,c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  const handleClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? "🎂" : "🎈";
    setBoard(newBoard);
    const win = calculateWinner(newBoard);
    if (win) {
      setWinner(win);
      confetti({ particleCount: 100, spread: 70 });
    }
    setXIsNext(!xIsNext);
  };
  const resetTicTacToe = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  // 35. Trivia Quiz (10 new questions)
  const triviaQuestions = [
    { q: "What is the birth flower of January?", options: ["Carnation", "Snowdrop", "Rose", "Tulip"], answer: 0 },
    { q: "Which country started the tradition of birthday cakes?", options: ["Greece", "Egypt", "Germany", "China"], answer: 2 },
    { q: "How many candles are on the average birthday cake?", options: ["30", "40", "50", "It varies"], answer: 3 },
    { q: "What does 'Happy Birthday' mean in French?", options: ["Joyeux Anniversaire", "Bon Anniversaire", "Fête", "Anniversaire Heureux"], answer: 0 },
    { q: "Which song is the most recognized in the English language?", options: ["Happy Birthday", "Twinkle Twinkle", "ABCs", "National Anthem"], answer: 0 },
    { q: "What is the birthstone for August?", options: ["Peridot", "Ruby", "Sapphire", "Emerald"], answer: 0 },
    { q: "In which country is it customary to eat noodles on your birthday?", options: ["China", "Japan", "Italy", "Korea"], answer: 0 },
    { q: "What is the zodiac sign for April 20?", options: ["Taurus", "Aries", "Gemini", "Pisces"], answer: 0 },
    { q: "Which president had a birthday that is also a national holiday?", options: ["Washington", "Lincoln", "Jefferson", "Roosevelt"], answer: 0 },
    { q: "What is the most common birthday in the US?", options: ["September 9", "July 4", "December 25", "January 1"], answer: 0 },
  ];
  const [triviaIndex, setTriviaIndex] = useState(0);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaFinished, setTriviaFinished] = useState(false);
  const handleTriviaAnswer = (idx) => {
    if (idx === triviaQuestions[triviaIndex].answer) setTriviaScore(prev => prev + 1);
    if (triviaIndex + 1 < triviaQuestions.length) setTriviaIndex(prev => prev + 1);
    else setTriviaFinished(true);
  };

  // 36. Word Scramble
  const words = ["BIRTHDAY", "CAKE", "CANDLE", "PARTY", "GIFT", "SURPRISE"];
  const [currentWord, setCurrentWord] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [guess, setGuess] = useState("");
  const [wordResult, setWordResult] = useState("");
  const newWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambled(word.split('').sort(() => Math.random() - 0.5).join(''));
    setGuess("");
    setWordResult("");
  };
  useEffect(() => {
    newWord();
  }, []);
  const checkGuess = () => {
    if (guess.toUpperCase() === currentWord) {
      setWordResult("✅ Correct!");
      confetti({ particleCount: 30 });
    } else {
      setWordResult("❌ Try again!");
    }
  };

  // 37. Emoji Guessing Game
  const emojiClues = [
    { emoji: "🎂🎈🎉", answer: "Birthday Party" },
    { emoji: "🍰🕯️", answer: "Cake and Candle" },
    { emoji: "🎁🎀", answer: "Gift" },
    { emoji: "🥳🎊", answer: "Celebration" },
  ];
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [emojiGuess, setEmojiGuess] = useState("");
  const [emojiResult, setEmojiResult] = useState("");
  const checkEmoji = () => {
    if (emojiGuess.toLowerCase() === emojiClues[emojiIndex].answer.toLowerCase()) {
      setEmojiResult("✅ You got it!");
      confetti({ particleCount: 30 });
    } else {
      setEmojiResult("❌ Nope!");
    }
  };

  // 38. Joke Generator
  const jokes = [
    "Why do we put candles on top of cakes? Because it's too hard to put them on the bottom!",
    "What does a cake say after a fight? 'I'm icing on the cake!'",
    "Why was the birthday cake so late? It got stuck in traffic – it was a layer cake!",
    "What's a cake's favorite song? 'Happy Birthday to You'!",
  ];
  const [joke, setJoke] = useState("");

  // 39. Riddle Generator
  const riddles = [
    { riddle: "I have a face but no eyes, hands but no arms. What am I?", answer: "Clock" },
    { riddle: "The more you take, the more you leave behind. What are they?", answer: "Footsteps" },
    { riddle: "What has to be broken before you can use it?", answer: "Egg" },
    { riddle: "I'm tall when I'm young, and short when I'm old. What am I?", answer: "Candle" },
  ];
  const [riddleIndex, setRiddleIndex] = useState(0);
  const [showRiddleAnswer, setShowRiddleAnswer] = useState(false);

  // 40. Pick a Card (Fortune)
  const cards = ["Ace of Joy", "King of Happiness", "Queen of Surprises", "Joker of Laughter"];
  const [drawnCard, setDrawnCard] = useState(null);

  // 41. Dice Roll
  const [dice, setDice] = useState(1);
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    confetti({ particleCount: 20 });
  };

  // 42. Coin Flip
  const [coin, setCoin] = useState("Heads");
  const flipCoin = () => {
    setCoin(Math.random() > 0.5 ? "Heads" : "Tails");
  };

  // 43. Rock Paper Scissors
  const rpsOptions = ["🪨 Rock", "📄 Paper", "✂️ Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [rpsResult, setRpsResult] = useState("");
  const playRPS = (choice) => {
    const comp = rpsOptions[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(comp);
    if (choice === comp) setRpsResult("🤝 Tie!");
    else if (
      (choice === "🪨 Rock" && comp === "✂️ Scissors") ||
      (choice === "📄 Paper" && comp === "🪨 Rock") ||
      (choice === "✂️ Scissors" && comp === "📄 Paper")
    ) {
      setRpsResult("🎉 You win!");
      confetti({ particleCount: 40 });
    } else {
      setRpsResult("😢 You lose!");
    }
  };

  // 44. Birthday Bingo (simple version)
  const bingoNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const [bingoCard, setBingoCard] = useState(() => {
    const shuffled = [...bingoNumbers].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 9); // 3x3
  });
  const [marked, setMarked] = useState(Array(9).fill(false));
  const markBingo = (idx) => {
    const newMarked = [...marked];
    newMarked[idx] = !newMarked[idx];
    setMarked(newMarked);
  };
  const resetBingo = () => {
    const shuffled = [...bingoNumbers].sort(() => Math.random() - 0.5);
    setBingoCard(shuffled.slice(0, 9));
    setMarked(Array(9).fill(false));
  };

  // 45. Hangman (simplified)
  const hangmanWords = ["CAKE", "PARTY", "BALLOON", "GIFT"];
  const [hangmanWord, setHangmanWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hangmanAttempts, setHangmanAttempts] = useState(6);
  const [hangmanResult, setHangmanResult] = useState(null);
  const newHangman = () => {
    const word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    setHangmanWord(word);
    setGuessedLetters([]);
    setHangmanAttempts(6);
    setHangmanResult(null);
  };
  useEffect(() => { newHangman(); }, []);
  const guessLetter = (letter) => {
    if (guessedLetters.includes(letter) || hangmanResult) return;
    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);
    if (!hangmanWord.includes(letter)) {
      const newAttempts = hangmanAttempts - 1;
      setHangmanAttempts(newAttempts);
      if (newAttempts === 0) setHangmanResult("💀 You lost!");
    } else {
      const won = hangmanWord.split('').every(l => newGuessed.includes(l));
      if (won) {
        setHangmanResult("🎉 You won!");
        confetti({ particleCount: 50 });
      }
    }
  };
  const hangmanDisplay = hangmanWord.split('').map(l => (guessedLetters.includes(l) ? l : '_')).join(' ');

  // 46. Number Guessing Game
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [numberGuess, setNumberGuess] = useState("");
  const [numberHint, setNumberHint] = useState("");
  const checkNumber = () => {
    const guess = parseInt(numberGuess);
    if (isNaN(guess)) return;
    if (guess === secretNumber) {
      setNumberHint("🎉 Correct! You guessed it!");
      confetti({ particleCount: 50 });
    } else if (guess < secretNumber) {
      setNumberHint("📉 Too low!");
    } else {
      setNumberHint("📈 Too high!");
    }
  };
  const resetNumberGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setNumberGuess("");
    setNumberHint("");
  };

  // 47. Reaction Time Game
  const [reactionActive, setReactionActive] = useState(false);
  const [reactionStart, setReactionStart] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const startReaction = () => {
    setReactionTime(null);
    setReactionActive(true);
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
      setReactionStart(Date.now());
    }, delay);
  };
  const stopReaction = () => {
    if (reactionStart) {
      setReactionTime(Date.now() - reactionStart);
      setReactionActive(false);
      setReactionStart(null);
    }
  };

  // 48. Click the Cake (Whack-a-Mole style)
  const [cakePosition, setCakePosition] = useState({ row: 0, col: 0 });
  const [cakeScore, setCakeScore] = useState(0);
  useEffect(() => {
    if (cakeScore < 10) {
      const interval = setInterval(() => {
        setCakePosition({
          row: Math.floor(Math.random() * 3),
          col: Math.floor(Math.random() * 3),
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [cakeScore]);
  const catchCake = (r, c) => {
    if (r === cakePosition.row && c === cakePosition.col) {
      setCakeScore(prev => prev + 1);
      confetti({ particleCount: 10 });
    }
  };

  // 49. Finish the Lyric
  const lyrics = [
    { line: "Happy birthday to you, happy birthday to you, happy birthday dear...", answer: "name" },
    { line: "You are my sunshine, my only sunshine, you make me happy when...", answer: "skies are grey" },
    { line: "For he's a jolly good fellow, for he's a jolly good fellow, which nobody can...", answer: "deny" },
  ];
  const [lyricIndex, setLyricIndex] = useState(0);
  const [lyricGuess, setLyricGuess] = useState("");
  const [lyricResult, setLyricResult] = useState("");

  // 50. Story Completion
  const storyStarters = [
    "Once upon a birthday, a magical unicorn appeared...",
    "The birthday cake suddenly started talking...",
    "A gift box opened and out jumped...",
  ];
  const [storyStarter, setStoryStarter] = useState(storyStarters[0]);
  const [userStory, setUserStory] = useState("");

  // 51. Mad Libs (simple)
  const [madLibNoun, setMadLibNoun] = useState("");
  const [madLibVerb, setMadLibVerb] = useState("");
  const [madLibAdj, setMadLibAdj] = useState("");
  const [madLibStory, setMadLibStory] = useState("");

  // 52. Magic 8-Ball
  const magicAnswers = ["Yes", "No", "Maybe", "Ask again", "Definitely", "Never"];
  const [magicAnswer, setMagicAnswer] = useState("");

  // 53. Emoji Story Creator
  const [emojiStory, setEmojiStory] = useState("");

  // 54. Playlist Maker (user picks)
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [playlistInput, setPlaylistInput] = useState("");

  // 55. Birthday Wish Generator
  const wishTemplates = [
    "Wishing you a day filled with love and laughter!",
    "May all your birthday dreams come true!",
    "Another year older, another year bolder!",
  ];
  const [generatedWish, setGeneratedWish] = useState("");

  // 56. Compliment Wheel (different from generator)
  const [complimentWheel, setComplimentWheel] = useState("");

  // 57. Virtual Birthday Card Creator
  const [cardMessage, setCardMessage] = useState("");
  const [cardSticker, setCardSticker] = useState("🎂");

  // 58. Memory Lane with More Timeline
  const extendedTimeline = [
    ...timeline,
    { year: 2024, text: "Another amazing year!", img: "https://via.placeholder.com/50/ff6b6b/fff?text=5" },
    { year: 2025, text: "Today!", img: "https://via.placeholder.com/50/feca57/fff?text=6" },
  ];

  // 59. Photo Booth Frames
  const [frame, setFrame] = useState(0);
  const frames = ["🎞️", "📸", "🖼️", "📷"];

  // 60. Birthday Countdown to Different Events (next birthday, party time, etc.)
  const [eventCountdown, setEventCountdown] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const partyTime = new Date(now);
      partyTime.setHours(20, 0, 0, 0); // 8 PM tonight
      const diff = partyTime - now;
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setEventCountdown(`${hours}h ${mins}m ${secs}s until party!`);
      } else {
        setEventCountdown("Party time now!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // --------------------------------------
  // Render
  // --------------------------------------
  return (
    <>
      {/* Confetti & Fireworks */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      {showFireworks && (
        <Fireworks style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }} />
      )}

      {/* Floating balloons background */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              width: 40 + Math.random() * 30,
              height: 50 + Math.random() * 40,
              backgroundColor: `hsl(${Math.random() * 360}, 80%, 70%)`,
              borderRadius: "50%",
              bottom: -100,
              boxShadow: "inset -5px -5px rgba(0,0,0,0.1)",
            }}
            animate={{ y: [0, -window.innerHeight - 200] }}
            transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 8 }}
          />
        ))}
      </div>

      {/* Main content with gradient background */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "relative",
          zIndex: 2,
          padding: "2rem 0",
        }}
      >
        <Container>
          {/* Header with typed name */}
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h1 className="display-3 fw-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                Happy Birthday <span className="typewriter">{typedName}</span>! 🎉
              </h1>
              <Button variant="warning" size="lg" onClick={triggerFireworks} className="mt-3">
                🎆 Light Up the Sky 🎆
              </Button>
            </Col>
          </Row>

          {/* Feature Grid – First Row (original) */}
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>🎂 Countdown to Next Birthday</Card.Title>
                  <h2>{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>🤫 Hidden Message</Card.Title>
                  {!hiddenVisible ? (
                    <Button variant="outline-primary" onClick={() => setHiddenVisible(true)}>Reveal</Button>
                  ) : (
                    <p className="lead">You are the reason for my smile! ❤️</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>💖 Your Special Nickname</Card.Title>
                  <h3>{nickname}</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>10 Reasons Why You're Amazing</Card.Title>
                  <ul className="list-unstyled">
                    {reasons.slice(0, reasonIndex).map((r, i) => (
                      <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
                        ✅ {r}
                      </motion.li>
                    ))}
                  </ul>
                  {reasonIndex >= reasons.length && <Badge bg="success">That's all 10!</Badge>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>✨ Compliment Generator</Card.Title>
                  <Button onClick={() => setCompliment(compliments[Math.floor(Math.random() * compliments.length)])} variant="info" className="mb-3">
                    Get Compliment
                  </Button>
                  {compliment && <p className="lead">{compliment}</p>}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>❓ Quiz About You</Card.Title>
                  {!quizFinished ? (
                    <>
                      <p>{quizQuestions[quizIndex].q}</p>
                      {quizQuestions[quizIndex].options.map((opt, idx) => (
                        <Button key={idx} variant="outline-secondary" className="m-1" onClick={() => handleQuizAnswer(idx)}>
                          {opt}
                        </Button>
                      ))}
                    </>
                  ) : (
                    <p>You scored {quizScore} / {quizQuestions.length}! 🎯</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>💬 Fake Chat</Card.Title>
                  <div style={{ height: 200, overflowY: "auto", background: "#f1f1f1", padding: 10, borderRadius: 10 }}>
                    {chatMessages.slice(0, chatIndex).map((msg, i) => (
                      <div key={i} className={`d-flex ${msg.sender === "me" ? "justify-content-end" : "justify-content-start"} mb-2`}>
                        <div style={{ maxWidth: "70%", background: msg.sender === "me" ? "#007bff" : "#e9ecef", color: msg.sender === "me" ? "white" : "black", borderRadius: 10, padding: "5px 10px" }}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📸 Memory Slideshow</Card.Title>
                  <Carousel>
                    {images.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img className="d-block w-100" src={src} alt={`memory ${i}`} style={{ height: 200, objectFit: "cover" }} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📅 Friendship Timeline</Card.Title>
                  {extendedTimeline.map((item, i) => (
                    <div key={i} className="d-flex align-items-center mb-2">
                      <img src={item.img} alt="year" className="me-2 rounded-circle" width="40" height="40" />
                      <div><strong>{item.year}</strong>: {item.text}</div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>🎈 Balloon Pop Game</Card.Title>
                  <div style={{ height: 250, background: "#e0f7fa", borderRadius: 10, position: "relative", overflow: "hidden" }}>
                    {balloons.map(b => !b.popped && (
                      <div key={b.id} onClick={() => popBalloon(b.id)} style={{ position: "absolute", left: `${b.x}%`, top: `${b.y}%`, width: 35, height: 45, backgroundColor: b.color, borderRadius: "50%", cursor: "pointer" }} />
                    ))}
                  </div>
                  {balloons.every(b => b.popped) && <Button onClick={resetGame} size="sm" className="mt-2">Play Again</Button>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>🪙 Scratch to Reveal</Card.Title>
                  <div style={{ position: "relative", width: "100%", height: 150, borderRadius: 10, overflow: "hidden" }}>
                    <canvas ref={canvasRef} width={300} height={150} onMouseMove={handleScratch} onMouseDown={() => setIsDrawing(true)} onMouseUp={() => setIsDrawing(false)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", cursor: "pointer" }} />
                    {scratchRevealed && (
                      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#feca57", color: "white", fontWeight: "bold" }}>
                        🎁 You're Amazing!
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎂 Interactive Cake</Card.Title>
                  <div style={{ position: "relative", height: 150 }}>
                    <div style={{ width: "100%", height: 40, background: "#8B4513", borderRadius: 10, position: "absolute", bottom: 0 }} />
                    <div style={{ width: "80%", height: 30, background: "#D2691E", borderRadius: 10, position: "absolute", bottom: 40, left: "10%" }} />
                    <div style={{ width: "60%", height: 30, background: "#F4A460", borderRadius: 10, position: "absolute", bottom: 70, left: "20%" }} />
                    {[...Array(5)].map((_, i) => (
                      <div key={i} onClick={lightCandle} style={{ position: "absolute", bottom: 100, left: `${25 + i * 30}px`, width: 8, height: 40, background: "#FFF0F5", cursor: "pointer" }}>
                        {i < candlesLit && <div style={{ width: 12, height: 12, background: "orange", borderRadius: "50%", position: "absolute", top: -6, left: -2, animation: "flicker 0.2s infinite alternate" }} />}
                      </div>
                    ))}
                  </div>
                  <p>{candlesLit}/5 candles lit</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📅 Age Calculator</Card.Title>
                  <Form.Control type="number" placeholder="Birth year" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
                  <Button className="mt-2" onClick={calculateAge}>Calculate</Button>
                  {age && <p className="mt-2">You are {age} years old!</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎵 Birthday Song</Card.Title>
                  <Button onClick={toggleSong}>{songPlaying ? "Pause" : "Play"} Song</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎁 Virtual Gift</Card.Title>
                  <motion.div animate={{ scale: giftOpen ? 1.2 : 1 }} onClick={() => setGiftOpen(true)} style={{ fontSize: "4rem", cursor: "pointer" }}>
                    {giftOpen ? "🎉" : "🎁"}
                  </motion.div>
                  {giftOpen && <p>Surprise! You're the best!</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔮 Fortune</Card.Title>
                  <Button onClick={() => setFortune(fortunes[Math.floor(Math.random() * fortunes.length)])}>Get Fortune</Button>
                  {fortune && <p className="mt-2">{fortune}</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>⚡ This or That?</Card.Title>
                  <p>{thisThat[thisThatIndex].option1}  vs  {thisThat[thisThatIndex].option2}</p>
                  <Button size="sm" onClick={() => setThisThatIndex((thisThatIndex + 1) % thisThat.length)}>Next</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🤔 Would You Rather</Card.Title>
                  <p>{wyr[wyrIndex]}</p>
                  <Button size="sm" onClick={() => setWyrIndex((wyrIndex + 1) % wyr.length)}>Next</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>😊 Emoji Story</Card.Title>
                  <p>{stories[storyIndex]}</p>
                  <Button size="sm" onClick={() => setStoryIndex((storyIndex + 1) % stories.length)}>Next</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>🎧 Party Playlist</Card.Title>
                  <ul>{playlist.map((song, i) => <li key={i}>{song}</li>)}</ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔮 Birthday Prediction</Card.Title>
                  <p>{predictions[Math.floor(Math.random() * predictions.length)]}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎩 Party Hat</Card.Title>
                  <div style={{ fontSize: "3rem" }} onClick={() => setHat(hats[Math.floor(Math.random() * hats.length)])}>{hat}</div>
                  <p>Click to change</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🌙 Time to Midnight</Card.Title>
                  <h4>{timeToMidnight}</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>💌 A Special Message for You</Card.Title>
                  <p>{customMessage}</p>
                  <Form.Control as="textarea" rows={2} value={customMessage} onChange={(e) => setCustomMessage(e.target.value)} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📸 Upload a Memory</Card.Title>
                  <Form.Control type="file" accept="image/*" onChange={handlePhotoUpload} />
                  {uploadedPhoto && <img src={uploadedPhoto} alt="upload" style={{ width: "100%", marginTop: 10, borderRadius: 10 }} />}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* ========== NEW FEATURES ROWS ========== */}

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎡 Spin the Wheel</Card.Title>
                  <Button onClick={spinWheel} disabled={spinning}>Spin</Button>
                  {spinning && <p>Spinning...</p>}
                  {wheelResult && <h3>{wheelResult}</h3>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>🧠 Memory Match</Card.Title>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
                    {memoryCards.map((card, idx) => (
                      <Button key={idx} variant={card.flipped || card.matched ? "primary" : "secondary"} onClick={() => handleMemoryClick(idx)} disabled={card.flipped || card.matched} style={{ height: "50px" }}>
                        {card.flipped || card.matched ? card.icon : "?"}
                      </Button>
                    ))}
                  </div>
                  {memoryCards.every(c => c.matched) && <Button size="sm" onClick={resetMemory} className="mt-2">Play Again</Button>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>⭕ Tic‑Tac‑Toe</Card.Title>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
                    {board.map((cell, i) => (
                      <Button key={i} variant="outline-primary" onClick={() => handleClick(i)} style={{ height: "50px", fontSize: "1.5rem" }}>
                        {cell}
                      </Button>
                    ))}
                  </div>
                  {winner ? <h5>Winner: {winner}</h5> : <p>Next: {xIsNext ? "🎂" : "🎈"}</p>}
                  <Button size="sm" onClick={resetTicTacToe}>Reset</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>❓ Trivia Quiz</Card.Title>
                  {!triviaFinished ? (
                    <>
                      <p>{triviaQuestions[triviaIndex].q}</p>
                      {triviaQuestions[triviaIndex].options.map((opt, idx) => (
                        <Button key={idx} variant="outline-secondary" size="sm" className="m-1" onClick={() => handleTriviaAnswer(idx)}>
                          {opt}
                        </Button>
                      ))}
                    </>
                  ) : (
                    <p>You scored {triviaScore} / {triviaQuestions.length}! 🎯</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔤 Word Scramble</Card.Title>
                  <h3>{scrambled}</h3>
                  <Form.Control type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
                  <Button className="mt-2" onClick={checkGuess}>Check</Button>
                  {wordResult && <p>{wordResult}</p>}
                  <Button size="sm" onClick={newWord}>New Word</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>😃 Emoji Guessing</Card.Title>
                  <h2>{emojiClues[emojiIndex].emoji}</h2>
                  <Form.Control type="text" value={emojiGuess} onChange={(e) => setEmojiGuess(e.target.value)} />
                  <Button className="mt-2" onClick={checkEmoji}>Guess</Button>
                  {emojiResult && <p>{emojiResult}</p>}
                  <Button size="sm" onClick={() => { setEmojiIndex((emojiIndex + 1) % emojiClues.length); setEmojiGuess(""); setEmojiResult(""); }}>Next</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>😂 Joke</Card.Title>
                  <p>{joke}</p>
                  <Button onClick={() => setJoke(jokes[Math.floor(Math.random() * jokes.length)])}>Tell Me a Joke</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🤔 Riddle</Card.Title>
                  <p>{riddles[riddleIndex].riddle}</p>
                  <Button onClick={() => setShowRiddleAnswer(!showRiddleAnswer)}>
                    {showRiddleAnswer ? "Hide Answer" : "Show Answer"}
                  </Button>
                  {showRiddleAnswer && <p className="mt-2">Answer: {riddles[riddleIndex].answer}</p>}
                  <Button size="sm" onClick={() => { setRiddleIndex((riddleIndex + 1) % riddles.length); setShowRiddleAnswer(false); }}>Next Riddle</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🃏 Pick a Card</Card.Title>
                  <Button onClick={() => setDrawnCard(cards[Math.floor(Math.random() * cards.length)])}>Draw Card</Button>
                  {drawnCard && <h4>{drawnCard}</h4>}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎲 Dice</Card.Title>
                  <h1>{dice}</h1>
                  <Button onClick={rollDice}>Roll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🪙 Coin</Card.Title>
                  <h3>{coin}</h3>
                  <Button onClick={flipCoin}>Flip</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🪨📄✂️ Rock Paper Scissors</Card.Title>
                  <div className="d-flex justify-content-center gap-2">
                    {rpsOptions.map(opt => (
                      <Button key={opt} onClick={() => playRPS(opt)}>{opt}</Button>
                    ))}
                  </div>
                  {playerChoice && (
                    <>
                      <p>You: {playerChoice} | Computer: {computerChoice}</p>
                      <h5>{rpsResult}</h5>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔢 Birthday Bingo</Card.Title>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
                    {bingoCard.map((num, idx) => (
                      <Button key={idx} variant={marked[idx] ? "success" : "outline-primary"} onClick={() => markBingo(idx)}>
                        {num}
                      </Button>
                    ))}
                  </div>
                  <Button size="sm" onClick={resetBingo} className="mt-2">New Card</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>😵 Hangman</Card.Title>
                  <p>{hangmanDisplay}</p>
                  <p>Attempts left: {hangmanAttempts}</p>
                  <div>
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter => (
                      <Button key={letter} size="sm" variant="outline-secondary" className="m-1" onClick={() => guessLetter(letter)} disabled={guessedLetters.includes(letter) || hangmanResult}>
                        {letter}
                      </Button>
                    ))}
                  </div>
                  {hangmanResult && <Alert variant="info">{hangmanResult}</Alert>}
                  <Button size="sm" onClick={newHangman}>New Game</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔢 Number Guessing</Card.Title>
                  <p>Guess a number 1‑100</p>
                  <Form.Control type="number" value={numberGuess} onChange={(e) => setNumberGuess(e.target.value)} />
                  <Button className="mt-2" onClick={checkNumber}>Guess</Button>
                  {numberHint && <p>{numberHint}</p>}
                  <Button size="sm" onClick={resetNumberGame}>New Number</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>⚡ Reaction Time</Card.Title>
                  {!reactionActive && !reactionStart && <Button onClick={startReaction}>Start</Button>}
                  {reactionActive && <Button variant="danger" onClick={stopReaction}>Click when ready!</Button>}
                  {reactionTime && <p>Your time: {reactionTime} ms</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🍰 Catch the Cake!</Card.Title>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px", height: "150px" }}>
                    {[...Array(3)].map((_, r) => [...Array(3)].map((_, c) => (
                      <Button key={`${r}-${c}`} variant="outline-warning" onClick={() => catchCake(r, c)} style={{ height: "100%", fontSize: "2rem" }}>
                        {r === cakePosition.row && c === cakePosition.col ? "🍰" : ""}
                      </Button>
                    ))).flat()}
                  </div>
                  <p>Score: {cakeScore} / 10</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎤 Finish the Lyric</Card.Title>
                  <p>{lyrics[lyricIndex].line}</p>
                  <Form.Control type="text" value={lyricGuess} onChange={(e) => setLyricGuess(e.target.value)} />
                  <Button className="mt-2" onClick={() => {
                    if (lyricGuess.toLowerCase().includes(lyrics[lyricIndex].answer)) {
                      setLyricResult("✅ Correct!");
                      confetti({ particleCount: 30 });
                    } else {
                      setLyricResult("❌ Try again!");
                    }
                  }}>Check</Button>
                  {lyricResult && <p>{lyricResult}</p>}
                  <Button size="sm" onClick={() => { setLyricIndex((lyricIndex + 1) % lyrics.length); setLyricGuess(""); setLyricResult(""); }}>Next</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📖 Story Completion</Card.Title>
                  <p>{storyStarter}</p>
                  <Form.Control as="textarea" rows={2} placeholder="Continue the story..." value={userStory} onChange={(e) => setUserStory(e.target.value)} />
                  <Button size="sm" className="mt-2" onClick={() => setStoryStarter(storyStarters[Math.floor(Math.random() * storyStarters.length)])}>New Starter</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>📝 Mad Libs</Card.Title>
                  <Form.Control placeholder="Noun" value={madLibNoun} onChange={(e) => setMadLibNoun(e.target.value)} className="mb-2" />
                  <Form.Control placeholder="Verb" value={madLibVerb} onChange={(e) => setMadLibVerb(e.target.value)} className="mb-2" />
                  <Form.Control placeholder="Adjective" value={madLibAdj} onChange={(e) => setMadLibAdj(e.target.value)} className="mb-2" />
                  <Button onClick={() => setMadLibStory(`Once upon a birthday, a ${madLibAdj} ${madLibNoun} decided to ${madLibVerb} all night long!`)}>Generate</Button>
                  {madLibStory && <p className="mt-2">{madLibStory}</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🔮 Magic 8‑Ball</Card.Title>
                  <Button onClick={() => setMagicAnswer(magicAnswers[Math.floor(Math.random() * magicAnswers.length)])}>Ask</Button>
                  {magicAnswer && <h4>{magicAnswer}</h4>}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>😊 Emoji Story Creator</Card.Title>
                  <Form.Control type="text" placeholder="Type emojis..." value={emojiStory} onChange={(e) => setEmojiStory(e.target.value)} />
                  <p className="mt-2">{emojiStory}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>🎧 Make Your Playlist</Card.Title>
                  <Form.Control type="text" placeholder="Song name" value={playlistInput} onChange={(e) => setPlaylistInput(e.target.value)} />
                  <Button size="sm" className="mt-2" onClick={() => { if (playlistInput) { setUserPlaylist([...userPlaylist, playlistInput]); setPlaylistInput(""); } }}>Add</Button>
                  <ListGroup className="mt-2">
                    {userPlaylist.map((song, i) => <ListGroup.Item key={i}>{song}</ListGroup.Item>)}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>✨ Birthday Wish Generator</Card.Title>
                  <Button onClick={() => setGeneratedWish(wishTemplates[Math.floor(Math.random() * wishTemplates.length)])}>Generate Wish</Button>
                  {generatedWish && <p className="mt-2">{generatedWish}</p>}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🎡 Compliment Wheel</Card.Title>
                  <Button onClick={() => setComplimentWheel(compliments[Math.floor(Math.random() * compliments.length)])}>Spin</Button>
                  {complimentWheel && <p>{complimentWheel}</p>}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>💌 Birthday Card Creator</Card.Title>
                  <Form.Control type="text" placeholder="Your message" value={cardMessage} onChange={(e) => setCardMessage(e.target.value)} />
                  <div className="mt-2">
                    {["🎂", "🎈", "🎁", "🎉"].map(sticker => (
                      <Button key={sticker} variant="outline-info" className="m-1" onClick={() => setCardSticker(sticker)}>{sticker}</Button>
                    ))}
                  </div>
                  <p className="mt-2">{cardSticker} {cardMessage}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>🖼️ Photo Booth Frame</Card.Title>
                  <div style={{ fontSize: "5rem" }}>{frames[frame]}</div>
                  <Button onClick={() => setFrame((frame + 1) % frames.length)}>Change Frame</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>⏳ Event Countdown</Card.Title>
                  <h4>{eventCountdown}</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Random Pop-up Button */}
          <Row className="justify-content-center mt-3">
            <Col md={4} className="text-center">
              <OverlayTrigger overlay={<Tooltip>Click for a surprise!</Tooltip>}>
                <Button variant="success" onClick={showRandomPopup}>Show Random Pop-up</Button>
              </OverlayTrigger>
            </Col>
          </Row>

          {/* Toast for pop-ups */}
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{ position: "fixed", bottom: 20, right: 20 }}>
            <Toast.Header><strong className="me-auto">Surprise!</strong></Toast.Header>
            <Toast.Body>{toastMsg}</Toast.Body>
          </Toast>

          {/* Sparkles mouse trail */}
          <motion.div
            style={{
              position: "fixed",
              top: mousePos.y - 5,
              left: mousePos.x - 5,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "gold",
              pointerEvents: "none",
              zIndex: 9999,
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </Container>
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes flicker {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.1); }
          }
          .typewriter::after {
            content: '|';
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </>
  );
};

export default Surprise;