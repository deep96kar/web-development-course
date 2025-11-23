const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    let siteName="adidas"
    let searchtext="search now"
    let arr=[12,45,78]
  res.render("index", {siteName:siteName,searchtext:searchtext,arr})
})

app.get('/blog', (req, res) => {
    let blogtitle="adidas why and when?"
    let blogcontent="its is a good brand"
  res.render("blogpost", {blogtitle:blogtitle, blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
