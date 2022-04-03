const TasksContract = artifacts.require("TasksContract")

  contract("TaskContract", () => {

  before(async () =>{
    this.tasksContract = await TasksContract.deployed();
  });
    
  it("migrate deployed successfully", async () => {
    const address = await this.tasksContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("get Tasks List", async () => {
    const tasksCounter = await this.tasksContract.tasksCounter();
    const task = await this.tasksContract.tasks(tasksCounter);

    assert.equal(task.id.toNumber(), tasksCounter.toNumber());
    assert.equal(task.title, "my first task");
    assert.equal(task.description, "my first description");
    assert.equal(task.done, false);
    assert.equal(tasksCounter, 1);
  });

})
