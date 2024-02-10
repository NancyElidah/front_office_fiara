import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/api/marques";

class MarqueService {
    getAllMarque(){
        return axios.get(base_url+'/getAll');
    }
    getOneMarque(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
const MarqueServiceInstance = new MarqueService();
export default MarqueServiceInstance;