function getLengthOfLongestElement(arr) {
    return arr.reduce(function(a, b){
      if (a.length>=b.length){
        return a.length;
      }
      else {
        return b.length
      }
    }, 0);
  }
  // 두개가 뭐가 다른거지?
  
  
  function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    return arr.reduce(function (acc, cur) {
      if (acc.length >= cur.length) {
        return acc;
      } else {
        return cur;
      }
    }).length;
  }