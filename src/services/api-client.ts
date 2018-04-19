const API_KEY = 'c2cb9e5b9cb511b80fbafd6e0282de00';
const API_URL = 'https://api.themoviedb.org/3';


export class APIClient {
  private headers = new Headers();
  private apiEndpoint = API_URL;


  public async call (url: string) {
    url = this.prepareUrl(url);
    const response = await this.makeRequestToServer(url);
    return response;
  }

  private prepareUrl (url: string) {
    url = this.apiEndpoint + url;
    const issetQuestionSign = url.includes('?');

    if (!issetQuestionSign) {
      url = url + '?';
    }

    url = url + `&api_key=${API_KEY}&language=ru-RU&external_source=imdb_id`;
    
    return url;
  }

  private async makeRequestToServer( url: string ) {
    let response: any;

    const fetchOptions = {
      headers: this.headers,
      method: "GET",
      mode: "cors" as "cors"
    }

    try {
      response = await fetch(url, fetchOptions)
    } catch (error) {
      this.onError()
      throw error;
    }

    const text =  await response.json();
    return text;
  }

  private onError () {
    alert ('Network error');
  }

}

export default new APIClient();
