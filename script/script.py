import json
simpledata = [
    {
        "relation": "0---27",
        "positive": 4,
        "negative": -1,
        "score": 10,
        "baseTitle": "Northern area of Loch Long: 1/128",
        "checkTitle": "Northern area of Loch Long: 1/128Northern area of Loch Long: 1/128",
        "number": 1,
        "issuesLists": "Check same scale.Same year/s found.",
        "detectedPart": "1/128 2015"
    }
]
data = json.load(open('/data/sample.json', 'r'))
length = len(data)
data = json.dumps(data+data, indent = 4)
with open ('/data/sample.json', 'w') as file:
    if length > 10:
        file.write(json.dumps(simpledata, indent = 4))
    else:        
        file.write(data)
    file.close()

print('DONE!!') 