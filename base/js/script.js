document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const country=document.getElementById("country");
    const city=document.getElementById("city");
    const district=document.getElementById("district");
    const address_line=document.getElementById("address_line");
    const name1=document.getElementById("name1");
    const tel1=document.getElementById("tel1");
    const name2=document.getElementById("name2");
    const tel2=document.getElementById("tel2");
    const email2=document.getElementById("email2");
    const map=document.getElementById("map");
    
     
    window.onload=()=>{
        
       $ajaxUtils
          .sendGetRequest(`https://coursework-lunleo.herokuapp.com/data`, 
            (request) => {
              const data = (JSON.parse(request.responseText))[0];
              country.innerHTML=data.country;
              city.innerHTML=data.city;
              district.innerHTML=data.email;
              address_line.innerHTML=data.address_line;
              name1.innerHTML=data.name1;
              tel1.href='tel:+38'+data.tel1;
              tel1.innerHTML='+38'+data.tel1;
              name2.innerHTML=data.name2;
              tel2.href='tel:+38'+data.tel2;
              tel2.innerHTML='+38'+data.tel2;
              email2.href='mailto:'+data.email2;
              email2.innerHTML=data.email2;
              map.src=data.map;
              
           
            });
             
   }
  });