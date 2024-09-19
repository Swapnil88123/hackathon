// src/pages/Integrations.tsx
import React from "react";
import IntegrationCard from "../../components/IntegrationCard";
import { Grid, Box, Typography } from "@mui/material";
import slackLogo from "../../assets/slack-logo.png"; // Ensure you have the Slack logo image in the assets folder
import githubLogo from "../../assets/github-logo.png";
import { useNavigate } from "react-router-dom";

const Integrations: React.FC = () => {
  const integrations = [
    { name: "Slack", logo: slackLogo, installed: true },
    { name: "GitHub", logo: githubLogo, installed: false },
  ];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={3} padding={3}>
        {integrations.map((integration) => (
          <Grid item key={integration.name}>
            <Box margin="40px">
              <IntegrationCard
                name={integration.name}
                logo={integration.logo}
                installed={integration.installed}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Integrations;
