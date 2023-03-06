import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Loader } from "../../Loader/Loader";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const [isLoading,setIsLoading]=useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  if(isLoading){
    return <Loader/>
  }
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          ShareUs
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to ShareUs, the Social Media for Everyone
        </Typography>
        <Form isLoading={isLoading} setIsLoading={setIsLoading} />
      </Box>
    </Box>
  );
};

export default LoginPage;