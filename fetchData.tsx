import axios from 'axios';
import { QueryFunction } from 'react-query';

export interface ItemDataI {
  name: string;
}

interface APIResultsI {
  results: ItemDataI[];
  offset: number | null;
}

const fetchData: QueryFunction<APIResultsI, 'projects'> = async ({
  pageParam,
}) => {
  const offset = pageParam ? pageParam : 0;
  const data = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
  );
  return {
    results: data.data.results,
    offset: offset + 10,
  };
};

export default fetchData;
