import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice";

const FetchedUsers = () => {
  const { isLoading, users, error } = useSelector((store) => (store));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  let abc = users.results

  console.log(users)

  if (isLoading) {
    return (
      <div>Content is loading</div>
    )
  }

  if (error) {
    return (
      <div>There is an error</div>
    )
  }

  return (
    <ul>
      {abc?.map((eachUser) => (
        <li>
        {eachUser.name.first}, {eachUser.name.last}
        </li>
      ))}
    </ul>
  )
}

export default FetchedUsers;
