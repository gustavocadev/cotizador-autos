export const getYearDifference = (year: string) => {
  return new Date().getFullYear() - parseInt(year);
};
