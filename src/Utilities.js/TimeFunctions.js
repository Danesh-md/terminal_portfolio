const time = function time() {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return { date, month, year };
};

exports.time = time;
