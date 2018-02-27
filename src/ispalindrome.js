/** 
  @description checks if input is palindrome
  @param {string} str
  @returns {boolean}
**/

export function isPalindrome(str) {
  return (
    str.trim() ===
    str
      .trim()
      .split("")
      .reverse()
      .join("")
  );
}
