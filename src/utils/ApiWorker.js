import axios from 'axios';

class ApiWorker {
  _apiLink = "http://localhost/api";

  async addWord(params) {
    const result = await axios.post(`${this._apiLink}/addword`, {params});
    return result.data;
  }

  async report(params) {
    const result = await axios.post(`${this._apiLink}/report`, {params});
    return result.data;
  }
}

export default ApiWorker;
