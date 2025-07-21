import { Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import ActivitiesList from "./features/activities/ActivitiesList";  
import UsersList from "./features/users/UsersList";
import EditActivity from "./features/activities/EditActivity";
import EditUser from "./features/users/EditUser";
import NewActivity from "./features/activities/NewActivity";
import NewUserForm from "./features/users/NewUserForm";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="dash" element={<DashLayout />} >

       <Route index element={<Welcome />} />

       <Route path="users">
        <Route index element={<UsersList />} />
        <Route path=":id" element={<EditUser />} />
        <Route path="new" element={<NewUserForm />} />
       </Route>
      
       <Route path="activities">
        <Route index element={<ActivitiesList />} />
        <Route path=":id" element={<EditActivity />} />
        <Route path="new" element={<NewActivity />} />
       </Route>
      
      </Route>{/* end of dash route */}
 
      </Route>
     </Routes>
  );
}

export default App;
