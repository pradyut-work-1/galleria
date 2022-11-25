import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";

export default function NavbarBottom() {
  return useMediaQuery("(min-width:1024px)") ? (
    <NavbarBottomBigScreen />
  ) : (
    <NavbarBottomSmallScreen />
  );
}

function NavbarBottomBigScreen() {
  return (
    <Box
      className="navbar-bottom"
      sx={{ bgcolor: "background.main", p: 1, boxShadow: 0.7 }}
    >
      <Grid container spacing={2.5} justifyContent={"center"}>
        <Grid item>
          <Button>
            <Typography variant="caption">RINGS</Typography>
          </Button>
          <Button>
            <Typography variant="caption">EARRINGS</Typography>
          </Button>
          <Button>
            <Typography variant="caption">BRACELETS & BANGLES</Typography>
          </Button>
          <Button>
            <Typography variant="caption">SOLITAIRES</Typography>
          </Button>
          <Button>
            <Typography variant="caption">WATCHES</Typography>
          </Button>
          <Button>
            <Typography variant="caption">OTHER JEWELLERY</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

function NavbarBottomSmallScreen() {
  return (
    <Box
      className="navbar-bottom"
      sx={{
        bgcolor: "background.main",
        p: 1,
        boxShadow: 0.7,
        overflow: "scroll",
        overflowY: "hidden",
        display: "flex",
      }}
    >
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/catalog/product/c/0/c003702_1_1.jpg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">RINGS</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/jewellery/images/c013134_1.jpg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">EARRINGS</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/jewellery/images/c013180_2_2_1.jpg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">BANGLES</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/jewellery/images/c018820_1.jpeg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">BRACELETS</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://th.bing.com/th?id=OPA.4ytZpAmaJNoJVQ474C474&w=592&h=550&o=5&pid=21.1"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">WATCHES</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/jewellery/images/c021360_1.jpeg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">NECKLACE</Typography>
      </Button>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingInline: "3rem",
          marginInline: "0.2rem",
        }}
      >
        <img
          src="https://smedn7cdn.candere.com/media/jewellery/images/c016739_1.jpeg"
          style={{
            height: "5rem",
            borderRadius: "16px",
            marginBlockEnd: 6,
          }}
        />
        <Typography variant="caption">MORE</Typography>
      </Button>
    </Box>
  );
}
