import React from "react"

export default () => (<div>
    <button className="button tagButton">
    <span style={{
            fontWeight: 500
        }}>Interview</span><i className="fa fa-close"></i>
    </button>
    <button className="button addButton" style={{ marginLeft: 10 }}>
        <span style={{
            fontWeight: 500
        }}>Add Tag</span><i className="fa fa-plus"></i>
    </button>
</div>)