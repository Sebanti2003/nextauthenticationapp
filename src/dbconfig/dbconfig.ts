import mongoose from 'mongoose'
export async function connectdb(){
    try {
        await mongoose.connect(process.env.mongo_url!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("Database connected succesfully");
            
        })
        connection.on('error',()=>{
            console.log("Database connected unsuccesfully");
            process.exit();
            
        })

    } catch (error:any) {
        console.log(error.message);
        
    }

}
