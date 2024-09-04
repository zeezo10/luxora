import {MongoClient , ServerApiVersion} from 'mongodb'

const uri = process.env.DATABASE_URL

const client = new MongoClient(uri, {
    serverApi : {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const db = client.db("E-Commerce")