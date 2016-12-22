var React = require('react');
var NumberField = require('./NumberField.jsx');
var MathButton = require('./MathButton.jsx');

var SimpleCalc = React.createClass({
    onClick: function(val, e) {
        if ((!this.refs.numberField1.state.valid) || (!this.refs.numberField2.state.valid)) {
            alert("Invalid number.");
        } else {
            console.log(val);

        }
    },

    render: function() {
        return (
            <div className="col-sm-9">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h1>React Calculator</h1>
                        <div className="row">
                            <NumberField placeholder="NUMBER e.g., 1337" ref="numberField1" />
                            <NumberField placeholder="NUMBER e.g., 2108" ref="numberField2" />
                        </div>
                        <div className="row">
                            <MathButton onClick={this.onClick.bind(this,"+")} value="+" placeholder="+ Add" />
                            <MathButton onClick={this.onClick.bind(this,"-")} value="-" placeholder="- Subtract" />
                            <MathButton onClick={this.onClick.bind(this,"/")} value="/" placeholder="/ Divide" />
                            <MathButton onClick={this.onClick.bind(this,"*")} value="*" placeholder="* Multiply" />
                        </div>
                        <div className="row">
                            <NumberField placeholder="Result" ref="resultField" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SimpleCalc;
