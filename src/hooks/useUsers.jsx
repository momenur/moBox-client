import { useEffect, useState } from "react";


const useUsers = () =>  {
    const [usersDB, setUsersDB] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect( () => {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsersDB(data)
            setLoading(false)
        })
    },[])
    return [usersDB, loading]
};

export default useUsers;