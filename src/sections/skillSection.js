import React , {Component} from 'react';
import Fullpage from "../components/fullpage";
//import "../fullpage.css";
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import './AboutSection.css'
import SkillCard from '../components/skillCard'
import { Link,Element } from 'react-scroll';
class Skill extends Component{
    render(){
        return(       
    <Fullpage className="third">
    <h3>{data.sections[1].title} </h3>
       <div className="card-wrapper">
        {data.sections[1].items.map(
            skill=>{
                return(
                    <SkillCard skill={skill}   />
                )
            }
        )}   
        </div>
        <Element name="test1" className="element">
          
          </Element>
      </Fullpage>

        )
    }
}

export default Skill;