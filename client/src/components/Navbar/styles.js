import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: 30,
    maxWidth: "100%",
  },
  heading: {
    color: "rgba(0,0,255, 1)",
    flexGrow: 1,
  },
  tool: {
    margin: "0 15%",
  },

  [theme.breakpoints.down("sm")]: {
    homeButton: {
      marginRight: 0,
    },
    tool: {
      margin: 0,
    },
  },
}));
