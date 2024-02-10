import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/api/pays";

class Pays {
    getAllPays(){
        return axios.get(base_url+'/getAll');
    }  
    getOnePays(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite +'/'+ id);
    }
}
const PaysInstance = new Pays();
export default PaysInstance;