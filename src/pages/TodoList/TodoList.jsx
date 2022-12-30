import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, Button, Chip, Container, Paper, Stack, Typography } from '@mui/material';

import { getTodos } from 'redux/actions';

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todosData } = useSelector((state) => state.todos);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
    setTodos(todosData);
  }, [todosData]);

  const toggleStatus = (id) => () => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const renderTodos = () => {
    if (todos.length) {
      const todosToRender = todos.map((item) => (
        <Paper variant="outlined" sx={{ p: 2 }} key={item.id}>
          <Typography variant="h6" sx={{ textTransform: 'capitalize', mb: 3 }}>
            {item.title}
          </Typography>
          <Button variant="contained" disableRipple onClick={toggleStatus(item.id)}>
            Change status
          </Button>
          <Chip
            label={item.completed ? 'done' : 'pending'}
            color={item.completed ? 'success' : 'warning'}
            variant="outlined"
            sx={{ ml: 6 }}
          />
        </Paper>
      ));
      return todosToRender;
    }
    return null;
  };

  return (
    <Box pt={14}>
      <Container maxWidth="xl">
        <Typography sx={{ fontSize: { xs: '2.4rem', md: '3rem', lg: '3.6rem' }, mb: 3 }}>
          Todos
        </Typography>
        <Stack spacing={4}>
          {isLoading && <Typography>Loading...</Typography>}
          {renderTodos()}
        </Stack>
      </Container>
    </Box>
  );
}

export default TodoList;
