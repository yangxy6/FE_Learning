// 535 编码和解码url
// toString(radix) 其中radix表示数字的基数，36表示三十六进制
let urls = {};
var encode = function(longUrl) {
  let uniqueKey = Date.now().toString(36);
  urls[uniqueKey] = longUrl;
  return 'http://tinyurl.com/' + uniqueKey;
};
var decode = function(shortUrl) {
  return urls[shortUrl.split('com/')[1]];
};
console.log(encode('https://leetcode.com/problems/design-tinyurl'), urls);
