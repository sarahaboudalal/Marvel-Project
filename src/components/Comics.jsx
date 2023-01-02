import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthComics } from '../feautures/comicsSlice';
import Cards from './Cards';
import Grid from './Grid';
import Loading from './Loading';

export default function Comics() {
  const comic = useSelector((state) => state.comic);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthComics());
  }, [dispatch]);

  return (
    <div className="flex flex-col  items-center justify-center">
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
    </div>
  );
}

