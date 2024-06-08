import './index.css';

function App() {
    return (
        <div className="  grid place-content-center h-screen   gap-x-3  bg-black">
            <h1
                className="animate-text-gradient text-7xl inline-flex bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] bg-clip-text font-medium text-transparent md:ml-1 dark:bg-[linear-gradient(90deg,#0284c7_0%,#f0f9ff_50%,#0284c7_100%)]"
                style={{backgroundSize: '200%', backgroundClip: 'text', color: 'transparent'}}>
                Hi, React
            </h1>            <h1
            className="animate-text-gradient text-6xl inline-flex bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] bg-clip-text font-medium text-transparent md:ml-1 dark:bg-[linear-gradient(90deg,#0284c7_0%,#f0f9ff_50%,#0284c7_100%)]"
            style={{backgroundSize: '200%', backgroundClip: 'text', color: 'transparent'}}>
            My name is Layhak
        </h1>
        </div>
    );
}

export default App;
