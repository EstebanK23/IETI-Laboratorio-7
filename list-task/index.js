var tasks = [
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

module.exports = async function (context) {
    context.log('Getting all tasks to the planner');
  
    const responseMessage = tasks;
  
    context.res = {
        status: 200,
        body: responseMessage
    };
  }