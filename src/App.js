// route
import { Route, Routes } from "react-router-dom"
// components
import AddOrUpdateUser from "./Feature/User/AddOrUpdateUser";
import UserList from "./Feature/User/UserList";

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">CRUD with redux tooolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-or-update-user/:id?" element={<AddOrUpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
