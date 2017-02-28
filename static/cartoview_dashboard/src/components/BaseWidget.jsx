import React from 'react';


class BaseWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      config: props.config
    }
  }
  tools(){
    return [{
        icon: "cog",
        handler: this.editConfig.bind(this)
    },
    {
        icon: "trash",
        handler: this.remove.bind(this)
    }]
    // ,
    // {
    //     icon: "refresh",
    //     handler: this.refresh.bind(this)
    // }]
  }
  componentWillMount(){
    if(this.props.isNew){
      this.editConfig();
    }
  }
  editConfig(e){
    if(e) e.preventDefault();
    var ct = this.props.container;
    var initTitleValue = (i) =>{
      if(i){
        this._titleInput = i;
        i.value = ct.state.title || "";
      }
    };
    var initWidthValue = (i) =>{
      if(i){
        this._widthInput = i;
        i.value = ct.state.width;
      }
    };
    ct.showModal("Edit Config", <div className="">
      <div className="form-group">
        <label>Title</label>
        <input className="form-control"
          ref={initTitleValue}
          placeholder="Title" />
      </div>
      <div className="form-group">
        <label>Width</label>

         <select className="form-control" ref={ initWidthValue }>
           <option value="1">1/3</option>
           <option value="2">2/3</option>
           <option value="3">3/3</option>
         </select>
      </div>
      {this.configInput()}
    </div>)
  }

  applyConfig(){
    var ct = this.props.container;
    try {
      var config = this.getNewConfig();
      this.setState({
        config: config
      });
      ct.setState({
        width: this._widthInput.value,
        title: this._titleInput.value
      });
    } catch (e) {

    } finally {

    }
  }


  configInput(){
    var initValue = (input) => {
      this._configInput = input;
      if(input) input.value = JSON.stringify(this.state.config, null, 4)
    };
    return <div className="form-group">
      <label>Config</label>
      <textarea className="form-control" rows="10" ref={ initValue } />
    </div>;
  }
  getNewConfig(){
    return JSON.parse(this._configInput.value)
  }

  remove(e){
      e.preventDefault();
      this.props.container.setState({
        deleted: true
      });
      //this.props.dashboard.removeWidget(this);
  }
  refresh(e){
      e.preventDefault();
  }
}

export default BaseWidget;
