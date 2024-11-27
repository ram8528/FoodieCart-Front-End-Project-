import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Ram"
})

export default UserContext;