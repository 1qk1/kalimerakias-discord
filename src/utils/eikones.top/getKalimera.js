const cheerio = require("cheerio")
const axios = require("axios")

const selectImage = require("./selectImage")

const getKalimera = async () => {
  const content = await axios.get("https://eikones.top/category/%ce%b5%ce%b9%ce%ba%cf%8c%ce%bd%ce%b5%cf%82-%cf%84%ce%bf%cf%80-%ce%b3%ce%b9%ce%b1-%ce%ba%ce%b1%ce%bb%ce%b7%ce%bc%ce%ad%cf%81%ce%b1/")
  const $ = cheerio.load(content.data)
  const articles = $("#main article").map((i, el) => {
    const image = $(el).find(".thumbnail img").attr("src")
    const title = $(el).find(".entry-title").text()
    const url = $(el).find(".entry-title a").attr("href")
    return {
      image,
      title,
      url
    }
  }).get()
  const article = articles[Math.floor(Math.random() * articles.length)]
  return await selectImage(article)
}

module.exports = getKalimera