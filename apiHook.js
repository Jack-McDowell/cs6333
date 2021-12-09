/*
Author: Jack McDowell (jnm3ecm)
Intercepts calls to APIs capable of revealing sensitive information
and replaces the data with mock data
*/

function generate_mock_contact(){
    var obj = ObjC.classes.CNContact.alloc();
    obj.init();
    obj.givenName = "ASDFGHJK"
    obj.familyName = "ZXCVBNM"
    obj.emailAddress = ObjC.classes.NSArray["arrayWithObject:"](
        ObjC.classes.CNLabeledValue["labeledValueWithLabel:value:"]("Home", "FAKEEMAIL@FAKE.FAKE")
    );
    obj.phoneNumbers = ObjC.classes.NSArray["arrayWithObject:"](
        ObjC.classes.CNLabeledValue["labeledValueWithLabel:value:"]("Home", 
            ObjC.classes.CNPhoneNumber["phoneNumberWithStringValue:"]("555-555-5555"))
    );
    return obj.handle;
}

function enumerateContactsWithFetchRequest_error_usingBlock_(args){
	console.log("Application requested CONTACTS");
    Interceptor.attach(ObjC.Object(args[4]).invoke.implementation, {
        onEnter: function(args){
            args[0] = generate_mock_contact();
            console.log("Mock data for CONTACTS: ASDFGHJK|ZXCVBNM|FAKEEMAIL@FAKE.FAKE|555-555-5555");
        }
    });
};
function CNContactStore_unifiedMeContactWithKeys(ret){
	console.log("Application requested CONTACT_INFO");
    ret = generate_mock_contact();
    console.log("Mock data for CONTACTS: ASDFGHJK|ZXCVBNM|FAKEEMAIL@FAKE.FAKE|555-555-5555");
};
function CNContactStore_unifiedContact(ret){
	console.log("Application requested CONTACTS");
    ret = generate_mock_contact();
    console.log("Mock data for CONTACTS: ASDFGHJK|ZXCVBNM|FAKEEMAIL@FAKE.FAKE|555-555-5555");
};
function CNContactStore_unifiedContacts(ret){
	console.log("Application requested CONTACTS");
    ret = generate_mock_contact();
    console.log("Mock data for CONTACTS: ASDFGHJK|ZXCVBNM|FAKEEMAIL@FAKE.FAKE|555-555-5555");
};
function HKHealthStore_dateOfBirth(ret){
	console.log("Application requested HEALTH_INFO");
    ret = ObjC.classes.NSDate["dateWithTimeIntervalSince1970:"](335353744).handle
    console.log("Mock data for HEALTH_INFO: 335353744|8/17/(19)?80.0?5.49.04");
};
function HKHealthStore_dateOfBirthComponents(ret){
	console.log("Application requested HEALTH_INFO");
    ret = ObjC.classes.NSDate["alloc"]();
    ret.init();
    ret.hour = 5;
    ret.minute = 49;
    ret.seconds = 4;
    ret.day = 17;
    ret.month = 8;
    ret.year = 1980;
    ret = ret.handle;
    console.log("Mock data for HEALTH_INFO: 335353744|8/17/(19)?80.0?5.49.04");
};
function hook_location_delegate(args){
	console.log("Application requested LOCATION");
    Interceptor.attach(ObjC.Object(args[0]).delegate()["locationManager:didUpdateLocations:"].implementation, {
        onEnter: locationManager_didUpdateLocations_
    });
};
function hook_visit_delegate(args){
	console.log("Application requested LOCATION");
    Interceptor.attach(ObjC.Object(args[0]).delegate()["locationManager:didVisit:"].implementation, {
        onEnter: locationManager_didVisit_
    });
};
function ad_id(ret){
    var uuid = ObjC.classes.NSUUID.alloc();
    uuid["initWithUUIDString:"]("e7e725fa-5897-11ec-bf63-0242ac130002");
    ret = uuid;
    console.log("Application requested IDENTIFIERS");
    console.log('Mock data for IDENTIFIERS: e7e725fa-?5897-?11ec-?bf63-?0242ac130002|E7E725FA-?5897-?11EC-?BF63-?0242AC130002|332503817515158477940161977561432391682|fa25e7e79758ec11bf630242ac130002|FA25E7E79758EC11BF630242AC130002');
};

