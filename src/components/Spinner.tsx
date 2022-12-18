import {CircularProgress, Container, styled} from "@mui/material";

const Spinner = styled((props) => (
  <Container {...props}>
    <CircularProgress />
  </Container>
))({
  textAlign: "center",
  userSelect: "none",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
});

export default Spinner;