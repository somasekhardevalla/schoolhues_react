import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Schools=()=> {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
    <div className="heading">
        <h2>Current Vaciencies in Different Schools</h2>
        <p>Find schools that deserve you!</p>
    </div>
    <div className="card">

    <Carousel responsive={responsive} >
      <div className='card-details'>
        <img  className="school-image"src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/download.jpeg?fit=305%2C165&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px" 
        alt="" />
          <div className="content">
          <img className='logo' src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/dps-logo.png?ssl=1" alt=""  />
           <h2 className='schl'>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><br /><span><i className='fa fa-star'></i>&nbsp;0</span>
           </h2> 
          </div>
          <span className='board'><i className='fa-regular fa-folder'></i>&nbsp;CBSE Board</span>

        </div>
        <div className='card-details'>
        <img className="school-image"src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/g5eq25ZmNcY42DmCIA2VPdcsXPqx1uuO5XHnOxrOPDd7Nk9K2765100238857006701-2.jpg?fit=1850%2C940&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px"/>
          <div className="content">
          <img className='logo' src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/download-2.png?ssl=1" alt=""  />
          <h2 className='schl'>INTERNATIONAL SCHOOL OF HYDERABAD<br /><br /><span><i className='fa fa-location-dot'></i>&nbsp;Hyderabad&nbsp;&nbsp;&nbsp;<i className='fa fa-star'></i>&nbsp;0</span></h2>
          </div>
          <span className='board'><i className='fa-regular fa-folder'></i>&nbsp;CBSE Board</span>
        </div>
        <div className='card-details'>
        <img  className="school-image"src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/06/gps-bus-1.png?fit=500%2C500&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px" 
        alt="" />
          <div className="content">
          <img className='logo' src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/dps-logo.png?ssl=1" alt=""  />
          <h2 className='schl'>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><br /><span><i className='fa fa-star'></i>&nbsp;0</span></h2>
          </div>
          <span className='board'><i className='fa-regular fa-folder'></i>&nbsp;CBSE Board</span>
        </div>
        <div className='card-details'>
        <img  className="school-image"src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/06/gps-bus-1.png?fit=500%2C500&ssl=1&resize=576%2C327&crop=0%2C0%2C576px%2C327px" 
        alt="" />
          <div className="content">
          <img className='logo' src="https://i0.wp.com/schoolhues.com/wp-content/uploads/2023/05/dps-logo.png?ssl=1" alt=""  />
          <h2 className='schl'>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><br /><span><i className='fa fa-star'></i>&nbsp;0</span></h2>
          </div>
          <span className='board'><i className='fa-regular fa-folder'></i>&nbsp;CBSE Board</span>
        </div>
    </Carousel>
        </div>
        <div className="allscholls">
          <a href=""><button className='all-scl-btn'>View all schools</button></a>
        </div>

    </div>
  )
}
export default Schools