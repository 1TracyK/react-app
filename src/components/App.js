import React from "react";
import "./App.css";
import Header from "./header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

console.log('JavaScript is running');

function App() {

    const contacts = [
        {
            id:"1",
            name:"Tracy",
            email: "ladyjettt@gmail.com",
        },
        {
            id:"2",
            name:"James",
            email: "luxxbundles@gmail.com",
        },
    ];
    return( 
       <div className ="ui container">
            <Header />
            <AddContact />
            <ContactList contacts={contacts}/>
     </div>                      
    );
}
export default App;
