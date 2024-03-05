import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/form";

class Type {
    getAllType(){
        return axios.get(base_url+'/getall');
    }
}
const TypeInstance = new Type();
export default TypeInstance;