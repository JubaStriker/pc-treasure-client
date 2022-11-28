import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useSeller = email => {

    const { user } = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://pc-treasure-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }


    }, [email])

    return [isAdmin, isAdminLoading]
}

export default useSeller;