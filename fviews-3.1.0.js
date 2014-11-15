if (Meteor.isClient) {
  Template.registerHelper("myItems", function(){
    return [1,2,3];
  })
};