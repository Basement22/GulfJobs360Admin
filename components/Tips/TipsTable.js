import axios from 'axios';
import EditTipsModal from './EditTipsModal'
import {DOMAIN} from '../../Constants'
import {
    Table,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';



const TipsTable = ({ posts }) => {

    const handleSubmit = async (id) => {


        const values = {
            id: id,
        }
        const postId = values.id

        console.log(`By clicking on Delete Icon: ${postId}`)

        if (window.confirm("Are you sure?")) {

            const res = await axios.delete(`${DOMAIN}/tips?id=${id}`)
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
                        Heading
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
                    <tr key={d.id}>
                        <td className="sort" data-sort="id" scope="col">
                            <div className=" custom-control custom-checkbox mb-2">
                                <Input type="checkbox" />
                            </div>
                        </td>
                        <td scope="row">
                            {d.id}
                        </td>
                        <td>
                            {d.heading}
                        </td>
                        <td>
                            {d.description}
                        </td>
                        <td>
                            Active
                        </td>
                        <td>
                            <EditTipsModal />
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

export default TipsTable; 