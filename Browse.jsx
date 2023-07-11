import React from 'react'

const  Browse=()=> {
  return (
    <div className='browse-comp'>
        <h2>Browse by categeory</h2>
        <p>Browse openings in this category</p>
      <div className="browse-cont">
       
          <div className="small-cards first-card">

          <span className='code-icon'><i className='fa fa-code'></i></span>
          <p >Primary Teacher</p>

          </div>
      </div>
      <div className="allscholls">
          <a href=""><button className='all-scl-btn'>view all categories</button></a>
        </div>
    </div>
  )
}
export default Browse
