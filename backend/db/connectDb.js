import mongoose from "mongoose"

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("successsfully connected to DB! ")
  } catch (error) {
    console.log("error while connecting to DB", error.message)
    process.exit(1)
  }
}

export default connectDb
