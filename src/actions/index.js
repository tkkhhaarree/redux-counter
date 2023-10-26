export const increment = (number) => {
   return {
      type: "INCREMENT",
      payload: number,
   };
};

export const decrement = (number) => {
   return {
      type: "DECREMENT",
      payload: number,
   };
};

export const sign_in = () => {
   return {
      type: "SIGN_IN",
   };
};

export const sign_out = () => {
   return {
      type: "SIGN_OUT",
   };
};

export const change_color_blue = () => {
   return {
      type: "BLUE",
   };
};

export const change_color_red = () => {
   return {
      type: "RED",
   };
};

export const double_str = (s) => {
   return {
      type: "DOUBLE",
      payload: s
   }
}
