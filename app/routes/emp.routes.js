module.exports = (app) => {
  const emps = require("../controllers/emp.controllers.js");

  // Create a new Employee
  app.post("/emps", emps.create);
  app.get("/emps/:empID", emps.returnOne);
  app.get("/emps", emps.returnAll);
  app.put("/emps/:empID", emps.updates);
  app.delete("/emps/:empID", emps.deleted);
};
