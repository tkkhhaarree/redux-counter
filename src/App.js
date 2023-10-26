import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, sign_in, sign_out } from "./actions";
import Home from "./Home";

function App() {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter);
   const islogged = useSelector((state) => state.isLogged);
   return (
      <div className="App">
         Counter: {counter}
         <br />
         <button onClick={() => dispatch(increment(5))}>+</button>
         <button onClick={() => dispatch(decrement(5))}>-</button>
         <br />
         <button
            onClick={() => {
               if (islogged == false) {
                  dispatch(sign_in());
               } else {
                  dispatch(sign_out());
               }
            }}
         >
            Sign In / Out
         </button>
         <br />
         {islogged ? (
            <h3>sensitive information</h3>
         ) : (
            <h3>you can't see anything yet.</h3>
         )}
         <br />
         <Home />
      </div>
   );
}

export default App;
