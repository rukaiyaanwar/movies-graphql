import express from 'express'
import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'

// Creating an app from express 

const app = express() 

app.get("/",(req,res) => {
    res.send("Up and running with graphql.")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue: root,
    graphiql :true  //give a better inteface over the internet
}))

// Listener 
app.listen(8083,()=>console.log("Up and running at port 8083"))