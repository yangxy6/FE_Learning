/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let emailsArray = {}
  if (emails.length > 100 || emails.length < 1) return emailsArray
  for (let i = 0; i < emails.length; i++) {
    let emailBhe =
      emails[i].indexOf('@') !== -1 ? emails[i].split('@')[1] : null
    if (emailBhe) {
      let emailsItem =
        emails[i].indexOf('+') !== -1 ? emails[i].split('+')[0] : emails[i]
      emailsItem =
        emailsItem.indexOf('.') !== -1
          ? emailsItem.split('.').join('')
          : emailsItem
      emailsArray[emailsItem + '@' + emailBhe] = emailsItem + '@' + emailBhe
    }
  }
  return Object.keys(emailsArray).length
}

// set结构，map返回数组，正则匹配，+.表示匹配+单字符，匹配.需要用\.
// const numUniqueEmails = emails => new Set(emails.map(mail => `${mail.split('@')[0].replace(/\+.*$|\./g, '')}@${mail.split('@')[1]}`))

let emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com'
]
console.log(numUniqueEmails(emails))

const toLowerCase = str => Object.keys(str).map(item=>str[item].toLowerCase()).join('')
console.log(toLowerCase('LOve'));

const sortedSquares = arr => arr.map(item=>Math.pow(item,2)).sort((a,b)=>{return a-b} )
console.log(sortedSquares([-20,-19,-14,-12,-7,-5,2,2,4,6,6,7,8,9,10,12,17,17,18,18]));

// for-in 枚举对象的属性包括原型上，对Set不可用，不适合循环数组，循环是数组的索引
// for-of循环数组元素
const repeatedNTimes = arr => {
  let set = new Set()
  for (item of arr) {
    if (set.has(item)) {
      return item
    }
    set.add(item)
  }
}
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))

// 给定数组，区分偶数在前，奇数在后
function sortArrayByParity(arr) {
  let newArr = []
  for (let item of arr) {
    if (item % 2 === 0) {
      newArr.unshift(item)
    } else {
      newArr.push(item)
    }
  }
  return newArr
}
const sortArrayByParity = arr => {
  return [...arr.filter(x => x % 2 === 0), ...arr.filter(x => x % 2 !== 0)]
}
console.log(sortArrayByParity([3, 2, 4, 1]))



