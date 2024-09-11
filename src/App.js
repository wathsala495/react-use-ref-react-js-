import logo from './logo.svg';
import './App.css';
import { useReducer, useRef, useState } from 'react';

//use readucer with switch

// const reducerActionType={
//   setImage:'setImage',
//   setName:'setName',
//   setCity:'setCity',
//   setPosition:'setPosition',
//   SetArray:'SetArray'
  
// }

 
// const reducer=(state,{type,data})=>{

//   switch(type){
//     case reducerActionType.setImage: 
//         return {...state,image:data}
//     case reducerActionType.setName: 
//         return {...state,name:data}
//     case reducerActionType.setCity: 
//         return {...state,city:data}
//     case reducerActionType.setPosition: 
//         return {...state,position:data}
//     case reducerActionType.SetArray: 
//         return {...state,image:data}
//     default:
//       return state
//   }


  
// } 


// function App() {

//  const [state,setState]=useReducer(reducer,{
//   image:'',
//   name:'',
//   city:'',
//   position:'',
//   dataArray :[]

//  });
//  console.log(state)

//   return (
//     <div >
//      <input type='text' placeholder='Enter image url' value={state.image} onChange={(e)=>{setState({
//       type:"setImage",
//       data:e.target.value
//  } )}}/>
//      <input type='text' placeholder='Enter your name' value={state.name} onChange={(e)=>setState({
//       type:"setName",
//       data:e.target.value
//      })}/>
//      <input type='text' placeholder='Enter your city' value={state.city} onChange={(e)=>setState({
//       type:'setCity',
//       data:e.target.value
//      })}/>
//      <input type='text' placeholder='Enter your position' value={state.position} onChange={(e)=>setState({
//       type:'setPosition',
//       data:e.target.value
//      })}/>
//      <button onClick={()=>setState({
//       type:'SetArray',
//       data:{
//         image:state.image,
//         name:state.name,
//         city:state.city,
//         position:state.position
//       }
//      })}>Set Data</button>

//      <div>{
//       //  state.dataArray?.map((dataArray.image,dataArray.name,dataArray.city,dataArray.position)=>{
//       //       <h1>{dataArray.name}</h1>
//       //  })
//       }
//     </div>
//     </div>

   
//   );
// }

// export default App;


 



function App() {
    
  //const [imageurl,setImageUrl]=useState("")
  //const imageUrlRef=useRef(0);
   

  const [myData,setMyData]=useState({
    image:'',
    name:'',
    city:'',
    position:'',
  })
  //useRef =>we can change the state without rerendering
  const imageUrlRef =useRef()
  const nameRef=useRef()
  const cityRef=useRef()
  const positionRef=useRef()

  const setDataHandle=()=>{
    //select the element using refference by imageUrlRef.current 
    //
    setMyData({
    image:imageUrlRef.current.value,
    name:nameRef.current.value,
    city:cityRef.current.value,
    position:positionRef.current.value
    })

  }

  
  console.log("rerender")
  return (
    <div >
     <input type='text' placeholder='Enter image url' ref={imageUrlRef} />
     <input type='text' placeholder='Enter your name' ref={nameRef} />
     <input type='text' placeholder='Enter your city' ref={cityRef} />
     <input type='text' placeholder='Enter your position' ref={positionRef}/>
     <button onClick={setDataHandle} >Set Data</button>
    
     <div>
      <p>{myData?.name}</p>
      <p>{myData?.image}</p>
      <p>{myData?.city}</p>
      <p>{myData?.position}</p>
      <p></p>
    </div>
    </div>

   
  );
}

export default App;
