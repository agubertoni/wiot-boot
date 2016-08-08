Template.tanksList.helpers({
    tanks: function() {
        return Tanks.find();
    }
});