function Convert() {
    var fromvalue = document.getElementById("input").value;
var fromUnit =document.getElementById("select1").value;
var fromValueInMeters = fromvalue;
switch (fromUnit) {
    case "Meter":
        break;
    case "Centimeter":
        fromValueInMeters = fromvalue / 100;
        break;
    case "Millimeter":
        fromValueInMeters = fromvalue / 1000;
        break;
    case "Kilometer":
        fromValueInMeters = fromvalue * 1000;
        break;
    case "Mile":
        fromValueInMeters = fromvalue * 1609;
        break;
    case "Micrometer":
        fromValueInMeters = fromvalue / 1000000;
        break;
    case "Foot":
        fromValueInMeters = fromvalue / 3.281;
        break;
    case "Inch":
        fromValueInMeters = fromvalue / 39.37;
        break;
}
var toUnit = document.getElementById("select2").value;
var result = fromValueInMeters;
switch (toUnit) {
    case "Meter":
        break;
    case "Centimeter":   
        result = fromValueInMeters * 100; 
        break;
    case "Millimeter":
        result = fromValueInMeters * 1000; 
        break;   
    case "Kilometer":
        result = fromValueInMeters / 1000;
        break;
    case "Mile":
        result = fromValueInMeters / 1609;
        break;
    case "Micrometer":
        result = fromValueInMeters * 1000000
        break;
    case "Foot":
        result = fromValueInMeters * 3.281;
        break;
    case "Inch":
        result = fromValueInMeters * 39.37;
        break;
}
    document.getElementById("output").value = result;
}
