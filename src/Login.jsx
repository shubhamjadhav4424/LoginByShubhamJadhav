import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let [username, setUsername] = useState("");
  let [display, setDisplay] = useState("");
  let [password, setPassword] = useState("");
  let [display1, setDisplay1] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");
  let [display2, setDisplay2] = useState("");
  let [show, setShow] = useState(true);
  let [password_toggle, setPassword_toggle]= useState("Show");
  let navigate=useNavigate();

  function onChangeHandler(a) {
    setUsername(a.target.value);
  }
  function onChangeHandler1(b) {
    setPassword(b.target.value);
  }
  function onChangeHandler2(c) {
    setConfirmpassword(c.target.value);
  }

  function onClickHandler_show(){
    if(show==false){
      setShow(true);
    }
    else{
      setShow(false);
    }

    if(password_toggle=="Show"){
      setPassword_toggle("Hide");
    }

    else{
      setPassword_toggle("Show")
    }
  }

  function onClickHandler() {
    let regex1 = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    let isValidUsername = regex1.test(username);
    setDisplay(isValidUsername ? "" : "Username format is not valid");

    let regex2 =
      /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;
    let isValidPassword = regex2.test(password);
    setDisplay1( isValidPassword ? "" : "Password should contain at least one upper case character, one lower case character, one digit, one symbol/special character and Minimum 8 characters/digits");

    setDisplay2( password == confirmpassword ? "Password Match" : "Confirm password not match");
    
if(isValidUsername && password==confirmpassword && isValidPassword==true){
navigate("/home",{state:{x:username,y:password,z:confirmpassword}});
}
}

  return (
    <>
<div className="main_container">
<div className="flex justify-center pt-[150px]">

          <div className="grid justify-center text-center bg-[#ffffff48] rounded-[10px] w-[581px]">

            <input className="border-[1px] border-white w-[350px] mt-[53px] p-[10px] rounded-[29px] bg-[#ffffff48]" type="text" value={username} placeholder="Enter Email" onChange={(a) => onChangeHandler(a) }/>
            <h2 className="mt-[15px] mb-[15px]">{display}</h2>

            <div className="flex items-center justify-end"><div><input className="border-[1px] border-white w-[350px] p-[10px] rounded-[29px] bg-[#ffffff48]" type={show?"password":"text"} value={password} placeholder="Enter Password" onChange={(b) => onChangeHandler1(b)}/></div> <div className="absolute mr-[15px] text-[#8d8d8d]"><button className={show?<></>:"show_button"} onClick={()=>onClickHandler_show()}>{password_toggle}</button></div></div>
            <h2 className="w-[349px] mt-[15px] mb-[15px]">{display1}</h2>

            <div className="flex items-center justify-end"><div><input className="border-[1px] border-white w-[350px] p-[10px] rounded-[29px] bg-[#ffffff48]" type={show?"password":"text"} value={confirmpassword} placeholder="Enter Confirm Password" onChange={(c) => onChangeHandler2(c)}/></div> <div className="absolute mr-[15px] text-[#8d8d8d]"><button className={show?<></>:"show_button"} onClick={()=>onClickHandler_show()}>{password_toggle}</button></div></div>
            <h2 className="mt-[15px] mb-[15px]">{display2}</h2>

            <button className="bg-slate-600 mb-[53px] rounded-[10px] p-[10px] text-white" onClick={() => onClickHandler()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;