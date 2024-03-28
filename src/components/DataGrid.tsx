/* import CssBaseline from "@mui/material/CssBaseline"
import GlobalStyles from "@mui/material/GlobalStyles" 
import { TextCenter } from "../components/helpers/estilos"*/
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { ProductTable } from "../components/base/BasicDataGrid"

const API_URL = "http://localhost:8800"
 
const DataGrid = () => {
    return(
        <Refine dataProvider={dataProvider(API_URL)}>
            <ProductTable />
        </Refine>  
    )    
}
export default DataGrid