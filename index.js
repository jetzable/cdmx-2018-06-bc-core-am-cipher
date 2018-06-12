function getEncode(){
    console.log("prueba");
    const offset = (parseInt(document.getElementById("desplazamiento").value)) % 26;
    const string = document.getElementById("firstMessage").value;
    document.getElementById("resultado").innerHTML = " ";
    console.log(offset);
    console.log(string);
    cipher.encode(offset, string);
};

function getDecode(){
    console.log("prueba");
    const offset = (parseInt(document.getElementById("desplazamiento").value)) % 26;
    const string = document.getElementById("firstMessage").value;
    document.getElementById("resultado").innerHTML = " ";
    console.log(offset);
    console.log(string);
    cipher.decode(offset, string);
};