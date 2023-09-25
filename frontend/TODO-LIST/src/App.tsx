
import TodoPage from "./components/TodoPage/TodoPage"
import { ModeProvider } from "./context/ModeStyleContext"
import { StatusProvider } from "./context/StatusContext"

function App() {


    return (
        <>
            <ModeProvider>
                <StatusProvider>
                    <TodoPage />
                </StatusProvider>
            </ModeProvider>
        </>

    )
}

export default App
