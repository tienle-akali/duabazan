"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

const SITE_LOGO = process.env.NEXT_PUBLIC_SITE_LOGO;

function SwiperCards({ cards = [] }) {
  return (
    <>
      {Array.isArray(cards) && cards.length > 0 && (
        <Swiper
          effect={"cards"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          loop
          pagination
          style={{ width: "100%", maxWidth: "100%" }}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={(theme) => ({
                  width: "100%",
                  paddingTop: "calc(100% * 16 / 9)",
                  position: "relative",
                  backgroundColor: theme.palette.common.white,
                  borderRadius: theme.spacing(2),
                  "& img": {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  },
                })}
              >
                <Image
                  src={item}
                  alt="Card"
                  width={640}
                  height={640}
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default function Home() {
  const [cards, setCards] = useState([]);

  const fetchCards = useCallback(async () => {
    const res = await fetch(`/api/card`);
    const data = await res.json();
    setCards(data);
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <Container sx={{ py: 4 }}>
      <main>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Image
            src={SITE_LOGO}
            alt="Dứa Bazan"
            width={120}
            height={120}
            priority
            style={{
              display: "inline-block",
            }}
          />
        </Box>
        <Container disableGutters maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              margin: "auto",
              maxWidth: {
                xs: 250,
                sm: "100%",
              },
            }}
          >
            <SwiperCards cards={cards} />
          </Box>
        </Container>
      </main>
    </Container>
  );
}
