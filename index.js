class Libros {
  constructor(id, nombre, autor, editorial, año, precio) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.año = año;
    this.precio = precio;
    this.vendido = false;
  }
  envio() {
    this.precio = this.precio + 5000;
  }
}

function librosExistentes() {
  const libro1 = new Libros( 1,"100 años de soledad","Gabo","alfaguara", 2002, 80000);
  const libro2= new Libros( 2,"Akelerre","Mario mendoza","planeta", 2000, 100000);
  return console.log(libro1,libro2)
}

function escogerLibro() {
  console.log('LIBROS:')
  librosExistentes();
   let cantidad=parseInt(prompt('Cuantos libros quieres comprar'))   
   for(let i=1;i<=cantidad;i++){    
    let op=parseInt(prompt('Que libro deseas comprar?'))
    switch(op){
      case 1:
        console.log('Felicidades, compraste 100 años de soledad')
        break;
      case 2:
        console.log('Felicidades, compraste Akelerre')
        break;
      default:
        break;
    }
   }
}


  let opcion = parseInt(prompt(
    "BIENVENIDO A BOOKEND \n\n" +
      "Escoge una opcion: \n" +
      "1. Comprar un libro  \n" +
      "2. Vender un libro  \n" +
      "3. Salir"
  ));

  switch (opcion) {
    case 1:
      escogerLibro();
      break;        
      
  }

