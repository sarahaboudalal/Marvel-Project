import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeroes } from '../feautures/heroSlice';
import Cards from './Cards';
import Grid from './Grid';
import Loading from './Loading';

export default function Home() {
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-around">
      <p className="text-center font-bold text-4xl text-maroon py-3">
        Welcome To Marvel's Universe!
      </p>
      {hero.loading && <Loading />}
      <Grid>
        {hero.heroes.map((hero) => {
          return (
            <Cards
              key={hero.id}
              thumbnail={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              name={hero.name}
            />
          );
        })}
      </Grid>
    </div>
  );
}

