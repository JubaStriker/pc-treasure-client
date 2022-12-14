import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Context/Theme/ThemeProvider';
import { router } from './Routes/Routes/Routes';

function App() {
  const { toggleTheme } = useContext(ThemeContext)

  let theme = "light"

  if (toggleTheme) {
    theme = "light";
  }
  else {
    theme = "dark";
  }
  return (
    <div data-theme={`${theme}`} >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
