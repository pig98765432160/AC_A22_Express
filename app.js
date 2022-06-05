const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const home = {
  route: '',
  button: '回到首頁',
  title: '首頁'
}
const pages = [
  {
    route: 'about',
    button: 'About',
    title: 'About'
  },
  {
    route: 'portfolio',
    button: 'Portfolio',
    title: 'Portfolio'
  },
  {
    route: 'content',
    button: 'Content',
    title: 'Content'
  }
]

app.get('/', (req, res) => {
  res.render('index', { home: home, pages: pages, text: home })
})

app.get('/about', (req, res) => {
  res.render('index', { home: home, pages: pages, text: pages[0] })
})

app.get('/portfolio', (req, res) => {
  res.render('index', { home: home, pages: pages, text: pages[1] })
})

app.get('/content', (req, res) => {
  res.render('index', { home: home, pages: pages, text: pages[2] })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})