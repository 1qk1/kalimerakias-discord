const cheerio = require("cheerio")
const axios = require("axios")

const selectImage = async ({ url }) => {
  const content = await axios.get(url)
  const $ = cheerio.load(content.data)
  const images = $("#main article .entry-content img").map((i, el) => {
    return $(el).attr("src")
  }).get()
  return images[Math.floor(Math.random() * images.length)]
}

module.exports = selectImage