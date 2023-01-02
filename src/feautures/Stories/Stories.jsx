import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from './storiesSlice';
import Cards from '../../components/Cards';
import Flex from '../../components/Flex';
import Grid from '../../components/Grid';
import Loading from '../../components/Loading';

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
