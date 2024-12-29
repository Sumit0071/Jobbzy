import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const DB_OPTIONS = {
            dbname: "JobDB",
        }
        await mongoose.connect( process.env.MONGO_URI, DB_OPTIONS );
        console.log( "connected to db" );

    }
    catch ( err ) {
        console.log( err );

    }
}

export default connectDB