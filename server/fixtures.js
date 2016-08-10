if (Tanks.find().count() === 0) {
    Tanks.insert({
        tankId: '01',
        wine: 'Malbec',
        vineyard: 'Finca X'
    });
    Tanks.insert({
        tankId: '02',
        wine: 'Cabernet',
        vineyard: 'Finca Y'
    });
}