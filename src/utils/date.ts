const todayFormatted = () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset();
  const timezoneCorrectedToday = new Date(
    today.getTime() - timezoneOffset * 60 * 1000
  );
  return timezoneCorrectedToday.toISOString().split("T")[0];
};

export default todayFormatted;
