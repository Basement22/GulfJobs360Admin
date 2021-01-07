import axios from 'axios';

import { DOMAIN } from "../../Constants"
import EditButton from "../Jobs/EditButton"

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
            const res = await axios.delete(`${DOMAIN}/jobs?job_id=${id}`)

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
                        Job_Id
                    </th>
                    <th className="sort" data-sort="name" scope="col">
                        Title
                    </th>
                    <th className="sort" data-sort="description" scope="col">
                        Description
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Job_Location
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Currency
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Min_Salary
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Max_Salary
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Other_Benifits
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Total_Seats
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Industry_Type
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Gender
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Experience_From
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Experience_To
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Nationality
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Current_Location
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Education
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Job_FAQ
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Company_ID
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Status
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                        Created_By
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
                            {d.job_id}
                        </td>
                        <td>
                            {d.title}
                        </td>
                        <td>
                            {d.description}
                        </td>
                        <td>
                            {d.job_location}
                        </td>
                        <td>
                            {d.currency}
                        </td>
                        <td>
                            {d.min_salry}
                        </td>
                        <td>
                            {d.max_salary}
                        </td>
                        <td>
                            {d.other_benifits}
                        </td>
                        <td>
                            {d.total_seats}
                        </td>
                        <td>
                            {d.industry_type}
                        </td>
                        <td>
                            {d.gender}
                        </td>
                        <td>
                            {d.experince_from}
                        </td>
                        <td>
                            {d.experince_to}
                        </td>
                        <td>
                            {d.nationality}
                        </td>
                        <td>
                            {d.current_location}
                        </td>
                        <td>
                            {d.education}
                        </td>
                        <td>
                            {d.job_faq}
                        </td>
                        <td>
                            {d.company_id}
                        </td>
                        <td>
                            Active
                        </td>
                        <td>
                            {d.created_by}
                        </td>
                        <td>
                            <EditButton />
                        </td>
                        <td>
                            <Button outline color="danger" size="sm" onClick={() => handleSubmit(d.job_id)} ><i class="fas fa-trash-alt"></i></Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default JobsTable; 