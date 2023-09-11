import { useQuery } from "@tanstack/react-query"
import { fetchEvents } from "../../util/http"
import TestCaseItem from "./TestCaseItem";
import { Outlet } from "react-router-dom";
import ErrorBlock from "../ErrorBlock";

export default function TestCases(){

    const {data, isPending, isError, error} = useQuery({
        queryKey: ["events"],
        queryFn: fetchEvents,
        staleTime: 10000,
    })

    let content;

    if(isPending){
        content=<p>Loading...</p>
    }
    if(isError){
        content=<ErrorBlock message={error.info?.message || "Failed to fetch events!!"}/>
    }
    if(data){
        content=(
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <h3>ID</h3>
                        <h3>TITLE</h3>
                    </div>
                </div>
                {data.map((event)=>{
                    return <TestCaseItem event={event} key={event.id}/>
                })}
            </div>
        );
    }

    return (
    <>
        <Outlet/>
        <div className="field-container">
            <div className="field-header">
                <h1>Test Cases</h1>
            </div>
            <div className="field-content">
                {content}
            </div>
        </div>
    </>
    )
}