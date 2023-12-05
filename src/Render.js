import React, { useState } from 'react'
const Conditional  = () => {
    const [state,setState] = useState({islogged:true});
    if (state.isLogged){
        return(
            <h1> welcome user</h1>
        )
    }
    else return( <h1>please login</h1>)
}
export default Conditional;















































