const isDataExpired = (data) => {
  const currentDate = Date.now();

  const timeDifference = (currentDate - data.fetchDate) / (1000 * 3600);

  return timeDifference > 1;
};

export default isDataExpired;
