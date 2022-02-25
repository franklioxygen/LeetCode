/**
 * 535. Encode and Decode TinyURL
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  short = Math.random().toString(36).substring(2);
  if (!urlSet.has(longUrl)) urlSet.add([longUrl, short]);
  return short;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  for (let val of urlSet.keys())
    if (val[1] == shortUrl) return val[0];
  return '404';
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
let urlSet = new Set();