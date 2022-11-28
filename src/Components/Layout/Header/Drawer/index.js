import {
  Box,
  Grid,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  AffordableIcon,
  LogoutIcon,
  AvatarIcon,
  BestBuyIcon,
  CouponIcon,
  CustomerCareIcon,
  GiftCardIcon,
  LocationIcon,
  NewIcon,
  NotificationIcon,
  OrdersIcon,
  ShopIcon,
  TrendingIcon,
  WishlistIcon,
  PrivacyPolicyIcon,
} from "../Icons";

export default function NavbarDrawer({ open }) {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 135px)",
          width: "100vw",
          position: "fixed",
          zIndex: "1",
          opacity: open ? "1" : "0",
          right: open ? "0" : "100vw",
          transition: "opacity 0.75s, right 0.1s",
          transitionTimingFunction: "ease-out",
          bgcolor: "secondary.main",
        }}
      >
        <Box
          sx={{
            px: 2,
          }}
        >
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12}>
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right,#de57e5 0%,#8863fb 100%)",
                  p: 2,
                  borderRadius: "12px",
                  textTransform: "none",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png"
                  style={{ height: "4rem", borderRadius: "6px" }}
                />
                <div style={{ textAlign: "right" }}>
                  <Typography
                    color="white"
                    variant="h6"
                    sx={{ textAlign: "right" }}
                  >
                    Hey! User Name
                  </Typography>
                  <Typography
                    color="white"
                    variant="caption"
                    sx={{ textAlign: "right" }}
                  >
                    Account Info
                  </Typography>
                </div>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right,#de57e5 0%,#8863fb 100%)",
                  display: "flex",
                  padding: "6px 12px",
                  borderRadius: 16,
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color="white"
                  variant="body2"
                  display="inline"
                  sx={{ textTransform: "none", display: "flex" }}
                >
                  <svg
                    style={{ paddingInlineEnd: 6 }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 9.99999C10.4583 9.99999 10.8508 9.83666 11.1775 9.50999C11.5036 9.18388 11.6666 8.79166 11.6666 8.33332C11.6666 7.87499 11.5036 7.48249 11.1775 7.15582C10.8508 6.82971 10.4583 6.66666 9.99998 6.66666C9.54165 6.66666 9.14942 6.82971 8.82331 7.15582C8.49665 7.48249 8.33331 7.87499 8.33331 8.33332C8.33331 8.79166 8.49665 9.18388 8.82331 9.50999C9.14942 9.83666 9.54165 9.99999 9.99998 9.99999ZM9.99998 18.0208C9.88887 18.0208 9.77776 18 9.66665 17.9583C9.55554 17.9167 9.45831 17.8611 9.37498 17.7917C7.3472 16 5.83331 14.3369 4.83331 12.8025C3.83331 11.2675 3.33331 9.83332 3.33331 8.49999C3.33331 6.41666 4.00359 4.75693 5.34415 3.52082C6.68415 2.28471 8.23609 1.66666 9.99998 1.66666C11.7639 1.66666 13.3158 2.28471 14.6558 3.52082C15.9964 4.75693 16.6666 6.41666 16.6666 8.49999C16.6666 9.83332 16.1666 11.2675 15.1666 12.8025C14.1666 14.3369 12.6528 16 10.625 17.7917C10.5416 17.8611 10.4444 17.9167 10.3333 17.9583C10.2222 18 10.1111 18.0208 9.99998 18.0208Z"
                      fill="white"
                    />
                  </svg>
                  Check Pincode for availablity
                </Typography>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.95831 17.5833C5.74998 17.375 5.64581 17.1283 5.64581 16.8433C5.64581 16.5589 5.74998 16.3125 5.95831 16.1042L12.0625 10L5.93748 3.87501C5.74304 3.68057 5.64581 3.43751 5.64581 3.14584C5.64581 2.85418 5.74998 2.60418 5.95831 2.39584C6.16665 2.18751 6.41331 2.08334 6.69831 2.08334C6.98276 2.08334 7.22915 2.18751 7.43748 2.39584L14.4375 9.41668C14.5208 9.50001 14.58 9.59029 14.615 9.68751C14.6494 9.78473 14.6666 9.8889 14.6666 10C14.6666 10.1111 14.6494 10.2153 14.615 10.3125C14.58 10.4097 14.5208 10.5 14.4375 10.5833L7.41665 17.6042C7.2222 17.7986 6.98276 17.8958 6.69831 17.8958C6.41331 17.8958 6.16665 17.7917 5.95831 17.5833Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            <Grid item sx={{ display: "flex", alignItems: "center" }} xs>
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
              xs
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
          </Grid>
        </Box>
        <Box
        className="nav-scroll"
          sx={{
            px: 2,
            overflowY: "scroll",
            height: "calc(100% - 213px - 16px *2)",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BestBuyIcon />
                </ListItemIcon>
                <ListItemText primary="Best Buy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AffordableIcon />
                </ListItemIcon>
                <ListItemText primary="Affordable" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NewIcon />
                </ListItemIcon>
                <ListItemText primary="New" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <OrdersIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WishlistIcon />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CouponIcon/>
                </ListItemIcon>
                <ListItemText primary="Coupons" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GiftCardIcon/>
                </ListItemIcon>
                <ListItemText primary="Gift Cards" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationIcon />
                </ListItemIcon>
                <ListItemText primary="Notification" />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CustomerCareIcon/>
                </ListItemIcon>
                <ListItemText primary="Contact Us" secondary="24x7" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrivacyPolicyIcon/>
                </ListItemIcon>
                <ListItemText primary="Privacy Policy" />
              </ListItemButton>
            </ListItem>

            <Box sx={{ height: "4rem" }}></Box>

            <ListItem
              disablePadding
              sx={{
                position: "fixed",
                bottom: "0",
                left: "0",
                px: 2,
                py: .5,
                bgcolor: "background.main",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{color: 'red'}} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
