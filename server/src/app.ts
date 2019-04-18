import express from "express"
import path from "path"

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (_, res) => {
  res.render("app")
})

export default app
