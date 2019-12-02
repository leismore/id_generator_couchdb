/**
 * CouchDB Update Function: get_numeric_id
 */

function(doc, req)
{

  if (!doc)
  {
    return [null, {code:404}];
  }
  else
  {
    if (typeof doc.lastSeqID !== 'number')
    {
      return [null, { code:500, json:{status: 'invalid_lastSeqID'} }];
    }
    else if (doc.active === true)
    {
      doc.lastSeqID++;
      return [doc,  { code:201, json:{status: String(doc.lastSeqID)} }];
    }
    else
    {
      return [null, {code:404}];
    }
  }

}
