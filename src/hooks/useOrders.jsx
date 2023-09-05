import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useOrders = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: order = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://mobox-server-momenurislam6-gmailcom.vercel.app/order?email=${user.email}`)
            // if (!response.ok) {
            //   throw new Error('Network response was not ok')
            // }
            return res.json()
        },
    })
    return [order, refetch]
}

export default useOrders;