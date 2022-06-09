import tarkPhoto from "../assats/tark.jpg"
import gitPhoto from "../assats/gitub.png"
import linkPhoto from "../assats/linkedin.png"
import './contact.css';

const Contact = () => {
  const today = `${new Date()}`;
    return( 
    <div>
        <img src={tarkPhoto} alt="worng"/>
        <h1 style={{color: "red" }}>Hey! 👋 </h1>
        <p>
          My name is D"r.Guda Tark and I'm a Medical Doctor and a Full Stack Developer and an open source lover from israel.
          <br></br>
         This is my webpage research , where I write about the things I'm working on and share what I've learned. 😊
        </p>
       <div>
       <p>You can contact with me by : 
       <br></br>
       EMAIL : Okaytark@gmail.com

       </p>
       {/* <a href="default.asp"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"/></a> */}

       <a href="https://github.com/gudatark"><img src={gitPhoto} alt="worng"/></a>
       <a href="https://www.linkedin.com/in/tark-guda-625a3523a/"><img src={linkPhoto} alt="worng"/></a>
       </div>
       <h1> {today}</h1>
    </div>)
  };
  
  export default Contact;