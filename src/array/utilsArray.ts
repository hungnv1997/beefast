/**
 * Splits an array into subarrays, each containing 'chunkSize' elements.
 * @param inputArray - The input array to be split.
 * @param chunkSize - The number of elements in each subarray.
 * @returns An array of subarrays containing 'chunkSize' elements each.
 *
 * @example
 * ```typescript
 * const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const chunkSize = 3;
 * const outputArray = splitArray(inputArray, chunkSize);
 * console.log(outputArray);
 * // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * ```
 */
export function splitArray<T>(inputArray: T[], chunkSize: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < inputArray.length; i += chunkSize) {
        result.push(inputArray.slice(i, i + chunkSize));
    }

    return result;
}