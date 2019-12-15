import React from "react"

export default () => (<div>
    <button class="button tagButton">
        Interview<i class="fa fa-close"></i>
    </button>
    <button class="button addButton" style={{ marginLeft: 10 }}>
        <span style={{
            fontWeight: 500
        }}>Add Tag</span><i class="fa fa-plus"></i>
    </button>
</div>)