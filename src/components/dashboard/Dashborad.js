import { Box, Button, ButtonGroup, ClickAwayListener, Divider, Grid, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../StatBox";
import React, { useRef, useState } from "react";
import { ArrowDropDown, BorderClear, ChevronLeft, ChevronRight } from "@mui/icons-material";
import Table1 from "../Tables/Table";
import Table2 from "../Tables/Table2";
import Table3 from "../Tables/Table3";
import List1 from "../List/List";
import List2 from "../List/List2";
import ConnectedScatterplot from "./simpleChart";

const options = ['Current Week', 'Last Week', 'Previous Week'];
const options1 = Array.from({ length: 101 }, (_, i) => i);

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container sx={{ p: "20px", pt: "0", pr: "0" }}>
      <Grid item lg={9} md={9} xs={12} sm={12} pr={2}>
        {/* HEADER */}
        <Stack
          direction="row"
          flexWrap={"wrap"}
          justifyContent={{ md: "space-between", sm: "center", xs: "center" }}
          alignItems={"center"}
          mb="30px"
          gap={{ lg: 0, md: 0, sm: 1, xs: 1 }}
        >
          <Stack
            direction="row"
            spacing={3}
          >
            <Box>
              <ButtonGroup ref={anchorRef} aria-label="split button">
                <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                  sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                  }}
                >
                  <ArrowDropDown />
                </Button>
                <Button onClick={handleClick} sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                }}>{options[selectedIndex]}</Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
            <Stack
              direction="row"
              spacing={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton sx={{ color: colors.grey[100], backgroundColor: colors.blueAccent[700], }}>
                <ChevronLeft />
              </IconButton>
              <Typography
                variant={{ md: "h4", sx: "h6" }}
                fontWeight="bold"
                sx={{ color: colors.grey[100] }}
              >
                8/28/23 - 9/3/23
              </Typography>
              <IconButton sx={{ color: colors.grey[100], backgroundColor: colors.blueAccent[700], }}>
                <ChevronRight />
              </IconButton>
            </Stack>
          </Stack>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
            }}
          >
            Export
          </Button>
        </Stack>
        {/* ROW 1 */}
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          mb={2}
          gap={2}
        >
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="17vh"
            padding={2}
          >
            <StatBox
              title="$98.5"
              subtitle="InDustry"
              subtitle1="Box Office"
              button=""
            />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="17vh"
            padding={2}
          >
            <StatBox
              title="15.2 M"
              subtitle="Screen Visiters"
              subtitle1="Admissions"
              button=""
            />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="17vh"
            padding={2}
          >
            <StatBox
              title="0.72"
              subtitle="Seasonality"
              subtitle1=""
              button=""
            />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="17vh"
            padding={2}
          >
            <StatBox
              title="75%"
              subtitle=""
              subtitle1=""
              button={<Button sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
              }}>
                PG13 | R
              </Button>}
            />
          </Box>
        </Box>
        {/* ROW 2 */}
        <Box
          display="flex"
          flexDirection={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          mb={2}
          gap={2}
        >
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
          >
            <Box height="13.8vh" display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <ConnectedScatterplot height={100} width={200} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              pb={1}
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                }}>
                  24
                </Button>
                <Typography>-</Typography>
                <Button sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                }}>
                  49
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
          >
            <Box>
              <Table1 />
            </Box>
          </Box>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
          >
            <Table2 />
          </Box>
        </Box>
        <Box
          width="100%"
          backgroundColor={colors.primary[400]}
          mb={2}
        >
          <Table3 />
        </Box>
      </Grid >
      <Grid item lg={3} md={3} xs={12} sm={12} pr={2}>
        <Box>
          <Box
            padding="10px"
            backgroundColor={colors.primary[400]}
            marginBottom={2}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
              align="center"
            >
              WEEK END
            </Typography>
            <Typography variant="h5"
              align="center"
              sx={{ color: colors.greenAccent[500] }}
              marginBottom={1}
            >
              8/25 - 8/27
            </Typography>
            <Divider />
            <List1 />
          </Box>
          <Box
            padding="10px"
            backgroundColor={colors.primary[400]}
            marginBottom={2}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
              align="center"
              marginBottom={1}
            >
              6 - MONTH FORECAST
            </Typography>
            <Divider />
            <List2 />
          </Box>
          <Box
            padding="10px"
            height="20vh"
            backgroundColor={colors.primary[400]}
          >
            <Typography
              variant="h4"
              sx={{ color: colors.grey[100] }}
              align="center"
              marginBottom={1}
            >
              TOTAL DATA RECORDS
            </Typography>
            <Divider />
            <Typography variant="h1" align="center" fontWeight={"bold"} marginTop={3}>150.9</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
};

export default Dashboard;
