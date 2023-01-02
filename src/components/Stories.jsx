import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../feautures/storiesSlice';
import Cards from './Cards';
import Flex from './Flex';
import Grid from './Grid';
import Loading from './Loading';

export default function Stories() {
  const story = useSelector((state) => state.story);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <Flex>
      {story.loading && <Loading />}
      <Grid>
        {story.stories.map((story) => {
          return <Cards key={story.id} thumbnail={null} name={story.title} />;
        })}
      </Grid>
    </Flex>
  );
}