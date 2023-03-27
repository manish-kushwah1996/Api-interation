// import {Link} from 'react-router-dom'
// function Registration(){
//    {
//       const []
//    }
//     return(
//         <div>
//          <div class="wrapper">
//     <div>
//      <h1>Registration Form</h1> 
//     </div>
//     <div class="form">
//        <div class="inputfield">
//           <label>First Name</label>
//           <input type="text" class="input"/>
//        </div>  
//         <div class="inputfield">
//           <label>Last Name</label>
//           <input type="text" class="input"/>
//        </div>  
//        <div class="inputfield">
//           <label>Password</label>
//           <input type="password" class="input"/>
//        </div>  
//       <div class="inputfield">
//           <label>Confirm Password</label>
//           <input type="password" class="input"/>
//        </div> 
//         <div class="inputfield">
//           <label>Gender</label>
//           <div class="custom_select">
//             <select>
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//        </div> 
//         <div class="inputfield">
//           <label>Email Address</label>
//           <input type="text" class="input"/>
//        </div> 
//       <div class="inputfield">
//           <label>Phone Number</label>
//           <input type="text" class="input"/>
//        </div> 
//       <div class="inputfield"/>
//           <label>Address</label>
//           <textarea class="textarea"></textarea>
//        </div> 
//       <div class="inputfield">
//           <label>Postal Code</label>
//           <input type="text" class="input"/>
//        </div> 
//       <div class="inputfield terms">
//           <label class="check">
//             <input type="checkbox"/>
//             <span class="checkmark"></span>
//           </label>
//           <p>Agreed to terms and conditions</p>
//        </div> 
//       <div class="inputfield">
//         <input type="submit" value="Register" class="btn"/>
//       </div>
//     </div>
// </div>	
	


    
//      )
//      }
//      export default Registration;




//=============================================================
import React, { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
      email: "",
      first_name: "",
      last_name: "",
      city: "",
      postcode: "",
      password: "",
      confirm_password: "",
      phone_number: ""
  })

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, first_name, last_name, city, postcode, password, confirm_password, phone_number } =
      user;

    const res = await fetch(
      "http://upkeep.crmcity.org:8090/api/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name,
          last_name,
          city,
          postcode,
          password,
          confirm_password,
          phone_number,
          
        }),
      }
    );
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/login");
    }
  };

  return (
    <>
      <header>
        {/* <Navbar /> */}
        {/* <!-- Background image --> */}
        <div
          id="intro-example"
          class="text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp}')",
            minHeight: "740px",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div
              style={{
                minHeight: "745px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  width: "35%",
                  background: "white",
                }}
              >
                {/* <!-- Pills content --> */}
                <div class="tab-content">
                  <div>
                    <form method="POST">
                      <div class="text-center mb-3">
                        <p>Sign up with:</p>
                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center">or:</p>

                      {/* <!-- Email input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.email}
                          type="email"
                          name="email"
                          id="registerEmail"
                          class="form-control"
                        />
                        <label class="form-label" for="registerEmail">
                          Email
                        </label>
                      </div>

                      {/* <!-- Username input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.first_name}
                          type="text"
                          name="first_name"
                          id="registerUsername"
                          class="form-control"
                        />
                        <label class="form-label" for="registerUsername">
                          First Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.last_name}
                          type="text"
                          name="last_name"
                          id="registerUsername"
                          class="form-control"
                        />
                        <label class="form-label" for="registerUsername">
                          Last Name
                        </label>
                      </div>

                      {/* <!-- city input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.city}
                          type="city"
                          name="city"
                          id="registerpassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerpassword">
                          city
                        </label>
                      </div>

                      {/* <!-- PostCode input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.postcode}
                          type="number"
                          name="postcode"
                          id="registerPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerPassword">
                          PostCode
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.password}
                          type="password"
                          name="password"
                          id="registerPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerPassword">
                          Password
                        </label>
                      </div>

                      {/* <!-- Repeat Password input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.confirm_password}
                          type="password"
                          name="confirm_password"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Confirm password
                        </label>
                      </div>

                      {/* <!-- Phone input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.phone_number}
                          type="number"
                          name="phone_number"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Phone Number
                        </label>
                      </div>

                      {/* <!-- Gender input --> */}
                      {/* <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.gender}
                          type="text"
                          name="gender"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Gender
                        </label>
                      </div> */}

                      {/* <!-- City input --> */}
                      
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        name="signup"
                        value="register"
                        onClick={postData}
                        class="btn btn-primary btn-block mb-3"
                      >
                        Sign in
                      </button>

                      <div class="text-center">
                        <p>
                          Not a member? <Link to="/login">Login</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Pills content --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>

      {/* <Footer /> */}
    </>
  );
}

export default Signup;




