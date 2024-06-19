import ThemeProvider from 'styled-components'

export const Theme = ({children}) => {
    const theme = {
        primary: '#341949',
        secondary: 'white',
        grain: '#FAF2FF',
        green: '#158E01',
        gold: '#FF8D05'
    }
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}
