// package: covidstatus
// file: covid-status.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as covid_status_pb from "./covid-status_pb";

interface ICovidStatusService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCovidStatus: ICovidStatusService_IgetCovidStatus;
}

interface ICovidStatusService_IgetCovidStatus extends grpc.MethodDefinition<covid_status_pb.EmptyRequest, covid_status_pb.CovidStatusResponse> {
    path: "/covidstatus.CovidStatus/getCovidStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<covid_status_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<covid_status_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<covid_status_pb.CovidStatusResponse>;
    responseDeserialize: grpc.deserialize<covid_status_pb.CovidStatusResponse>;
}

export const CovidStatusService: ICovidStatusService;

export interface ICovidStatusServer {
    getCovidStatus: grpc.handleUnaryCall<covid_status_pb.EmptyRequest, covid_status_pb.CovidStatusResponse>;
}

export interface ICovidStatusClient {
    getCovidStatus(request: covid_status_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
    getCovidStatus(request: covid_status_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
    getCovidStatus(request: covid_status_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
}

export class CovidStatusClient extends grpc.Client implements ICovidStatusClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCovidStatus(request: covid_status_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
    public getCovidStatus(request: covid_status_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
    public getCovidStatus(request: covid_status_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: covid_status_pb.CovidStatusResponse) => void): grpc.ClientUnaryCall;
}
