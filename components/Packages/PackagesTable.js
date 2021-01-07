import axios from 'axios';

import { DOMAIN } from "../../Constants"
import {
    Table,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';



const AdminTable = ({ posts }) => {

    const handleSubmit = async (id) => {


        const values = {
            id: id,
        }
        const postId = values.id

        console.log(`By clicking on Delete Icon: ${postId}`)

        if (window.confirm("Are you sure?")) {

            const res = await axios.delete(`${DOMAIN}/packages?id=${id}`)
            console.log(res.data)
            
            window.location.reload(true)
        
        }

    };  

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
                        Packages_Type
                    </th>
                    <th className="sort" data-sort="locationName" scope="col">
                        Price
                    </th>
                    <th className="sort" data-sort="locationName" scope="col">
                        Title
                    </th>
                    <th className="sort" data-sort="code" scope="col">
                        Description
                    </th>
                    <th className="sort" data-sort="createdBy" scope="col">
                        Created_By
                    </th>
                    {/* <th className="sort" data-sort="status" scope="col">
                        Status
                    </th> */}
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
                            {d.package_type}
                        </td>
                        <td>
                            {d.price}
                        </td>
                        <td>
                            {d.title}
                        </td>
                        <td>
                            {d.description}
                        </td>
                        <td>
                            {d.created_by}
                        </td>
                        <td>
                            <Button outline color="primary" size="sm" ><i class="fas fa-pencil-alt"></i></Button>
                        </td>
                        <td>
                            <Button outline color="danger" onClick={() => handleSubmit(d.id)} size="sm" ><i class="fas fa-trash-alt"></i></Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default AdminTable; 