const Employee = require("../model/emp.model.js");

// create 
const create = (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    phone: req.body.phone,
    position: req.body.position,
    nepali: req.body.nepali || false,
  });
  // Save Employee in the database
  employee.save()
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "encoured un stable error while creating an employee",
      });
    });
};

// Update 
const updates = (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.empID,
    {
      name: req.body.name,
      phone: req.body.phone,
      position: req.body.position,
      nepali: req.body.nepali || false,
    },
    { new: true }
  ).then((employee) => {
    if (!employee) {
      return res.status(404).send({
        message: `Employee ID not found ${req.params.empID}`,
      });
    }
    res.send(employee);
  });
};

// find single 
const returnOne = (req, res) => {
  Employee.findById(req.params.empID).then((employee) => {
    if (!employee) {
      return res.status(404).send({
        message: `Employee ID not found ${req.params.empID}`,
      });
    }
    res.send(employee);
  });
};

// display list of all employees
const returnAll = (req, res) => {
  Employee.find()
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    });
};

// Delete 
const deleted = (req, res) => {
  Employee.findByIdAndRemove(req.params.empID).then((employee) => {
    if (!employee) {
      return res.status(404).send({
        message: `Employee ID not found ${req.params.empID}`,
      });
    }
    res.send({ message: `Employee deleted ${req.params.empID}` });
  });
};



module.exports = {
  create,
  returnOne,
  returnAll,
  updates,
  deleted,
};
