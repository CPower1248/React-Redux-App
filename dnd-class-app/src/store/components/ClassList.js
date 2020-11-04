import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchClasses } from "../actions"

import "./ClassList.css"

function ClassList (props) {
    useEffect(() => {
        props.fetchClasses()
    }, [])

    return (
        <div className="classlist-container" >
            <h2>Class List</h2>
            {props.isLoading ? <p>Loading class data...</p> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            <div className="class-container">
                {props.classData.map(item => (
                    <div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        classData: state.classData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchClasses })(ClassList);
