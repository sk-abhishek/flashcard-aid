function Flashcard() 
{
    return (
        <section className="flashcard">
            <div className="card-top">

                <span className="category">
                    Networking
                </span>

                <span className="card-type">
                    Term
                </span>
            </div>

            <div className="card-body">
                <h1>TCP/IP</h1>

                <button className="card-body">
                    Click to Flip
                </button>

            </div>
        </section>

    );

}

export default Flashcard;