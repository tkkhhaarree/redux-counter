import { useSelector, useDispatch } from "react-redux";
import { change_color_blue, change_color_red, double_str } from "./actions";

function Home() {
   const dispatch = useDispatch();
   const color = useSelector((state) => state.color);
   const double = useSelector((state) => state.double);


   return (
      <div>
         <h3 style={{ color: color }}>Hello home!</h3>
         <button
            onClick={() => {
               if (color == "blue") {
                  dispatch(change_color_red());
               } else {
                  dispatch(change_color_blue());
               }
            }}
         >
            switch color
         </button>
         <br/>
         <br/>
         <h3>{double}</h3>
         <br/>
         <button
            onClick={() => {
               dispatch(double_str(double))
            }}
         >click to double!</button>
      </div>
   );
}

export default Home;
