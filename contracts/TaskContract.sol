// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract TaskContract{
 
   uint taskCounter = 0;

    constructor(){
      createTask("primer tarea", "descripcion tarea");
    }


   struct Task{
     uint256  id;
     string title;
     string description;
     bool done;
     uint256 createdAt;
  
   }
   
   mapping(uint256 => Task) public tasks;
   
   function createTask(string memory _title, string memory _description) public{
     tasks[taskCounter] = Task(taskCounter, _title, _description, false, block.timestamp);
     taskCounter++;
    }

    function toggleDone(uint _id) public {
     Task memory _task = tasks[_id];
     _task.done = !_task.done;
     tasks[_id] = _task;
    }
}
