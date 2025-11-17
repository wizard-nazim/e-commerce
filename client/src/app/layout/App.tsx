import { useEffect, useState } from 'react'
import type { Product } from "../../app/models/product"
import Catalog from '../../features/catalog/Catalog'
import { Box, Container, CssBaseline } from '@mui/material'
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode? 'dark' :'light'
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: (paletteType == 'light')? '#eaeaea' : '#121212'
      }
    }
  }) 

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}


  useEffect(() => {
    fetch('https://localhost:5006/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <Box
    sx={{
      minHeight: '100vh',
      background: darkMode 
      ? 'radial-gradient(circle, #1e3aBa, #111B27)'
      : 'radial-gradient(circle, #baecf9, #f0f9f9ff)',
      py:6
    }}>

   <Container maxWidth='xl' sx={{mt: 14}}> 
    <Catalog products={products} />
    </Container>
    </Box>
 
    </ThemeProvider>
  )
}

export default App
