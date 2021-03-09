import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: "100%",
    height: 500,
    textAlign: "center",
  },
  form: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginRight: 10,
  },
  tool: {
    marginLeft: 0,
    padding: "10px",
  },
  container: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      width: "100%",
    },
  },
}));
