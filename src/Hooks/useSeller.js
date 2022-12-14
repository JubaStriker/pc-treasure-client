import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useSeller = email => {

    const { user } = useContext(AuthContext)
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://pc-treasure-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }


    }, [email])

    return [isSeller, isSellerLoading]
}

export default useSeller;