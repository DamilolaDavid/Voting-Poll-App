const mongoose = require('mongoose');

class DB {
    constructor() {

        this.mongoURI = 'mongodb+srv://petegambo:YzTqJYDc74sdJLdp@cluster0.nj1a84x.mongodb.net/?retryWrites=true&w=majority';
        this.connected = false;

        mongoose.connect(this.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
          this.connected = true;
          console.log("Successfull");
          console.log( this.user())
        })
        .catch((err) => {
          console.error('MongoDB connection error:', err);
        });
      

      }

      get user() {
        const userSchema = new mongoose.Schema({
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
          
          isActive: { type: Boolean, default: false },
          created: { type: Date, default: new Date },
        });

        return mongoose.model('Users', userSchema);
      }

}

var db = new DB();

if(db.connected === true)
{
console.log(db.user())
}