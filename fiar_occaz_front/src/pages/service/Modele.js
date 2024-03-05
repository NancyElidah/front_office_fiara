import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/modele";

class Modele {
    getAllModele(){
        return axios.get(base_url+'/getall');
    }
    getOneModele(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getone/'+id+'/'+ idBoite);
    }
}
const ModeleInstance = new Modele();
export default ModeleInstance;