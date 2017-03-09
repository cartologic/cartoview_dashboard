import React, { PropTypes } from 'react';
import Modal from 'react-modal';

const AddWidgetDialog = ({ widgets, isOpen, onRequestClose, onWidgetSelect}) => {
  const widgetItems = Object.keys(Dashboard.widgetsClasses).map((key) => {
    return (
        <a href="#" className="list-group-item" onClick={() => onWidgetSelect(Dashboard.widgetsClasses[key])}>
          <h6 className="list-group-item-heading">
            {Dashboard.widgetsClasses[key].displayName || Dashboard.widgetsClasses[key].name}
          </h6>
        </a>
    );
  });
  return (
    <Modal className="modal-dialog" isOpen={isOpen}>
      <div className="panel panel-default">
          <div className="panel-heading">
            {"Add Widget"}
            <div className="pull-right">
              <a className="btn btn-link btn-xs" onClick={onRequestClose}>
                <i className="glyphicon glyphicon-remove"></i>
              </a>
            </div>
          </div>
          <div className="panel-body">
            <h5>Pick a widget to add</h5>
            <div className="list-group">
              {widgetItems}
            </div>
          </div>
      </div>
    </Modal>
  );
};

AddWidgetDialog.propTypes = {
  widgets: PropTypes.object,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onWidgetSelect: PropTypes.func,
};

export default AddWidgetDialog;
