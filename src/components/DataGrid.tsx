import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { useModalForm } from "@refinedev/react-hook-form";
import { Modal } from "@mui/material";

import { ProductTable } from "../components/base/BasicDataGrid"

const API_URL = "http://localhost:8800"
 
const DataGrid = () => {

    return(
        <>
            
            <Refine
                dataProvider={dataProvider(API_URL)}
                resources={[
                    {
                        name: "books",
                        list: "/books",
                        create: "/insertbook",
                        edit: "/updatebook/:id",
                        meta: {
                            canDelete: true,
                        },
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "ccm8pQ-GWknW0-1wHNof",
                }}
                >
                <ProductTable />
            </Refine>
        </>        
    )    
}
export default DataGrid