const Contact = ()=>{
    return(
    < div className=" m-auto w-6/12 text-center">
        <h1 className=" m-6 font-semibold text-lg">Contact us</h1>
        <input className=" bg-gray-100 mr-3  border border-gray-300 rounded-lg p-3 " type="text" placeholder="YourName" />
        <input className=" bg-gray-100 border border-gray-300 rounded-lg p-3" type="text " placeholder="Ask your query..." />
        <button className=" bg-gray-400 ml-3 p-1 rounded-lg">Submit</button>
    </div>
    )
}
export default Contact;