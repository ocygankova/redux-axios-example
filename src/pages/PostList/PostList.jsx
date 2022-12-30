import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

import { getPosts } from '../../redux/actions/posts';

function PostList() {
  const dispatch = useDispatch();

  const { isLoading, postsData } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box pt={14}>
      <Container maxWidth="xl">
        <Typography sx={{ fontSize: { xs: '2.4rem', md: '3rem', lg: '3.6rem' }, mb: 3 }}>
          Posts
        </Typography>
        <Stack spacing={4}>
          {isLoading && <Typography>Loading...</Typography>}

          {postsData.length
            ? postsData.map((item) => (
                <Paper variant="outlined" sx={{ p: 2 }} key={item.id}>
                  <Typography variant="h6" sx={{ mb: 2, textTransform: 'capitalize' }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.body}</Typography>
                </Paper>
              ))
            : null}
        </Stack>
      </Container>
    </Box>
  );
}

export default PostList;
