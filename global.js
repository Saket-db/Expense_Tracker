import react, {createContext, useReducer} from react;
const intialState ={
    transactions :[
        
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }


    ]
}

export const GlobalContext = createContext(initialState);

//Provider inorder to wrap App.js

export const GlobalProvider =({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);
}