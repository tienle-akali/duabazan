"use client";
import {
  FacebookOutlined,
  MusicNoteOutlined,
  PercentOutlined,
  PriceChangeOutlined,
  QrCodeOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SITE_LOGO = process.env.NEXT_PUBLIC_SITE_LOGO;

const topMenu = [
  {
    label: "Thanh toán",
    icon: <QrCodeOutlined />,
    href: "/payment",
  },
  {
    label: "Ưu đãi",
    icon: <PercentOutlined />,
    href: "/promotion",
  },
  {
    label: "Bảng giá",
    icon: <PriceChangeOutlined />,
    href: "/price",
  },
  {
    label: "Fanpage",
    icon: <FacebookOutlined />,
    href: "https://www.facebook.com/duabazan",
    target: "_blank",
  },
  {
    label: "Tiktok",
    icon: <MusicNoteOutlined />,
    href: "https://www.tiktok.com/@duabazan",
    target: "_blank",
  },
];

function TopAppbar() {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Container>
          <Toolbar disableGutters>
            <Link href="/">
              <Typography
                variant="h6"
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Image
                  src={SITE_LOGO}
                  alt="Dứa Bazan Logo"
                  width={40}
                  height={40}
                  priority
                  style={{
                    display: "inline-block",
                  }}
                />
                <b>Dứa Bazan</b>
              </Typography>
            </Link>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                ml: "auto",
              }}
            >
              {topMenu.map((item, index) => (
                <Button
                  key={index}
                  startIcon={item.icon}
                  LinkComponent={Link}
                  href={item.href}
                  target={item.target}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export { TopAppbar, topMenu };
