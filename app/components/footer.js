"use client";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { topMenu } from "./appbar";

function Copyright() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Typography align="center" variant="body2">
      Dứa Bazan © {currentYear}
    </Typography>
  );
}

function FooterMenu() {
  return (
    <Box
      sx={{
        my: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {topMenu.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          startIcon={item.icon}
          LinkComponent={Link}
          href={item.href}
          target={item.target}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

function MainFooter() {
  return (
    <footer>
      <Container>
        <FooterMenu />
        <Toolbar sx={{ justifyContent: "center" }}>
          <Copyright />
        </Toolbar>
      </Container>
    </footer>
  );
}

export { MainFooter };
