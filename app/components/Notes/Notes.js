import React from 'react';
import NotesList from './NotesList';
import AddNotes from './AddNotes';


class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3>Notes for: { this.props.username }</h3>
        <AddNotes addNotes={ this.props.addNotes }/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNotes: React.PropTypes.func.isRequired
};

export default Notes;