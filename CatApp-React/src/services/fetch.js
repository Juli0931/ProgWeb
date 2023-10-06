const FACT_URL = 'https://catfact.ninja/fact'
const IMG_URL = 'https://cataas.com/cat/says/'

// Fetch del fact
export const fetchFact = async () => {
  return fetch(FACT_URL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Fact API')
      }
      return res.json()
    })
    .then((data) => {
      const newFact = data.fact
      return newFact
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}

// Fetch de la imagen

export const fetchImg = async ({ newImgText }) => {
  return fetch(`${IMG_URL}${newImgText}?json=true`) // Url + Texto + propiedad para que sea json
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Image API')
      }
      return res.json()
    })
    .then((data) => {
      const newImg = 'https://cataas.com' + data.url // Url de la imagen
      return newImg
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
