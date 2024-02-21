/**
 * Remove specified characters from a string.
 * @param inputString - The input string.
 * @param charactersToRemove - The characters to be removed.
 * @returns A new string with specified characters removed.
 *
 * @example
 * ```typescript
 * const inputString = "This is a sample string, with some; punctuation.";
 * const charactersToRemove = '.,;';
 * const result = removeCharacters(inputString, charactersToRemove);
 * console.log(result);
 * // Output: "This is a sample string with some punctuation"
 * ```
 */
export const removeCharacters = (inputString: string, charactersToRemove: string): string => {
    const regex = new RegExp(`[${charactersToRemove}]`, 'g');
    return inputString.replace(regex, '');
}