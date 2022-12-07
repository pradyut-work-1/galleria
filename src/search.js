// Import components
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  SortBy,
  Pagination,
  Stats,
  Panel,
  Menu,
  RefinementList,
  RatingMenu,
  RangeInput,
  ClearRefinements,
  Highlight,
} from "react-instantsearch-dom";
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
import algoliasearch from "algoliasearch/lite";
import { useState } from "react";

const searchClient = algoliasearch(
  "4822O2AGTK",
  "be4b234e6163300f2daf2276f3f20793"
);

export default function App() {
  const [products, setProducts] = useState([]);
  const Hit = ({ hit }) => setProducts([...products, hit]);

  console.log(products);
  return (
    <>
      <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="products" searchClient={searchClient}>
          <div className="right-panel">
            <Configure hitsPerPage={12} />

            <SearchBox />
            <Stats />
            <SortBy
              items={[{ value: "products", label: "Featured" }]}
              defaultRefinement="products"
            />
            <Hits hitComponent={Hit} />

            <Pagination showLast={true} />
          </div>
        </InstantSearch>
        {/* <CustomSearchBox /> */}
      </div>
      <div>{JSON.stringify(products)}</div>
    </>
  );
}

// const CustomSearchBox = ({ currentRefinement, refine }) => (
//   <Box sx={{ display: "flex", width: "50rem", mx: 2 }}>
//     <InputBase
//       sx={{
//         py: 0.5,
//         px: 0.5,
//         flex: 1,
//         fontSize: 12,
//         borderWidth: "1px",
//         borderStyle: "solid",
//         borderColor: "transparent",
//         borderRadius: "4px 4px 4px 4px",
//         background:
//           "linear-gradient(white,white) padding-box padding-box,linear-gradient(to right,rgb(222,87,229),rgb(136,99,251)) border-box border-box",
//         width: "-webkit-fill-available",
//         borderRadius: "6px 0px 0px 6px",
//       }}
//       placeholder="Search"
//       inputProps={{ "aria-label": "Search Galleria" }}
//       type="input"
//       value={currentRefinement}
//       onChange={(e) => refine(e.currentTarget.value)}
//     />
//     <IconButton
//       sx={{
//         background: "linear-gradient(to right,#de57e5 0%,#8863fb 100%)",
//         borderRadius: "0px 6px 6px 0px",
//       }}
//       disableElevation
//     >
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8092 4.07333 11.7608C3.02444 10.7119 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02444 5.12139 4.07333 4.0725C5.12167 3.02417 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7119 3.02417 11.7608 4.0725C12.8092 5.12139 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9375 15.7708C17.0903 15.9236 17.1667 16.1111 17.1667 16.3333C17.1667 16.5556 17.0833 16.75 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167V16.9167ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3022 9.84389 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3022 5.98944 10.5733 5.26C9.84389 4.53111 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98944 4.53111 5.26 5.26C4.53111 5.98944 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53111 9.84389 5.26 10.5733C5.98944 11.3022 6.875 11.6667 7.91667 11.6667Z"
//           fill="white"
//         />
//       </svg>
//     </IconButton>
//   </Box>
// );
