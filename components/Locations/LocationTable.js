import {
    Table,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';



const AdminTable = ({ posts }) => {
    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }
  

    return (
        <Table responsive striped className="align-items-center">
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
                    <th className="sort" data-sort="locationName" scope="col">
                        Location_Name
                    </th>
                    <th className="sort" data-sort="code" scope="col">
                        Code
                    </th>
                    <th className="sort" data-sort="createdBy" scope="col">
                        Created_By
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Status
                    </th>
                    <th className="sort" data-sort="completed" scope="col">

                    </th>
                </tr>
            </thead>
            <tbody className="list">

                {posts.map(d => (
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
                            {d.location_name}
                        </td>
                        <td>
                            {d.code}
                        </td>
                        <td>
                            {d.first_name}
                        </td>
                        <td>
                            Yes
                        </td>
                        <td>
                            <Button outline color="primary" size="sm" ><i class="fas fa-pencil-alt"></i></Button>
                        </td>
                        <td>
                            <Button outline color="danger" size="sm" ><i class="fas fa-trash-alt"></i></Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default AdminTable; 