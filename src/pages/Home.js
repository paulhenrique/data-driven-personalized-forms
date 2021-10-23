import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Typography variant="h4">Selecione o formulário</Typography>
      <Box
        mt={3}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ gap: "20px" }}
      >
        <Button
          variant="contained"
          to="/defaultForm"
          color="primary"
          component={Link}
        >
          Formulário Padrão
        </Button>
        <Button
          variant="contained"
          to="/personalizedForm"
          color="primary"
          component={Link}
        >
          Formulário Com Componente Personalizado
        </Button>
        <Button
          variant="contained"
          color="primary"
          to="reactDataGrid"
          component={Link}
        >
          Componente Personalizado
        </Button>
      </Box>
    </>
  );
};

export default Home;
