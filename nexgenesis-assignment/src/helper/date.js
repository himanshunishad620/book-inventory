const DATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

export const isValidDate = (dateStr) => {
  if (!DATE_REGEX.test(dateStr)) return false;
  const [day, month, year] = dateStr.split("/").map(Number);
  const inputDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    return false;
  }
  if (inputDate > today) return false;
  return true;
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
