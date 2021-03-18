import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  posts: {
    backgroundColor: "rgb(255, 255, 255",
    marginTop: 100,
  },
  [theme.breakpoints.down("sm")]: {
    posts: {
      marginTop: 100,
      backgroundColor: "red",
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));
