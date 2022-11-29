import { LocalDining } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Button,
  Rating,
} from "@mui/material";
import React from "react";
import UnstyledSelectSimple from "../../Components/Search/a/SortFilter";

export default function SearchContainer() {
  const products = [
    {
      name: "Intertwined Glim Diamond Ring",
      mp: 32990,
      sp: 18990,
      img: [
        "https://cdn.caratlane.com/media/catalog/product/J/R/JR03769-YGP900_7_lar.jpg",
        "https://cdn.caratlane.com/media/catalog/product/J/R/JR03769-YGP900_1_lar.jpg",
      ],
    },
    {
      name: "Intertwined Glim Diamond Ring",
      mp: 32990,
      sp: 18990,
      img: [
        "https://cdn.caratlane.com/media/catalog/product/J/R/JR03769-YGP900_7_lar.jpg",
        "https://cdn.caratlane.com/media/catalog/product/J/R/JR03769-YGP900_1_lar.jpg",
      ],
    },
  ];
  return (
    <main>
      <Box
        sx={{
          background:
            "linear-gradient(to right,rgb(222 87 229 / 50%) 0%,rgb(136 99 251 / 50%) 100%)",
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          position: "sticky",
          top: "0",
          zIndex: 99999,
          backdropFilter: "blur(5px)",
        }}
      >
        <UnstyledSelectSimple />
      </Box>
      <Box
        sx={{
          background: "white",
          position: "sticky",
          top: "12px",
          left: 0,
          borderRadius: "0 16px 16px 0",
          zIndex: "99999",
          width: "max-content",
          display: "flex",
          py: 1,
          px: 2,
          pl: 4,
          mt: 2,
        }}
      >
        <Typography variant="body1" sx={{}} fontWeight="500">
          Search Term
        </Typography>
        <Typography variant="body2" sx={{ mx: 1, alignSelf: "center" }}>
          69 Results
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box sx={{ m: 2 }}>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right,rgb(222 87 229 / 25%) 0%,rgb(136 99 251 / 25%) 100%)",
                  width: "100%",
                  height: "3rem",
                  borderRadius: "32px 32px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography color="primary.main" fontWeight={500} sx={{}}>
                  Filter By
                </Typography>
              </Box>
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Price</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Under Rs 5,000"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Rs 5,000 - Rs 10,000"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Rs 10,000 - Rs 15,000"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Rs 15,000 - Rs 20,000"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Rs 20,000 - Rs 25,000"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio />}
                      label="Rs 25,000 - Rs 30,000"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio />}
                      label="Rs 30,000 - Rs 40,000"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio />}
                      label="Rs 40,000 - Rs 50,000"
                    />
                    <FormControlLabel
                      value="9"
                      control={<Radio />}
                      label="Rs 50,000 - Rs 75,000"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio />}
                      label="Rs 75,000 - Rs 1,00,000"
                    />
                    <FormControlLabel
                      value="11"
                      control={<Radio />}
                      label="Rs 1,00,000 - Rs 1,50,000"
                    />
                    <FormControlLabel
                      value="12"
                      control={<Radio />}
                      label="Rs 1,50,000 - Rs 2,00,000"
                    />
                    <FormControlLabel
                      value="13"
                      control={<Radio />}
                      label="Rs 2,00,000 - Rs 3,00,000"
                    />
                    <FormControlLabel
                      value="14"
                      control={<Radio />}
                      label="Over Rs 3,00,000"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Type</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Rings"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Pendants"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Bracelets"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Nose Pin"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Charm"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio />}
                      label="Rings"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio />}
                      label="Watches"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio />}
                      label="Mangal Sutra"
                    />
                    <FormControlLabel
                      value="9"
                      control={<Radio />}
                      label="Earrings"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio />}
                      label="Sets"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Weight</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Under 2 gm"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="2 gm - 5 gm"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="5 gm - 10 gm"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="10 gm - 20 gm"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="20 gm - 30 gm"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio />}
                      label="30 gm - 50 gm"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio />}
                      label="Above 50 gm"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Material</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="1" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Platinum"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Gold"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Diamond"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Gemstone"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Solitare"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>For</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="1" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Men"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Women"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Kids"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Baby"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Men & Women"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Ocassion</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="1" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Every Day"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Work Wear"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Anniversary"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Engagement"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="Wedding"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio />}
                      label="Desk to Dinner"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio />}
                      label="Evening"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio />}
                      label="Party Wear"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box
                sx={{
                  m: 2,
                }}
              >
                <FormLabel>Discounts</FormLabel>
                <FormControl
                  sx={{
                    maxHeight: "15rem",
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                  }}
                >
                  <RadioGroup defaultValue="1" name="radio-buttons-group">
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="0% - 10%"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="10% - 20%"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="20% - 30%"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="30% - 50%"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="50% - 75%"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8.5}>
            <Grid container spacing={4}>
              {products.map((item, index) => (
                <>
                  <Grid item xs={4}>
                    <Button
                      light
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        // border: 1,
                        width: "100%",
                        p: 1,
                        borderRadius: 4,
                        "&: hover": {
                          boxShadow: 5,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "badge.bestseller",
                          px: 1,
                          borderRadius: 0.5,
                        }}
                      >
                        <Typography variant="body2">BESTSELLER</Typography>{" "}
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          paddingBottom: "100%",
                          backgroundImage: 'url("' + item.img[0] + '")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          border: "0.5px solid #ddd",

                          marginBlockEnd: 1,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundImage: 'url("' + item.img[1] + '")',
                          },
                        }}
                      ></Box>
                      <Box>
                        <Typography
                          variant="h5"
                          component="span"
                          fontWeight={600}
                        >
                          ₹{item.sp.toLocaleString("en-US")}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ ml: 1, textDecoration: "line-through" }}
                        >
                          ₹{item.mp.toLocaleString("en-US")}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "17.5vw",
                          textAlign: "left",
                        }}
                        gutterBottom
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          textTransform: "none",
                        }}
                        gutterBottom
                        fontWeight={600}
                      >
                        Check Availablity {">"}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating readOnly defaultValue={4} size="small" />{" "}
                        <Typography component="span" size="sm" sx={{ ml: 1 }}>
                          {"(4)"}
                        </Typography>
                      </Box>
                    </Button>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
