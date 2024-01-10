"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

function PaymentContent() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography align="center" paragraph>
        Cảm ơn Quý khách đã ủng hộ nhà Dứa 🥰
        <br />
        Quý khách đặt hàng xin vui lòng thanh toán chuyển khoản bằng cách quét
        mã QR bên dưới:
      </Typography>
      <Image
        src={`/images/payment/TPB-00001583200-compact.png`}
        alt="TP-Bank 00001583200"
        width={160}
        height={160}
        loading="lazy"
        style={{
          display: "block",
          margin: "auto",
        }}
      />
    </Box>
  );
}

export default function Payment() {
  return (
    <Container sx={{ py: 4 }}>
      <main>
        <PaymentContent />
      </main>
    </Container>
  );
}
