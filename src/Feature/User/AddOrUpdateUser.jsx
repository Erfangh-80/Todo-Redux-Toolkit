import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// route
import { useNavigate, useParams } from "react-router-dom";
// components
import TextFeald from "../../components/TextFeald";
import Button from "../../components/Button";
// redux
import { useDispatch, useSelector } from "react-redux";
// redux actions
import { addUser, editUser } from "./userSlice";

const AddOrUpdateUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const state = useSelector((store) => store.users);

  const [users, setUsers] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (params.id) {
      const user = state.find((user) => user.id === params.id);
      setUsers({
        name: user.name,
        email: user.email,
      });
    }
  }, []);

  const navigate = useNavigate();

  const clickAddUser = () => {
    if (users.name === "" || users.email === "") {
      toast.error("please enter name and email", { autoClose: 5000 });
      return;
    } else if (!/\S+@\S+\.\S+/.test(users.email)) {
      toast.error("Email address is invalid", { autoClose: 5000 });
      return;
    }

    setUsers({ name: "", email: "" });
    if (params.id) {
      dispatch(
        editUser({ id: params.id, name: users.name, email: users.email })
      );
      toast.success("Success updated user !", { autoClose: 2000 });
    } else {
      dispatch(addUser({ id: v4(), name: users.name, email: users.email }));
      toast.success("Success added user !", { autoClose: 2000 });
    }
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFeald
        label="name"
        value={users.name}
        onChange={(event) => setUsers({ ...users, name: event.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <TextFeald
        label="email"
        value={users.email}
        onChange={(event) => setUsers({ ...users, email: event.target.value })}
        inputProps={{ type: "text", placeholder: "jhondoe@gmail.com" }}
      />
      <Button onClick={clickAddUser}>Submit</Button>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default AddOrUpdateUser;
