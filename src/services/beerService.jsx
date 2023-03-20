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
        return this.api.get(`/${beerId}`).then(({data}) => data).catch(error => console.log(error));
    }
    getRandomBeer() {
        return this.api.get('/random').then(({data}) => data).catch(error => console.log(error));
    }
    findBeers(query) {
        return this.api.get(`/search?q=${query}`).then(({data}) => data).catch(error => console.log(error));
    }
}

const beerService = new BeerService();
export default beerService;