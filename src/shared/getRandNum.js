export default (min, max) => {
  const num = (Math.random() * (max - min)) + min;

  return Math.floor(num);
};
