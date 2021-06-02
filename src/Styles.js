import { makeStyles, colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 120,
    paddingTop: 120,
  },

  card: {
    backgroundColor: colors.blue[500],
    color: colors.common.white,
    padding: 30,
  },

  icon: {
    color: colors.common.white,
  },

  cardGrid: {
    marginTop: 30,
  },

  plusCard: {
    backgroundColor: colors.blue[500],
    height: "100%",
    width: "100%",
    borderStyle: "solid",
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 10,
    color: "#ffffff",
    padding: 40,
  },

  otherCard: {
    height: "100%",
    width: "100%",
    borderStyle: "solid",
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 10,
    color: "#000000",
    padding: 30,
  },

  tyography: {
    fontWeight: "bold",
  },

  headingTyography: {
    fontWeight: "bold",
    marginBottom: 30,
  },
}));
export default useStyles;
