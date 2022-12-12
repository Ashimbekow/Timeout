import React from 'react'
import StoreItem from './StoreItem' 



const styles = {
   ul: {
      listStyle:'none',
      margin: 0,
      padding: 0
   }
}



 function StoreList(props) {
   return(
      <ul style={styles.ul}>
         { props.todos.map((todo, index) =>{
            return<StoreItem todo={todo} key={todo.id} index={index}/>
         }) }
      </ul>
   )
}



export default StoreList