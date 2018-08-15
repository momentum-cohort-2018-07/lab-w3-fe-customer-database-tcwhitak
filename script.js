console.log('Write your code here!')
console.log('customers and moment are available to you.')

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// create a class for objects that contains....
    // headshot image
    // first name, last name
    // email
    // address
    // DOB
    // customer since

class Customer {
    constructor(person) {
      this.headshot = person.picture.thumbnail
      this.name = toTitleCase(person.name.first) + " " + toTitleCase(person.name.last);
      this.email = person.email;
      this.address1 = toTitleCase(person.location.street);
      this.address2 = toTitleCase(person.location.city) +", "+toTitleCase(person.location.state)+" "+person.location.postcode
      this.dob = "DOB: "+moment(person.dob).format('MMM Do, YYYY');
      this.registration = "Customer since:" + moment(person.registered).format('MMM Do, YYYY');
    }
  
    getHeadshot(){
        return this.headshot
    } 
    getName() {
      return this.name
    }
    getEmail(){
        return this.email
    }
    getAddress1(){
        return this.address1
    }
    getAddress2(){
        return this.address2
    }
    getDob(){
        return this.dob
    }
    getRegistration(){
        return this.registration
    }
    makeDOM(){
        let customerBlock = document.createElement('div')
        customerBlock.classList.add("singleCustomer")
        customerBlock.innerHTML = 
        "<img src="+this.getHeadshot()+">"
        +"<div>"+this.getName()+"</div>"
        +"<div>"+this.getEmail()+"</div>"
        +"<div>"+this.getAddress1()+"</div>"
        +"<div>"+this.getAddress2()+"</div>"
        +"<div>"+this.getDob()+"</div>"
        +"<div>"+this.getRegistration()+"</div>"
        wrapper.appendChild(customerBlock)
    }
  }
  
let customerArray = []
for (let i = 0; i<customers.length; i++){
    customerArray.push(new Customer(customers[i]))
}

let header = document.createElement('h1')
header.innerText = "Customer Database"
let body = document.getElementsByTagName("body")
body[0].appendChild(header)
let wrapper = document.createElement('div')
body[0].appendChild(wrapper)
for(let i = 0; i<customerArray.length; i++){
   customerArray[i].makeDOM()
}

wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
