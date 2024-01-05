import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { firstname, lastname, email, phone, address, State, country, zipcode } = existingUser[0];
    const [values, setValues] = useState({
        firstname,
        lastname,
        email,
        phone,
        address,
        State,
        country,
        zipcode
    });

  const handleEditUser = () => {
        setValues({ firstname: '', lastname: '', email: '', phone: '', address: '', State: '', country: '', zipcode: '' });
        dispatch(editUser({
        id: params.id,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        address: values.address,
        State: values.State,
        country: values.country,
        zipcode: values.zipcode
        }));
        navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
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
        <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser