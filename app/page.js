"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

function SwiperCards({ cards = [] }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        // style={{ width: "100%" }}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={(theme) => ({
                width: "100%",
                paddingTop: "calc(100% * 16 / 9)",
                position: "relative",
                backgroundColor: theme.palette.common.black,
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
            src="/images/logo/logo-DuaBazan.png"
            alt="DuaBazan Logo"
            width={120}
            height={120}
            priority
            style={{
              display: "inline-block",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Container maxWidth="xs">
            <SwiperCards cards={cards} />
          </Container>
        </Box>
      </main>
    </Container>
  );
}
