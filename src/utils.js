export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (word.length === 0) {
    return false; // Return false for empty strings
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  const normalized = word.toLowerCase();
  return normalized === [...normalized].reverse().join("");
}
