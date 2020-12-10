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
                        Id
                    </th>
                    <th className="sort" data-sort="userId" scope="col">
                        User_Id
                    </th>
                    <th className="sort" data-sort="title" scope="col">
                        Title
                    </th>
                    <th className="sort" data-sort="completed" scope="col">
                        Active
                    </th>
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
                            {d.userId}
                        </td>
                        <td>
                            {d.title}
                        </td>
                        <td>
                            {d.completed}
                        </td>
                    </tr>
                ))}


            </tbody>
        </Table>
    )
}

export default AdminTable; 