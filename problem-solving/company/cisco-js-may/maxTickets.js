// https://www.geeksforgeeks.org/maximum-length-subsequence-difference-adjacent-elements-either-0-1/

// Follow this link - exact question => https://stackoverflow.com/questions/62831943/find-the-max-length-of-a-sub-array-where-each-element-covers-an-unbroken-range-o

// tickets = [8,5,4,8,4] 
// {4,4,5} and {8,8} are valid subsequence
// max len of valid subsequence = 3

function maxTickets(tickets) {
  let sortedArr = tickets.sort() 
  let bestLen = 0 , currentLen = 0, left = 0 
  for(let i = 0 ; i < tickets.length; i++) {
    if(sortedArr[i] - sortedArr[i-1] > 1) {
      currentLen = i - left 
      bestLen = Math.max(currentLen, bestLen)
      left = i
    }
  }
  return Math.max(n - left, bestLen)
}
