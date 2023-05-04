import { connect } from 'mongoose';

require('dotenv').config({path: '../../.env'})

const connectDB = async () => {
    try{
        await connect(process.env.DATABASE_URI);
    } catch(err){
        console.log(err)
    }
}

export {connectDB};