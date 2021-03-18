const tasks = [
    {
      "id": "1",
      "description": "Task Number 1",
      "responsible": {
        "name": "Guillermo",
        "email": "guillermo@gmail.com"
      },
      "status": "Lista",
      "dueDate": 1600931924221
    },
    {
      "id": "2",
      "description": "Task Number 2",
      "responsible": {
        "name": "Esteban",
        "email": "esteban@gmail.com"
      },
      "status": "A medias",
      "dueDate": 1609031924221
    }
];

function post(task){
  tasks.push({
    "id": tasks.length,
    "description": task.description,
    "responsible": {
      "name": task.responsible.name,
      "email": task.responsible.email     
    },
    "status": task.status,
    "dueDate": task.dueDate
  });
  return(tasks);
}

module.exports = async function (context, req) {
  context.log('Adding a task to the planner');
  const task = req.body;
  const responseMessage = post(task);
  context.res = {
      status: 201,
      body: responseMessage
  };
}