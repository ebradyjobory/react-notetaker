import React from 'react';

class AddNotes extends React.Component {
  handleSubmit(e) {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNotes(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add new Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={ this.handleSubmit.bind(this) }>Submit</button>
        </span>
      </div>
    );
  }
};

AddNotes.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNotes: React.PropTypes.func.isRequired
};

export default AddNotes;