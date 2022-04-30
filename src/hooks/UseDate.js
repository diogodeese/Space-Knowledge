export default function useDate() {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1; // Months start at 0!
  let day = today.getDate();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  const endDate = year + "-" + month + "-" + day; // Current date
  const startDate = year - 1 + "-" + month + "-" + day; // 1 year ago

  return { endDate, startDate };
}
