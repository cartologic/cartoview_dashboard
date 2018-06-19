import FieldSet from './FieldSet.jsx'
import {InfoModal} from './CommonComponents.jsx'
import PropTypes from 'prop-types'
import React from 'react'
class Header extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            open: false,
        }
    }
    onRequestClose = ( ) => {
        let { open } = this.state
        this.setState( { open: !open } )
    }
    render( ) {
        let { open } = this.state
        const { editable, title, abstract } = this.props
        if ( editable ) {
            const data = { title, abstract }
            const schema = {
                title: {
                    type: "text",
                    props: {
                        placeholder: "Dashboard Title",
                        onChange: (e) => {
                            let data = {...e.target.fieldSet.state.data};
                            data.title = e.target.value;
                            e.target.fieldSet.setState({data: data});
                        },
                    }
                },
                abstract: {
                    type: "textarea",
                    props: {
                        placeholder: "About this dashboard...",
                        onChange: (e) => {
                            let data = {...e.target.fieldSet.state.data};
                            data.abstract = e.target.value;
                            e.target.fieldSet.setState({data: data});
                        },
                    }
                }
            }
            return <FieldSet data={data} schema={schema} ref="headerForm"/>
        }
        return <div className="dashboard-header">
                    <div className="flex-element fill-empty title-wrap">
                      <h3 className="header-title title-wrap">{title}</h3>
                    </div>
                    <div className="flex-element">
                      <button onClick={this.onRequestClose} className="btn btn-primary">{"?"}</button>
                    </div>
                    <InfoModal onRequestClose={this.onRequestClose} open={open} title="About" >
                        <p>{abstract}</p>
                    </InfoModal>
                </div>
    }
    getData( ) {
        return this.refs.headerForm.getData( )
    }
}
Header.propTypes = {
    editable: PropTypes.bool,
    title: PropTypes.string,
    abstract: PropTypes.string
}
export default Header
