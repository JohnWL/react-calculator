var React = require('react');
var NumberField = require('./NumberField.jsx');
var MathButton = require('./MathButton.jsx');

var SimpleCalc = React.createClass({
    getInitialState: function() {
        return {result: ""}
    },
    handleClick: function(value,e) {
        if ((!this.refs.numberField1.state.valid) || (!this.refs.numberField2.state.valid)) {
            alert("Invalid number.");
        } else {
            var ref1 = this.refs.numberField1.state.value;
            var ref2 = this.refs.numberField2.state.value;

            var num1 = parseInt(ref1);
            var num2 = parseInt(ref2);

            if (value === "+") {
                var result = num1 + num2;
            } else if (value === "-") {
                var result = num1 - num2;
            } else if (value === "/") {
                var result = num1 / num2;
            } else if (value === "*") {
                var result = num1 * num2;
            }


            this.setState({result:result});

            //console.log(value);
            //console.log(this.refs.numberField1.state);
            //console.log(result);
            console.log(result);
        }
    },
    handleChange: function(value) {
        this.setState({value: value});
    },
    onClear: function(e) {
        this.refs.numberField1.clear();
        this.refs.numberField2.clear();
        this.setState({result:""});
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
                            <MathButton onClick={this.handleClick.bind(this,"+")} value="+" placeholder="+ Add" />
                            <MathButton onClick={this.handleClick.bind(this,"-")} value="-" placeholder="- Subtract" />
                            <MathButton onClick={this.handleClick.bind(this,"/")} value="/" placeholder="/ Divide" />
                            <MathButton onClick={this.handleClick.bind(this,"*")} value="*" placeholder="* Multiply" />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Result" value={this.state.result} ref="resultField" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-danger" onClick={this.onClear}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SimpleCalc;
