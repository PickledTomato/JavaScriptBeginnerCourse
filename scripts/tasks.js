// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
// ------------------------

let usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];

function getFieldValues(usersData, s) {
	var array1 = [];
	for (var i in usersData) {

		array1.push(usersData[i][s]);
	}
	return array1.sort();

}

console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// ------------------------


// 2) Написать функцию, фильтрующую массив с использованием предиката:
// ------------------------

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {
	return (x % 2 == 0) ? true : false;
}

function filter(numbers, isEven) {
	var array2 = [];
	for (i in numbers){
		if (isEven(numbers[i])){
			array2.push(numbers[i]);
		}
	}
	return array2;
}

console.log(filter(numbers, isEven)); // --> [2, 8, 34]

// ------------------------


// 3) Даны 2 строки со словами (без знаков препинания),
// вывести те слова (по одному разу), которые встречаются в обоих строках
// ------------------------

var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';

function findSimilarWords(firstLongString, secondLongString) {
	var array3 = firstLongString.split(' ');
	var array4 = secondLongString.split(' ');
	var sum = [];
	for (i in array3) {
		if (array4.includes(array3[i])){
			if (sum.includes(array3[i]) == false){
				sum.push(array3[i]);
			}
		}
	}
	return sum;

}

console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];

// ------------------------



// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
// ------------------------

var IpAddress = '10.223.98.2';
var subnetMask = 28;

function cidrToNetMask(num){
    let maskBinArr = [];
    let maskArr = [];
    let chunk = 8;
    let inverse = [];
    let maskInv = [];

    for (i = 0; i < 32; i += 1){
        if (num > 0){
            maskBinArr.push(1);
        }
        else{
            maskBinArr.push(0);
        }
        num -= 1;
    }

//inverse mask

    for (i = 0; i < 32; i += 1) {
        inverse[i] = (maskBinArr[i] == 0) ? 1 : 0;
    }

    for (i=0; i<32; i+=chunk) {
        maskArr.push(parseInt(maskBinArr.slice(i,i+chunk).join(''), 2));
        maskInv.push(parseInt(inverse.slice(i,i+chunk).join(''), 2));
    }

    return [maskArr, maskInv];
}

function generateBroadcastAndNetworsAddresses(ip, mask){
    let ipArr = ip.split('.');
    let NetAddress = [];
    var inv = cidrToNetMask(mask)[1];
    var mask = cidrToNetMask(mask)[0];
    let broadcast = [];

//calculate NetAddress

    for (i = 0; i < 4; i += 1){
        NetAddress[i] = parseInt(ipArr[i]) & mask[i];
    }

//calculate Broadcast

    for (i = 0; i < 4; i += 1){
        broadcast[i] = NetAddress[i] | inv[i];
    }

//output

    var broadcastOut = broadcast.join('.');
    var netAddressOut = NetAddress.join('.');

    return "Broadcast - " + broadcastOut + ", Network - " + netAddressOut;
}
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask));

// Broadcast - 10.223.98.15, Network - 10.223.98.0

// ------------------------


// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// ------------------------

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean(totalMessArray) {
	var array5 = [];
	for (i in totalMessArray){
		array5 = array5.concat(totalMessArray[i]);
	}

    array5 = array5.filter(function(item, pos) {
             return array5.indexOf(item) == pos;
	});

    return array5;

}

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];

// ------------------------
