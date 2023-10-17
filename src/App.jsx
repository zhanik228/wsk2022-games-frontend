import Button from "./components/atoms/button"

const App = () => {
    const onClick = (callback) => {
        console.log(callback);
    }

    return (
        <Button 
         type="submit"
         onClick={onClick}
        >This is my button atom</Button>
    )
}

export default App