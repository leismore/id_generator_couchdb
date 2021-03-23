/**
 * CouchDB Map Function: userID_to_couchdbID
 */

function(doc)
{
  if (doc.userID !== undefined)
  {
    emit(doc.userID, doc._id);
  }
}
