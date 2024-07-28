class Libro {
  constructor(id, nombre, autor, editorial, año, precio) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.año = año;
    this.precio = precio;
    this.vendido = false;
  }
  precioFinal() {
    const IVA=x=>x*0.19 //IVA en colombia
    let precioFinal = IVA(this.precio)+this.precio + 5000;
    return precioFinal
  }
}
  const libro1 = new Libro( 1,"100 años de soledad","Gabo","alfaguara", 2002, 80000);
  const libro2= new Libro( 2,"Akelerre","Mario mendoza","planeta", 2000, 100000);
  let libros=[libro1,libro2]
 

function escogerLibro() {
  console.log('LIBROS:')
  for(let y=0;y<libros.length;y++){
  console.log(libros[y])
  }
   let cantidad=parseInt(prompt('¿Cuantos libros quieres comprar?'))
   if(cantidad<=libros.length){   
   for(let i=1;i<=cantidad;i++){    
    let op=parseInt(prompt('¿Que libro deseas comprar? Digita el id'))
    switch(op){
      case 1:
        console.log('¡Felicidades!, compraste '+libro1['nombre']+' y el precio final con IVA y envio son '+libro1.precioFinal()+' pesos colombianos')        
        break;
      case 2:
        console.log('Felicidades, compraste Akelerre')
        break;
      default:
        break;
    }
   }
  }else{
    alert('No hay tantos libros disponibles')
  }
}


  let opcion = parseInt(prompt(
    "BIENVENIDO A BOOKEND \n\n" +
      "Escoge una opcion: \n" +
      "1. Comprar libro  \n" +
      "2. Vender libro  \n" +
      "3. Salir"
  ));

  switch (opcion) {
    case 1:
      escogerLibro();
      break;        
      
  }

