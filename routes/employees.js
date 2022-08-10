const express = require('express');
const employee = require('../models/employee');
const router = express.Router();
const Employee = require('../models/employee')


// getting all
// getting one

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.get('/:id', getEmployee, (req, res) => {
    res.json(res.employee)
    
})

router.post('/', async (req, res) => {
    const employee = new Employee ({
        name: req.body.name,
        lastName: req.body.lastName
    })
    try {
        const newEmployee = await employee.save()
        res.status(201).json(newEmployee)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

router.patch('/', getEmployee, (req, res) => {

})

router.delete('/:id', getEmployee, (req, res) => {

})

async function getEmployee(req, res, next) {
    let employee
    try {
        employee = await Employee.findById(req.params.id)
        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find employee'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})

    }

res.employee = employee;
next()
}

module.exports = router;