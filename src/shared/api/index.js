import axios from "axios";

export  async function fetchFilm() {
    // try {
        const response = await axios.get('http://192.168.1.77:5000/films');
        return response.data;
    // } catch (e) {
    //     console.error('Error fetching films', e);
    //     throw e;
    // }
}

export async function getFilmInfo(id) {
    try {
        const response = await axios.get(`http://192.168.1.104:5000/movies?id=` + id);
        console.log(response)
        return response.data;
    } 
    catch (e) {
        console.error('Error fetching film by Id', e);
        throw e;
    }

}