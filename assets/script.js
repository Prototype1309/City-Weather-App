var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");
var clearHistoryButton = $("#clear-history");

var currentCity = $("#current-city");
var currentTemp = $("#current-temp");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");
var UVindex = $("#uv-index");

var weatherContent = $("#weather-content");

var APIkey = "a17e1499228be1f9c294ac18b234c7d7";

var cityList = [];

var currentDate = moment().format('L');
$("#current-date").text("(" + currentDate + ")");

initalizeHistory();
showClear();

$(document).on("submit", function(){
    event.preventDefault();
    var searchValue = searchCityInput.val().trim();

    currentConditionsRequest(searchValue)
    searchHistory(searchValue);
    searchCityInput.val(""); 
});

clearHistoryButton.on("click", function(){
 
    cityList = [];
    listArray();
    
    $(this).addClass("hide");
});
searchHistoryList.on("click","li.city-btn", function(event) {
    // console.log($(this).data("value"));
    var value = $(this).data("value");
    currentConditionsRequest(value);
    searchHistory(value); 

