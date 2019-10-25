//on appelle l'id de
document.getElementById('lastname').addEventListener('input',messageInput);
   function messageInput()
   {
     var lastname = document.getElementById('lastname').value;
     alert(lastname);
  }
