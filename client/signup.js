Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
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