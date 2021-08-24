import { canvas } from "./data"

var k = "Your input is : " + "<br>";
        function get_way() {
            var input = document.getElementsByName('array[]');
            num = 1
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                k = k + num + ". " + a.value + "<br>";
                num++;
            }
            if(input[0] != "root")
            {
                k = "The input path is wrong!"
            }
  
            // document.getElementById("par").innerHTML = k;
            // document.getElementById("po").innerHTML = "Result";
            console.log(k);
        }
