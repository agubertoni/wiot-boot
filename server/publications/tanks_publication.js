Meteor.publish('tanks', function () {
    return Tanks.find({});
});
