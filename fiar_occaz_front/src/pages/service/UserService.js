import axios from 'axios';
const base_url = "http://localhost:8080/login";

class UserService {
    loginUser(email, motDePasse){
        return axios.post(base_url, { email: email, password: motDePasse }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

const userServiceInstance = new UserService();
export default userServiceInstance;
