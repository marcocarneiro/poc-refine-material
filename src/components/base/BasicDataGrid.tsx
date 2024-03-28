import React from "react";
import { useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const ProductTable: React.FC = () => {
    const { dataGridProps } = useDataGrid<IProduct>({
        resource: "books",
    });

    const columns = React.useMemo<GridColDef<IProduct>[]>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
                width: 50,
            },
            { field: "title", headerName: "Título", minWidth: 400, flex: 1 },
            { field: "desc", headerName: "Descrição", minWidth: 400, flex: 1 },
            { field: "price", headerName: "Price", minWidth: 120, flex: 0.3 },
            { field: "cover", headerName: "Capa", minWidth: 120, flex: 0.3 },
        ],
        [],
    );

    return (
        <div style={{ padding:"4px" }}>
            <h2>Products</h2>
            <DataGrid {...dataGridProps} columns={columns} />
        </div>
    );
};

interface IProduct {
    id: number;
    title: string;
    desc: string;
    price: string;
    cover: string;
}