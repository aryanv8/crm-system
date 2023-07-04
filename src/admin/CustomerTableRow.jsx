import React from 'react'
import { Link } from 'react-router-dom';

function CustomerTableRow(props) {

    //Object Destruction 
    // const {_id,name,email,phoneno,company,country} = props.obj;
    const {name,email,phoneno,company,country} = {name:"sudhankumar",email:"sudhankumar.r2020@vitstudent.ac.in",phoneno:"9025051866",company:"VIT",country:"India"};

    //Deleting user details in backend
    const handleDelete = () =>{
        //backend process
        alert("sure want to delete");
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneno}</td>
            <td>{company}</td>
            <td>{country}</td>
            <td>
                <Link to='../profile' className='btn btn-warning'><i class="fa-solid fa-eye"></i> View</Link>{" "}
                <button className='btn btn-danger' onClick={handleDelete}><i class="fa-solid fa-trash-can" style={{color: "#ffffff"}}></i> Delete</button>
            </td>
        </tr>

    )
}

export default CustomerTableRow