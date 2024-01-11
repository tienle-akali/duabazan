"use client";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const paymentAccounts = [
  {
    bankName: "Vietinbank",
    accountNumber: "0327009879",
    qrcode: "ICB-0327009879-print",
  },
  {
    bankName: "TP-Bank",
    accountNumber: "00001583200",
    qrcode: "TPB-00001583200-print",
  },
];

function PaymentContent() {
  return (
    <Box sx={{ my: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Cảm ơn Quý khách đã tin tưởng mua hàng tại nhà Dứa 🥰
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        Quý khách đặt hàng xin vui lòng thanh toán chuyển khoản bằng cách quét 1
        trong 2 mã QR bên dưới:
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ my: 3 }}>
        {paymentAccounts.map((item, index) => (
          <Grid item xs={6} sm="auto" key={index}>
            <Card sx={{ pb: 2 }}>
              <Image
                src={`/images/payment/${item.qrcode}.png`}
                alt={`${item.bankName} ${item.accountNumber}`}
                width={250}
                height={250}
                // loading="lazy"
                priority
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  margin: "auto",
                  borderRadius: 16,
                }}
              />
              <Typography sx={{ fontWeight: "bold" }} color="primary">
                {item.bankName}
                <br />
                STK: {item.accountNumber}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
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
