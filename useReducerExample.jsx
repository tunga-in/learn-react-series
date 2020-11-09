import React,{useState, useReducer} from 'react'


const action_types={
  increase: "increase",
  decrease:"decrease"
}
const reducerFunction=(state,action)=>{
  if(action.type===action_types.increase){
    return {count:state.count+1}
  }
  else if(action.type===action_types.decrease){
    return {count:state.count-1}
  }
  else{
    return state
  }

}


const App = () => {
  
const initialState ={
  count:0
}

const [state, dispatch] =useReducer(reducerFunction, initialState)


  return (
    <div>
    <h1><span>{state.count}</span></h1>
    <button onClick={()=>{
      dispatch({type:types.increase})
  }}>Increase</button>
    <button onClick={()=>dispatch({type:action_types.decrease})}>Decrease</button>
    </div>
  )
}

export default App
