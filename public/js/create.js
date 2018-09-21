$(document).ready(function () {

    var planeArray = [];
    var planeImgList = [
        '/img/su-35.jpg',
        '/img/b-52.jpg',
        '/img/stealth-fighter.jpg',
        '/img/f-15.jpg'
    ];

    var su35 = {
        'name': 'SU-35',
        'hp': '100',
        'attack': '15',
        'defense': '12',
        'evasion': '10',
        'crit': '10'
    }
    var b52 = {
        'name': 'B-52 Bomber',
        'hp': '200',
        'attack': '10',
        'defense': '5',
        'evasion': '5',
        'crit': '5'
    }
    var stealth = {
        'name': 'Stealth Fighter',
        'hp': '100',
        'attack': '15',
        'defense': '12',
        'evasion': '10',
        'crit': '10'
    }
    var f15 = {
        'name': 'F-15 Fighter',
        'hp': '100',
        'attack': '15',
        'defense': '12',
        'evasion': '10',
        'crit': '10'
    }
    planeArray.push(su35, b52, stealth, f15);

    $.each(planeArray, (val, text) => {
        var planeNumber = 0;
        $('.plane--selector').append($(`<option class=${planeNumber++}~></option>`).val(val).html(text.name));

    });

    $('#plane1').change(function () {
        var val = parseInt($('#plane1').val());
        $('#squad-photo-1').attr('src', planeImgList[val]);

        $('#plane--name--1').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--1').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--1').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--1').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--1').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--1').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane2').change(function () {
        var val = parseInt($('#plane2').val());
        $('#squad-photo-2').attr('src', planeImgList[val]);

        $('#plane--name--2').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--2').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--2').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--2').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--2').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--2').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane3').change(function () {
        var val = parseInt($('#plane3').val());
        $('#squad-photo-3').attr('src', planeImgList[val]);

        $('#plane--name--3').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--3').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--3').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--3').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--3').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--3').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane4').change(function () {
        var val = parseInt($('#plane4').val());
        $('#squad-photo-4').attr('src', planeImgList[val]);

        $('#plane--name--4').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--4').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--4').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--4').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--4').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--4').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane5').change(function () {
        var val = parseInt($('#plane5').val());
        $('#squad-photo-5').attr('src', planeImgList[val]);

        $('#plane--name--5').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--5').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--5').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--5').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--5').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--5').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane6').change(function () {
        var val = parseInt($('#plane6').val());
        $('#squad-photo-6').attr('src', planeImgList[val]);

        $('#plane--name--6').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--6').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--6').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--6').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--6').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--6').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane7').change(function () {
        var val = parseInt($('#plane7').val());
        $('#squad-photo-7').attr('src', planeImgList[val]);

        $('#plane--name--7').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--7').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--7').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--7').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--7').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--7').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane8').change(function () {
        var val = parseInt($('#plane8').val());
        $('#squad-photo-8').attr('src', planeImgList[val]);

        $('#plane--name--8').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--8').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--8').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--8').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--8').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--8').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane9').change(function () {
        var val = parseInt($('#plane9').val());
        $('#squad-photo-9').attr('src', planeImgList[val]);

        $('#plane--name--9').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--9').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--9').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--9').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--9').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--9').text(`Crit: ${planeArray[val].crit}`);
    });

    $('#plane10').change(function () {
        var val = parseInt($('#plane10').val());
        $('#squad-photo-10').attr('src', planeImgList[val]);

        $('#plane--name--10').text(`Name: ${planeArray[val].name}`);
        $('#plane--hp--10').text(`HP: ${planeArray[val].hp}`);
        $('#plane--attack--10').text(`Attack: ${planeArray[val].attack}`);
        $('#plane--defense--10').text(`Defense: ${planeArray[val].defense}`);
        $('#plane--crit--10').text(`Evasion %: ${planeArray[val].evasion}`);
        $('#plane--eva--10').text(`Crit: ${planeArray[val].crit}`);
    });

});


