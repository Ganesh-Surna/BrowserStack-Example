export default function ErrorBlock({message}){
    let title="An error occured";
    return <div className="center">
        <h1>{title}</h1>
        <p>{message}</p>
    </div>
}