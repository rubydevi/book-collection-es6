/* eslint linebreak-style: ["error", "windows"] */

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return date.toLocaleString('en-US', options).replace(',', '');
};

export default formatDate;
