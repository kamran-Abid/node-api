let users = [];
export const getUsers = (req, res)=>{
    res.send(users);
}
export const addUser = (req, res)=>{
    const user = req.body;
    // users.push({...user, id: uuidv4()})
    let d = new Date();
    users.push({id: Date.now().toString(), ...user, dateTime: d})
    res.send(`User ${user.firstName} ${user.lastName} is added`);
    console.log("POST request is send");
} 
export const findUser = (req, res)=>{
    const {id} = req.params;
    const findUser = users.find(user => user.id === id );
    console.log();
    res.send((findUser === undefined) ? `id ${id} not found` : findUser );
    console.log((findUser === undefined) ? `id ${id} not found` : findUser);
}
export const updateUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find(user => user.id === id);
    
    if(firstName) user.firstName = firstName 
    if(lastName) user.lastName = lastName 
    if(age) user.age = age 

    res.send((user === undefined) ? `id ${id} not found` : user );
    console.log((user === undefined) ? `id ${id} not found` : user );
}
export let deleteUser = (req, res)=>{
    const {id} = req.params;
    users = users.filter(user => user.id !== id );
    res.send(`User of id ${id} is deleted.`);

}
