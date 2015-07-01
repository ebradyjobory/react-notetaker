var React = require('react');

var AddNotes = React.createClass({

  proptypes: {
    username: React.PropTypes.string.isRequired,
    addNotes: React.PropTypes.func.isRequired
  },

  handleSubmit: function (e) {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNotes(newNote);
  },

  render: function () {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add new Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={ this.handleSubmit }>Submit</button>
        </span>
      </div>
    );
  }

});

module.exports = AddNotes;