# cu-poi-server ![travis build status](https://travis-ci.org/mguida22/cu-poi-server.svg?branch=develop)
Node server for the cu-poi API

### TODO

 - [x] Move all helper functions from [cu-poi](https://github.com/mguida22/cu-poi) and determine api-endpoints
 - [x] Setup and write tests for all functions
 - [x] Convert existing data from XML to JSON (including data-entry script)
 - [ ] Finish adding data for the rest of CU Campus
 - [x] Endpoint for all POIs
 - [ ] Setup hosting (AWS?)
 - [ ] Improved searching (current search is really bad.. :grimacing:)
 - [ ] Move data into a database and update data-entry script to add to database

### Usage

```sh
# Initial Setup
$ npm install

# Running Locally
$ npm start

# Running Tests
$ npm test
```

Once the server is running locally you can make requests using `localhost:3000`

#### API

Closest POI:
```
localhost:3000/api/poi/closest?lat=40.0055147&long=-105.2637899
```

All POI of given type:
```
localhost:3000/api/poi/type?type=Academic
```

All POI in range (meters):
```
localhost:3000/api/poi/range?lat=40.0055147&long=-105.2637899&range=100
```

Search for POI using query:
```
localhost:3000/api/poi/search?q=bk
```

All Data:
(**this can get large**)
```
localhost:3000/api/poi/all
```

### Adding Data

Use the `data-entry` script to ensure that the data is entered properly.

```shell
$ cd Data
$ python3 data-entry.py
```
