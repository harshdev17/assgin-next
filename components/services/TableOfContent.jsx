import React from 'react'

const TableOfContent = () => {
  return (
    <div className="table-of-content">
            <div className="table-f-heading" data-toggle="collapse" data-target="#demo">
                <div className="table-title"> Table of Contents</div>
                <button className="btn-table-toggle"><i className="fas fa-bars"></i></button>
            </div>
          <div id="demo" className="collapse">
            <ul>
               <li><a href="#heading_0">Chemistry Assignment Help Online by Experienced Writers in the UK </a></li>
               <li><a href="#heading_1">Recently Covered Topics By Our Chemistry Assignment Helpers </a></li>
               <li><a href="#heading_2">How Do We Help Online Chemistry Assignment Writing Service? </a></li>
               <li><a href="#heading_3">What Makes Our Chemistry Assignment Writing Services the Best? </a></li>
               <li><a href="#heading_4">Get Major Discounts on Chemistry Assignment Help: Save Big On Expert Assistance. </a></li>
            </ul>
            </div>
        </div>
  )
}

export default TableOfContent