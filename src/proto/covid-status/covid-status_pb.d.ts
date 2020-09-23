// package: covidstatus
// file: covid-status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}

export class CovidStatusResponse extends jspb.Message { 
    getCountry(): string;
    setCountry(value: string): CovidStatusResponse;

    getCountryCode(): string;
    setCountryCode(value: string): CovidStatusResponse;

    getSlug(): string;
    setSlug(value: string): CovidStatusResponse;

    getNewConfirmed(): number;
    setNewConfirmed(value: number): CovidStatusResponse;

    getTotalConfirmed(): number;
    setTotalConfirmed(value: number): CovidStatusResponse;

    getNewDeaths(): number;
    setNewDeaths(value: number): CovidStatusResponse;

    getTotalDeaths(): number;
    setTotalDeaths(value: number): CovidStatusResponse;

    getNewRecovered(): number;
    setNewRecovered(value: number): CovidStatusResponse;

    getTotalRecovered(): number;
    setTotalRecovered(value: number): CovidStatusResponse;

    getDate(): string;
    setDate(value: string): CovidStatusResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CovidStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CovidStatusResponse): CovidStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CovidStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CovidStatusResponse;
    static deserializeBinaryFromReader(message: CovidStatusResponse, reader: jspb.BinaryReader): CovidStatusResponse;
}

export namespace CovidStatusResponse {
    export type AsObject = {
        country: string,
        countryCode: string,
        slug: string,
        newConfirmed: number,
        totalConfirmed: number,
        newDeaths: number,
        totalDeaths: number,
        newRecovered: number,
        totalRecovered: number,
        date: string,
    }
}
