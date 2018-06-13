const express = require('express')
const cors = require('cors')
const data = require('./student.json')

const app = express()
app.use(cors())

function findStudent(data, id) {
 for (let student of data) {
  if (student.id === +id) {
   return student
  }
 }
 return null
}

app.get('/', (req, res) => {
 res.json({ data })
})

app.get('/:id', (req, res) => {
 const student = findStudent(data, req.params.id)
 if (!student) {
  res.status(404).json({
   error: {
    message: 'Can not find student'
   }
  })
 }
 else {
  res.json({ data: student })
 }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
 console.log('====================================');
 console.log(`listening on port ${port}`);
 console.log('====================================');
})