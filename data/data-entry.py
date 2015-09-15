import json

# class to store related info for each poi
class Poi:
    def __init__(self, key):
        self.key = key
        self.name = None
        self.lat = None
        self.long = None
        self.category = None

    # check if POI is completely filled out
    def is_complete(self):
        if (self.name != None and self.lat != None and self.long != None and self.category != None):
            return True
        else:
            return False

    # build json from POI
    def to_json(self):
        json_str = {
          "key":      self.key,
          "name":     self.name,
          "lat":      self.lat,
          "long":     self.long,
          "category": self.category
        }

        return json_str

# check data for duplicate key
def not_duplicate(data, key):
    for item in data:
        if (item["key"] == key):
            return False
    return True


# read in all existing data so we can check for duplicates
with open('data.json', 'r') as f:
    data = json.load(f)

# take in data and check for duplicates
run = True
while (run):
    key = input('Enter key: ')

    if (not_duplicate(data, key)):
        poi = Poi(key)

        poi.name = input('Enter name: ')
        poi.lat = input('Enter lat: ')
        poi.long = input('Enter long: ')
        poi.category = input('Enter category: ')

        if (poi.is_complete()):
            data.append(poi.to_json())
        else:
          print('Cannot add incomplete POI')

    else:
        print('Duplicate key. ' + key + ' already exists')

    runAgain = input('Add another POI? (y/n): ')
    if (runAgain == 'n'):
        run = False

# save data back to file
with open('data.json', 'w') as f:
    f.write(json.dumps(data, indent = 2))

print()
print('Data saved.')
