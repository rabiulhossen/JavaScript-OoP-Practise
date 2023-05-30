class Train{
     constructor(color,lightsOn){
//  todo: The constructor will be used to build properties on the future object instance of the Train class.

this.color = color;
this.lightsOn = lightsOn;

//  * this keyword represents the It's the future object instance of the Train class.
// 
     }

     togglesLight(){
          this.lightsOn = !this.lightsOn;
     }
     lightsOptions(){
          this.lightsOn;
     }
//   ! In class also add any methods 

}

class AcBogie extends Train {
     constructor(passengers,acBogie, color, lightsOn){
          super(color,lightsOn)
          this.passengers = passengers;
          this.acBogie =acBogie;


          //  * In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
     }

     //  !   the AcBogie class becomes the sub-class of the Train class, because it inherits from it.To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as up.



}
const firstTrain= new Train("red","on")
const secondTrain= new Train("blue","off")

console.log(firstTrain)
const acBogie= new AcBogie(500, "ac", "purple", "on")

console.log(acBogie)



