import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteAllAction } from "../../redux/actions";
import User from "../../components/User"

export default function UsersPage() {
  const { value, users } = useSelector(state => state.usersReducer);

  const dispatch = useDispatch();

  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value));
  };

  const addUser = () => {
    dispatch(addUserAction(value))
  }

  const deleteAll = () => {
    dispatch(deleteAllAction())
  }


  return (
    <div>
      <input onChange={changeInput} type="text" placeholder="name"></input>
      <button onClick={addUser}>add</button>
      <button onClick={deleteAll}>delete all</button>
      {users.map((user, index) => <User key={index} userName={user}/>)}
    </div>
  );
}
