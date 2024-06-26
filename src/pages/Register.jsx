import { useState, useEffect } from 'react'
import FormRow from '../components/FormRow'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from '../redux/userSlice';
const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        isMember: true,
    });

    const { user, isLoading } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (values.isMember) {
            dispatch(loginUser({ email: values.email, password: values.password }));
        } else {
            dispatch(registerUser({ name: values.name, email: values.email, password: values.password }));
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    }, [user, navigate]);
    return (
        <main className='h-screen w-screen bg-blue-200 flex items-center justify-center'>
            <form className='h-3/4 w-1/3 bg-white  rounded shadow px-5 flex flex-col gap-y-6 pt-16' onSubmit={onSubmit}>
                <h3 className='text-6xl '>
                    {values.isMember ? "Login" : "Register"}
                </h3>
                {
                    !values.isMember && <FormRow
                        type="text"
                        name="name"
                        value={values.name}
                        labelText="Name"
                        handleChange={handleChange}
                    />
                }
                <FormRow
                    type="text"
                    name="email"
                    value={values.email}
                    labelText="email"
                    handleChange={handleChange}
                />
                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    labelText="Password"
                    handleChange={handleChange}
                />
                <button type="submit" className={`capitalize px-7 mt-2 py-2 tracking-wider rounded-md bg-[#4939FF] text-white w-full text-lg ${isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#4939FF] hover:bg-blue-600"
                    }`} disabled={isLoading}>
                    {isLoading ? "loading..." : "Submit"}
                </button>

                <p >
                    {values.isMember ? "Not a member yet ?" : " Already a member ?"}
                    <button type="button" className="font-semibold ml-7 bg-green-700 px-2 rounded text-white" onClick={toggleMember}>
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </main>
    )
}

export default Register
