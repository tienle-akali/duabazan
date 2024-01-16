"use client";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const paymentAccounts = [
  {
    bankName: "Vietinbank",
    accountName: "Ngo Thi Xuan Trang",
    accountNumber: "0327009879",
    qrcode: "ICB-0327009879-print",
  },
  {
    bankName: "TP Bank",
    accountName: "Le Duc Tien",
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
      <Typography>
        <i>
          Quý khách đặt hàng xin vui lòng thanh toán chuyển khoản bằng cách quét
          1 trong 2 mã QR bên dưới với nội dung:
        </i>
      </Typography>
      <Typography sx={{ my: 1 }}>
        <b>Duabazan + Tên khách + Số điện thoại</b>
      </Typography>
      <Typography>
        Dứa sẽ thông báo lại Quý khách sau khi nhận được giao dịch.
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
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ textTransform: "uppercase" }}
                >
                  {item.accountName}
                </Typography>
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
