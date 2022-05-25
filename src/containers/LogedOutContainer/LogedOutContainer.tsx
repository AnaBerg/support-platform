import { Paper, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { Button, TextField } from "../../components";

import capitalize from "../../utils/captalize";
import { Login } from "../../types/login";
import { baseUrl } from "../../constants/baseUrl";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

const LogedOutContainer = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/login",
        data: {
          email: "ana.berg@voltzmotors.com",
          password: "123456",
        },
      }).then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={divStyle}>
        <Paper>
          <Grid container spacing={5} padding={2}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                {capitalize(t("LOGIN"))}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                //type="email"
                error={!!errors.email}
                errorMessage={errors.email?.message}
                //required={true}
                control={control}
                label={capitalize(t("EMAIL"))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                control={control}
                error={!!errors.password}
                errorMessage={errors.password?.message}
                //required={true}
                type="password"
                label={capitalize(t("PASSWORD"))}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth>
                {t("LOGIN")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
};

export default LogedOutContainer;
