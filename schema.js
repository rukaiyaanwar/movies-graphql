import {buildSchema} from 'graphql'

const schema = buildSchema(`
    type Movie {
        id:ID
        movieName : String
        category : String
        price : Int
        language : String
        email : String
        stack : Stack
        moviePremiumPackage : [PremiumPackage]
    }
    type PremiumPackage {
        PremiumType : String
        PremiumPrice : Int
    }
    enum Stack {
        WEB
        MOBILE
        OTHER
    }
    type Query {
        getMovie(id:ID) : Movie
    }
    
    input MovieInput {
        id:ID
        movieName : String!
        category : String
        price : Int!
        language : String
        email : String
        stack : Stack
        moviePremiumPackage : [PremiumPackageInput]!
    }
    input PremiumPackageInput {
        PremiumType : String
        PremiumPrice : Int
    }

    type Mutation {
        createMovie(input: MovieInput) : Movie
    }
`)

export default schema