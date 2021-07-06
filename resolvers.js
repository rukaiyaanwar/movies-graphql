import {nanoid} from 'nanoid'

class Movie {
    constructor(id, {
        movieName,category,price,language,email,stack,moviePremiumPackage
    }){
        this.id = id
        this.movieName = movieName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.moviePremiumPackage = moviePremiumPackage
    }
}

const movieHolder = {}

const resolvers = {
    getMovie : ({ id }) => {
        return new Movie(id, movieHolder[id])
    },
    createMovie: ({ input }) => {
        let id = nanoid()
        movieHolder[id] = input
        return new Movie(id, input)
    }
}

export default resolvers