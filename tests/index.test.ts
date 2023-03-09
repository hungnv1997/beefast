import { setSessionStorageByName,
  removeSessionStorageByName,
  getSessionStorageByName, } from '../src'

  describe('SessionStorage functions', () => {
    beforeEach(() => {
      // Clear session storage before each test
      window.sessionStorage.clear();
    });
  
    it('setSessionStorageByName should store data in session storage', () => {
      const name = 'test-name';
      const data = { key: 'value' };
      setSessionStorageByName(name, data);
      const storedData = window.sessionStorage.getItem(name);
      expect(storedData).toBe(JSON.stringify(data));
    });
  
    it('removewindow.sessionStorageByName should remove data from session storage', () => {
      const name = 'test-name';
      const data = { key: 'value' };
      window.sessionStorage.setItem(name, JSON.stringify(data));
      removeSessionStorageByName(name);
      const storedData = window.sessionStorage.getItem(name);
      expect(storedData).toBeNull();
    });
  
    it('getSessionStorageByName should return null when data is not found', () => {
      const name = 'test-name';
      const storedData = getSessionStorageByName(name);
      expect(storedData).toBeNull();
    });
  
    it('getSessionStorageByName should return stored data when found', () => {
      const name = 'test-name';
      const data = { key: 'value' };
      window.sessionStorage.setItem(name, JSON.stringify(data));
      const storedData = getSessionStorageByName(name);
      expect(storedData).toEqual(data);
    });
  });
