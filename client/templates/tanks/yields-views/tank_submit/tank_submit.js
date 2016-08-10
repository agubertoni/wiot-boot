Template.tankSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        var tank = {
            tankId: $(e.target).find('[name=tankid]').val(),
            wine: $(e.target).find('[name=wine]').val(),
            vineyard: $(e.target).find('[name=vineyard]').val()
        };
        tank._id = Tanks.insert(tank);
        Router.go('tankPage', tank);
    }
});
