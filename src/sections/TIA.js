import React , {Component} from 'react';
import Fullpage from "../components/fullpage";
import DI from "../components/DI";
//import "../fullpage.css";
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import { Link,Element } from 'react-scroll';
class TAI extends Component{
  constructor(props){
    super(props);
    this.state={
      bck:'skyblue'
    }
  }
    render(){
        return(
        <div style={{background:this.state.bck}}>
           <ul style={{float:'right',display:'flex',flexDirection:'row',marginTop:'2px',color:'white',listStyle:'none',padding:'29px',cursor: 'pointer'}}>
                <li style={{paddingRight:'9px'}}>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                  <a >Portofolio</a>
                  </Link>
                </li>
                <li>
                <Link activeClass="active" to="test4" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                  <a >About</a>
                  </Link>
                </li>
              </ul>
              <ul style={{float:'left',display:'flex',flexDirection:'row',marginTop:'2px',color:'white',listStyle:'none',padding:'29px',cursor: 'pointer'}}>
                <li style={{paddingRight:'9px'}}>
                  <a onClick={()=>{
                      if((this.state.bck)=='skyblue'){
                        this.setState({
                          bck:'yellow'
                        })
                      }
                      else  if((this.state.bck)=='yellow'){
                        this.setState({
                          bck:'skyblue'
                        })
                      }
                  }}><img src="./images/box.png" style={{width:'30px'}}  /></a>
                </li>
              </ul>
    <Fullpage className="first" style={{background:this.state.bck}}>
           
       
        <h1 className="title">
                 {data.title}
            </h1>
        <div>
            <h2>
              {data.subtitle}
             </h2> 
        </div>     

        <div className="icons-wrapper">
        {
          Object.keys(data.links).map(key => {
            return(
              <SocialIcon url={data.links[key]} />
            )
          })
        }
         </div> 
      </Fullpage>
      <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={0}>
        <DI icon={data.icons.down} onClick={()=>console.log('iam working')}/>
        </Link>
        <Element name="test2" className="element">
          
        </Element>
         </div>   
        )
    }
}

export default TAI;