import React from "react";
// routes
import { Link } from "react-router-dom";
// components
import Button from "../../components/Button";
import User from "./User";
// redux
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((store) => store.users);

  const renderCard = () =>
    users.map((user) => (
      <User key={user.id} id={user.id} name={user.name} email={user.email} />
    ));

  return (
    <>
      <Link to="/add-or-update-user">
        <Button>Add User</Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </>
  );
};

export default UserList;
