import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts";

export default function VerifyPrefer () {

    const { userData } = useContext(UserDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData.dataRegister.keepLogin) {
            navigate('/hoje');
        } else {
            return;
        }
    }, []);
}