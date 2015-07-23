var mdLink = require("./md-link")
var screenshot = require("./screenshot")

var siteMd = function(site){
  var sc = "!" + mdLink(site.name + "_screenshot", screenshot(site.url) )
  var title = "#" + mdLink(site.name, site.url)
  return [title, sc].join("\n")
}

module.exports = siteMd;