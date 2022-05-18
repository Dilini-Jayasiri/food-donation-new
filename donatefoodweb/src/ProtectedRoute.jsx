import React from 'react';
import {Navigate, Route,Routes} from 'react-router'

 const ProtectedRoute =({auth, component: Component,...rest}) => {
  return (
    <div>
       <Routes>
        <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props}/>
            if(!auth) return <Navigate to={{path : '/login/', state : {from : 
            props.location}}}/>

        }} />
        </Routes> 
        
        
    </div>
  );
}

export default ProtectedRoute;