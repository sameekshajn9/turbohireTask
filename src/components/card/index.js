import React, { useState } from "react"
import { Dropdown } from 'react-bootstrap';

export default () => (<div class="bottomView">
    <p class="heading competencyColor">Competency</p>
    <p class="primaryColor">Primary</p>
    <p>
        <span className="applicationColor">Application Developer</span>
        <i class="fa fa-share-square-o"></i>
    </p>
    <div class="rating">
        <span>
            <i class="fa fa-star "></i>
        </span>
        <span>
            <i class="fa fa-star"></i>
        </span>
        <span>
            <i class="fa fa-star"></i>
        </span>
        <span>
            <i class="fa fa-star"></i>
        </span>
        <span>
            <i class="fa fa-star filled"></i>
        </span>
    </div>
    <i class="fa fa-chevron-down dropStyle"></i>
</div>)