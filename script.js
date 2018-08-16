console.log('Write your code here!')
console.log('customers and moment are available to you.')

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function stateToAbbrev (state){
    let statesObject = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'American Samoa': 'AS',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'District Of Columbia': 'DC',
        'Federated States Of Micronesia': 'FM',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Guam': 'GU',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Marshall Islands': 'MH',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Northern Mariana Islands': 'MP',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Palau': 'PW',
        'Pennsylvania': 'PA',
        'Puerto Rico': 'PR',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virgin Islands': 'VI',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
      }
      return statesObject[state]
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
      this.headshot = person.picture.large
      this.name = toTitleCase(person.name.first) + " " + toTitleCase(person.name.last);
      this.email = person.email;
      this.address1 = toTitleCase(person.location.street);
      this.address2 = toTitleCase(person.location.city) +", "+stateToAbbrev(toTitleCase(person.location.state))+" "+person.location.postcode
      this.dob = "DOB: "+moment(person.dob).format('MMM D, YYYY');
      this.registration = "Customer since: " + moment(person.registered).format('MMM D, YYYY');
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
    getReg(){
        return this.registration
    }
    makeDOM(){
        let customerBlock = document.createElement('div')
        customerBlock.classList.add("singleCustomer")
       
        let pic = document.createElement('img')
        pic.src = this.getHeadshot()
        pic.classList.add("customerInfo","customerPhoto")
        customerBlock.appendChild(pic)
       
        let name = document.createElement('h3')
        name.innerText = this.getName()
        name.classList.add("customerInfo","customerName")
        customerBlock.appendChild(name)
       
        let email = document.createElement('div')
        email.innerText = this.getEmail()
        email.classList.add("customerInfo","customerEmail")
        customerBlock.appendChild(email)

        let address1 = document.createElement('div')
        address1.innerHTML = this.getAddress1()
        address1.classList.add("customerInfo","customerAddress")
        customerBlock.appendChild(address1)

        let address2 = document.createElement('div')
        address2.innerHTML = this.getAddress2()
        address2.classList.add("customerInfo","customerAddress")
        customerBlock.appendChild(address2)

        let dob = document.createElement('div')
        dob.innerHTML = this.getDob()
        dob.classList.add("customerInfo","customerDob")
        customerBlock.appendChild(dob)

        let reg = document.createElement('div')
        reg.innerHTML = this.getReg()
        reg.classList.add("customerInfo","customerReg")
        customerBlock.appendChild(reg)
        
        wrapper.appendChild(customerBlock)
    }
  }
  
let customerArray = []
for (let i = 0; i<customers.length; i++){
    customerArray.push(new Customer(customers[i]))
}

let header = document.createElement('h1')
header.classList.add = "pageHeader"
header.innerText = "Customer Database"
let body = document.getElementsByTagName("body")
body[0].appendChild(header)
let wrapper = document.createElement('div')
wrapper.classList.add("container")
body[0].appendChild(wrapper)
for(let i = 0; i<customerArray.length; i++){
   customerArray[i].makeDOM()
}
