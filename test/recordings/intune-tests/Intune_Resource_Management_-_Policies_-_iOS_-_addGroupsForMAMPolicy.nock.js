// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/iosPolicies/3a88ecd3-9c49-493e-89ad-71fc805accac/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '120',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'ab792362-5ac5-457f-970f-6827c4750841',
  'unique-request-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'x-ms-request-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'related-activity-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1186',
  'x-ms-correlation-request-id': '5bb2271c-a32a-4835-8dc6-edceacabed5c',
  'x-ms-routing-request-id': 'WESTUS:20151124T035152Z:5bb2271c-a32a-4835-8dc6-edceacabed5c',
  date: 'Tue, 24 Nov 2015 03:51:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/iosPolicies/3a88ecd3-9c49-493e-89ad-71fc805accac/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '120',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'ab792362-5ac5-457f-970f-6827c4750841',
  'unique-request-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'x-ms-request-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'related-activity-id': '7bb40959-d6b1-41dc-91df-65c1e6454f60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1186',
  'x-ms-correlation-request-id': '5bb2271c-a32a-4835-8dc6-edceacabed5c',
  'x-ms-routing-request-id': 'WESTUS:20151124T035152Z:5bb2271c-a32a-4835-8dc6-edceacabed5c',
  date: 'Tue, 24 Nov 2015 03:51:51 GMT',
  connection: 'close' });
 return result; }]];