import { getCurrentYear } from './getCurrentYear';

export const getLast20Years = () => {
  const currentYear = getCurrentYear();
  const last20Years = [];
  for (let i = 0; i < 20; i++) {
    last20Years.push(currentYear - i);
  }
  return last20Years;
};
