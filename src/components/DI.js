import React , {Component} from 'react';
import { render } from '@testing-library/react';

const DI=(props)=>{
        return(
            <div
            onClick={props.onClick}
            style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                marginBottom:"-34px",
                transform:"translateY(-45px)"
              }}>
                   <div>
                   <img src={props.icon} alt="" style={{
                     maxWidth:'30px'
                   }}/>
                 </div>
               </div> 
                
        )
}

export default DI;