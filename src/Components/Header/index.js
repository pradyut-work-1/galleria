import React from "react";
import { Box } from "@mui/material";
import NavbarBanner from "./Banner";
import NavbarTop from "./Top";
import NavbarBottom from "./Bottom";

export default function Header() {
  return (
    <>
      <Box>
        <NavbarBanner />
        <NavbarTop />
        <NavbarBottom />
      </Box>
    </>
  );
}
