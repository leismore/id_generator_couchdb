# id_generator_couchdb

CouchDB configuration for the project id_generator.

## Prerequisites

* CouchDB 2.3.1

## Deployment

1. Create databases: `<your_prefix_>myorg`
2. Create CouchDB user for the application `id_generator` and grant it with the proper permissions.
3. Create the new design documents called `id_generator` on the database.
4. Add map function `orgID_to_couchdbID` on the database.
5. Add update function `get_numeric_id` on the database.

## Dependencies

- id_generator v1.0.0

## License

MIT

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author at Dec 02, 2019)
