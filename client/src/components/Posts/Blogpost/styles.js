import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  container: {
    padding: 0,
    border: "1px black",
    width: 1000,
  },
  media: {
    height: 500,
  },
  title: {
    marginTop: 30,
  },
  tags: {
    margin: theme.spacing(0),
    marginRight: 10,
    marginTop: 20,
  },
  Toolbar: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    alignContent: "center",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 5,
  },
  creator: {
    marginRight: 10,
  },
  content: {
    padding: 50,
  },
  [theme.breakpoints.down("sm")]: {
    content: {
      padding: 0,
    },
    media: {
      height: 200,
    },
  },
}));
