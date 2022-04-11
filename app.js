const express = require("express")
const nodemailer = require("nodemailer")
var cors = require("cors")
var bodyParser = require("body-parser")

require("dotenv").config({ path: ".env" })

var clientEmailHTML = require("./clientEmail")
var serverEmailHTML = require("./serverEmail")

const app = express()

app.use(express.json({ limit: "2mb" }))
app.use(express.urlencoded({ extended: true, limit: "2mb" }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

const user = "contato@empresax.com.br"
const pass = "123456"

app.use(cors())

app.get("/", (req, res) =>
  res.send("Kaio Dutra - Mail Service v2.3 (not Auth)")
)

app.post("/send", (req, res) => {
  const { name, email, phone, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: { user, pass },
  })

  transporter.sendMail(
    {
      from: "Equipe EmpresaX <" + user + ">",
      to: email,
      replyTo: user,
      subject: subject,
      html: clientEmailHTML(name, subject, message),
    },
    function (error) {
      if (error) {
        res.status(500).send("internal server error.")
      } else {
        transporter.sendMail(
          {
            from: "Equipe EmpresaX <" + user + ">",
            to: user,
            replyTo: email,
            subject: subject,
            html: serverEmailHTML(name, email, phone, subject, message),
          },
          function (error) {
            if (error) {
              res.status(500).send("internal server error.")
            } else {
              res.status(200).send("data sent successfully.")
            }
          }
        )
      }
    }
  )
})

app.listen(port, () => console.log(`this is running on port ${port}`))
