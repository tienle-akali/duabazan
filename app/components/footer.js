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
        py: 2,
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

function EmbedFacebook() {
  return (
    <Box
      component="iframe"
      title="Fanpage Dứa Bazan"
      sx={{
        border: "none",
        overflow: "hidden",
        mx: "auto",
        py: 3,
        display: "block",
        maxWidth: "100%",
      }}
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fduabazan&width=340&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2041712882839941"
      width={340}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}

function MainFooter() {
  return (
    <footer>
      <Container>
        <FooterMenu />
        <EmbedFacebook />
        <Toolbar sx={{ justifyContent: "center" }}>
          <Copyright />
        </Toolbar>
      </Container>
    </footer>
  );
}

export { MainFooter };
