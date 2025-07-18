import { Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import ActivitiesList from "./features/activities/ActivitiesList";  
import UsersList from "./features/users/UsersList";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="dash" element={<DashLayout />} >

       <Route index element={<Welcome />} />

       <Route path="activities">
        <Route index element={<ActivitiesList />} />
       </Route>

       <Route path="users">
        <Route index element={<UsersList />} />
       </Route>
      
      
      </Route>{/* end of dash route */}
 
      </Route>
     </Routes>
  );
}

export default App;
