// https://github.com/aldeed/meteor-autoform#installation
Meteor.subscribe('groups');

Groups = new Mongo.Collection("groups");
Groups.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Group Name",
    max: 200
  },
  author: {
    type: String,
    label: "Location"
  },

  summary: {
    type: String,
    label: "Video URL",
    optional: true,
    max: 1000
  }
}));