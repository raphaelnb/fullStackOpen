const express = require('express')
const app = express()
app.use(express.json())

let people = [
    {
        "name": "Aarto",
        "number": "453245",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
]

app.get('/api/persons', (request, response) => {
    response.json(people)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
