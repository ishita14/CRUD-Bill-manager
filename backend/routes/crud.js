const express = require('express');
let Bills = require('../bill.model');
const Routes = express.Router();



Routes.route('/').get( (req,res) => {
    Bills.find((err, bills) => {
        if(err)
            console.log(err);
        else {
            res.json(bills);
        }
    });
});

Routes.route('/:id').get((req,res) => {
    const id = req.params.id;
    Bills.findById(id, (err,bill) => {
        res.json(bill);
    });
});

Routes.route('/addBill').post((req,res) => {
    const bill = new Bills(req.body);
    bill.save()
        .then( bill => {
            res.status(200).json({'bill': 'bill added successfully'});
        })
        .catch( err => {
            console.log(err)
            res.status(400).send('adding new bill failed');
        });
});

Routes.route('/update/:id').post((req,res) => {
    Bills.findById(req.params.id, (err, bill) => {
        if(!bill)
            res.status(404).send('Data is not found');
        else {
            bill.Month = req.body.Month;
            bill.Consumption = req.body.Consumption;
            bill.Amount = req.body.Amount;
            bill.save().then( bill => {
                res.json('bill updated');
            })
            .catch( err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

Routes.route('/bill/:id').delete((req,res) => {
    Bills.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).send('bill deleted successfully ');
    }).catch(err => {
        console.log(err)
        res.status(400).send('Failed to delete bill');
    })
});


module.exports = Routes