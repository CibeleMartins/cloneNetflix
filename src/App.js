import React, {useEffect} from 'react';
import Movie from './Movies';


export default () => {

  useEffect(()=>{

    const loadAll = async () => {
      // Pegando alista total de filmes
      let list = await Movie.getHomeList();
      console.log(list);
    }
    
    loadAll()
  }, [])
  // essa função vai executar algo quando a tela carregar

  return (
    <h1>Ola mundo</h1>
  )
}
