var normalize = require('./utils/normalize');

// Load up poiList here
var poiList = [];

// computes normal distance formula
function _distance(p1Lat, p1Long, p2Lat, p2Long) {
  return Math.sqrt((p1Lat - p2Lat)^2 + (p1Long - p2Long)^2);
}

// get radians from degrees
function _rad(x) {
	return x * Math.PI / 180;
}

// Compute distance between two points using the Haversine
// formula and Earth's mean radius
function _haversineDistance(p1Lat, p1Long, p2Lat, p2Long) {
	var R = 6378137; // Earth’s mean radius in meters
	var dLat = _rad(p2Lat - p1Lat);
	var dLong = _rad(p2Long - p1Long);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +	Math.cos(_rad(p1Lat)) *
    Math.cos(_rad(p2Lat)) *	Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d;
}

module.exports = {
  getClosestPOI: function(lat, lng) {
    var closestPOI, distance;
    var closestDist = Number.POSITIVE_INFINITY;

    poiList.forEach(function(poi) {
      distance = _distance(poi.lat, poi.long, lat, lng);
      if (distance < closestDist) {
        closestDist = distance;
        closestPOI = poi;
      }
    });

  	return closestPOI;
  },

  getPOIofType: function(poiType) {
    var typeList = [];

    poiList.forEach(function(poi) {
      if (poi.type === poiType) {
        typeList.push(poi);
      }
    });

    return typeList;
  },

  getPOIinRange: function(lat, lng, range) {
    var rangeList = [];
    var distance;

    poiList.forEach(function(poi) {
      distance = _haversineDistance(poi.lat, poi.long, lat, lng);
      if (distance <= range) {
        rangeList.push(poi);
      }
    });

    return rangeList;
  },

  searchForPOI: function(search, poiList) {
    var searchList = [];

    poiList.forEach(function(poi) {
      if (normalize(poi.name).indexOf(search.toLowerCase()) > -1) {
        searchList.push(poi);
      } else if (normalize(poi.key).indexOf(search.toLowerCase()) > -1) {
        searchList.push(poi);
      }
    });

    return searchList;
  }
};
