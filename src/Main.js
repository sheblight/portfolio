import './App.css';

function Main(props) {
    return (
        <main style={{margin: 0, padding: "30px", overflow: "auto"}}>
            <section>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </section>
        </main>
    );
}

export default Main;
