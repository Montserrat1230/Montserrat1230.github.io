let hellos_container_element, hellos_element;
let hellos, temp_hellos_random_index, hellos_random_index;

function setup() 
{
  noCanvas();
  
  temp_hellos_random_index = 0;
  hellos_random_index = 0;
  
  hellos = [];
  hellos[0] = "Welcome to my portfolio ";
  hellos[1] = "I'm Montserrat Molina Dalgo ";
  hellos[2] = "Bienvenido a mi portafolio";
  hellos[3] = "Soy Montserrat Molina Dalgo ";
  
  hellos_container_element = select("#hellos_container");
}

function draw() 
{
  if (select("#hellos") != null) 
  {
    select("#hellos").remove();
  }
  else 
  {
    frameRate(0.5);
  }

  hellos_element = createP(hellos[hellos_random_index]);
  hellos_element.id("hellos");
  hellos_element.parent(hellos_container_element);

  hellos_random_index = (hellos_random_index + 1) % hellos.length;
}
