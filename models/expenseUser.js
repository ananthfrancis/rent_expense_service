const mongoose = require('mongoose');

//Creation of Schema for the Expense
const expenseSchema = mongoose.Schema({
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
    perHead: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

//Creation of Collection for Expense
const Expense = mongoose.model('Expense', expenseSchema);

exports.expenseSchema = expenseSchema;
exports.Expense = Expense;