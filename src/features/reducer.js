
// initalValue for Reducer;

export const initalState = {
   user: null,
   playlist: [],
   palying: false,
   item: null,
   token: "BQBLOYLwVup96pB49TqL8uNgzwrBtjWHIR8RWKeE7CY6L2n7BtJsSCHUDRYcSQ4X54hIulH7wrrevFEwm-mlX4obob6c8td8XtY_BPvnro7cYe0-TOrBbyalp-U0fKcN7l-95mg2TrW0RVabQG_zDVhXMlKPNKlRuwANq_rpLXqxhpoYq42LCdrXyTLa-kuPrSQBGTF0hOjnbGiVmc0G"
};


const reducer = (state, action) => {
   //  console.log("Action " + JSON.stringify( action ))

   switch (action.type) {

      case "SET_USER":
         return {
            ...state, user: action.user
         }

      case "SET_TOKEN":
         return {
            ...state,
            token: action.token,
         };


      default: return state

   }
}

export default reducer

