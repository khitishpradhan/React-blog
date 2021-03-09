import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    maxWidth: 345,
    backgroundColor: theme.palette.secondary,
  },
  grid: {
    display: "flex",
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
  content: {
    height: 100,
  },

  // title: {
  //   "&:hover": {
  //     color: "blue",
  //   },
  // },

  // overlay: {
  //   backgroundColor: "red",
  //   display: "none",

  //   height: 200,

  //   width: 200,
  //   position: "relative",
  //   "&:hover": {},
  // },
  // read: {
  //   backgroundColor: "white",
  //   "&:hover, overlay": {
  //     display: "block",
  //   },
  // },
}));
