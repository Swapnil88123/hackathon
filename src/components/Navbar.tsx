// src/components/Navbar.tsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import logo from "../assets/github-logo.png"; // Ensure you have a logo image in the assets folder

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginInlineStart: "15px" }}
            />
            <Typography variant="h6" sx={{ marginInlineStart: "15px" }}>
              Shigoto Mitra
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={sidebarOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#1976d2",
                cursor: "pointer",
                marginLeft: "10px",
                marginTop: "5px",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Integration
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItemButton
              component={Link}
              to="/slack"
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight:
                        location.pathname === "/slack" ? "bold" : "normal",
                    }}
                  >
                    Slack
                  </Typography>
                }
              />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/github"
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight:
                        location.pathname === "/github" ? "bold" : "normal",
                    }}
                  >
                    GitHub
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
