let month = document.getElementById("month");
let result = document.getElementById("result");

function count(){
   
    switch(parseInt(month)) {
        case "1", "3", "5", "7","8","10","12":
            result.innerHTML = "Số ngày trong tháng" + month + " " + "là 31 ngày";
        break;
        case  "4","6","9","11":
            result.innerHTML = "Số ngày trong tháng" + month + " " + "là 30 ngày";
        break;
        case  "2":
            result.innerHTML = "Số ngày trong tháng" + month + " " + "là 28 hoặc 29 ngày";
        break;
        default:
            result.innerHTML = "Số ngày trong tháng" + month + " " + "không hợp lệ";
        break;
    }
        
      
       
    
} 


// case "1", "3","5","7","8","10","12":
//     result.innerHTML = "Số ngày trong tháng" + "month" +  "là: 31 ngày";
// break;
// case "4", "6","10","11":
//     result.innerHTML = "Số ngày trong tháng" + "month" +  "là: 30 ngày";
// break;
// case "2":
//     result.innerHTML = "Số ngày trong tháng" + "month" +  "là: 28 hoặc 29 ngày";
// break;