var React = require('react');
var ReactDOM = require('react-dom');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Flux = require('flux');

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

// RestaurantUi
ReactDOM.render(
    <RestaurantControlPanel />,
    document.getElementById('test')
);



