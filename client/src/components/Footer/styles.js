import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    padding: "0",
    marginTop: 60,
    backgroundColor: "rgb(139, 168, 168)",
    maxWidth: "100%",
    height: 300,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "rows",
  },
  social: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    paddingLeft: 0,
    alignItems: "center",
    marginLeft: -3,
  },
  avatarBox: {
    marginBottom: 55,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 200,
    flexDirection: "rows",
    borderColor: "text.primary",
  },
  headings: {
    color: "rgb(112, 112, 8)",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: 15,
  },
  root: {
    padding: 0,
    margin: 0,
  },
  avatar: {
    height: theme.spacing(14),
    width: theme.spacing(14),
    marginRight: 15,
  },
  [theme.breakpoints.down("sm")]: {
    nav: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    avatarBox: {
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      height: 400,
      paddingBottom: 50,
    },
    about: {
      marginTop: 30,
    },
  },
}));
