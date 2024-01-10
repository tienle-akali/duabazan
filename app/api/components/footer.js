import { Container, Toolbar, Typography } from "@mui/material";
import { useMemo } from "react";

function Copyright() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Typography align="center" variant="body2">
      Dứa Bazan © {currentYear}
    </Typography>
  );
}

function MainFooter() {
  return (
    <footer>
      <Container>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Copyright />
        </Toolbar>
      </Container>
    </footer>
  );
}

export { MainFooter };
