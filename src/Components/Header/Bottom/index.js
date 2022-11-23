import React from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Badge,
  Grid,
  TextField,
  InputBase,
  Button,
  useMediaQuery,
  IconButton,
  Autocomplete,
} from "@mui/material";

export default function NavbarBottom() {
    return(
      <Box
        className="navbar-bottom"
        sx={{ bgcolor: "background.main", p: 1, boxShadow: 0.7 }}
      >
        <Grid container spacing={2.5} justifyContent={"center"}>
          <Grid item>
            <Button>
              <Typography variant="caption">RINGS</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="caption">EARRINGS</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="caption">BRACELETS & BANGLES</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="caption">SOLITAIRES</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="caption">WATCHES</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="caption">OTHER JEWELLERY</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    )
}