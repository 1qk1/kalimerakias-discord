const cheerio = require("cheerio")
const axios = require("axios")
const getKalimera = require("./getKalimera")
const selectImage = require("./selectImage")

DAYS_TO_URL = {
  deutera: "https://eikones.top/category/%ce%b4%ce%b5%cf%85%cf%84%ce%ad%cf%81%ce%b1/",
  triti: "https://eikones.top/category/%cf%84%cf%81%ce%af%cf%84%ce%b7/",
  tetarti: "https://eikones.top/category/%cf%84%ce%b5%cf%84%ce%ac%cf%81%cf%84%ce%b7/",
  pempti: "https://eikones.top/category/%cf%80%ce%ad%ce%bc%cf%80%cf%84%ce%b7/",
  paraskevi: "https://eikones.top/category/%cf%80%ce%b1%cf%81%ce%b1%cf%83%ce%ba%ce%b5%cf%85%ce%ae/",
  savvato: "https://eikones.top/category/%cf%83%ce%b1%ce%b2-%ce%ba%ce%bf/",
  kyriaki: "https://eikones.top/category/%ce%ba%cf%85%cf%81%ce%b9%ce%b1%ce%ba%ce%ae/",
}


const getKalimeraDay = async (day) => {
  if (!DAYS_TO_URL[day]) {
    return await getKalimera()
  }
  const content = await axios.get(DAYS_TO_URL[day])
  const $ = cheerio.load(content.data)
  const articles = $("#main article").map((i, el) => {
    const image = $(el).find(".archive-thumb img").attr("src")
    const title = $(el).find(".archive-content .entry-title").text()
    const url = $(el).find(".archive-content .entry-title a").attr("href")
    return {
      image,
      title,
      url
    }
  }).get()
  const article = articles[Math.floor(Math.random() * articles.length)]
  return await selectImage(article)
}

module.exports = getKalimeraDay