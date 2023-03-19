import {
  formatNumberToDecimal,
  isEmpty,
  isEmptyObject,
} from './checkFormat/format'
import { mapToHankaku } from './jaLang/jaLang'
import { formatDate } from './dateTime/dateTime'
export { isEmpty,isEmptyObject,formatNumberToDecimal,mapToHankaku,formatDate }
/**
 *
 * @param {String} name
 * @param {String} data
 */
export function setSessionStorageByName(name:string, data:any) {
    window.sessionStorage.setItem(name, JSON.stringify(data));
  }
  
  /**
   *
   * @param {String} name
   */
  export function removeSessionStorageByName(name:string) {
    window.sessionStorage.removeItem(name);
  }
  
  /**
   *
   * @param {String} name
   * @returns
   */
  export function getSessionStorageByName(name:string) {
    const dataSessionStorage:any = window.sessionStorage.getItem(name);
    return isEmpty(dataSessionStorage) ? null : JSON.parse(dataSessionStorage);
  }
