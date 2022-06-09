import React, { useState   } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./enterens.css";

const Enterens = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [data, setData] = useState("");
    const [log, setLog] = useState(false);
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
    async function handleSubmit(event) {
      event.preventDefault();
      const {data} = await axios
      .get("https://62a09039a9866630f8121fc2.mockapi.io/users")
      
      
      console.log(data);
    const found = data.find(user => user.eamil===email);
     console.log(found);
    if (found !== undefined) {
     
      if (found.password === password){
        setLog(true)
        setEmail("")
        setPassword("")
        
      }
     
    }
    else (
      alert ("u are not allowed to use the website")
    )
    }

    
  
    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
        {
          log&& <div>
            <h1>you are loged in</h1> 
          </div>
        }
      </div>
    );
 
  };
  
  export default Enterens;