const mongoose= require("mongoose")

const mondbUrl="mongodb+srv://btechbhuvan:rkQV5ybkdQ7mFQqe@cluster0.isewqkz.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}