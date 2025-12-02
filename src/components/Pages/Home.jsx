
import { use } from "react";
import { AuthContext } from "../../Auth/AuthContext";



const Home = () => {    

      const {user} = use(AuthContext);
      console.log(user)

      return (
            <div>
                  <h2>This is Home Components</h2>
                  <p>{user?.email}</p>
                  
            </div>
      );
};

export default Home;