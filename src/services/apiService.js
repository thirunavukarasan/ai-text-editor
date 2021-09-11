import {keywords} from "../asset/PowerWords";

class ApiService {
 async getKeyWords(inputKey) {
    let respApi = keywords.filter(data => data.key.toLowerCase() === inputKey.toLowerCase());
    return respApi.length === 0 ? []:respApi[0].data;
  }

  async keyWordsToUse(keywords,contextText) {
    let keyWordsSug = keywords.map(keyword => {
      let isContain = contextText.toLowerCase().includes(keyword.toLowerCase());
      let color = isContain ? "badge-success" : "badge-danger"
      return {
        keyword,
        color
      }
    });
    return keyWordsSug
  }
}

const apiService = new ApiService();
export default apiService;
