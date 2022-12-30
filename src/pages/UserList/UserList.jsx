import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

import { getUsers } from '../../redux/actions/users';

function UserList() {
  const dispatch = useDispatch();

  const { isLoading, usersData } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box pt={14}>
      <Container maxWidth="xl">
        <Typography sx={{ fontSize: { xs: '2.4rem', md: '3rem', lg: '3.6rem' }, mb: 3 }}>
          Users
        </Typography>
        <Stack spacing={4}>
          {isLoading && <Typography>Loading...</Typography>}

          {usersData.length
            ? usersData.map((item) => (
                <Paper variant="outlined" sx={{ p: 2 }} key={item.id}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    name: {item.name}
                  </Typography>
                  <Typography>username: {item.username}</Typography>
                </Paper>
              ))
            : null}
        </Stack>
      </Container>
    </Box>
  );
}

export default UserList;
