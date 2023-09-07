import React, { useState } from 'react';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './components/global/Topbar';
import Sidebar from './components/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashborad';
import PieChart from './components/PieChart/PieChart';
import BarChart from './components/BarChart/BarChart';
import AreaChart from './components/AreaChart/AreaChart';
import LineChart from './components/LineChart/LineChart';
import DonatChart from './components/DonatChart/DonatChart';
import ScatterplotChart from './components/ScatterplotChart/ScatterplotChart';

function App() {
  // Get the current theme and color mode using the custom hook useMode()
  const [theme, colorMode] = useMode();

  // State to manage the sidebar visibility
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      {/* Provide the color mode context for components that need it */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {/* Render the Sidebar component */}
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              {/* Render the Topbar component and pass setIsSidebar for interaction */}
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                {/* Define routes for different views */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/pie" element={<PieChart />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/area" element={<AreaChart />} />
                <Route path="/donat" element={<DonatChart />} />
                <Route path="/scatterplot" element={<ScatterplotChart />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
