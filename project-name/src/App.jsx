import StoreList from './components/StoreList.jsx'
import './App.css'
import imgfors from "./images/force.svg"
import jordan from "./images/jordan.svg"
import reebok from "./images/reebok.svg"

function App() {
    const todos =[
      {id: 1,  completed: false, title: 'Nike Force'},
      {id: 2, completed: false, title: 'Nike Jordan',},
      {id: 3, completed: false, title: 'Reebok Classik',}
    ]


  return (
    <div className="wrapper">
      <h1>S N E A C E R S</h1>
      <StoreList className="list"  todos={todos} />
      <img  className='force' src={imgfors} alt="" />
      <img className='jordan' src={jordan} alt="" />
      <img className='rebook' src={reebok} alt="" />
    </div>
  )
}

export default App
