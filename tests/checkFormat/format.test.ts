import { isEmpty,isEmptyObject } from "../../src/checkFormat/format";
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