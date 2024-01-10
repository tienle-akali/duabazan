import { Facebook, QrCode } from "@mui/icons-material";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

const footerMenu = [
  {
    label: "Fanpage Dứa Bazan",
    icon: <Facebook />,
    href: process.env.NEXT_PUBLIC_FACEBOOK,
  },
  {
    label: "Thanh toán",
    icon: <QrCode />,
    href: "/payment",
  },
];

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
      {footerMenu.map((item, index) => (
        <Button
          key={index}
          variant="contained"
          startIcon={item.icon}
          LinkComponent={Link}
          href={item.href}
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
