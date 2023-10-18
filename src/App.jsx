import Route from "./router/Route";
import useAuth from "./hooks/useAuth"
import Loading from "./component/Loading";


function App() {
  const {initalLoading} = useAuth()
  // const initalLoading = true

  if(initalLoading)
{
   return <Loading/>

}
  return <Route />;
}
export default App;
