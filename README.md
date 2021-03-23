# id_generator_couchdb v3.1.0

The CouchDB configuration for the ID Generator application.

## Prerequisites

* CouchDB 3.1.1

## Deployment

1. Create a CouchDB user for the ID Generator application
2. Create the following databases (non-partition):
  - `<your_prefix_>myorg`
  - `<your_prefix_>org`
  - `<your_prefix_>private_app`
  - `<your_prefix_>user`
  - `<your_prefix_>user_authentication`
3. Grant proper permissions to the CouchDB user

For the database `<your_prefix_>myorg`,

1. Create a new design document named `id_generator`
2. Add the map function `orgID_to_couchdbID`
3. Add the update function `get_numeric_id`

For the database `<your_prefix_>org`,

1. Create a new design document named `id_generator`
2. Add the map functions:
  - `is_valid_orgID`
  - `orgID_to_couchdbID`
3. Add the update functions:
  - `get_numeric_id`

For the database `<your_prefix_>private_app`,

1. Create a new design document named `id_generator`
2. Add the map function `get_orgID`

For the database `<your_prefix_>user`,

1. Create a new design document named `id_generator`
2. Add the map functions:
  - `userID_to_couchdbID`
3. Add the update functions:
  - `get_numeric_id`

For the database `<your_prefix_>user_authentication`,

1. Create a new design document named `id_generator`
2. Add the map functions:
  - `is_valid_userID`

## Dependencies

- LMOS CouchDB v2.0.0

## License

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author at Dec 02, 2019)
