var React = require('react');
var NotesList = require('./NotesList');
var AddNotes = require('./AddNotes');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNotes: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <div>
        <h3>Notes for: { this.props.username }</h3>
        <AddNotes addNotes={ this.props.addNotes }/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;