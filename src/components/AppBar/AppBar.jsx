import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container, Box, Paper } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Paper>
        <Container maxWidth="lx">
          <Box
            sx={{
              py: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <MainNav />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </Paper>
    </header>
  );
};
