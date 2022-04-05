
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

  const json = await req.json();

  return json;

}



export default {

  getHomeList: async () => {

    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        item: [await basicFetch(`/discover/tv?with_network=213`)] 
        // 213 originais da netflix
        // array/lista de filmes
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        item:[]
      },
      {
      slug: 'toprated',
      title: 'Em alta',
      items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
        },
        {
          slug: 'comedy',
          title: 'Comédia',
          items: []
        },

        {
          slug: 'horror',
          title: 'Terror',
          items: []
        },
        {
          slug: 'romance',
          title: 'Romance',
          items: []
        },
        {
          slug: 'documentary',
          title: 'Documentários',
          items: []
        },
    ]

  }


}


