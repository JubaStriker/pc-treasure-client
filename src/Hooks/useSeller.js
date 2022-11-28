import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthProvider";

const useSeller = email => {

    const { user } = useContext(AuthContext)
    const [isSeller, setIsSeller] = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                })
        }


    }, [email])

    return [isSeller]
}

export default useSeller;