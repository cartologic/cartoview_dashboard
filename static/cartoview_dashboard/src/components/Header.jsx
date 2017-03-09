import React, {PropTypes} from 'react';
import FieldSet from './FieldSet.jsx';



class Header extends React.Component {
  render(){
    const {editable, title, abstract} = this.props;

    if(editable){
      const data = {title, abstract};
      const schema = {
        title:{
          type:"text",
          props:{
            placeholder: "Dashboard Title"
          }
        },
        abstract: {
          type:"textarea",
          props:{
            placeholder: "About this dashboard..."
          }
        }
      };
      return <FieldSet data={data} schema={schema} ref="headerForm"/> ;
    }
    return (
      <header className="dashboard-header col-md-12">
          <h1>{title}</h1>
          <p>{abstract}</p>
      </header>
    );
  }
  getData(){
    return this.refs.headerForm.getData();
  }
}

export default Header;
