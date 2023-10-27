/**
 * Returns the first string from a value that might be a string, an array of strings, or undefined.
 * If the value is an array, the function returns the first element of the array if it's not empty.
 * If the value is a string or undefined, it returns the value as is.
 * @param {string | string[] | undefined} value - The input value to process.
 * @returns {string | undefined} - A string if the input is a string or the first element of an array, or undefined if the input is undefined or an empty array.
 */

interface Props {
  value: string | string[] | undefined;
}

export default function getFirstStringOrUndefined({
  value,
}: Props): string | undefined {
  if (Array.isArray(value)) {
    return value.length > 0 ? value[0] : undefined;
  }
  return value;
}
