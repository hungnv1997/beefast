/**
 * 空のチェック
 * @param {String} valueToCheck
 * @returns {boolean} true if value is empty
 */
export function isEmpty(valueToCheck: any): boolean {
    return (
        valueToCheck === null || valueToCheck === undefined || valueToCheck === ""
    );
}
/**
 * Check empty object
 * @param {Object} objectToCheck - Object to check
 * @returns {boolean} true if object is empty
 */
export function isEmptyObject(objectToCheck: any): boolean {
    return (
        isEmpty(objectToCheck) ||
        objectToCheck.constructor !== Object ||
        (objectToCheck.constructor === Object &&
            Object.keys(objectToCheck).length === 0)
    );
}

export function formatNumberToDecimal(value: any, decimal: number) {
  function formatNumber(value: any, decimal: number){
    if (decimal) {
      return Number(value)
        .toFixed(decimal)
        .toString()
        .replace(/\d(?=\d*\.\d)(?=(?:\d{3})+(?!\d))/g, "$&,");
    } else {
      return Number(value)
        .toFixed(decimal)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
  if(isEmpty(value)){
    return formatNumber(0,decimal)
  }else{
    return  formatNumber(value,decimal)
  }
  }