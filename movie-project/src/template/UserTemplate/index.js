import { Fragment } from "react"
import {Route } from "react-router-dom"





export  const UserTemplate = (props) =>{
    // props là path, exact, Component
    const {Component, ...restRoute} = props

    return <Route{...restRoute} render={(propsRoute)=>{
        //trả về props.location, props.history, props.match
        return <Fragment>
        <Component {...propsRoute}/>
        </Fragment>
    }}/>
}
