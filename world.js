function lookUp () {   
    let country =document.getElementById("country").value;
    
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            alert(this.responseText);
            //document.getElementById("result").innerHTML=this.responseText;
        }
    };
    httpRequest.open("GET","world.php?country=" + country,true);
    httpRequest.send();
    
    //});
}


