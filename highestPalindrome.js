function highestPalindrome(string, k) {
    let arr = [];
    const n = string.length;
  
    function isPalindrome(str) {
        return str == str.split('').reverse().join('');
    }
  
    function findPalindrome(str, left, right, changesLeft) {
      if (left === n) {
          return;
      }  
  
      if (str[left] === str[right]) {
        return findPalindrome(str, left + 1, right - 1, changesLeft);
      }
  
      if (changesLeft > 0) {
        const replacement = str[left];
       
        const newStr = str.substring(0, right) + replacement + str.substring(right + 1);
        if (isPalindrome(newStr)) {
            arr.push(parseInt(newStr));
        }

        return findPalindrome(str, left + 1, right - 1, changesLeft - 1)
      }

      return;
    }
    findPalindrome(string, 0, n - 1, k);
    if (arr.length) {
        return Math.max(...arr);
    }
    
    return -1;

  }
  
  const string = '3943';
  const k = 2;
  const result = highestPalindrome(string, k);
  console.log(result);
  