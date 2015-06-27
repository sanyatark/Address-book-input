var contactsLength = contacts.length;

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    for (var i = 0; i < contacts.length; i++) {
        printPerson(contacts[i]);
    }
}

function search(lastName) {
    for(var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    } 
}

function add(firstName, lastName, email, phoneNumber){
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName, 
        email: email, 
        phoneNumber: phoneNumber
    };
};

add("Kobe", "Bryant", "kb24@lakers.com", "88888888");
list();
