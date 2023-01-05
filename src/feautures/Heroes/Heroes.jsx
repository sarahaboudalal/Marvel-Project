import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeroes } from './heroSlice';
import Cards from '../../components/Cards';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';
import Loading from '../../components/Loading';

export default function Heroes() {
  const hero = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <Flex>
      <p className="text-center font-bold text-4xl text-maroon py-3">
        Welcome To Marvel's Universe!
      </p>
      {hero.loading && <Loading />}
      <Grid>
        {hero.heroes.map((hero) => {
          return (
            <Cards
              link={`/character/${hero.id}`}
              key={hero.id}
              thumbnail={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              name={hero.name}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
