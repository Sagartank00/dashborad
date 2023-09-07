import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, subtitle1, button }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"
      height="70%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        fontSize={35}
        sx={{ color: colors.grey[100] }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
        {subtitle}
      </Typography>
      <Typography>{subtitle1}</Typography>
      {button}
    </Box>
  );
};

export default StatBox;
