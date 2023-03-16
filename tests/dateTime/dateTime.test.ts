import { formatDate } from '../../src/dateTime/dateTime';

test('formatDate function', () => {
  // Test with a fixed date and a predefined format
  const date = new Date('2022-12-31T23:59:59Z');
  const format = '{Minutes}:{Seconds}';
  expect(formatDate(format, date)).toBe('59:59');
  
});