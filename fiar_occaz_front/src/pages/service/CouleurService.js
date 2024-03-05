    import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/api/couleurs";

class CouleurService {
    getAllCouleur(){
        return axios.get(base_url+'/getAll');
    }
    getOneCouleur(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
const CouleurServiceInstance = new CouleurService();
export default CouleurServiceInstance;