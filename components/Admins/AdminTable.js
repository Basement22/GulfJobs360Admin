import {
    Table,
    FormGroup,
    Label,
    Input
} from 'reactstrap';



const AdminTable = ({ data }) => {
    return (
        <Table responsive className=" align-items-center">
            <thead className=" thead-light" >
                <tr>
                    <th scope="col" >
                        <div className=" custom-control custom-checkbox mb-2">
                            <Input type="checkbox" />
                        </div>
                    </th>
                    <th className="sort" data-sort="id" scope="col">
                        id
                    </th>
                    <th className="sort" data-sort="name" scope="col">
                        Name
                    </th>
                    <th scope="col">
                        Email
                    </th>
                    <th scope="col">
                        Gender
                    </th>
                    <th scope="col">Active</th>
                </tr>
            </thead>
            <tbody className="list">

                {data.map(d => (
                    <tr key={d.id}>
                        <th className="sort" data-sort="id" scope="col">
                            <div className=" custom-control custom-checkbox mb-2">
                                <Input type="checkbox" />
                            </div>
                        </th>
                        <th scope="row">
                            {d.id}
                        </th>
                        <td>
                            {d.name}
                        </td>
                        <td>
                            {d.email}
                        </td>
                        <td>
                            {d.gender}
                        </td>
                        <td>
                            {d.active}
                        </td>
                    </tr>
                ))}


            </tbody>
        </Table>
    )
}

export default AdminTable; 