import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [dark]);

  return (
    <Button variant="outline-secondary" size="sm" onClick={() => setDark(!dark)}>
      {dark ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;