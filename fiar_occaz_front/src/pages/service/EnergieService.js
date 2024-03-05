import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/api/energies";

class EnergieService {
    getAllEnergie(){
        return axios.get(base_url+'/getAll');
    }
    getOneEnergie(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
const EnergieServiceInstance = new EnergieService();
export default EnergieServiceInstance;
