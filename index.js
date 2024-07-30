class Libro {
  constructor(id, nombre, autor, editorial, año, precio,vendido) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.año = año;
    this.precio = precio;  
    this.vendido = vendido;    
  }
  precioMasIva() {
    const IVA=x=>x*0.19 //IVA en colombia    
    let precioFinal = IVA(this.precio)+this.precio;
    return precioFinal
  }
}
  const envio=5000
  const libro1 = new Libro( 1,"100 años de soledad","Gabo","alfaguara", 2002, 80000,false);
  const libro2= new Libro( 2,"Akelerre","Mario mendoza","planeta", 2000, 100000,false);
  const libros=[libro1,libro2]
  const carrito=[]
  let precioFinal=0
  
function imprimirLibros(libros){
  console.log('LIBROS DISPONIBLES:')
  for(let y=0;y<libros.length;y++){
  console.log(libros[y])
  }
}

function comprarLibro() {  
  imprimirLibros(libros)
   let cantidad=parseInt(prompt('¿Cuantos libros quieres comprar?'))
   if(cantidad<=libros.length){   
   for(let i=1;i<=cantidad;i++){    
    let lb=parseInt(prompt('¿Que libro deseas comprar? Digita el id'))
    switch(lb){
      case 1:
        console.log('¡Felicidades!, agregaste al carrito '+libro1['nombre']+' y el precio final con IVA es '+libro1.precioMasIva()+' pesos colombianos')
        carrito.push(libro1)
        libro1['vendido']=true           
        break;
      case 2:
        console.log('¡Felicidades!, agregaste al carrito '+libro2['nombre']+' y el precio final con IVA es '+libro2.precioMasIva()+' pesos colombianos')
        carrito.push(libro2)
        libro2['vendido']=true               
        break;
      default:
        alert('No existe o no puedes comprar ese libro')
        break;
    }
   }
   console.log('Tienes en el carrito los siguientes libros: ')
   for(let z=0;z<carrito.length;z++){
    console.log(carrito[z])
    precioFinal+=carrito[z].precioMasIva()  
    }   
    console.log('El precio final de los libros mas el envio (5000) es de '+(precioFinal+envio)+' pesos colombianos')
  }else{
    alert('No hay tantos libros disponibles')
  }
}

function venderLibro(){  
  let nombre,autor,editorial,año,precio=0  
    nombre=prompt('Ingresa el nombre del libro ')
    autor=prompt('Ingresa el autor del libro ')
    editorial=prompt('Ingresa la editorial del libro ')
    año=parseInt(prompt('Ingresa el año de publicacion del libro '))
    precio=parseFloat(prompt('Ingresa el precio (sin IVA) del libro '))
    const libroN = new Libro( 3,nombre,autor,editorial, año, precio,false);
    libros.push(libroN)
  
  alert('¡Felicidades! Tu libro ha sido agregado exitosamente')
  imprimirLibros(libros)
}

function borrarLibro(){
  imprimirLibros(libros)
  let borrar =parseInt(prompt('Ingresa el id del libro que deseas borrar'))
  if(borrar>=1){
  for(const lib of libros){
    if(borrar===lib['id']){
      libros.splice(borrar-1,1)
    }
  }
  alert('¡Felicidades! El libro ha sido borrado exitosamente')
  imprimirLibros(libros)
}else{alert('Libro no existe')}
  
}


  let opcion = parseInt(prompt(
    "BIENVENIDO A BOOKEND \n\n" +
      "Escoge una opcion: \n" +
      "1. Comprar libro  \n" +
      "2. Vender libro  \n" +
      "3. Borrar libro  \n" +
      "4. Salir"
  ));

  switch (opcion) {
    case 1:      
      comprarLibro();
      break;
    case 2:
      venderLibro();
      break;
    case 3:
      borrarLibro();
      break;
    default:
      break;       
  }

