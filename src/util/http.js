import { QueryClient } from "@tanstack/react-query";

export const queryClientObj=new QueryClient();

export async function fetchEvents({signal}){
    const response= await fetch("http://localhost:8080/events",{signal});

    if(!response.ok){
        const error= new Error("Failed to fetch events.");
        error.code=response.status;
        error.info=await response.json();
        throw error;
    }

    const { events } = await response.json();
    return events;
}

export async function fetchEventDetails({signal, id}){
    let url = "http://localhost:8080/events/"+id;
    const response= await fetch(url,{signal});

    if(!response.ok){
        const error= new Error("Failed to fetch event details.");
        error.code=response.status;
        error.info=await response.json();
        throw error;
    }

    const { event } = await response.json();
    return event;
}