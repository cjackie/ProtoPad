var React = require('react');
var ReactDOM = require('react-dom');

/******** Menu **********/
var MenuItem = React.createClass({
    render: function() {
	return (
	    <div className='list-group-item'>
	    {this.props.itemName}
	     <span className='pull-right'>${this.props.price}</span>
	    </div>
	);
    }
});

ReactDOM.render(
    <App menu={menu} />,
    document.getElementById('main')
);
