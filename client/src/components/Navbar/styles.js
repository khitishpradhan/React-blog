import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: 30,
    maxWidth: "100%",
  },
  homeButton: {
    height: "3%",
    width: "6%",
  },
  heading: {
    color: "rgba(0,0,255, 1)",
    flexGrow: 1,
  },
  tool: {
    margin: "0 15%",
  },
  profile: {
    marginLeft: "10px",
  },
  avatar: {
    color: "white",
    backgroundColor: "rgb(233, 8, 52)",
  },

  [theme.breakpoints.down("sm")]: {
    homeButton: {
      marginRight: 0,
      height: "10%",
      width: "20%",
    },
    tool: {
      margin: 0,
    },
  },
}));
