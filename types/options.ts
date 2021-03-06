// Copyright 2019 Benny Megidish

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export declare interface OptionsType {
    LocalMailOptions: LocalMailOptionsType;
    LocalBulkMailOptions: LocalBulkMailOptionsType;
    AbroadMailOptions: AbroadMailOptionsType;
    AbroadBulkMailOptions: AbroadBulkMailOptionsType;
    ShipmentMethods: any;
}

export declare type LocalMailOptionsType = {
    LETTER: Option;
    POSTCARD: Option;
    PARCEL: Option;
    LEAFLETS: Option;
}

export declare type LocalBulkMailOptionsType = {
    LETTER: Option;
    PARCEL: Option;
    RESPONSE: Option;
}

export declare type AbroadMailOptionsType = {
    LETTER: Option;
    POSTCARD: Option;
    SMALL: Option;
    PRINTED: Option;
    PARCEL: Option;
    EMS: Option;
    NEWSLETTER: Option;
    ECO: Option;
}

export declare type AbroadBulkMailOptionsType = {
    PARCEL: Option;
}

declare type Option = {
    shipmentType: string,
    shipmentSubtypes: ShipmentSubtypes                  // FIXME: find more tailored solution as per #13
}

declare type TShipmentSubtypes = {
    [key: string]: ShipmentSubtype
}

declare type ShipmentSubtypes = {
    regular?: ShipmentSubtype,
    signed?: ShipmentSubtype,
    overnight?: ShipmentSubtype,
    signedOvernight?: ShipmentSubtype,
    military?: ShipmentSubtype,
    overTheSea?: ShipmentSubtype,
    express?: ShipmentSubtype,
    eco?: ShipmentSubtype,
    combinedDirect?: ShipmentSubtype
}

declare type ShipmentSubtype = {
    name: string,
    options?: ShipmentSubtypeOption                     // FIXME: find more tailored solution as per #13
}

declare type TShipmentSubtypeOption = {
    [key: string]: string
}

declare type ShipmentSubtypeOption = {
    regular?: string,
    signed?: string,
    withDeliveryVerification?: string, 
    withDeliveryAndScanVerification?: string, 
    toDispatchCenter?: string, 
    byHand?: string,
    sorted?: string, 
    sortedToDispatchCenter?: string, 
    unsortedZipped?: string, 
    unsortedZippedToDispatchCenter?: string,
    withoutBarcode?: string, 
    withBarcodeAndRecipient?: string, 
    directCheck?: string, 
    directCheckDiscounted?: string, 
    signedDirectCheck?: string,
    withFile?: string, 
    withoutFile?: string	
}
