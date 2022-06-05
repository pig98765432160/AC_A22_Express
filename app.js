const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const pages = {
  home: {
    route: '',
    button: '回到首頁',
    title: '首頁'
  },
  about: {
    route: 'about',
    button: 'About',
    title: 'About'
  },
  portfolio: {
    route: 'portfolio',
    button: 'Portfolio',
    title: 'Portfolio'
  },
  content: {
    route: 'content',
    button: 'Content',
    title: 'Content'
  }
}


app.get('/', (req, res) => {
  res.render('index', { home: pages.home, pages: Object.values(pages), text: pages.home })
})

app.get('/about', (req, res) => {
  res.render('index', { home: pages.home, pages: Object.values(pages), text: pages.about })
})

app.get('/portfolio', (req, res) => {
  res.render('index', { home: pages.home, pages: Object.values(pages), text: pages.portfolio })
})

app.get('/content', (req, res) => {
  res.render('index', { home: pages.home, pages: Object.values(pages), text: pages.content })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})