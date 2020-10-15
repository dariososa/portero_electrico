function presionar(valor) {
    
    //let valor = document.getElementById("btn1").innerHTML;
    let piso = document.getElementById("piso").value;
    let dpto = document.getElementById("dpto").value;
    let visor = document.getElementById("mensaje").value;
    
    if (piso.length <2){
        document.getElementById("piso").value = piso.toString() + valor.toString()
    }else{
    
        if (dpto.length < 1){
            document.getElementById("dpto").value = dpto.toString() + valor.toString()
    
    
        }
    }
    }
    
    function botonllamar(){
    let piso = document.getElementById("piso").value;
    let dpto = document.getElementById("dpto").value;

    

    
    if(piso <=48 && dpto <=6){
        document.getElementById("mensaje").value = " llamando al piso "+ piso + " ,dpto " + dpto 
        console.log(mensaje);
    }else {
    
        document.getElementById("mensaje").value = " los datos ingresados no son validos"
        console.log(mensaje);
    }if(piso <=48 && dpto <=""){
        document.getElementById("mensaje").value = "Por favor indique el número de departamento"
        console.log(mensaje);
    }
    }
    
    
    function botonborrar(){
        let piso = document.getElementById("piso").value = "";
        let dpto = document.getElementById("dpto").value = "";
        let visor = document.getElementById("mensaje").value = "";
    }
    
    function mensaje1 (){
        let p = document.getElementById("mensaje1");
        let d = document.getElementById("mensaje2");
        setTimeout(function(){ p.innerHTML="comenzamos marcando el piso" }, 2000);
        setTimeout(function(){ d.innerHTML="comenzamos marcando el dpto" }, 4000);
        //setTimeout(function(){ s.value="4 seconds" }, 4000);
        //setTimeout(function(){ s.value="6 seconds" }, 6000);
      }
    
    
    
    
    
    
    