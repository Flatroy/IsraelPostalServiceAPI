import { Destinations, Destination } from '../../src/destinations';
import * as options from '../../src/options';
import { assert } from 'chai';

describe('Destinations', () => {
    let destination = new Destinations(options.ShipmentMethods.EMS);

    describe('Loading', () => {
        it('should load destination if provided in the constructor', () => {
            let result: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.EMS);

            assert.isTrue(result);
        });

        it('should load destination explicitly', () => {
            destination.loadDestinationMap("חבילה");
            let result: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.EMS);

            assert.isTrue(result);
        });

        it('should retrieve destination from loaded mappings', () => {
            let result: Destination = destination.getDestinationHe("Canada", options.ShipmentMethods.EMS);

            assert.exists(result);
            assert.equal(Object.keys(result).length, 2);
        });

        it('should retrieve all the keys from loaded mappings', () => {
            let result: Array<string> = destination.getAllDestination(options.ShipmentMethods.EMS);

            assert.exists(result);
            assert.isAbove(Object.keys(result).length, 200);
        });

        it('should verify destination loaded or load them if not', () => {
            let result1: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.ECONOMIC);
            let result2: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.ECONOMIC);

            assert.isFalse(result1);
            assert.isTrue(result2);
        });
    });
});

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}