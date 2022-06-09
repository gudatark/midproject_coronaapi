import covidImg from "../assats/covid19.jpg"
import './home.css';
const Home = () => {
  const today = `${new Date()}`;
    return  (
    
    <div>
     <h3>Today is {today}</h3>
       <h1>In this website we are doing research about covid_19 over all the world since 2019 </h1>
       <h2>What is Coronavirus disease (COVID-19) ?</h2><p>
        A highly contagious respiratory disease caused by the SARS-CoV-2 virus. SARS-CoV-2 is thought to spread from person to person through droplets released when an infected person coughs, sneezes, or talks. It may also be spread by touching a surface with the virus on it and then touching one’s mouth, nose, or eyes, but this is less common.
        <br></br>
        The most common signs and symptoms of COVID-19 are fever, cough, and trouble breathing. Fatigue, muscle pain, chills, headache, sore throat, runny nose, nausea or vomiting, diarrhea, and a loss of taste or smell may also occur.
        <br></br>
        The signs and symptoms may be mild or severe and usually appear 2 to 14 days after exposure to the SARS-CoV-2 virus. Some people may not have any symptoms but are still able to spread the virus. Most people with COVID-19 recover without needing special treatment. But other people are at higher risk of serious illness.
        <br></br>
        Those at higher risk include older adults and people with serious medical problems, such as heart, lung, or kidney disease, diabetes, cancer, or a weak immune system. Serious illness may include life-threatening pneumonia and organ failure. Research is being done to treat COVID-19 and to prevent infection with SARS-CoV-2. Also called coronavirus disease 19.
        </p>
        <img src={covidImg}/>
           </div>
    )};
  
  export default Home;