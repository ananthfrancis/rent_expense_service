const mongoose = require('mongoose');

//Creation of Schema for the Expense
const expenseSchema = mongoose.Schema({
    expenseName: {
        type: String,
        required: true
    },
    expenseDescription: {
        type: String
    },
    defaultExpense: {
        type: Boolean,
        required: true
    },
    spentBy: {
        type: String,
        required: true
    },
    spentTo: {
        type: Array,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    perHead: {
        type: String
    },
    createdDate: {
        type: Date,
        default: new Date(Date.now()).toISOString()
    }
});

//Creation of Collection for Expense
const Expense = mongoose.model('Expense', expenseSchema, 'Expense');

exports.expenseSchema = expenseSchema;
exports.Expense = Expense;