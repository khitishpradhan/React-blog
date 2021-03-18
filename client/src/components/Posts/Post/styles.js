import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: "100%",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    Width: "100%",
    borderRadius: 0,
    border: 0,
    color: theme.primary,
    boxShadow: "none",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    height: "100%",
  },
  title: {
    width: "100%",
    fontFamily: "'Fredoka One', cursive",
    wordWrap: "break-word",
  },
  post_content: {
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderColor: "rgb(234, 234, 234)",
  },
  post_container: {
    width: 800,
  },
  [theme.breakpoints.down("sm")]: {
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    border: {
      border: "solid",
    },
    fullHeightCard: {
      height: "100%",
    },
    mob_card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      position: "relative",
      width: "100%",
      backgroundColor: theme.palette.secondary,
    },
    details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
    },
    cardActions: {
      padding: "0 16px 8px 16px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));
