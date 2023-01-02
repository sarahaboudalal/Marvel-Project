import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSeries } from '../feautures/seriesSlice';
import Cards from './Cards';
import Flex from './Flex';
import Grid from './Grid';
import Loading from './Loading';

export default function Series() {
  const serie = useSelector((state) => state.serie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <Flex>
      {serie.loading && <Loading />}
      <Grid>
        {serie.series.map((serie) => {
          return (
            <Cards
              key={serie.id}
              thumbnail={serie.thumbnail.path + '.' + serie.thumbnail.extension}
              name={serie.title}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
