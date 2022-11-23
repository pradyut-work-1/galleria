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

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_21)">
        <path
          d="M9.99998 1.66666C10.884 1.66666 11.7319 2.01785 12.357 2.64297C12.9821 3.26809 13.3333 4.11593 13.3333 4.99999H15.0291C15.461 4.99993 15.876 5.16748 16.1867 5.46733C16.4974 5.76719 16.6797 6.17594 16.695 6.60749L17.0516 16.6075C17.0596 16.8311 17.0224 17.0541 16.9423 17.2631C16.8622 17.4721 16.7409 17.6628 16.5855 17.8238C16.4301 17.9849 16.2439 18.113 16.0379 18.2006C15.8319 18.2881 15.6104 18.3332 15.3866 18.3333H4.61332C4.38952 18.3332 4.16803 18.2881 3.96206 18.2006C3.75609 18.113 3.56986 17.9849 3.41447 17.8238C3.25909 17.6628 3.13773 17.4721 3.05764 17.2631C2.97755 17.0541 2.94037 16.8311 2.94832 16.6075L3.30498 6.60749C3.32031 6.17594 3.50254 5.76719 3.81327 5.46733C4.12401 5.16748 4.539 4.99993 4.97082 4.99999H6.66665C6.66665 4.11593 7.01784 3.26809 7.64296 2.64297C8.26808 2.01785 9.11593 1.66666 9.99998 1.66666V1.66666ZM8.33332 6.66666H6.66665V7.49999C6.66689 7.71239 6.74822 7.91668 6.89402 8.07113C7.03983 8.22558 7.23911 8.31852 7.45115 8.33097C7.66318 8.34341 7.87197 8.27443 8.03484 8.1381C8.19772 8.00178 8.3024 7.8084 8.32748 7.59749L8.33332 7.49999V6.66666ZM13.3333 6.66666H11.6666V7.49999C11.6666 7.721 11.7544 7.93296 11.9107 8.08925C12.067 8.24553 12.279 8.33332 12.5 8.33332C12.721 8.33332 12.933 8.24553 13.0892 8.08925C13.2455 7.93296 13.3333 7.721 13.3333 7.49999V6.66666ZM9.99998 3.33332C9.5795 3.33319 9.17451 3.492 8.86619 3.7779C8.55787 4.06381 8.36902 4.45569 8.33748 4.87499L8.33332 4.99999H11.6666C11.6666 4.55796 11.4911 4.13404 11.1785 3.82148C10.8659 3.50892 10.442 3.33332 9.99998 3.33332V3.33332Z"
          fill="#231535"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_21">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4375 7.1875C18.4375 9.57812 17.0547 12.0312 14.3281 14.4844C13.09 15.5974 11.7419 16.5816 10.3047 17.4219C10.2113 17.4732 10.1065 17.5001 10 17.5001C9.89348 17.5001 9.78868 17.4732 9.69531 17.4219C9.35938 17.2344 1.5625 12.8047 1.5625 7.1875C1.5625 6.20368 1.87205 5.24479 2.4473 4.44667C3.02255 3.64855 3.83434 3.05166 4.76768 2.74055C5.70102 2.42943 6.70859 2.41987 7.64766 2.71322C8.58673 3.00656 9.40971 3.58794 10 4.375C10.5903 3.58794 11.4133 3.00656 12.3523 2.71322C13.2914 2.41987 14.299 2.42943 15.2323 2.74055C16.1657 3.05166 16.9774 3.64855 17.5527 4.44667C18.128 5.24479 18.4375 6.20368 18.4375 7.1875Z"
        fill="#231535"
      />
    </svg>
  );
}

function AvatarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 4C11.93 4 13.5 5.57 13.5 7.5C13.5 9.43 11.93 11 10 11C8.07 11 6.5 9.43 6.5 7.5C6.5 5.57 8.07 4 10 4ZM10 18C7.97 18 5.57 17.18 3.86 15.12C5.6116 13.7457 7.77362 12.9988 10 12.9988C12.2264 12.9988 14.3884 13.7457 16.14 15.12C14.43 17.18 12.03 18 10 18Z"
        fill="#231535"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99998 9.99999C10.4583 9.99999 10.8508 9.83666 11.1775 9.50999C11.5036 9.18388 11.6666 8.79166 11.6666 8.33332C11.6666 7.87499 11.5036 7.48249 11.1775 7.15582C10.8508 6.82971 10.4583 6.66666 9.99998 6.66666C9.54165 6.66666 9.14942 6.82971 8.82331 7.15582C8.49665 7.48249 8.33331 7.87499 8.33331 8.33332C8.33331 8.79166 8.49665 9.18388 8.82331 9.50999C9.14942 9.83666 9.54165 9.99999 9.99998 9.99999ZM9.99998 18.0208C9.88887 18.0208 9.77776 18 9.66665 17.9583C9.55554 17.9167 9.45831 17.8611 9.37498 17.7917C7.3472 16 5.83331 14.3369 4.83331 12.8025C3.83331 11.2675 3.33331 9.83332 3.33331 8.49999C3.33331 6.41666 4.00359 4.75693 5.34415 3.52082C6.68415 2.28471 8.23609 1.66666 9.99998 1.66666C11.7639 1.66666 13.3158 2.28471 14.6558 3.52082C15.9964 4.75693 16.6666 6.41666 16.6666 8.49999C16.6666 9.83332 16.1666 11.2675 15.1666 12.8025C14.1666 14.3369 12.6528 16 10.625 17.7917C10.5416 17.8611 10.4444 17.9167 10.3333 17.9583C10.2222 18 10.1111 18.0208 9.99998 18.0208Z"
        fill="#231535"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9 10.9C10.6843 12.1224 10.0013 13.776 10 15.5V12H4V16H10V15.5C10 16.35 10.17 17.2 10.5 18H2V12H1V10L2 5H18L18.89 9.46C17.7121 8.98811 16.4213 8.87302 15.1785 9.12906C13.9356 9.3851 12.7955 10.001 11.9 10.9M18 2H2V4H18V2ZM23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5C12 13 14 11 16.5 11C19 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21ZM19 15.5C19 14.837 18.7366 14.2011 18.2678 13.7322C17.7989 13.2634 17.163 13 16.5 13C15.837 13 15.2011 13.2634 14.7322 13.7322C14.2634 14.2011 14 14.837 14 15.5C14 16.163 14.2634 16.7989 14.7322 17.2678C15.2011 17.7366 15.837 18 16.5 18C17.163 18 17.7989 17.7366 18.2678 17.2678C18.7366 16.7989 19 16.163 19 15.5Z"
        fill="#231535"
      />
    </svg>
  );
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ShowOnlyOnMidScreen = useMediaQuery("(min-width:768px)");
  const ShowOnlyOnBigScreen = useMediaQuery("(min-width:1024px)");
  const ShowOnlyOnLargeScreen = useMediaQuery("(min-width:1440px)");

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const options = ["Option 1", "Option 2"];
  return (
    <>
      <Box></Box>
      <Box sx={{ bgcolor: "primary.main", height: "1.25rem" }}>
        <Typography color={"white"} sx={{ fontSize: 12 }} align={"center"}>
          The Galleria Of Jewels
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "secondary.main",
          height: 72,
          px: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} justifyContent={"space-between"}>
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                src="https://pradyut-work-1-congenial-goldfish-56vxw456p47hp4xp-3000.preview.app.github.dev/20221120_164757_0001-removebg-preview-removebg-preview.png"
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
                  display: ShowOnlyOnBigScreen ? "flex" : "none",
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
                  display: ShowOnlyOnBigScreen ? "flex" : "none",
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
            {/* <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            /> */}
            <Autocomplete
              sx={{
                display: "inline-block",
                "& input": {
                  width: 200,
                  bgcolor: "background.paper",
                  color: (theme) =>
                    theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                },
              }}
              id="search"
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
                <LocationIcon />
                <Typography variant="caption" px={0.5}>
                  PINCODE
                </Typography>
              </Grid>
              <Grid item>
                <AvatarIcon />
              </Grid>
              <Grid item>
                <WishlistIcon />
              </Grid>
              <Grid item>
                <CartIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
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
    </>
  );
}
