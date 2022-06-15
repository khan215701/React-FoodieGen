import styled from './MealItem.module.css'
import MealForm from './MealForm';
const MealItem = (props) => {
    return(
        <li className={styled.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styled.description}>{props.description}</div>
                <div className={styled.price}>{props.price}</div>
            </div>
            <div>
                <MealForm/>
            </div>
        </li>
    )
}

export default MealItem;