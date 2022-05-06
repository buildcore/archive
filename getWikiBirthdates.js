var Wikipedia = {}
var req = new XMLHttpRequest();
req.onreadystatechange = function() {
    document.onreadystatechange = function () { 
        if(req.readyState == 4) {
            if(req.status == 200) { 
                var birthdate = req.responseText.split("");
                var country = req.responseText.split("");
                var gender = req.responseText.split("");
            }
        }
    }
}

req.open("GET", "https://www.wikipedia.org/api/v2/people/%s/birthdate?","post");

if (req.status == 200) { 
    document.write("Error for " + req.input.name + " : " +req.status);
}  
