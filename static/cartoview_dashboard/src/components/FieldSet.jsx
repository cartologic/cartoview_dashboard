import React, {Component} from 'react'

class JSONField extends Component{
    constructor(props){
        super(props)
        Object.defineProperty(this, 'value', {
            get: () => { return JSON.parse(this.refs.textarea.value) },
            set: (newValue) => { this.refs.textarea.value = JSON.stringify(newValue || {}) },
            enumerable: true,
            configurable: true
        })
    }
    render(){
        const {...props} = this.props
        delete props.ref
        return <textarea {...props} ref="textarea" />
    }
}
class FieldSet extends Component{
    constructor(props){
        super(props)
        this.state = {
            schema: props.schema || this.getSchema(props),
            data: props.data || this.getInitialData(props)
        }
        this.fields = {}
    }
    getSchema(){
        return {}
    }
    getInitialData(){
        return {}
    }
    render(){
        const {schema, data} = this.state
        return <div>
      {Object.keys(schema).map(key => this.field(key, schema[key], schema[key].getValue ? schema[key].getValue(data) : data[key] || null))}
    </div>
    }

    field(name, schema, value){
        var {props={}} = schema
        props.className = "form-control"
        props.ref = (f) => {
            if(f){
                f.value = value
                this.fields[name] = f
                f.fieldSet = this
            }
        }
        var field = null

        if(['text', 'number', 'url', 'email'].indexOf(schema.type) != -1){
            props.type = schema.type
            field = <input {...props} />
        }
        else if(schema.type == "textarea"){
            field = <textarea {...props} />
        }
        else if(schema.type == "json"){
            field = <JSONField {...props}/>
        }
        else if(schema.type == 'select'){
            field =  <select {...props}>
        {this.getSelectOptions(name, schema, value)}
      </select>
        }
        var label = schema.label || (name.charAt(0).toUpperCase() + name.slice(1))
        return <div className="form-group">
      <label>{label}</label>
      {field}
    </div>
    }
    getSelectOptions(name, schema, value){
        var {options} = schema
        if(!options) return null
        if(typeof options == "object"){
            return Object.keys(options).map(key => <option value={key}>{options[key]}</option>)
        }
        else if(typeof options == 'function' ){
            return options(this, this.state.data)
        }
        return null
    }
    getData(){
        var data = {}
        Object.keys(this.fields).map((key) => { data[key] = this.fields[key].value })
        return data
    }
}

export default FieldSet
