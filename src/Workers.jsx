import PropTypes from 'prop-types'

function Students (props){
    return(
        <div className="workers"> 
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isWorker ? "Yes" : "NO"}</p>
        </div>
    );
}

Students.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isWorker: PropTypes.bool
}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isWorker: true,
}

export default Students;