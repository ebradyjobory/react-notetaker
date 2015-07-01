var React = require('react');
var Router = require('react-router');
var Notes = require('./Notes/Notes.js');
var Repos = require('./Github/Repos.js');
var UserProfile = require('./Github/UserProfile.js');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');


var Profile = React.createClass({

  mixins: [Router.State, ReactFireMixin],

  getInitialState: function () {
    return {
      notes: [],
      bio: { name: "Essam" },
      repos: [1, 2, 3]
    }
  },

  updateProps: function () {
    var childRef = this.ref.child(this.getParams().username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.getParams().username)
      .then(function (data) {
        this.setState({
          repos: data.repos,
          bio: data.bio
        })
      }.bind(this));
  },

  componentDidMount: function () {
    this.ref = new Firebase('https://reactnotetaker.firebaseio.com');
    this.updateProps();
  },

  componentWillReceiveProps: function () {
    this.unbind('notes');
    this.updateProps();
  },

  componentWillUnmount: function () {
    this.unbind('notes');
  },

  handleAddNote: function (newNote) {
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  },

  render: function () {
    var username = this.getParams().username;
    return (
        <div className="row">
          <div className="col-md-4">
            <UserProfile  username={username} bio={this.state.bio}/>
          </div>
          <div className="col-md-4">
            <Repos username={username} repos={this.state.repos}/>
          </div>
          <div className="col-md-4">
            <Notes addNotes={this.handleAddNote} username={username} notes={this.state.notes}/>
          </div>
        </div>
      )
  }
});

module.exports = Profile;