var apis = {
    "CNContactStore": {
        "enumerateContactsWithFetchRequest:error:usingBlock:" : [enumerateContactsWithFetchRequest_error_usingBlock_, undefined],
        "unifiedMeContactWithKeysToFetch:error:": [undefined, CNContactStore_unifiedMeContactWithKeys],
        "unifiedContactWithIdentifier:keysToFetch:error:": [undefined, CNContactStore_unifiedContact],
        "unifiedContactsMatchingPredicate:keysToFetch:error:": [undefined, CNContactStore_unifiedContacts],
    }, "HKHealthStore": {
        "dateOfBirthWithError:": [undefined, HKHealthStore_dateOfBirth],
        "dateOfBirthComponentsWithError:": [undefined, HKHealthStore_dateOfBirthComponents],
        "executeQuery:": [HKHealthStore_execute, undefined],
        "startWatchAppWithWorkoutConfiguration:completion:": [HKHealthStore_startWatchApp, undefined],
        "startWorkoutSession:": [HKHealthStore_start, undefined],
    }, "PKPassLibrary": {
        "passes": [undefined, PKPassLibrary_passes],
    }, "CLLocationManager": {
        "startUpdatingLocation": [hook_location_delegate, undefined],
        "requestLocation": [hook_location_delegate, undefined],
        "startMonitoringSignificantLocationChanges": [hook_location_delegate, undefined],
        "startMonitoringVisits": [hook_visit_delegate, undefined],
    }, "ASIdentifierManager": {
        "sharedManager": [undefined, function(ret){
            Interceptor.attach(ObjC.Object(ret).advertisingIdentifier.implementation, {
                onLeave: ad_id
            });
        }]
    }
};

function locationManager_didUpdateLocations_(args){
    var mockLocation = ObjC.classes.CLLocation.alloc();
    var actualLocation = ObjC.Object(args[3]).lastObject();

    var coord = actualLocation.coordinate();
    coord[0] = 38.0;
    coord[1] = -69.0;

    mockLocation["initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:"](
        coord,
        actualLocation.altitude(),
        actualLocation.horizontalAccuracy(),
        actualLocation.verticalAccuracy(),
        actualLocation.course(),
        actualLocation.courseAccuracy(),
        actualLocation.speed(),
        actualLocation.speedAccuracy(),
        actualLocation.timestamp()
    );

    args[3] = ObjC.classes.NSArray["arrayWithObject:"](mockLocation).handle;
    console.log('Mock data for LOCATION: 37.0{2,6}|-78.0{2,6}|\\(?37.0+, -78.0+\\)?|(North )?[Aa]tlantic( [Oo]cean)?');
}

function locationManager_didVisit_(args){
    var mockLocation = ObjC.classes.CLVisit.alloc();
    var actualLocation = ObjC.Object(args[3]);

    var coord = actualLocation.coordinate();
    coord[0] = 38.0;
    coord[1] = -69.0;

    mockLocation["initWithCoordinate:horizontalAccuracy:arrivalDate:departureDate:"](
        coord,
        actualLocation.horizontalAccuracy(),
        actualLocation.arrivalDate(),
        actualLocation.departureDate(),
    );

    args[3] = mockLocation.handle;
    console.log('Mock data for LOCATION: 37\\.0{3,6}|-78\\.0{3,6}|\\(?37\\.0+, -78\\.0+\\)?|(North )?[Aa]tlantic( [Oo]cean)?');
}

function dispatchAlloc(ret){
    var object = ObjC.Object(ret)
    var c = object.$class;
    if(undefined === apis[c])
        c = object.$superClass;

    if(undefined !== apis[c]){
        for(var func in apis[c]){
            if(-1 === object.$methods.indexOf("- " + func))
                continue;

            try {
                Interceptor.attach(object[func].implementation, {
                    onEnter: apis[c][func][0],
                    onLeave: apis[c][func][1],
                });
                console.log("[+] Hooked " + c + "." + func);
            } catch(e){
                console.log("[-] Failed to hook " + c + "." + func);
            }
        }
    }
}


// Replace this with the output of ApiFilter.py
var disallowed_apis = {
    "CNContactStore": [
        "enumerateContactsWithFetchRequest:error:usingBlock:",
        "unifiedMeContactWithKeysToFetch:error:",
        "unifiedContactWithIdentifier:keysToFetch:error:",
        "unifiedContactsMatchingPredicate",
    ],
}

for(var key in apis){
    if(undefined === disallowed_apis[key]){
        apis[key] = undefined;
    }
}

if (ObjC.available){ 
    Interceptor.attach(eval('ObjC.classes.NSObject.alloc').implementation, {
        onLeave: dispatchAlloc
    });
    Interceptor.attach(eval('ObjC.classes.NSObject.new').implementation, {
        onLeave: dispatchAlloc
    });

    for(var className in apis){
        if(undefined === ObjC.classes[className])
            continue;

        ObjC.choose(ObjC.classes[className], {
            onMatch: function(x){
                dispatchAlloc(x.handle);
            },
            onComplete: function(){}
        })

        for(var func in apis[className]){
            
            console.log("Looking at " + className + "." + func);
            if(-1 === ObjC.classes[className].$methods.indexOf("+ " + func) && -1 === ObjC.classes[className].$methods.indexOf("- " + func))
                console.log(func + " is not a function of " + className);
            if(-1 === ObjC.classes[className].$methods.indexOf("+ " + func))
                continue;

            try {
                Interceptor.attach(ObjC.classes[className][func].implementation, {
                    onEnter: apis[className][func][0],
                    onLeave: apis[className][func][1],
                });
                console.log("[+] Hooked " + className + "." + func);
            } catch(e){
                console.log("[-] Failed to hook " + className + "." + func);
                console.log(e) 
            }
        }
    }
}
else {
    console.log("Objective-C Runtime is not available!");
}