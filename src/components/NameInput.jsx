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
        background: 'radial-gradient(circle at 10% 30%, #fbc2eb, #a6c1ee)',
        overflow: 'hidden',
        position: 'relative'
      }}>
      {/* Floating balloons */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 40 + Math.random() * 40,
            height: 50 + Math.random() * 50,
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

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-5 rounded-4 shadow-lg"
        style={{
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          border: '2px solid rgba(255,255,255,0.5)',
          maxWidth: '500px',
          width: '90%',
        }}>
        <h1 className="display-4 fw-bold mb-4" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          ✨ Something Magical Awaits ✨
        </h1>
        <p className="lead text-white mb-4">Enter your name to unlock the celebration</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg mb-3 text-center"
            placeholder="Your name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ borderRadius: '50px', border: 'none', backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-lg w-100"
            style={{
              background: 'linear-gradient(45deg, #f093fb, #f5576c)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px',
            }}>
            Reveal Surprise 🎁
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default NameInput;