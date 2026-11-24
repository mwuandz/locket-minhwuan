/***********************************************
> deleteHeader by duyvinh09
***********************************************/	
const headers = $request.headers;
delete headers['If-None-Match'];
delete headers['if-none-match'];
delete headers['If-Modified-Since'];
delete headers['if-modified-since'];
delete headers['X-RevenueCat-ETag'];
delete headers['x-revenuecat-etag'];
$done({ headers });
