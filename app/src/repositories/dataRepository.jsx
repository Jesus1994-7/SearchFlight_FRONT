import axios from 'axios';

const EMPTY ='';

class dataRepository {

    async getAllQuestions() {
        try {
            const res = await axios.get(`http://localhost:3005/data/questions`);
            return res.data;
        }
        catch (error) { return EMPTY; }
    }
    async getAllIataCodes() {
        try {
            const res = await axios.get(`http://localhost:3005/data/iatacodes`);
            return res.data;
        }
        catch (error) { return EMPTY; }
    }
    async getAllCountries() {
        try {
            const res = await axios.get(`http://localhost:3005/data/countries`);
            return res.data;
        }
        catch (error) { return EMPTY; }
    }
    async getAllCurrencies() {
        try {
            const res = await axios.get(`http://localhost:3005/data/currencies`);
            return res.data;
        }
        catch (error) { return EMPTY; }
    } 
}
export default dataRepository;