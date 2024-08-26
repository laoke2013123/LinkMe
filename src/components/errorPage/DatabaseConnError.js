export default function DatabaseConnError(){
    return (
        <div className="m-12 p-6 ">
            <h1 className="text-red-500 text-4xl">
                Database connection error
                <br/>
                Please contact your system administrator for assistance.
            </h1>
        </div>
    )
}