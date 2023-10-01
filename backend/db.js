const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://admin:pant1234@cluster0.oeqw5kp.mongodb.net/goofoodmern?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
const mongoDB = async () => {
  await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, data) => {
    if (err) console.log(".....", err);
    else {
      console.log("connected succesfully");
      const fetchData = await mongoose.connection.db.collection("foodcategory");
      fetchData.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        // else console.log(data);
      })
    }
  });
}

module.exports = mongoDB;
