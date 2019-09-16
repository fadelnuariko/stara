function myAjax() {
    var xmlHttp = new XMLHttpRequest();
    var url="https://api.chucknorris.io/jokes/random";
    var parameters = "first=barack&last=obama";
    xmlHttp.open("GET", url, true);
   
    //Black magic paragraph
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.setRequestHeader("Content-length", parameters.length);
    xmlHttp.setRequestHeader("Connection", "close");
   
    xmlHttp.onreadystatechange = function() {
     if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      console.log(xmlHttp.responseText);
     }
    }
   
    xmlHttp.send(parameters);
   }