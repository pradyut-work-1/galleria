import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  InputBase,
  Button,
  useMediaQuery,
  IconButton,
  Autocomplete,
  Popper,
} from "@mui/material";
import {
  CartIcon,
  WishlistIcon,
  AvatarIcon,
  LocationIcon,
  ShopIcon,
  MenuIcon,
  CloseIcon,
} from "../Icons";
import NavbarDrawer from "../Drawer";

export default function NavbarTop() {
  return useMediaQuery("(min-width:1024px)") ? (
    <NavbarTopBigScreen />
  ) : (
    <NavbarTopSmallScreen />
  );
}

function NavbarTopBigScreen() {
  const options = ["Option 1", "Option 2"];

  const PopperMy = function (props) {
    return <Popper {...props} placement="bottom-start" />;
  };

  return (
    <Box
      className="navbar-top"
      sx={{
        bgcolor: "secondary.main",
        px: 2,
        py: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent={"space-between"}>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://pradyut-work-1-didactic-goggles-9v6jpqwvgx9c7vvq-3000.preview.app.github.dev/20221120_164757_0001-removebg-preview-removebg-preview.png"
              style={{ height: "1.75rem" }}
            />
          </div>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Grid container spacing={0.5}>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Button light>
                <ShopIcon />
                <Typography fontWeight={600} px={0.5} fontSize={12}>
                  FIND THE STORE
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button light>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 5.01749C9.99998 4.68689 9.93486 4.35953 9.80834 4.05409C9.68183 3.74865 9.49639 3.47112 9.26262 3.23735C9.02885 3.00358 8.75132 2.81814 8.44588 2.69163C8.14045 2.56511 7.81308 2.49999 7.48248 2.49999H5.01748C4.68418 2.49571 4.35334 2.55765 4.04417 2.68223C3.735 2.80681 3.45365 2.99155 3.21644 3.22573C2.97923 3.45991 2.79088 3.73886 2.66233 4.0464C2.53379 4.35395 2.46759 4.68396 2.46759 5.01729C2.46759 5.35061 2.53379 5.68062 2.66233 5.98817C2.79088 6.29571 2.97923 6.57466 3.21644 6.80884C3.45365 7.04302 3.735 7.22776 4.04417 7.35234C4.35334 7.47692 4.68418 7.53887 5.01748 7.53458H5.49998V8.74999C5.49998 8.74999 9.99998 8.14249 9.99998 5.01749ZM7.70831 11.6667C7.70831 12.5875 6.96248 13.3333 6.04164 13.3333C5.12081 13.3333 4.37498 12.5875 4.37498 11.6667C4.37498 10.7458 5.12081 9.99999 6.04164 9.99999C6.96248 9.99999 7.70831 10.7458 7.70831 11.6667ZM6.04164 14.1667C4.85956 14.1667 2.49998 14.7625 2.49998 15.9446V17.5H9.58331V15.9446C9.58331 14.7621 7.22373 14.1667 6.04164 14.1667ZM13.9583 13.3333C14.8791 13.3333 15.625 12.5875 15.625 11.6667C15.625 10.7458 14.8791 9.99999 13.9583 9.99999C13.0375 9.99999 12.2916 10.7458 12.2916 11.6667C12.2916 12.5875 13.0375 13.3333 13.9583 13.3333ZM13.9583 14.1667C12.7762 14.1667 10.4166 14.7625 10.4166 15.9446V17.5H17.5V15.9446C17.5 14.7621 15.1404 14.1667 13.9583 14.1667ZM13.3508 2.91666C12.6831 2.91666 12.0428 3.1819 11.5707 3.65402C11.0985 4.12614 10.8333 4.76648 10.8333 5.43416C10.8333 8.55916 14.8333 9.16666 14.8333 9.16666V7.95124H14.9825C15.3158 7.95553 15.6466 7.89359 15.9558 7.76901C16.265 7.64443 16.5463 7.45969 16.7835 7.22551C17.0207 6.99133 17.2091 6.71238 17.3376 6.40483C17.4662 6.09729 17.5324 5.76728 17.5324 5.43395C17.5324 5.10062 17.4662 4.77061 17.3376 4.46307C17.2091 4.15553 17.0207 3.87658 16.7835 3.6424C16.5463 3.40822 16.265 3.22348 15.9558 3.0989C15.6466 2.97432 15.3158 2.91237 14.9825 2.91666H13.3508V2.91666Z"
                    fill="#231535"
                  />
                </svg>
                <Typography fontWeight={600} px={0.5} fontSize={12}>
                  PLAN A PURCHASE
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button light>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 5.01749C9.99998 4.68689 9.93486 4.35953 9.80834 4.05409C9.68183 3.74865 9.49639 3.47112 9.26262 3.23735C9.02885 3.00358 8.75132 2.81814 8.44588 2.69163C8.14045 2.56511 7.81308 2.49999 7.48248 2.49999H5.01748C4.68418 2.49571 4.35334 2.55765 4.04417 2.68223C3.735 2.80681 3.45365 2.99155 3.21644 3.22573C2.97923 3.45991 2.79088 3.73886 2.66233 4.0464C2.53379 4.35395 2.46759 4.68396 2.46759 5.01729C2.46759 5.35061 2.53379 5.68062 2.66233 5.98817C2.79088 6.29571 2.97923 6.57466 3.21644 6.80884C3.45365 7.04302 3.735 7.22776 4.04417 7.35234C4.35334 7.47692 4.68418 7.53887 5.01748 7.53458H5.49998V8.74999C5.49998 8.74999 9.99998 8.14249 9.99998 5.01749ZM7.70831 11.6667C7.70831 12.5875 6.96248 13.3333 6.04164 13.3333C5.12081 13.3333 4.37498 12.5875 4.37498 11.6667C4.37498 10.7458 5.12081 9.99999 6.04164 9.99999C6.96248 9.99999 7.70831 10.7458 7.70831 11.6667ZM6.04164 14.1667C4.85956 14.1667 2.49998 14.7625 2.49998 15.9446V17.5H9.58331V15.9446C9.58331 14.7621 7.22373 14.1667 6.04164 14.1667ZM13.9583 13.3333C14.8791 13.3333 15.625 12.5875 15.625 11.6667C15.625 10.7458 14.8791 9.99999 13.9583 9.99999C13.0375 9.99999 12.2916 10.7458 12.2916 11.6667C12.2916 12.5875 13.0375 13.3333 13.9583 13.3333ZM13.9583 14.1667C12.7762 14.1667 10.4166 14.7625 10.4166 15.9446V17.5H17.5V15.9446C17.5 14.7621 15.1404 14.1667 13.9583 14.1667ZM13.3508 2.91666C12.6831 2.91666 12.0428 3.1819 11.5707 3.65402C11.0985 4.12614 10.8333 4.76648 10.8333 5.43416C10.8333 8.55916 14.8333 9.16666 14.8333 9.16666V7.95124H14.9825C15.3158 7.95553 15.6466 7.89359 15.9558 7.76901C16.265 7.64443 16.5463 7.45969 16.7835 7.22551C17.0207 6.99133 17.2091 6.71238 17.3376 6.40483C17.4662 6.09729 17.5324 5.76728 17.5324 5.43395C17.5324 5.10062 17.4662 4.77061 17.3376 4.46307C17.2091 4.15553 17.0207 3.87658 16.7835 3.6424C16.5463 3.40822 16.265 3.22348 15.9558 3.0989C15.6466 2.97432 15.3158 2.91237 14.9825 2.91666H13.3508V2.91666Z"
                    fill="#231535"
                  />
                </svg>
                <Typography fontWeight={600} px={0.5} fontSize={12}>
                  EXPLORE PRICES
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs
          sx={{
            display: "flex",
          }}
          style={{ maxWidth: "20rem" }}
        >
          <Autocomplete
            sx={{
              display: "inline-block",
              "& input": {
                width: 200,
                bgcolor: "background.paper",
                color: (theme) =>
                  theme.palette.getContrastText(theme.palette.background.paper),
              },
            }}
            id="search"
            PopperComponent={PopperMy}
            options={options}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <InputBase
                  sx={{
                    py: 0.5,
                    px: 0.5,
                    flex: 1,
                    fontSize: 12,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    borderRadius: "4px 4px 4px 4px",
                    background:
                      "linear-gradient(white,white) padding-box padding-box,linear-gradient(to right,rgb(222,87,229),rgb(136,99,251)) border-box border-box",
                    width: "-webkit-fill-available",
                    borderRadius: "6px 0px 0px 6px",
                  }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "Search Galleria" }}
                  type="text"
                  {...params.inputProps}
                />
              </div>
            )}
          />

          <IconButton
            sx={{
              background: "linear-gradient(to right,#de57e5 0%,#8863fb 100%)",
              borderRadius: "0px 6px 6px 0px",
            }}
            disableElevation
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8092 4.07333 11.7608C3.02444 10.7119 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02444 5.12139 4.07333 4.0725C5.12167 3.02417 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7119 3.02417 11.7608 4.0725C12.8092 5.12139 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9375 15.7708C17.0903 15.9236 17.1667 16.1111 17.1667 16.3333C17.1667 16.5556 17.0833 16.75 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167V16.9167ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3022 9.84389 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3022 5.98944 10.5733 5.26C9.84389 4.53111 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98944 4.53111 5.26 5.26C4.53111 5.98944 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53111 9.84389 5.26 10.5733C5.98944 11.3022 6.875 11.6667 7.91667 11.6667Z"
                fill="white"
              />
            </svg>
          </IconButton>
        </Grid>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Grid
            container
            spacing={2}
            direction={"row"}
            justifyContent={"flex-end"}
          >
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Button>
                <LocationIcon />
                <Typography variant="caption" px={0.5}>
                  PINCODE
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <IconButton>
                <AvatarIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <WishlistIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <CartIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function NavbarTopSmallScreen() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const options = ["Option 1", "Option 2"];

  const PopperMy = function (props) {
    return <Popper {...props} placement="bottom-start" />;
  };

  return (
    <>
      <Box
        className="navbar-top"
        sx={{
          bgcolor: "secondary.main",
          px: 2,
          py: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Grid
              container
              spacing={2}
              direction={"row"}
              justifyContent={"flex-start"}
            >
              <Grid item sx={{ display: "flex", alignItems: "center" }} xs={6}>
                <IconButton
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  sx={{
                    transform: navbarOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform .25s",
                    transitionTimingFunction: "ease-out",
                  }}
                >
                  {navbarOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <div style={{ display: "flex", paddingInlineStart: 2 }}>
                  <img
                    src="https://pradyut-work-1-didactic-goggles-9v6jpqwvgx9c7vvq-3000.preview.app.github.dev/20221120_164757_0001-removebg-preview-removebg-preview.png"
                    style={{ height: "1.25rem" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              spacing={1.5}
              direction={"row"}
              justifyContent={"flex-end"}
            >
              <Grid item>
                <IconButton>
                  <WishlistIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <CartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
            }}
          >
            <Autocomplete
              sx={{
                display: "inline-block",
                width: "100%",
                "& input": {
                  bgcolor: "background.paper",
                  color: (theme) =>
                    theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                },
              }}
              id="search"
              PopperComponent={PopperMy}
              options={options}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <InputBase
                    sx={{
                      py: 0.5,
                      px: 0.5,
                      flex: 1,
                      fontSize: 12,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "transparent",
                      borderRadius: "4px 4px 4px 4px",
                      background:
                        "linear-gradient(white,white) padding-box padding-box,linear-gradient(to right,rgb(222,87,229),rgb(136,99,251)) border-box border-box",
                      width: "-webkit-fill-available",
                      borderRadius: "6px 0px 0px 6px",
                    }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "Search Galleria" }}
                    type="text"
                    {...params.inputProps}
                  />
                </div>
              )}
            />

            <IconButton
              sx={{
                background: "linear-gradient(to right,#de57e5 0%,#8863fb 100%)",
                borderRadius: "0px 6px 6px 0px",
              }}
              disableElevation
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8092 4.07333 11.7608C3.02444 10.7119 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02444 5.12139 4.07333 4.0725C5.12167 3.02417 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7119 3.02417 11.7608 4.0725C12.8092 5.12139 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9375 15.7708C17.0903 15.9236 17.1667 16.1111 17.1667 16.3333C17.1667 16.5556 17.0833 16.75 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167V16.9167ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3022 9.84389 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3022 5.98944 10.5733 5.26C9.84389 4.53111 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98944 4.53111 5.26 5.26C4.53111 5.98944 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53111 9.84389 5.26 10.5733C5.98944 11.3022 6.875 11.6667 7.91667 11.6667Z"
                  fill="white"
                />
              </svg>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <NavbarDrawer open={navbarOpen} />
    </>
  );
}
