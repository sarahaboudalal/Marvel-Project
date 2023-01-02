import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSeries } from './seriesSlice';
import Cards from '../../components/Cards';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';
import Loading from '../../components/Loading';

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
