import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useState } from 'react'
import Pagination from './pagination'

export default function Table() {
    const data = [
        {
            name: "SUmanth",
            age: "23",
            active: false,
            "id": 1
        },
        {
            name: "SUmant1",
            age: "23",
            active: true,
            "id": 2
        },
        {
            name: "SUmanth3",
            age: "23",
            active: true,
            "id": 3
        },
        {
            name: "SUmanth4",
            age: "23",
            active: true,
            "id": 4
        },
    ]

    const [totalRecords, setTotalRecords] = useState<number>(0)

    const onPageDataChange = (data) => {

    }

    const onRowDataChange = (data) => {

    }

    return (
        <div>
            <DataTable value={data} >
                <Column field='name' sortable />
                <Column field='age' sortable />
                <Column field='active' sortable />

            </DataTable>
            <Pagination
                totalRecords={100}
                limit={10}
                recordsPerPage={[10, 20, 30]}
                onPageChange={(data) => onPageDataChange(data)}
                onRowChange={(data) => onRowDataChange(data)}
            ></Pagination>
        </div>
    )
}