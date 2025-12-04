import { use } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivetRoute = ({children}) => {

      const {user, loading} = use(AuthContext);

      const location = useLocation();

      if(loading){
            return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
      }

      if(!user){
            return <Navigate to='/signin' state={location?.pathname}></Navigate>
      }

      return children;
};

export default PrivetRoute;