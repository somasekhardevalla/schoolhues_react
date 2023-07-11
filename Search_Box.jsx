import React from 'react'


 const Search_Box=()=> {
  return (
    <div className='main-body'>
     <div className="container">
         <div className="item item1">
            <a href="#"><img src="https://schoolhues.com/wp-content/uploads/2022/10/b.png" alt="" /></a>
         </div>
         <div className="item item2">
            <a href="">Login</a>
            <a href=""><button className='postbutton'>Post a job</button></a>
         </div>
     </div>
         <div className="search">
            <h3>Over <mark>1200+</mark> jobs are waiting for you</h3>
         </div>
         <form action="#">
            <input type="search"  className="first" name="keyword" id="" placeholder='Job title or keywords' />
            <input  name="location"  className="data"list="browsers" placeholder='All locations'/>
            <datalist id="browsers">
             <option value="Internet Explorer" />
             <option value="Firefox" />
           </datalist>
            

           
                <select id="cars" name="cars">
                  <option value="volvo">All categories</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
                {/* <a href=""><input type="reset" value="clear" className='reset'/></a> */}
                <input type="submit" value="Search" className='last'/>
           
         </form>
    <div className="pop">
      <span>Popular Searches: <a href="">Leadership,</a><a href="">Empathy</a></span>
    </div>

      
    </div>
  )
}
export default Search_Box
