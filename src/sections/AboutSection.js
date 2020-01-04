import React , {Component} from 'react';
import Fullpage from "../components/fullpage";
//import "./fullpage.css";
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import './AboutSection.css'
import { Link,Element } from 'react-scroll';
class AboutSection extends Component{
    render(){
        return(
            <div>
                                  <Element name="test4" className="element">
          
          </Element>
    <Fullpage className="second">

         <h3>
            {data.sections[0].title}
          </h3>
          <div className="paragraphs">

              {data.sections[0].items.map(p=>{
              return <p>{p.content}</p>
              })}
          </div>

      </Fullpage>
      </div>
        )
    }
}

export default AboutSection;