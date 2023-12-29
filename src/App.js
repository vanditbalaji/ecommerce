import React, { useEffect, useState } from "react";
import HomePage from "./customer/pages/homePage";
import UserAuthentication from "./customer/pages/userAuthentication";
import Loading from "./customer/features/loading/loading";

const App = () => {
  UserAuthentication();
  return (
    <>
      <div> <HomePage /></div>
    </>
  );
};

export default App;
