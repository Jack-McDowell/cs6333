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
        ['HKHealthStore', 'executeQuery:'],
        ['HKHealthStore', 'startWatchAppWithWorkoutConfiguration:completion:'],
        ['HKHealthStore', 'startWorkoutSession:'],
    ],
    'Financial Info': [
        ['PKPassLibrary', 'passes'],
    ],
    'Location': [
        ['CLLocationManager', 'startUpdatingLocation'],
        ['CLLocationManager', 'requestLocation'],
        ['CLLocationManager', 'startMonitoringSignificantLocationChanges'],
        ['CLLocationManager', 'startMonitoringVisits'],
    ],
    'Identifiers': [
        ['ASIdentifierManager','advertisingIdentifier'],
        ['ASIdentifierManager','sharedManager'],
    ]
}
