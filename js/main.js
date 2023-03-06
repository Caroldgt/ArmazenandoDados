 const form = document.getElementById('novoItem')


 form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    

      Criarelemento(evento.target.elements['nome'].value,evento.target.elements['quantidade'].value);


   function Criarelemento(nome,quantidade){

      console.log(nome);
      console.log(quantidade);


      const Novoitem = document.createElement('li');
      Novoitem.classList.add("item");


      const Novovalor = document.createElement('strong');
      Novovalor.innerHTML = quantidade;


      Novoitem.appendChild(Novovalor);
      Novoitem.innerHTML += nome


      const lita = document.getElementById('lista')
      
      lita.appendChild(Novoitem)



   }

 })