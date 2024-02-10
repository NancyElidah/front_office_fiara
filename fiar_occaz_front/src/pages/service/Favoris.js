import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/favoris";

class Favoris {
   addFavoris(token,id,favoris){
        return axios.post(base_url+'/'+token+'/add/'+id , favoris);
   }
}

const FavorisInstance = new Favoris();
export default FavorisInstance;
