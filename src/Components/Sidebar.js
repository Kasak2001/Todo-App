import React, {useState} from 'react'
import '../Components/Sidebar.css'

const Sidebar = (props) => {

    const [listopen, setList] = useState(false);

    const color = ["#ddff99", "#ff6666", "#9999ff", "#ffff80", "#ff80ff"];
  return (
    <div className='sidebar'>
      <div className='plus'><i className="fa-solid fa-circle-plus" onClick={()=> {{listopen? setList(false):setList(true)}}}></i></div>
      <ul className={`list ${listopen? "list_active":""}`}>
        {
            color.map((val, index) => {
                return (
                    <li key={index} style={{background: val}} onClick={()=> props.addNote(val)} className='list_item'></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Sidebar
