import { canvas } from "./data"


// var direction = new Array(3);
// var x = 1;
// for (var i = 0; i < 3; i++);
// {
//     var amount = prompt("inter the way " + "step " + x + ": ");
//     direction.push(amount);
//     x++;
// }

var k = "Your input is : " + "<br>";
        function get_way() {
            var input = document.getElementsByName('array[]');
            num = 1
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                k = k + num + ". " + a.value + "<br>";
                num++;
            }
  
            document.getElementById("par").innerHTML = k;
            document.getElementById("po").innerHTML = "Result";
        }
