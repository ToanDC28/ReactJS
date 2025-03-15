import styles from './student.module.css'
import PropTypes from 'prop-types'
function Student(props){
    console.log("Student props:", props)
    return(
        <div className={styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Student