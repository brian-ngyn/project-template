import React, { useState } from "react";
import { styled } from "@mui/system";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "80vh",
  alignItems: "center",
});

const Home = () => {
  const { user } = useUserAuth();

  return (
    <>
      <Wrapper>
        <div>Hi {user}</div>        
      </Wrapper>
    </>
  );
};

export default Home;
