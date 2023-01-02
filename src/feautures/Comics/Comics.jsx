import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthComics } from './comicsSlice';
import Cards from '../../components/Cards';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';
import Loading from '../../components/Loading';

export default function Comics() {
  const comic = useSelector((state) => state.comic);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthComics());
  }, [dispatch]);

  return (
    <Flex>
      {comic.loading && <Loading />}
      <Grid>
        {comic.comics.map((comic) => {
          return (
            <Cards
              key={comic.id}
              thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
              name={comic.title}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
