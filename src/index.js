import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const output = $("div#output");
    const inputtedYear = $("input#year").val();
    const inputtedMonth = $("input#month").val();
    const inputtedDay = $("input#day").val();
    const weekday = Game.calculateWeekday(inputtedYear, inputtedMonth, inputtedDay);
    output.append(weekday);
  });
});
