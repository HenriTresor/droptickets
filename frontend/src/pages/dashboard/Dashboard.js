import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Welcome to Dashboard Page!</Typography>
    </Box>
  );
};

export default Dashboard;
