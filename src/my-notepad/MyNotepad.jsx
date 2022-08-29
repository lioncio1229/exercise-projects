import Provider from "./provider";
import Main from "./routes/main";

export default function App()
{
    return(
        <Provider>
            <Main />
        </Provider>
    )
}