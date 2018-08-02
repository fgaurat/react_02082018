const todosData = {"todos":[
    {
      "id": 1,
      "title": "first todo",
      "description": "pick up milk",
      "complete": true,
      "canceled": true,
      "date": 1389878466730
    },
    {
      "id": 2,
      "title": "second todo",
      "description": "learn react",
      "complete": false,
      "canceled": false,
      "date": 1389988926901 
    },
    {
      "id": 3,
      "title": "third todo",
      "description": "go for a run",
      "complete": false,
      "canceled": false,
      "date": 1389992494240  
    }
  ]
  }

const todosReducer = (state=todosData, action:any) =>{

    switch(action){
        case "":
            return state;

        default:
            return state;
    }
}


export default todosReducer;