import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/v_annonce_2";

class AnnonceService {
    getAllPublication(){
        return axios.post(base_url+'/gets/1/0');
    }
}

const AnnonceServiceInstance = new AnnonceService();
export default AnnonceServiceInstance;
