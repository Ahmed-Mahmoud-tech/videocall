import { ZoomMtg } from "@zoomus/websdk";
import React, {useEffect, useState} from "react";
const Meeting = ({ payload }) => {
    useEffect(async() => {
        const {ZoomMtg} = await import("@zoomus/websdk")
    }, [])
    
    return (<h1>meeting will be here</h1>)
}

export default Meeting;