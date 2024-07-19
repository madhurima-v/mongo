import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/react')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;

const StudentInfo = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  rollno: Number,
  address: String
});

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.use(cors())

app.use(express.json())

const MyModel = mongoose.model('StudentInfo', StudentInfo);


app.get('/api', async function (req, res) {
  var Api = await MyModel.find({})
  console.log(Api)
  res.json(Api)
})

app.listen(3000, function (req, res) {
  console.log("server started")
})