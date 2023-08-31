const random = (range = 1000000000): number =>
  Math.floor(Math.random() * range) * Date.now();

export default random;
