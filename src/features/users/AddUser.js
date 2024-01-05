import { useDispatch } from "react-redux"
import TextField from "../../components/TextField"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import { useState } from "react"
import { addUser } from "./userSlice"

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        State: '',
        country: '',
        zipcode: ''
    });

    const handleAddUser = () => {
        setValues({ firstname: '', lastname: '', email: '', phone: '', address: '', State: '', country: '', zipcode: '' });
        dispatch(addUser({
            id: uuidv4(),
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phone: values.phone,
            address: values.address,
            State: values.State,
            country: values.country,
            zipcode: values.zipcode
        }))
        navigate('/');
      }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField
            lable="First Name"
            value={values.firstname}
            onChange={(e) => setValues({ ...values, firstname: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'First Name' }}
        />
        <br />
        <TextField
            lable="Last Name"
            value={values.lastname}
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'Last Name' }}
        />
        <br />
        <TextField
            lable="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            inputProps={{ type: 'email', placeholder: 'example@gmail.com' }}
        />
        <br />
        <TextField
            lable="Phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            inputProps={{ type: 'tel', placeholder: '(999)88 77766' }}
        />
        <br />
        <TextField
            lable="Address"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'Street Line' }}
        />
        <br />
        <TextField
            lable="State"
            value={values.State}
            onChange={(e) => setValues({ ...values, State: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'State' }}
        />
        <br />
        <TextField
            lable="Country"
            value={values.country}
            onChange={(e) => setValues({ ...values, country: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'Country' }}
        />
        <br />
        <TextField
            lable="Zip Code"
            value={values.zipcode}
            onChange={(e) => setValues({ ...values, zipcode: e.target.value })}
            inputProps={{ type: 'text', placeholder: '600 001' }}
        />
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser