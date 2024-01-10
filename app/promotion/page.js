"use client";
import { Card, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function Promotion() {
  return (
    <Container sx={{ py: 4 }}>
      <main>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} lg={4}>
            <Card sx={{ display: "inline-block", mx: "auto" }}>
              <Image
                src={`/images/card/640/business_card_after.png`}
                alt="Ưu đãi Tết"
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}
