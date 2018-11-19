function lookUp () { 
    let url;
    let country =document.getElementById("country").value;
    let all= document.getElementById('myCheck');
    
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("result").innerHTML=this.responseText;
            //handleResponse(this.responseText);
            
        }
    };
    
    if (all.checked)
    {
          all.setAttribute('value','true');
          url = "world.php?country="+"&all="+ all.value;
          
    }
    else {
        url =  "world.php?country=" + country;
    }
    
    httpRequest.open("GET",url,true);
    httpRequest.send();
    
    //});
    function handleResponse (response) {
         alert(response);
    }
}



