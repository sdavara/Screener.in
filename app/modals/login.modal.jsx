"use strict";
/* global require, window */
var React = require('react');
var Modal = require('app/components/modal.jsx');


var LoginModal = React.createClass({
  onOpen: function() {},
  onClose: function() {},

  render: function() {
    return <Modal
      onOpen={this.onOpen}
      onClose={this.onClose}
      style={this.props.style || 'default'}
      icon={this.props.icon}
      name={this.props.name}
      title="Register for free to continue"
      >
        <form action="/register/" method="post">
          <input name="email" type="email" />
          <input name="email2" type="email" />
        </form>
    </Modal>;
  }
});


module.exports = LoginModal;
