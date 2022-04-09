
const API_KEY = '58f46c50d43e7cee44b93c549fb0a856';

const API_BASE = 'https://api.themoviedb.org/3';

// - originais da netflix
// - recomendados (trending)
// - em alta (top rated)
//  - ação
//  - comédia
//  - terror
// - romance
// - documentários



const basicFetch = async (endpoint) => {

  const req = await fetch(`${API_BASE}${endpoint}`);
  //  Aqui  será realizada a requisição para um serviço externo, por isso vai await/esperar a resposta. Quando chegar a resposta...

  const json = await req.json();
  // Roda este comando e novamente, espera a resposta

  return json;
  //  E a retorna

}



export default {

  getHomeList: async () => {

    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        item: [await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)] 
        // 213 originais da netflix
        // array/lista de filmes
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        item:[await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)]
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: [await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) ]
      },
      {
        slug: 'action',
        title: 'Ação',
        items: [await basicFetch(`/discovery/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)]
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [await basicFetch(`/discovery/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)]
      },

    {
      slug: 'horror',
      title: 'Terror',
      items: [await basicFetch(`/discovery/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)]
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: [await basicFetch(`/discovery/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)]
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: [await basicFetch(`/discovery/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)]
    },
    ]

  }


}



