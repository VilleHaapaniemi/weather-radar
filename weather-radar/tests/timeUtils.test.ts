import { formatUnixHoursAndMinutes, formatUnixMonthAndDayWithOrdinal } from '../src/utils/timeUtils';

describe('Time utility functions', () => {
  it('Should format correctly the given unix timestamp into hours and minutes', () => {
    expect.assertions(3);

    let timestamp = 1709456638; // 2024-03-03T11:03:58Z GMT+02:00
    let expected = '11:03';
    expect(formatUnixHoursAndMinutes(timestamp)).toBe(expected);

    timestamp = 1713612602; // 2024-04-20T14:30:02Z GMT+02:00
    expected = '14:30';
    expect(formatUnixHoursAndMinutes(timestamp)).toBe(expected);

    timestamp = 1734217435;
    expected = '01:03'; // 2024-12-15T01:03:55Z GMT+02:00
    expect(formatUnixHoursAndMinutes(timestamp)).toBe(expected);
  });
  it('Should format correctly the given unix timestamp into month and day with ordinal suffix', () => {
    expect.assertions(9);

    let timestamp = 1704097840; // 2024-01-01T10:30:40Z
    let expected = 'Jan 1st';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1706862640; // 2024-02-02T10:30:00Z
    expected = 'Feb 2nd';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1709454640; // 2024-03-03T10:30:00Z
    expected = 'Mar 3rd';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1712215840; // 2024-04-04T10:30:00Z
    expected = 'Apr 4th';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1718004640; // 2024-06-10T10:30:00Z
    expected = 'Jun 10th';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1723361440; // 2024-08-11T10:30:00Z
    expected = 'Aug 11st';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1729582240; // 2024-10-22T10:30:00Z
    expected = 'Oct 22nd';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1732696240; // 2024-11-27T10:30:00Z
    expected = 'Nov 27th';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);

    timestamp = 1735633840; // 2024-12-31T10:30:00Z
    expected = 'Dec 31st';
    expect(formatUnixMonthAndDayWithOrdinal(timestamp)).toBe(expected);
  });
});
