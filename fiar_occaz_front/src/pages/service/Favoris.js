import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/favoris";
const base = "https://fiarapartie2-production.up.railway.app/v_favoris";

class Favoris {
   addFavoris(token,id,favoris){
        return axios.post(base_url+'/'+token+'/add/'+id , favoris);
   }
   getAllMyFav(token , id){
      return axios.get(base+'/'+token+'/getfavoris/'+id );
   }
}

const FavorisInstance = new Favoris();
export default FavorisInstance;
