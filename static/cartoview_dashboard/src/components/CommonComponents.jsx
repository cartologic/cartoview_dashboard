import Modal from 'react-modal'
import PropTypes from 'prop-types'
import React from 'react'
export const InfoModal = ( props ) => {
    const { open, onRequestClose, title, children } = props
    return (
        <Modal className="modal-dialog" isOpen={open} onRequestClose={onRequestClose}>
          <div className="panel panel-default">
            <div className="panel-heading">{title}</div>
            <div className="panel-body">{children}</div>
          </div>
        </Modal>
    )
}
InfoModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    title:PropTypes.string.isRequired,
    children:PropTypes.node
}
