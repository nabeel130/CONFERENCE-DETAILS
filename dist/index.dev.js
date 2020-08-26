"use strict";

/*fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
.then(res =>{
    res.json()
}).then(data => {
    console.log(data);
})*/
var xhr = new XMLHttpRequest();
xhr.open("get", "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      //alert("success message");
      //alert(xhr.responseText);
      var result_data = JSON.parse(xhr.responseText); //console.log(result_data);

      console.log(result_data.free.length);
      var html_img = "";
      var html_title = "";
      var html_body = "";
      var html_btn = "";

      for (var i = 0; i < result_data.free.length; i++) {
        var current_record = result_data.free[i]; //html_img +=  ;

        html_title += "<h5>" + current_record.confName + "</h5>";
        html_body += "<li>" + current_record.confDate + "</li> <li>" + current_record.entryType + "</li> <li>" + current_record.country + "</li>";
        html_btn += "<a>" + current_record.confUrl + "</a>";
        console.log(current_record);
      } //document.getElementById("result_img").innerHTML = html_img;


      document.getElementById("result_title").innerHTML = html_title;
      document.getElementById("result_body").innerHTML = html_body;
      document.getElementById("result_btn").innerHTML = html_btn;
    } else {
      alert("Error");
    }
  }
}; //document.getElementsByClassName("card-img-top").innerHTML = current_record.imageURL;
//document.getElementsByName("h5").innerHTML = current_record.confName;