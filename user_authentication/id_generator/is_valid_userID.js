/**
 * CouchDB Map function: is_valid_userID
 */

function(doc)
{
    if (doc.userID !== undefined && doc.active === true)
    {
        emit(doc.userID, true);
    }
}