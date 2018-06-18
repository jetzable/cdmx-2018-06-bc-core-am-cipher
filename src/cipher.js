window.cipher = {
    encode: (offset,string) => {
        let newMessage = [];
        let finalMessage = [];
        console.log(offset);
        console.log(string);
        for(let i=0;i<string.length; i++){
            if (string.charCodeAt(i) === 32) {
                newMessage[i] = finalMessage[i] = String.fromCharCode(32);
                console.log("dah");
            }
            else {
                if (string.charCodeAt(i)>90) {
                    newMessage[i] = ((string.charCodeAt(i) - 97 + offset) % 26) + 97;
                    finalMessage[i] = String.fromCharCode(newMessage[i]);
                    console.log("puuffff");
                }
                else{
                    newMessage[i] = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
                    finalMessage[i] = String.fromCharCode(newMessage[i]);
                    console.log("puaaaa");
                }
            }
            document.getElementById("firstMessage").value = " ";
            document.getElementById("resultado").value += finalMessage[i];
        }
    },

    decode: (offset, string) => {
        let newMessage = [];
        let finalMessage = [];
        console.log(offset);
        console.log(string);
        for(i=0;i<string.length; i++){
            if (string.charCodeAt(i) == 32){
                newMessage[i] = String.fromCharCode(32);
                finalMessage[i] = newMessage[i];
                console.log(finalMessage[i]);
                console.log("dah");
            }
            else{
                if (string.charCodeAt(i)>90) {
                    if((string.charCodeAt(i) - 97 - offset)<0){
                        newMessage[i] = ((string.charCodeAt(i) - 97 - offset) % 26) + 123;
                        finalMessage[i] = String.fromCharCode(newMessage[i]);
                        console.log("fuuu");
                    }
                    else{
                        newMessage[i] = ((string.charCodeAt(i) - 97 - offset) % 26) + 97;
                        finalMessage[i] = String.fromCharCode(newMessage[i]);
                        console.log("faaa");
                    }
                }
                else{
                    if ((string.charCodeAt(i) - 65 - offset)<0) {
                        newMessage[i] = ((string.charCodeAt(i) - 65 - offset) % 26) + 91;
                        finalMessage[i] = String.fromCharCode(newMessage[i]);
                        console.log(offset);
                        console.log("duuuu");
                    }
                    else{
                        newMessage[i] = ((string.charCodeAt(i) - 65 - offset)%26) + 65;
                        finalMessage[i] = String.fromCharCode(newMessage[i]);
                        console.log("daaaaaaaa");
                    }
                }
                console.log(finalMessage[i].charCodeAt());
            }
            document.getElementById("resultado").value = " ";
            document.getElementById("firstMessage").value += finalMessage[i];     
        }
    },
}
