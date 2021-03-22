const fetch = require('node-fetch')
const addresses = require('./DATA/addresses.json').addresses
const names = require('./DATA/names.json')
const User_Agents = require('./DATA/User-Agents.json')
const creditcards = require('./DATA/creditcards.json')
const jobs = require('./DATA/jobs.json').occupations
var ssns = require('./DATA/ssn.json').SSNS
var PhoneNumbers = require('./DATA/PhoneNumbers.json').phn
    // Name & Lastname
const express = require("express")
const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    generateProfile(res)
})

function MakeAge() {
    let length = 2;
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makeid() {
    let length = 2;
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateProfile(res) {
    var namePic = names[Math.floor(Math.random() * names.length)];
    var name = namePic.split('_')[0]
    var lastName = namePic.split('_')[1]

    // Address stuff
    var addressToSplit = addresses[Math.floor(Math.random() * addresses.length)];
    var address = addressToSplit.address1
    var city = addressToSplit.city
    var state = addressToSplit.state
    var postal = addressToSplit.postalCode
    var lat = addressToSplit.coordinates.lat
    var lng = addressToSplit.coordinates.lng

    // User Agents
    var userAgent = User_Agents[Math.floor(Math.random() * User_Agents.length)].ua

    // Jobs
    var Job = jobs[Math.floor(Math.random() * jobs.length)]

    // SSN 
    var SSN = ssns[Math.floor(Math.random() * ssns.length)]

    // Age
    var age = MakeAge()

    // Credit Card

    var CreditCard = creditcards[Math.floor(Math.random() * creditcards.length)].CreditCard.CardNumber

    // Phone Numbers

    var Phone = PhoneNumbers[Math.floor(Math.random() * PhoneNumbers.length)]

    // Email

    var email = `${name}.${lastName}19${age}@gmail.com`

    res.send(JSON.stringify({
        'personal': { "name": name, "lastname": lastName, 'age': age, 'ssn': SSN },
        'address': { 'address': address, "city": city, "state": state, "postal": postal, "Coordinates": { "lat": lat, "lng": lng } },
        'other': { 'email': email, 'phone': Phone, 'creditcard': { 'issuer': "Mastercard", 'number': CreditCard }, 'job': Job, 'UserAgent': userAgent }
    }))
}