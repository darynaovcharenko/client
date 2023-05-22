import axios from "axios";

const ANIMAL_REST_API_URL = 'http://localhost:8080/api/animals';

class AnimalService {

    getAnimals(){
        return axios.get(ANIMAL_REST_API_URL);
    }
}

export default new AnimalService();