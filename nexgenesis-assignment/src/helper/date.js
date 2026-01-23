const DATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

export const isValidDate = (dateStr) => {
  if (!DATE_REGEX.test(dateStr)) return false;

  const [day, month, year] = dateStr.split("/").map(Number);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};
export const formatMonthYear = (dateStr) => {
  if (!dateStr) return "";

  const [day, month, year] = dateStr.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};
