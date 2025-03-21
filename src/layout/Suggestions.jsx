import { Grid, Box } from '@mui/material';
import Suggestions from '../components/Suggestions';

const SuggestionsLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Your main content */}
        <Grid item xs={12} md={8}>
          {/* Your feed or main content goes here */}
        </Grid>
        
        {/* Right sidebar with Suggestions */}
        <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Suggestions />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuggestionsLayout;