import './App.css'
import { Grid, GridItem } from "@chakra-ui/react";
import MainSidebar from "./components/layout/general/main-sidebar/main-sidebar";
import Navbar from "./components/layout/general/navbar/navbar";

function App() {
  return (
    <div className="App">
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            gap='1'>
            <GridItem pl='2' bg='orange.300' area={'header'}>
                <Navbar />
            </GridItem>
            <GridItem area={'nav'}>
                <MainSidebar />
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    </div>
  )
}

export default App
