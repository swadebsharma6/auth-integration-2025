import { use } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { Navigate } from "react-router";


const PrivetRoute = ({children}) => {

      const {user} = use(AuthContext);

      if(!user){
            return <Navigate to='/signin'></Navigate>
      }

      return children;
};

export default PrivetRoute;