import React, { useState } from "react"
import { Dropdown } from 'react-bootstrap';

export default () => (<div className="bottomView">
    <p className="heading competencyColor">Competency</p>
    <p className="primaryColor">Primary</p>
    <p>
        <span className="applicationColor">Application Developer</span>
        <i className="fa fa-share-square-o"></i>
    </p>
    <div className="rating">
        <span>
            <i className="fa fa-star "></i>
        </span>
        <span>
            <i className="fa fa-star"></i>
        </span>
        <span>
            <i className="fa fa-star"></i>
        </span>
        <span>
            <i className="fa fa-star"></i>
        </span>
        <span>
            <i className="fa fa-star filled"></i>
        </span>
    </div>
    <i className="fa fa-chevron-down dropStyle"></i>
</div>)