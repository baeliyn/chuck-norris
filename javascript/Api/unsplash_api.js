class UnsplashApi {
  constructor() {
    /* 
        this.baseURL = "https://api.unsplash.com"
        this.clienID = '*your client id*'
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                count: 1
            }
            headers: {
                Authorization: this.clienID
            },
        })*/
  }

  splashRandomIMG = async () => {
    /* try {
            const photoResponse = await this.axiosObject.get('/photos/random');
        return photoResponse.data[0].urls.regular;
        } catch (error) {
            console.log(error)
        }*/

    //I CAN'T LET YOU USE MY ACCOUNT BUT YOU CAN USE THESE
    const array = [
      "https://i1.sndcdn.com/artworks-a97bKtSqgVNU2sM9-0enDuQ-t500x500.jpg",
      "https://pm1.narvii.com/6791/860be5f25d2f90a0479654fe37b1e7eee71c5501v2_hq.jpg",
      "https://i.pinimg.com/736x/8e/83/b9/8e83b9e961408d347d215a129bba63d2.jpg",
      "https://i1.sndcdn.com/avatars-000150064173-d1tjhn-t500x500.jpg",
    ];

    return `${array[Math.floor(Math.random() * 4)]}`;
  };
}

export default function imgGet() {
  const splash = new UnsplashApi();
  return splash.splashRandomIMG();
}
