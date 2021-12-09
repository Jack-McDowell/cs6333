"""
Authors: Yining Lui (yl7sr) and Jack McDowell (jnm3ecm)
"""
import requests
import sys

from src.ApiMap import categoryToApi

params = {'platform': 'web', 'fields': 'privacyDetails', 'l': 'en-us'}
headers = {
    # Note that this bearer token may need to be updated
    'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlU4UlRZVjVaRFMifQ.eyJpc3MiOiI3TktaMlZQNDhaIiwiaWF0IjoxNjM1Mzc4OTM3LCJleHAiOjE2NDI2MzY1Mzd9.2HA440K3clojCikoP7GETLI0Q07weQUbx_AFRw2VaXGaZHq7vWoTpnai_0lG_BNVVllkgLPqocA8hbqf45RKLQ'
}


# retrieve privacyDetails from web api
# input: app_id, output: json data
def get_data(app_id):
    r = requests.get('https://amp-api.apps.apple.com/v1/catalog/US/apps/{app_id}?'.format(app_id=app_id), params=params, headers=headers)
    return r.json()


# input: json data
# output: list of categories, eg.['Contact Info', 'Health & Fitness']
# get allowed categories declared in nutrition labels
def get_categories(data):
    data_categories = set()
    for privacy_type in data['data'][0]['attributes']['privacyDetails']['privacyTypes']:
        for category in privacy_type['dataCategories']:
            data_categories.add(category['dataCategory'])
        for purpose in privacy_type['purposes']:
            for category in purpose['dataCategories']:
                data_categories.add(category['dataCategory'])
    # data_categories.remove('Contact Info') # test code to mock a non-empty black list
    return data_categories


# input: app_id
# output: list of {'class name', ['not allowed api name']}
def get_blacklist_apis(app_id):
    data = get_data(app_id)
    nutrition_categories = get_categories(data)
    black_list_apis = []
    for category in categoryToApi:
        if category not in nutrition_categories:
            black_list_apis += categoryToApi[category]
    funcs = {}
    for pair in black_list_apis:
        if not pair[0] in funcs:
            funcs["\"" + pair[0] + "\""] = []
        funcs[pair[0]].append("\"" + pair[1] + "\"")
    return black_list_apis


# input: list of api_ids,
# output: list of [['class name', 'not allowed api name']]
print(get_blacklist_apis(sys.argv[1]))