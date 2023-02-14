import './App.css';

function Main(props) {
    const content = props.content[props.index];
    
    return (
        <main style={{margin: 0, padding: "30px", overflow: "auto"}}>
            <section>
                <h1>{content.title}</h1>
                <p>{content.caption}</p>
            </section>
        </main>
    );
}

export default Main;
