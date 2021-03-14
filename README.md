# id_generator_couchdb v2.0.0

CouchDB configuration for the project id_generator.

## Prerequisites

* CouchDB 3.1.1

## Deployment

1. Create databases: `<your_prefix_>myorg`
2. Create CouchDB user for the application `id_generator` and grant it with the proper permissions.
3. Create the new design documents called `id_generator` on the database.
4. Add map function `orgID_to_couchdbID` on the database.
5. Add update function `get_numeric_id` on the database.

## Dependencies

- lmos_db      v1.0.0
- id_generator v2.0.0

## License

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author at Dec 02, 2019)
