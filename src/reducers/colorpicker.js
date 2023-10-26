const colorpickerReducer = (state = "blue", action) => {
   switch (action.type) {
      case "BLUE":
         return "blue";
      case "RED":
         return "red";
      default:
         return state;
   }
};

export default colorpickerReducer;
