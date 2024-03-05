import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/v_annonce_2";

class AnnonceService {
    getAllPublication(){
        return axios.get(base_url+'/gets/1/0');
    }
    getOneAnnonce(id){
        return axios.get('https://fiarapartie2-production-2baf.up.railway.app/api/annonces/getOne/'+id);
    }
}

const AnnonceServiceInstance = new AnnonceService();
export default AnnonceServiceInstance;
