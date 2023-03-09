import { isEmpty,isEmptyObject,formatNumberToDecimal } from "../../src/checkFormat/format";
describe('isEmpty', () => {
    it('should return true when the value is null', () => {
      const result = isEmpty(null);
      expect(result).toBe(true);
    });
  
    it('should return true when the value is undefined', () => {
      const result = isEmpty(undefined);
      expect(result).toBe(true);
    });
  
    it('should return true when the value is an empty string', () => {
      const result = isEmpty('');
      expect(result).toBe(true);
    });
  
    it('should return false when the value is not null, undefined, or an empty string', () => {
      const result = isEmpty('some value');
      expect(result).toBe(false);
    });
  });
  describe('isEmptyObject', () => {
    it('returns true for an empty object', () => {
      const emptyObj = {};
      expect(isEmptyObject(emptyObj)).toBe(true);
    });
  
    it('returns false for a non-empty object', () => {
      const obj = { a: 1 };
      expect(isEmptyObject(obj)).toBe(false);
    });
  
    it('returns true for null', () => {
      const nullValue = null;
      expect(isEmptyObject(nullValue)).toBe(true);
    });
  
    it('returns true for undefined', () => {
      const undefinedValue = undefined;
      expect(isEmptyObject(undefinedValue)).toBe(true);
    });
  
  });

  describe('formatNumberToDecimal', () => {
    it('returns 0 when given an empty value', () => {
      const emptyValue = '';
      const decimal = 2;
      expect(formatNumberToDecimal(emptyValue, decimal)).toBe('0.00');
    });
  
    it('formats a number with 2 decimal places and commas', () => {
      const value = 123456.789;
      const decimal = 2;
      expect(formatNumberToDecimal(value, decimal)).toBe('123,456.79');
    });
  
    it('formats a number with 4 decimal places and commas', () => {
      const value = 1234.56789;
      const decimal = 4;
      expect(formatNumberToDecimal(value, decimal)).toBe('1,234.5679');
    });
  
    it('formats a number with 0 decimal places and commas', () => {
      const value = 123456.789;
      const decimal = 0;
      expect(formatNumberToDecimal(value, decimal)).toBe('123,457');
    });
  
    it('returns a formatted string for a string input', () => {
      const value = '123456.789';
      const decimal = 2;
      expect(formatNumberToDecimal(value, decimal)).toBe('123,456.79');
    });
  
    it('returns a formatted string for a number input with no decimal places', () => {
      const value = 123456;
      const decimal = 0;
      expect(formatNumberToDecimal(value, decimal)).toBe('123,456');
    });
  
    it('returns a formatted string for a number input with decimal places', () => {
      const value = 1234.56789;
      const decimal = 3;
      expect(formatNumberToDecimal(value, decimal)).toBe('1,234.568');
    });
  });
