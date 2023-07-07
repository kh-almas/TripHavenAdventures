import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Provider/AuthProvider.jsx";

const getCustomerData = () => {
    const {loading} = useContext(AuthContext);
    const [customer, setCustomer] = useState([]);
    useEffect( () => {
        if (!loading){
            fetch('http://localhost:5173/users.json')
                .then(res => res.json())
                .then(data => setCustomer(data))
        }
    }, [loading])
    return customer;
}
export default getCustomerData;