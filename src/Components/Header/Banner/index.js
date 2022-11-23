import { Box, Typography } from "@mui/material"

export default function NavbarBanner() {
    return(
        <Box className="navbar-banner" sx={{ bgcolor: "primary.main", height: "1.25rem" }}>
          <Typography color={"white"} sx={{ fontSize: 12 }} align={"center"}>
            The Galleria Of Jewels
          </Typography>
        </Box>
    )
}