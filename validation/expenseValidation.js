const express = require('express');
const Joi = require('@hapi/joi');


//Validation for Creation of Expense
async function validateCreate(body) {
    const joischema = Joi.object({
        expenseName: Joi.string().min(1).max(50).required(),
        expenseDescription: Joi.string().min(1).max(50),
        defaultExpense: Joi.boolean().required(),
        spentBy: Joi.string().min(1).max(50).required(),
        spentTo: Joi.array().required(),
        amount: Joi.string().required(),
        perHead: Joi.string()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

//Validation for Updation of Expense
async function validateUpdate(body){
    const joischema = Joi.object({
        _id: Joi.string().required(),
        expenseName: Joi.string().min(1).max(50).required(),
        expenseDescription: Joi.string().min(1).max(50),
        defaultExpense: Joi.boolean().required(),
        spentBy: Joi.string().min(1).max(50).required(),
        spentTo: Joi.array().required(),
        amount: Joi.string().required(),
        perHead: Joi.string()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

async function validateDelete(body){
    const joischema = Joi.object({
        id: Joi.string().required()
    });
    const joivalidate = joischema.validate(body);
    return joivalidate;
}

module.exports = { validateCreate,validateUpdate,validateDelete }
