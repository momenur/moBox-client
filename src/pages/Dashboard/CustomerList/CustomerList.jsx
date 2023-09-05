import { FidgetSpinner } from "react-loader-spinner";
import useUsers from "../../../hooks/useUsers";
import { FaTrash } from 'react-icons/fa';
const CustomerList = () => {
    const [usersDB, loading] = useUsers();
    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
        </div>
    }
    console.log(usersDB);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    SL
                                </label>
                            </th>
                            <th>Customer Name</th>
                            <th>Customer Name & Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            usersDB.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <p>{item.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        {item.email}
                                        <br />
                                        <span className="badge badge-ghost text-rose-500 badge-sm">{item.email}</span>
                                    </td>
                                    <td className="font-semibold">{item.role}</td>
                                    <th>
                                        <button className="text-2xl text-red-500 bg-transparent btn"><FaTrash/></button>
                                    </th>
                                </tr>
                        )
                        }
                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default CustomerList;