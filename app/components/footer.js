"use client";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useMemo } from "react";
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

function MessengerPlugin() {
  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "190412854155748");
    chatbox.setAttribute("attribution", "setup_tool");

    window.fbAsyncInit = function () {
      FB.init({
        appId: "886774486482112",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      {/* <!-- Messenger Chat Plugin Code --> */}
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
}

function MainFooter() {
  return (
    <footer>
      <Container>
        <MessengerPlugin />
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
