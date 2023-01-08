
const descubrirCarta = document.querySelectorAll('.descubre-Carta');
const header = document.querySelector('.navegacion-gen');

window.addEventListener('scroll', ()=>{
     header.classList.toggle('sticky', window.scrollY>0);
});


const crearCarta = () =>{

     for( let i = 1; i <= 4; i++ ){ 

          const cartaLista = document.createElement('div');
          cartaLista.classList.add('descubre-Carta-lista');
          
          cartaLista.innerHTML = `<img src="assets/img/cart_one.jpg" alt="">
          <div class="descubre-Carta_texto">
          <p>Hampshire · England</p>
          <div class="descubre-Carta_titulo">
          <h4>Rustic country retreat</h4>
          <p>£210pp</p>
          </div>
          <p>Step outside and take in the stunning views. 
          Our cabin sits on a quiet and secluded property, 
          providing the perfect setting for a peaceful retreat.</p>          
          </div>`
          
          descubrirCarta[0].appendChild(cartaLista)     
     }

     for( let i = 1; i <= 4; i++ ){ 

          const cartaLista = document.createElement('div');
          cartaLista.classList.add('descubre-Carta-lista');
          
          cartaLista.innerHTML = `<img src="assets/img/inspiracion.jpg" alt="">
          <div class="descubre-Carta_texto">
          <p>Hampshire · England</p>
          <div class="descubre-Carta_titulo">
          <h4>Rustic country retreat</h4>
          <p>£210pp</p>
          </div>
          <p>Step outside and take in the stunning views. 
          Our cabin sits on a quiet and secluded property, 
          providing the perfect setting for a peaceful retreat.</p>          
          </div>`
          
          descubrirCarta[1].appendChild(cartaLista)     
     }

     
     return descubrirCarta;
}

crearCarta();