//DESTRUCTURING OBJECTS IN ES6
//Destructuring is an ES6 expression that makes it
// possible to unpack values from arrays, or 
//properties from objects, into distinct variables.

// a user object
const user = {
    name : "Velda Kiara",
    username : "veldakiara",
    verified: true,
    social : {
      twitter: "veldakiara",
      github: "veldakarimi",
      site: "https://veldakarimi.wordpress.com."
      }
   }
//Normally, if you wanted to access and use any key value, below is what you'd do.
 // print - name, username, site
 console.log(`
   Name : ${user.name}
   Username : ${user.username}
   Twitter : ${user.social.twitter}
   Site: ${user.social.site}
 `) 
 //how to destructure the object.
 //Having curly bracket on the left of the equals sign is the new destructuring syntax.
 
 // get name and username first
 const {name, username} = user;
        
 // get the nested social object values on user object
 const {twitter, site} = user.social;

 // printing user after destructuring
 console.log(`
   Name : ${name}
   Username : ${username}
   Twitter : ${twitter}
   Site: ${site}
 `)