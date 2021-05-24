function findLength()
{
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


function findTemperature()
{
    var fromvalue = document.getElementById("input").value;
    var fromUnit =document.getElementById("select1").value;
    var fromValueInCelsius = fromvalue;
    switch (fromUnit) {
        case "Celsius":
            break;
        case "Fahrenheit":
            fromValueInCelsius = (fromvalue - 32) * 5 / 9;
            break;
        case "Kelvin":
            fromValueInCelsius = fromvalue - 273;
            break;
    }
    var toUnit = document.getElementById("select2").value;
    var result = fromValueInCelsius;
    switch (toUnit) {
        case "Celsius":
            break;
        case "Fahrenheit":   
            result = (fromValueInCelsius * 9 / 5 ) + 32;
            break;
            case "Kelvin":   
            result = (fromValueInCelsius + 273);
            break;
    }
    document.getElementById("output").value = result;
}

function findVolume()
{
    var fromvalue = document.getElementById("input").value;
    var fromUnit =document.getElementById("select1").value;
    var fromValueInLitres = fromvalue;
    switch (fromUnit) {
        case "Litres":
            break;
        case "MilliLitres":
            fromValueInLitres = fromvalue / 1000;
            break;
        case "Gallons":
            fromValueInLitres = fromvalue * 3.785;
            break; 
    }  
    var toUnit = document.getElementById("select2").value;
    var result = fromValueInLitres;
    switch (toUnit) {
        case "Litres":
             break;
        case "MilliLitres":   
             result = fromValueInLitres * 1000;
             break;
        case "Gallons":
            result = fromValueInLitres / 3.785;
            break;
    }
    document.getElementById("output").value = result;
}


function selectLength()
{
    var select1 = document.getElementById("select1");
   
    select1.options.length = 0;
    var select2 = document.getElementById("select2");
    select2.options.length = 0;
    var options = ["Meter", "Centimeter", "Millimeter","Kilometer", "Mile", "Micrometer", "Foot", "Inch"];
    for (i =0; i < options.length; i++)
    {
        var option = document.createElement("option");
        option.text = options[i];
        select1.add(option);
        option = document.createElement("option");
        option.text = options[i];
        select2.add(option);
    }
    select1.onchange = function()
    {
        findLength();
    }
    select2.onchange = function()
    {
        findLength();
    }
    var input = document.getElementById("input");
    input.onchange = function()
    {
        findLength();
    }
}

function selectTemperature()
{

    var select1 = document.getElementById("select1");
   
    select1.options.length = 0;
    var select2 = document.getElementById("select2");
    select2.options.length = 0;
    var options = ["Celsius", "Fahrenheit", "Kelvin"];
    for (i =0; i < options.length; i++)
    {
        var option = document.createElement("option");
        option.text = options[i];
        select1.add(option);
        option = document.createElement("option");
        option.text = options[i];
        select2.add(option);
    }
    select1.onchange = function()
    {
        findTemperature();
    }
    select2.onchange = function()
    {
        findTemperature();
    }
    var input = document.getElementById("input");
    input.onchange = function()
    {
        findTemperature();
    }

}

function selectVolume()
{
    var select1 = document.getElementById("select1");
   
    select1.options.length = 0;
    var select2 = document.getElementById("select2");
    select2.options.length = 0;
    var options = ["Litres", "MilliLitres", "Gallons"];
    for (i =0; i < options.length; i++)
    {
        var option = document.createElement("option");
        option.text = options[i];
        select1.add(option);
        option = document.createElement("option");
        option.text = options[i];
        select2.add(option);
    }
    select1.onchange = function()
    {
        findVolume();
    }
    select2.onchange = function()
    {
        findVolume();
    }
    var input = document.getElementById("input");
    input.onchange = function()
    {
        findVolume();
    }
    
}