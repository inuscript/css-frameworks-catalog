var yaml = require("js-yaml")
var fs = require("fs")
var siteMarkdown = require("./site-markdown")
var sites = yaml.safeLoad(fs.readFileSync("./sites.yml")).sites


var md = sites.map(siteMarkdown).join("\n\n")

console.log(md)