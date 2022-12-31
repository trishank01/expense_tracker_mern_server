import mongoose from "mongoose"


const connect = async() => {
    mongoose.set('strictQuery', true)
    await mongoose
    .connect(
      "mongodb+srv://trishank:admin12345@expensetracker.rlbynqz.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log("mongoDB connection is successfull")
}

export default connect;