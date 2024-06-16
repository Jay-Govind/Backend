function printHello(event){
    event.preventDefault();
    console.log("Hello ! Ladies and Gentleman");
    console.log(event);
}

export default function Button() {
	return <div>
        <form onSubmit={printHello}>
            <button></button>
        </form>
    </div>;
}
