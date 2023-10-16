import Route from "./router/Route";
import useAuth from "./hooks/useAuth"

function App() {
  const {initalLoading} = useAuth()

  if(initalLoading)
{
   return null

}
  return <Route />;
}
export default App;
