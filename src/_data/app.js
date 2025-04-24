const env = (dev, prod = dev) => {
  if (process.env.ELEVENTY_ENV === 'development') {
    return dev;
  }

  return prod;
};

module.exports = {
  title: 'Thomas Feeney | web developer',
  description: 'Coding for humans. Come say hi 🌳',
  twitter: 'thomasfeeney',
  baseUrl: env('localhost:8080', 'https://thomas-feeney.com'),
  thumb: '/assets/images/big-rainbow-static.jpg',
};
