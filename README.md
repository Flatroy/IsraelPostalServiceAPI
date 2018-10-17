# IsraelPostalServiceAPI
An API for Israel postal service

***Note:*** this package is still under constuction.
if you wish to help, please look at the next milestone at the github repository and submite a pull request.

[![licence](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)
[![size](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI)
[![npm version](https://img.shields.io/npm/v/:package.svg)](https://www.npmjs.com/package/israel-postal-service-api)
[![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI)


## Instalation
```bash
npm install --save israel-postal-service-api
```
## Usage

### Import library:
```javascript
const Options = require('israel-postal-service-api').Options;
const IPS = require('israel-postal-service-api').IPS;
```

### Define Package Characteristics:
```javascript
// define package characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.LETTER.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.LETTER.shipmentSubtypes.regular;
let option = serviceSubtype.options.signed;
let ips = new IPS();
```

### Calculate Shipping Rate:
#### _Option 1: with promises_
```javascript
// calculate package shipping rate asynchronously
ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option).then((response) => {
    console.log(response.getTotalPrice());
}).catch((error) => {
    console.error('Error:', error);
});
```

#### _Option 2: with async await_
```javascript
// calculate package shipping rate asynchronously
calc = async () => {
    try {
        const response = await ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option);
        console.log(response.getTotalPrice());
    } catch (error) {
        console.error('Error:', error);
    }
}

calc();
```


## Documentation ##  
- 👨🏼‍💻 [API](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/API.md),  
- 👩🏼‍🏫 [Examples](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/examples),  
- 📜 [Change log](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/CHANGELOG.md),  
- 🖋 [Licence](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)

## Support ##
If you're having any problem, please [raise an issue](https://github.com/bennymeg/IsraelPostalServiceAPI/issues/new) on GitHub and we'll be happy to help.


## Contribute ##
- 👾 [Issue Tracker](https://github.com/bennymeg/IsraelPostalServiceAPI/issues),
- 📦 [Source Code](https://github.com/bennymeg/IsraelPostalServiceAPI/)

Before submitting a PR, please make sure that you include tests, and that [jshint](http://jshint.com) runs without any warnings

## Test ## 
Run the test suite by executing:

```sh
$ npm test
```


___
> ***Note***:
> This API was create as an open source service for makers and entrepreneurs.
> _This is not an official API for Israel Post service_.

**Author:** Benny Megidish.