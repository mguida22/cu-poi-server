# Handles adding new POI data to xml file

import xml.etree.ElementTree as ET

def indent(elem, level=0):
    i = "\n" + level*"  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for elem in elem:
            indent(elem, level+1)
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i


tree = ET.parse('data.xml')
root = tree.getroot()

#TODO add support for storing list of keys

run = True
while(run):
    poi = ET.SubElement(root, 'poi')

    #TODO add support to check key vs list of keys already entered

    poi.set('key', input('Enter key: '))

    name = ET.SubElement(poi, 'name')
    name.text = input('Enter name: ')

    latitude = ET.SubElement(poi, 'latitude')
    latitude.text = input('Enter lat: ')

    longitude = ET.SubElement(poi, 'longitude')
    longitude.text = input('Enter long: ')

    category = ET.SubElement(poi, 'category')
    category.text = input('Enter category: ')

    runAgain = input('Add another POI? (y/n): ')
    if (runAgain == 'n'):
        run = False

indent(root)
tree.write('data.xml')
