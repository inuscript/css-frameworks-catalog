var yaml = require("js-yaml")
var fs = require("fs")
var screenshot = require("./screenshot")
var mdLink = require("./md-link")
var sites = yaml.safeLoad(fs.readFileSync("./sites.yml")).sites

var siteMarkdown = function(site){
  var sc = "!" + mdLink(site.name + "_screenshot", screenshot(site.url) )
  var title = "#" + mdLink(site.name, site.url)
  return [title, sc].join("\n")
}

var md = sites.map(siteMarkdown).join("\n\n")

console.log(md)