var React = require('react');
var validator = require('validator');

var NumberField = React.createClass({
    getInitialState: function() {
        return {value: ""};
    },
    onChange: function(e) {
        if (!validator.isFloat(e.target.value)) {
            this.setState({valid: false, value: e.target.value})
        } else {
            this.setState({valid: true, value: e.target.value});
        }
    },
    clear: function() {
        this.setState({value: ""});
    },

    render: function() {
        var formClass = this.state.valid ? "form-group" : "form-group has-error"

        return (
            <div className="col-sm-6">
                <div className={formClass}>
                    <input className="form-control" placeholder={this.props.placeholder} onChange={this.onChange} value={this.state.value} />
                </div>
            </div>
        );
    }
});

module.exports = NumberField;
