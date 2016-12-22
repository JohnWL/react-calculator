var React = require('react');

var MathButton = React.createClass({
    render: function() {
        return (
            <div className="col-sm-3">
                <button className="btn btn-primary" onClick={this.props.onClick}>{this.props.placeholder}</button>
            </div>
        );
    }
});

module.exports = MathButton;
