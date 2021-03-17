/**
 * CouchDB Map Function: orgID_to_couchdbID
 */

function(doc)
{
  if (doc.orgID !== undefined)
  {
    emit(doc.orgID, doc._id);
  }
}
