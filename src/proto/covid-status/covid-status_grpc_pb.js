// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var covid$status_pb = require('./covid-status_pb.js');

function serialize_covidstatus_CovidStatusResponse(arg) {
  if (!(arg instanceof covid$status_pb.CovidStatusResponse)) {
    throw new Error('Expected argument of type covidstatus.CovidStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_covidstatus_CovidStatusResponse(buffer_arg) {
  return covid$status_pb.CovidStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_covidstatus_EmptyRequest(arg) {
  if (!(arg instanceof covid$status_pb.EmptyRequest)) {
    throw new Error('Expected argument of type covidstatus.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_covidstatus_EmptyRequest(buffer_arg) {
  return covid$status_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CovidStatusService = exports.CovidStatusService = {
  getCovidStatus: {
    path: '/covidstatus.CovidStatus/getCovidStatus',
    requestStream: false,
    responseStream: false,
    requestType: covid$status_pb.EmptyRequest,
    responseType: covid$status_pb.CovidStatusResponse,
    requestSerialize: serialize_covidstatus_EmptyRequest,
    requestDeserialize: deserialize_covidstatus_EmptyRequest,
    responseSerialize: serialize_covidstatus_CovidStatusResponse,
    responseDeserialize: deserialize_covidstatus_CovidStatusResponse,
  },
};

exports.CovidStatusClient = grpc.makeGenericClientConstructor(CovidStatusService);
