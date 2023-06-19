import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLogoutAsync } from "../redux/actions/userActions";
// import Image from "react-bootstrap/Image";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      Home
      {/* <div>
        <Image src={user?.avatar} roundedCircle />
        <h2>{user?.name}</h2>
      </div> */}
      <button onClick={() => dispatch(actionLogoutAsync())}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
