import { Destinations } from './src/destinations';
import * as utils from './src/service-utils';
import { OptionsType } from './@types/src/options';
export const Options: OptionsType = require('./src/options');

/**
 * Exposes Israel postal service API
 * @author Benny Megidish
 */
export class IPS {
    destinations: Destinations;

    constructor() {
        this.destinations = new Destinations();
    }

    //todo: typing
    /**
     * calculate shipping rate for regular (non bulk) shipments
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let isLocal = destination.toLowerCase() === 'israel';

        return isLocal ? 
            this.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) :
            this.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity);
    }
  
    /**
     * calculate shipping rate for bulk shipments
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let isLocal = destination.toLowerCase() === 'israel';

        return isLocal ? 
            this.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) :
            this.calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity);
    }
    
    /**
     * calculate shipping rate for abroad shipments
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateShippingRate} instead
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר לחו\"ל";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate shipping rate for local shipments (in Israel)
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateShippingRate} instead
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = { id: "0", name: ""};
        let type = "משלוח דואר בארץ";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate bulk shipping rate for abroad bulk shipments
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate bulk shipping rate for local bulk shipments (in Israel)
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = { id: "0", name: ""};
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType): Array<string> {
        return this.destinations.getAllDestination(shipmentType);
    }
}
