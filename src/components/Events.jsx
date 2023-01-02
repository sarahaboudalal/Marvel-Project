import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../feautures/eventsSlice';
import Cards from './Cards';
import Grid from './Grid';
import Loading from './Loading';

export default function Events() {
  const event = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="flex flex-col  items-center justify-center">
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
    </div>
  );
}

