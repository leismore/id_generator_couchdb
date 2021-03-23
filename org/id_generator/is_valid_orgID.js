/**
 * CouchDB Map function: is_valid_orgID
 */

function(doc)
{
    if (doc.orgID !== undefined && doc.active === true)
    {
        emit(doc.orgID, true);
    }
}