var qs = require("querystring")
var key = "f0a1c3"
module.exports = function(url){
  var baseUrl = "http://api.screenshotmachine.com"
  var param = {
    key: key,
    url: url,
    size: "M",
    cacheLimit: 3,
    format: "PNG"
  }
  return baseUrl + "?" + qs.stringify(param)
}