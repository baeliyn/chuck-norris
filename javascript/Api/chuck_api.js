class JokeApi {
  constructor() {
    this.baseURL = "https://api.chucknorris.io";
    this.axiosObject = axios.create({
      baseURL: this.baseURL,
    });
  }

  getRandom = async () => {
    try {
      const jkResponse = await this.axiosObject.get("/jokes/random");
      return jkResponse.data.value;
    } catch (error) {
      console.log(error);
    }
  };
}

export default function jk() {
  const theJoke = new JokeApi().getRandom();
  return theJoke;
}
