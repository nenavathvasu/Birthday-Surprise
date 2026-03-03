import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NameInput = ({ setName }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) setName(input.trim());
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'radial-gradient(circle at 10% 30%, #ff9a9e, #fad0c4, #fad0c4)',
        overflow: 'hidden',
        position: 'relative'
      }}>
      {/* Floating balloons – more colorful */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 30 + Math.random() * 50,
            height: 40 + Math.random() * 60,
            backgroundColor: `hsl(${Math.random() * 360}, 80%, 70%)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            bottom: -100,
            boxShadow: 'inset -5px -5px rgba(0,0,0,0.1)',
          }}
          animate={{ y: [0, -window.innerHeight - 200] }}
          transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 10 }}
        />
      ))}

      {/* Floating confetti – tiny sparkling circles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          style={{
            position: 'absolute',
            width: 5 + Math.random() * 5,
            height: 5 + Math.random() * 5,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* Main card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-5 rounded-4 shadow-lg"
        style={{
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          border: '3px solid rgba(255,215,0,0.6)',
          maxWidth: '550px',
          width: '90%',
        }}>
        <h1 className="display-4 fw-bold mb-4" style={{ color: '#8B4513', textShadow: '2px 2px 4px rgba(255,215,0,0.5)' }}>
          🎂✨ Something Magical Awaits! ✨🎂
        </h1>
        <p className="lead mb-4" style={{ color: '#4B0082', fontWeight: 'bold' }}>
          Enter your name to unlock the celebration
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg mb-3 text-center"
            placeholder="Your name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ borderRadius: '50px', border: '2px solid #FF69B4', backgroundColor: 'rgba(255,255,255,0.9)', color: '#333' }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-lg w-100"
            style={{
              background: 'linear-gradient(45deg, #FF6B6B, #FFD93D, #6BCB77)',
              border: 'none',
              borderRadius: '50px',
              color: '#fff',
              fontWeight: 'bold',
              padding: '12px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}>
            Reveal Surprise 🎁
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default NameInput;