
// #### part 1 #####

let content = document.querySelector('pre').textContent.split('\n\n')

function check(content) {
    var byr = "byr";
    var iyr = "iyr";
    var eyr = "eyr";
    var hgt = "hgt";
    var hcl = "hcl";
    var ecl = "ecl";
    var pid = "pid";
    var row;

    var counter = 0;

    for (l = 0; l < content.length; l++) {
        row = content[l].split(':');
        if (
            row[l].indexOf(byr) > -1
            && row[l].indexOf(iyr) > -1
            && row[l].indexOf(eyr) > -1
            && row[l].indexOf(hgt) > -1
            && row[l].indexOf(hcl) > -1
            && row[l].indexOf(ecl) > -1
            && row[l].indexOf(pid) > -1
        ) {
            console.log("True");
            counter++;
        }

    }
}



//####### PART 2 ##### 
let t = document.querySelector('pre').textContent.split('\n\n')
let t1 = t.map(row => row.replaceAll('\n', ' '))
var contentFormat = t1.map(row => row.split(' '))

function checkPass(content) {
    var dict = [];
    for (i = 0; i < content.length; i++) {
        for (j = 0; j < content[i].length; j++) {
            var object = content[i][j].split(':');
            dict.push({
                key: object[0],
                value: object[1]
            });
        }
        if (dict.every(validate)) {
            console.log('true');
        } else {
            console.log('nope');
        }
        dict = [];
    }
}

function validate(item) {
    if ((item.key == 'byr') && (item.value.length == 4) && (parseInt(item.value) >= 1920 && parseInt(item.value) <= 2002)) {
        return true;
    }

    if (item.key == 'iyr' && item.value.length == 4 && (parseInt(item.value) >= 2010 && parseInt(item.value) <= 2020)) {
        return true;
    }

    if (item.key == 'eyr' && item.value.length == 4 && (parseInt(item.value) >= 2020 && parseInt(item.value) <= 2030)) {
        return true;
    }

    if (item.key == 'hgt') {
        var value = item.value.substring(0, item.value.length - 2)
        console.log(value)
        if (item.value[item.value.length - 1] == 'm' && item.value[item.value.length - 2] == 'c') {
            if (parseInt(value) >= 150 && parseInt(value) <= 193) {
                console.log(item.value, value);
                return true;
            }
        }

        if (item.value[item.value.length - 1] == 'n' && item.value[item.value.length - 2] == 'i') {
            if (parseInt(value) >= 59 && parseInt(value) <= 76) {
                return true;
            }
        }
    }

    if (item.key == 'hcl' && item.value[0] == '#') {
        var value = item.value.substring(1, item.value.length)
        if (/^[a-f0-9]+$/.test(value)) {
            if (value.length == 6) {
                return true;
            }
        }
    }

    if (item.key == 'ecl') {
        if (
            item.value == 'amb' ||
            item.value == 'blu' ||
            item.value == 'brn' ||
            item.value == 'gry' ||
            item.value == 'grn' ||
            item.value == 'hzl' ||
            item.value == 'oth'
        ) {
            return true;
        }
    }

    if (item.key == 'cid') {
        return true;
    }

    // ???
    if (item.key == 'pid' && (item.value).length == 9) {
        var number = parseInt(item.value);
        if (number) {
            return true;
        }
    }
}