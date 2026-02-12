// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


const dblocation = central(5);

dblocation.then((db) => {
    console.log(`The user is in${db}`);
});

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try {
    if(typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  }
    catch (error) {
        console.error(error);
        return;
    }

  const dbName = await central(id);
  const [basicInfo, personalInfo] = await Promise.all([
    dbs[dbName](id),
    vault(id)
  ]);  
  
  return {
    id,
    name: personalInfo.name,
    username: basicInfo.username,
    email: personalInfo.email,
    address: personalInfo.address,
    phone: personalInfo.phone,
    website: basicInfo.website,
    company: basicInfo.company  

  };
  
}



