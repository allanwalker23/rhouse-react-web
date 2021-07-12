import api from "../services/api";

export default class TestService{


     async getItens():Promise<any>{
        const response=await api.get('/propriedades/recents');
        return response.data
    }

}