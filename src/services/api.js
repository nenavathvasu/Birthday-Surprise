const WISHES_KEY = 'birthday-wishes';

export const getWishes = () => {
  const stored = localStorage.getItem(WISHES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const createWish = (wish) => {
  const wishes = getWishes();
  wishes.push(wish);
  localStorage.setItem(WISHES_KEY, JSON.stringify(wishes));
};