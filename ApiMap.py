"""
Authors: Yining Lui (yl7sr) and Jack McDowell (jnm3ecm)
"""
categoryToApi = {
    'Contact Info': [
        ['CNContactStore', 'enumerateContactsWithFetchRequest:error:usingBlock:'],
        ['CNContactStore', "unifiedMeContactWithKeysToFetch:error:"],
        ['CNContactStore', "unifiedContactWithIdentifier:keysToFetch:error:"],
        ['CNContactStore', "unifiedContactsMatchingPredicate:keysToFetch:error:"],
    ],
    'Health & Fitness': [
        ['HKHealthStore', 'dateOfBirthWithError:'],
        ['HKHealthStore', 'dateOfBirthComponentsWithError:'],
    ],
    'Location': [
        ['CLLocationManager', 'startUpdatingLocation'],
        ['CLLocationManager', 'requestLocation'],
        ['CLLocationManager', 'startMonitoringSignificantLocationChanges'],
        ['CLLocationManager', 'startMonitoringVisits'],
    ],
    'Identifiers': [
        ['ASIdentifierManager','sharedManager'],
    ]
}
