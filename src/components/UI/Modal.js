import styled from './Modal.module.css'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
const Backdrop = (props) => {
    return <div className={styled.backdrop}>
    </div>
}

const ModalOverLay = (props) => {
    return <div className={styled.modal}>
        <div className={styled.content}>
            {props.children}
        </div>
    </div>
}
const overlay_id = document.getElementById('overlay')
const Modal = (props) => {
    return(
    <Fragment>
    {ReactDOM.createPortal(<Backdrop/>, overlay_id)}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, overlay_id)}
    </Fragment>
    )}

export default Modal