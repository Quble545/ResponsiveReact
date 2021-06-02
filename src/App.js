import React from "react";
import "fontsource-roboto";
import Styles from "./Styles";
import {
  Container,
  Card,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import { Brightness5, Add } from "@material-ui/icons";

const App = () => {
  const classes = Styles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Card className={classes.card} elevation={20}>
          <Grid container justify="space-between">
            <Grid>
              <Typography variant="h6">My Accounts</Typography>
            </Grid>

            <Grid item>
              <Button variant="outlined" color="inherit" size="large">
                Swith to testnet
              </Button>

              <Button
                size="large"
                startIcon={<Brightness5 className={classes.icon} />}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            className={classes.cardGrid}
            justify="center"
          >
            <Grid item xl={3} md={6} sm={12}>
              <Card className={classes.plusCard} elevation={5}>
                <Grid container justify="center">
                  <Grid item>
                    <Add fontSize="large" />
                  </Grid>
                </Grid>

                <Grid container justify="center">
                  <Grid item>
                    <Typography variant="h6">Add Account</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xl={3} md={6} sm={12}>
              <Card className={classes.otherCard} elevation={5}>
                <Typography
                  variant="h6"
                  className={classes.headingTyography}
                  gutterBottom
                >
                  My Business Account
                </Typography>

                <Grid container spacing={2}>
                  <Grid item>
                    <Typography variant="subtitle1">0</Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      EURT
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="subtitle1">4.9998</Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      XLM
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xl={3} md={6} sm={12}>
              <Card className={classes.otherCard} elevation={5}>
                <Typography
                  variant="h6"
                  className={classes.headingTyography}
                  gutterBottom
                >
                  Personal Safe
                </Typography>

                <Grid container spacing={2}>
                  <Grid item>
                    <Typography variant="subtitle1">5.9999</Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      XLM
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xl={3} md={6} sm={12}>
              <Card className={classes.otherCard} elevation={5}>
                <Typography
                  variant="h6"
                  className={classes.headingTyography}
                  gutterBottom
                >
                  Discretionary funs
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} xl={6}>
                    <Typography variant="subtitle1">0.5755</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} xl={4}>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      EURT
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} xl={6}>
                    <Typography variant="subtitle1">0.2299</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} xl={6}>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      USD
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} xl={6}>
                    <Typography variant="subtitle1">673.1150</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} xl={6}>
                    <Typography
                      variant="subtitle1"
                      className={classes.tyography}
                    >
                      XLM
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default App;
