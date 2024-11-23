import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);
    // check if user is online/not
    useEffect( () => { 
        window.addEventListener("offline", () =>{
            setOnlineStatus (false);
        });

        window.addEventListener("online", () =>{
            setOnlineStatus (true);
        });
    }, []);

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;