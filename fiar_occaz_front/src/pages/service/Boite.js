import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/v_annonce";

class Boite {
    getAllBoite(){
        return axios.get('https://fiarapartie2-production-2baf.up.railway.app/bv/getall');
    }
    getResBoite(id){
        return axios.get(base_url+'/boite_vitesse/'+id);
    }
}
const BoiteInstance = new Boite();
export default BoiteInstance;
