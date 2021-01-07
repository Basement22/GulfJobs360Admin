import axios from 'axios';

import { DOMAIN } from "../../Constants"
import EditButton from "./EditButton"
import EditJobModal from './EditJobModal'
import {
    Table,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';



const JobsTable = ({ posts }) => {
    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }


    // const [values, setValues] = React.useState({
    //     id: '',
    //     // description: ''
    // })



    // const handleChange = (e) => {
    //     const { id, value } = e.target
    //     setValues({
    //         ...values,
    //         [id]: value
    //     })
    // }

    const [modalFormOpen, setModalFormOpen] = React.useState(false);

    const handleSubmit = async (id) => {


        const values = {
            id: id,
        }
        const postId = values.id

        console.log(`By clicking on Delete Icon: ${postId}`)


        if (window.confirm("Are you sure?")) {
            const res = await axios.delete(`${DOMAIN}/job-categories?id=${id}`)

            // const res = axios.delete(`${DOMAIN}/job-categories`, id, { withCredentials: true })

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
                    <th className="sort" data-sort="name" scope="col">
                        Name
                    </th>
                    <th className="sort" data-sort="description" scope="col">
                        Description
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Status
                    </th>
                    <th className="sort" data-sort="completed" scope="col">

                    </th>
                    <th className="sort" data-sort="completed" scope="col">

                    </th>
                </tr>
            </thead>
            <tbody className="list">
                {posts.map(d => (
                    <tr key={d.id} >
                        <td className="sort" data-sort="id" scope="col">
                            <div className=" custom-control custom-checkbox mb-2">
                                <Input type="checkbox" />
                            </div>
                        </td>
                        <td scope="row">
                            {d.id}
                        </td>
                        <td>
                            {d.name}
                        </td>
                        <td>
                            {d.description}
                        </td>
                        <td>
                            Active
                        </td>
                        <td>
                            <EditJobModal />
                        </td>
                        <td>
                            <Button outline color="danger" size="sm" onClick={() => handleSubmit(d.id)} ><i class="fas fa-trash-alt"></i></Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default JobsTable; 