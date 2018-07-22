import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating), // _ 이것은 variable 로 여기서는 사용하지 않기 때문에 의미없는 문자로 대체했음
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    }
};

export default resolvers;