import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../feautures/eventsSlice';
import Cards from './Cards';
import Flex from './Flex';
import Grid from './Grid';
import Loading from './Loading';

export default function Events() {
  const event = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <Flex>
      {event.loading && <Loading />}
      <Grid>
        {event.events.map((event) => {
          return (
            <Cards
              key={event.id}
              thumbnail={event.thumbnail.path + '.' + event.thumbnail.extension}
              name={event.title}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
