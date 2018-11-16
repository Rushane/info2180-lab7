function lookUp () {   
    let lookUp = document.getElementById("lookup");
    let country =document.getElementById("country").value;
    //let msg;
    //lookUp.addEventListener("click",function(){
      // msg=country.getAttribute("value");
    
    
    let httpRequest = new XMLHttpRequest();
    //let url = "https://info2180-lab7-rushane.c9users.io/world.php?country="+msg;
    
    httpRequest.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            //console.log("ok");
            document.getElementById("result").innerHTML=this.responseText;
            
        }
    };
    httpRequest.open("GET","world.php?country=" + country,true);
    httpRequest.send();
    
    //});
}
