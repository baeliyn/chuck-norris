class TranslateApi {
  constructor(sentence) {
    /* this.baseURL = 'https://nlp-translation.p.rapidapi.com'
        this.sentence = sentence
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                text: this.sentence, 
                to: 'tr', 
                from: 'en'
            },
            headers: {
                'x-rapidapi-key': '*your key*',
                'x-rapidapi-host': '*rapid host name*'
              }
        })*/
  }

  translate = async () => {
    /*try {
            const translation = await this.axiosObject.get('/v1/translate');
        return translation.data.translated_text;
        } catch (error) {
           console.log(error)
        }*/
    return "Use your own api";
  };
}

export default async function translate(sentence) {
  const translation = await new TranslateApi(sentence).translate();
  return translation;
}
