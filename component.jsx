import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import CommonUtil from 'commonPath/common.js';
import {Dialog} from "@alife/next";

class AddressDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.visible != this.state.visible) {
      this.setState({visible: nextProps.visible});
      if(nextProps.visible) {
        let bodyElem = document.querySelector('body');
        bodyElem.className = "overHidden";
      }

    }
  }
  onClose() {
    this.setState({
      visible: false
    },() => {
      let bodyElem = document.querySelector('body');
      bodyElem.className = "";
      this.props.onClose(false);
    })
  }
  render() {
    const feeDialogFooter = <span></span>;
    const visible = this.state.visible;
    const modifyAddUrl = this.props.url;
    const title = this.props.title;
    const dialogWrapClassName = classNames("uic-address-dialog next-overlay-wrapper next-dialog-wrapper", {"opened":visible});
    return(
        <div className={dialogWrapClassName}>
          <div className="next-overlay-backdrop"></div>
        <div className="next-dialog right next-overlay-inner animated fadeInDown tc-popup-dialog next-position-cc">
        <div id="dialog-body-1" class="next-dialog-body">
          <div className="tc-popup-header"><span>{title}</span></div>
          <div className="tc-popup-content">
            <iframe
                className="modify-addr-iframe"
                width="938"
                height="523"
                frameborder="0"
                scrolling="no"
                src={modifyAddUrl}></iframe>
          </div>
          <a href="javascripr:;" className="next-dialog-close" onClick={this.onClose.bind(this)}>
            <i className="next-icon next-icon-close next-icon-small"></i>
          </a>
        </div>
        </div>
        </div>
    )
  }
}
export default AddressDialog;
/**
 * <Dialog
 visible={visible}
 footer={feeDialogFooter}
 className="tc-popup-dialog"
 onClose={this.onClose.bind(this)}>
 <div className="tc-popup-header"><span>送货上门</span></div>
 <div className="tc-popup-content">
 <iframe
 className="modify-addr-iframe"
 width="938"
 height="523"
 frameborder="0"
 scrolling="no"
 src={modifyAddUrl}></iframe>
 </div>
 </Dialog>
 *
 **/
