"use client";
import { Box, Card, Container } from "@mui/material";

const priceURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1Itz-tqoGAbqsMxmK_-9_w2Z0nQFudM4XSHQOgT_JMc5VOmVHRzaPL5kmLuwkaizcRhzw75G6NRpz/pubhtml?gid=0&single=true";

export default function PriceList() {
  return (
    <Container sx={{ py: 4 }}>
      <main>
        <Card variant="outlined">
          <Box
            sx={{ border: "none", minHeight: "70vh" }}
            component="iframe"
            src={priceURL}
            width="100%"
            height="100%"
          />
        </Card>
      </main>
    </Container>
  );
}
