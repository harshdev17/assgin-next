import React from 'react'

const Breadcrumb = ({val1, val2, val3}) => {
  return (
    <div className="page-breadcrumb">
    <div className="container">
        <nav aria-label="breadcrumb">    
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">{val1}</a></li>
            <li className="breadcrumb-item"><a href="#">{val2}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{val3} </li>
          </ol>  
        </nav>
    </div>
</div>
  )
}

export default Breadcrumb