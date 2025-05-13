(()=>{
const edad=[35,50,40,18,30];
const nombres = ['Hugo','Paco','Luis','Pedro','Hector'];

const nombresCompletos:string[] = nombres.map((nombre, index) => {
  return `${nombre} ${edad[index]}`;
});

const min= edad.indexOf(Math.min(...edad));
const max= edad.indexOf(Math.max(...edad));

console.log('El menor es:',nombresCompletos[min], 'años'); 
console.log('El mayor es:',nombresCompletos[max], 'años'); 


})()
