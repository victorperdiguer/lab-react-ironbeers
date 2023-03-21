import axios from 'axios';

class BeerService {
    constructor () {
        this.api = axios.create({
            baseURL: "https://ih-beers-api2.herokuapp.com"
        });
    }
    getBeers() {
        return this.api.get('/beers').then(({data}) => data).catch(error => console.log(error));
    }
    getBeerById(beerId) {
        return this.api.get(`/beers/${beerId}`).then(({data}) => data).catch(error => console.log(error));
    }
    getRandomBeer() {
        return this.api.get('/beers/random').then(({data}) => data).catch(error => console.log(error));
    }
    findBeers(query) {
        return this.api.get(`/search?q=${query}`).then(({data}) => data).catch(error => console.log(error));
    }
    createBeer(body) {
        return this.api.post('/beers/new', body).then(({ data }) => data).catch(err => console.error(err))
    }
}

const beerService = new BeerService();
export default beerService;