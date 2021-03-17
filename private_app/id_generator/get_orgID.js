/**
 * CouchDB Map Function: get_orgID
 */

function(doc)
{
  if (doc.appID !== undefined && doc.orgID !== undefined)
  {
    emit(doc.appID, doc.orgID);
  }
}