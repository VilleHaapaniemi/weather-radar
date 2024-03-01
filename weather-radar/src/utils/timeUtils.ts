export const getOrdinalSuffix = (day: number) => {
  // Check day final number and return correct ordinal
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const formatDateStringHoursAndMinutes = (dateString: string) => {
  // Parse only hours and minutes from date string
  return dateString.substring(11, 16);
};

export const formatUnixHoursAndMinutes = (unixTimestamp: number): string => {
  const dateObj = new Date(unixTimestamp * 1000);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Add leading zero to single digit number
  const pad = (num: number): string => (num < 10 ? '0' + num : num.toString());
  return `${pad(hours)}:${pad(minutes)}`;
};

export const formatUnixMonthAndDayWithOrdinal = (unixTimestamp: number): string => {
  // Returns month as short string value and day with ordinal suffix
  const dateObj = new Date(unixTimestamp * 1000);
  const monthName = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  return `${monthName} ${day}${getOrdinalSuffix(day)}`;
};
