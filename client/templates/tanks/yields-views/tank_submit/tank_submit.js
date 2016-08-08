Template.tankSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        var tank = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };
        tank._id = Tanks.insert(tank);
        Router.go('tankPage', tank);
    }
});
