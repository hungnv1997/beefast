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

/**
 * Remove a specific word from a string and replace it with a replacement character.
 * @param inputString - The input string.
 * @param targetWord - The word to be removed.
 * @param replacementChar - The character to replace the target word.
 * @returns A new string with the target word replaced by the replacement character.
 *
 * @example
 * ```typescript
 * const inputString = "This is a sample string with some wods.";
 * const targetWord = "wods";
 * const replacementChar = "*";
 * const result = removeAndReplaceWord(inputString, targetWord, replacementChar);
 * console.log(result);
 * // Output: "This is a sample string with some *."
 * ```
 */
export function removeAndReplaceWord(inputString: string, targetWord: string, replacementChar: string): string {
    const regex = new RegExp(`\\b${targetWord}\\b`, 'gi');
    return inputString.replace(regex, replacementChar);
}