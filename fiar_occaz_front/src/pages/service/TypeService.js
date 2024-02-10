import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/form";

class Type {
    getAllType(){
        return axios.get(base_url+'/getall');
    }
}
export default new Type();