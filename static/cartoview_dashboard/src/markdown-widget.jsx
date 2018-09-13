import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown.js';

import CodeMirror from 'react-codemirror';
import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownWidget extends BaseWidget {
    static displayName = "Text-to-HTML";

    render() {
        const style = {
            padding: "10px 20px"
        }
        return <div style={style}>
            <ReactMarkdown source={this.state.config.markdown}/>
        </div>;
    }
}

class ConfigForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: props.widget.getConfig().markdown || ""
        }
    }

    render() {
        const options = {
            lineNumbers: true,
            mode: 'markdown'
        };

        const onChange = (markdown) => {
            this.setState({markdown})
        }
        return <CodeMirror value={this.state.markdown} onChange={onChange} options={options}/>
    }

    getData() {
        return {
            markdown: this.state.markdown
        }
    }
}


MarkdownWidget.ConfigForm = ConfigForm;

Dashboard.registerWidget(MarkdownWidget);
export default MarkdownWidget;
