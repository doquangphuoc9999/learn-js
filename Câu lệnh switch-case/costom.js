let month = document.getElementById("month");
let result = document.getElementById("result");

function count(){
    // console.log(month.value)
    switch(month.value) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            result.innerHTML = "Số ngày trong tháng" + " " + month.value + " " +  "là: 31 ngày";
    break;
        case "4":
        case "6":
        case "9":
        case "11":
            result.innerHTML = "Số ngày trong tháng" + " " + month.value + " " +  "là: 30 ngày";
    break;
        case "2":
            result.innerHTML = "Số ngày trong tháng" + " " + month.value + " " +  "là: 28 hoặc 29 ngày";
    break;
        default:
            result.innerHTML = "Số ngày trong tháng" + " " + month.value + " " + "không xác định"
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