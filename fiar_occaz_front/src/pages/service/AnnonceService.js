import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/v_annonce_2";

class AnnonceService {
    getAllPublication(){
        return axios.get(base_url+'/gets/1/0');
    }
    getOneAnnonce(token,id, idA){
        return axios.get(base_url+'/'+token+'/getOne/'+id+'/'+idA);
    }
}

const AnnonceServiceInstance = new AnnonceService();
export default AnnonceServiceInstance;
