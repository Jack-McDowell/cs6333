function CNContactStore_enumerateContacts(args){
	console.log("Call to CNContactStore::enumerateContacts");
};
function CNContactStore_unifiedMeContactWithKeys(args){
	console.log("Call to CNContactStore::unifiedMeContactWithKeys");
};
function CNContactStore_unifiedContact(args){
	console.log("Call to CNContactStore::unifiedContact");
};
function CNContactStore_unifiedContacts(args){
	console.log("Call to CNContactStore::unifiedContacts");
};
function CNContactStore_defaultContainerIdentifier(args){
	console.log("Call to CNContactStore::defaultContainerIdentifier");
};
function CNContactStore_groups(args){
	console.log("Call to CNContactStore::groups");
};
function CNContactStore_containers(args){
	console.log("Call to CNContactStore::containers");
};
function CNContactStore_CNContactStoreDidChange(args){
	console.log("Call to CNContactStore::CNContactStoreDidChange");
};
function HKHealthStore_biologicalSex(args){
	console.log("Call to HKHealthStore::biologicalSex");
};
function HKHealthStore_bloodType(args){
	console.log("Call to HKHealthStore::bloodType");
};
function HKHealthStore_dateOfBirth(args){
	console.log("Call to HKHealthStore::dateOfBirth");
};
function HKHealthStore_dateOfBirthComponents(args){
	console.log("Call to HKHealthStore::dateOfBirthComponents");
};
function HKHealthStore_fitzpatrickSkinType(args){
	console.log("Call to HKHealthStore::fitzpatrickSkinType");
};
function HKHealthStore_wheelchairUse(args){
	console.log("Call to HKHealthStore::wheelchairUse");
};
function HKHealthStore_execute(args){
	console.log("Call to HKHealthStore::execute");
};
function HKHealthStore_preferredUnits(args){
	console.log("Call to HKHealthStore::preferredUnits");
};
function HKHealthStore_HKUserPreferencesDidChange(args){
	console.log("Call to HKHealthStore::HKUserPreferencesDidChange");
};
function HKHealthStore_enableBackgroundDelivery(args){
	console.log("Call to HKHealthStore::enableBackgroundDelivery");
};
function HKHealthStore_startWatchApp(args){
	console.log("Call to HKHealthStore::startWatchApp");
};
function HKHealthStore_start(args){
	console.log("Call to HKHealthStore::start");
};
function HKHealthStore_pause(args){
	console.log("Call to HKHealthStore::pause");
};
function HKHealthStore_resumeWorkoutSession(args){
	console.log("Call to HKHealthStore::resumeWorkoutSession");
};
function HKHealthStore_activityMoveMode(args){
	console.log("Call to HKHealthStore::activityMoveMode");
};
function HKAnchoredObjectQuery_init(args){
	console.log("Call to HKAnchoredObjectQuery::init");
};
function HKAnchoredObjectQuery_updateHandler(args){
	console.log("Call to HKAnchoredObjectQuery::updateHandler");
};
function PKPaymentRequest_requiredBillingContactFields(args){
	console.log("Call to PKPaymentRequest::requiredBillingContactFields");
};
function PKPaymentRequest_requiredShippingContactFields(args){
	console.log("Call to PKPaymentRequest::requiredShippingContactFields");
};
function PKPaymentRequest_billingContact(args){
	console.log("Call to PKPaymentRequest::billingContact");
};
function PKPaymentRequest_shippingContact(args){
	console.log("Call to PKPaymentRequest::shippingContact");
};
function PKPassLibrary_passes(args){
	console.log("Call to PKPassLibrary::passes");
};
function PKPassLibrary_pass(args){
	console.log("Call to PKPassLibrary::pass");
};
function PKPassLibrary_containsPass(args){
	console.log("Call to PKPassLibrary::containsPass");
};
function PKPassLibrary_serviceProviderData(args){
	console.log("Call to PKPassLibrary::serviceProviderData");
};
function PKPassLibrary_remoteSecureElementPasses(args){
	console.log("Call to PKPassLibrary::remoteSecureElementPasses");
};
function PKPassLibrary_canAddFelicaPass(args){
	console.log("Call to PKPassLibrary::canAddFelicaPass");
};
function PKPassLibrary_canAddSecureElementPass(args){
	console.log("Call to PKPassLibrary::canAddSecureElementPass");
};
function PKPassLibrary_replacePass(args){
	console.log("Call to PKPassLibrary::replacePass");
};
function PKPassLibrary_present(args){
	console.log("Call to PKPassLibrary::present");
};
function PKPassLibrary_isSuppressingAutomaticPassPresentation(args){
	console.log("Call to PKPassLibrary::isSuppressingAutomaticPassPresentation");
};
function PKPassLibrary_requestAutomaticPassPresentationSuppression(args){
	console.log("Call to PKPassLibrary::requestAutomaticPassPresentationSuppression");
};
function PKPassLibrary_endAutomaticPassPresentationSuppression(args){
	console.log("Call to PKPassLibrary::endAutomaticPassPresentationSuppression");
};
function PKPassLibrary_PKSuppressionRequestToken(args){
	console.log("Call to PKPassLibrary::PKSuppressionRequestToken");
};
function PKPassLibrary_openPaymentSetup(args){
	console.log("Call to PKPassLibrary::openPaymentSetup");
};
function CLLocationManager_significantLocationChangeMonitoringAvailable(args){
	console.log("Call to CLLocationManager::significantLocationChangeMonitoringAvailable");
};
function CLLocationManager_accuracyAuthorization(args){
	console.log("Call to CLLocationManager::accuracyAuthorization");
};
function CLLocationManager_isMonitoringAvailable(args){
	console.log("Call to CLLocationManager::isMonitoringAvailable");
};
function CLLocationManager_isRangingAvailable(args){
	console.log("Call to CLLocationManager::isRangingAvailable");
};
function CLLocationManager_locationServicesEnabled(args){
	console.log("Call to CLLocationManager::locationServicesEnabled");
};
function CLLocationManager_headingAvailable(args){
	console.log("Call to CLLocationManager::headingAvailable");
};
function CLLocationManager_regionMonitoringAvailable(args){
	console.log("Call to CLLocationManager::regionMonitoringAvailable");
};
function CLLocationManager_regionMonitoringEnabled(args){
	console.log("Call to CLLocationManager::regionMonitoringEnabled");
};
function CLLocationManager_startUpdatingLocation(args){
	console.log("Call to CLLocationManager::startUpdatingLocation");
    Interceptor.attach(ObjC.Object(args[0]).delegate()["locationManager:didUpdateLocations:"].implementation, {
        onEnter: locationManager_DidUpdateLocations_
    });
};
function CLLocationManager_requestLocation(args){
	console.log("Call to CLLocationManager::requestLocation");
    Interceptor.attach(ObjC.Object(args[0]).delegate()["locationManager:didUpdateLocations:"].implementation, {
        onEnter: locationManager_DidUpdateLocations_
    });
};
function CLLocationManager_allowsBackgroundLocationUpdates(args){
	console.log("Call to CLLocationManager::allowsBackgroundLocationUpdates");
};
function CLLocationManager_showsBackgroundLocationIndicator(args){
	console.log("Call to CLLocationManager::showsBackgroundLocationIndicator");
};
function CLLocationManager_startMonitoringSignificantLocationChanges(args){
	console.log("Call to CLLocationManager::startMonitoringSignificantLocationChanges");
};
function CLLocationManager_startUpdatingHeading(args){
	console.log("Call to CLLocationManager::startUpdatingHeading");
};
function CLLocationManager_startMonitoring(args){
	console.log("Call to CLLocationManager::startMonitoring");
};
function CLLocationManager_requestState(args){
	console.log("Call to CLLocationManager::requestState");
};
function CLLocationManager_startRangingBeacons(args){
	console.log("Call to CLLocationManager::startRangingBeacons");
};
function CLLocationManager_startMonitoringVisits(args){
	console.log("Call to CLLocationManager::startMonitoringVisits");
};
function CLLocationManager_location(args){
	console.log("Call to CLLocationManager::location");
};
function CLLocationManager_heading(args){
	console.log("Call to CLLocationManager::heading");
};
function CLVisit_coordinate(args){
	console.log("Call to CLVisit::coordinate");
};
function CLVisit_horizontalAccuracy(args){
	console.log("Call to CLVisit::horizontalAccuracy");
};
function CLVisit_arrivalDate(args){
	console.log("Call to CLVisit::arrivalDate");
};
function CLVisit_departureDate(args){
	console.log("Call to CLVisit::departureDate");
};
function ILMessageFilterQueryHandling_handle(args){
	console.log("Call to ILMessageFilterQueryHandling::handle");
};
function PHPhotoLibrary_shared(args){
	console.log("Call to PHPhotoLibrary::shared");
};
function PHPhotoLibrary_register(args){
	console.log("Call to PHPhotoLibrary::register");
};
function PHAsset_fetchAssets(args){
	console.log("Call to PHAsset::fetchAssets");
};
function PHAssetCollection_fetchAssetCollections(args){
	console.log("Call to PHAssetCollection::fetchAssetCollections");
};
function PHAssetCollection_fetchMoments(args){
	console.log("Call to PHAssetCollection::fetchMoments");
};
function PHCollection_fetchCollections(args){
	console.log("Call to PHCollection::fetchCollections");
};
function PHCollection_fetchTopleveluserCollections(args){
	console.log("Call to PHCollection::fetchTopleveluserCollections");
};
function PHCollectionList_fetchCollectionListsContaining(args){
	console.log("Call to PHCollectionList::fetchCollectionListsContaining");
};
function PHCollectionList_fetchCollectionLists(args){
	console.log("Call to PHCollectionList::fetchCollectionLists");
};
function PHCollectionList_fetchMomentLists(args){
	console.log("Call to PHCollectionList::fetchMomentLists");
};
function AVAudioRecorder_record(args){
	console.log("Call to AVAudioRecorder::record");
};
function AudioQueueServices_AudioQueueNewInput(args){
	console.log("Call to AudioQueueServices::AudioQueueNewInput");
};
function AudioQueueServices_AudioQueueStart(args){
	console.log("Call to AudioQueueServices::AudioQueueStart");
};
function UIDevice_current(args){
	console.log("Call to UIDevice::current");
};
function UIDevice_UIDevicecurrentDevice(args){
	console.log("Call to UIDevice::UIDevicecurrentDevice");
};
function DCDevice_current(args){
	console.log("Call to DCDevice::current");
};
function ASIdentifierManager_sharedManager(args){
    console.log("Call to ASIdentifierManager::sharedManager")
}

var apis = {
    "CNContactStore": {
        "enumerateContacts" : CNContactStore_enumerateContacts,
        "unifiedMeContactWithKeys": CNContactStore_unifiedMeContactWithKeys,
        "unifiedContact": CNContactStore_unifiedContact,
        "unifiedContacts": CNContactStore_unifiedContacts,
        "defaultContainerIdentifier": CNContactStore_defaultContainerIdentifier,
        "groups": CNContactStore_groups,
        "containers": CNContactStore_containers,
        "CNContactStoreDidChange": CNContactStore_CNContactStoreDidChange,
    }, "HKHealthStore": {
        "biologicalSexWithError_": HKHealthStore_biologicalSex,
        "bloodType": HKHealthStore_bloodType,
        "dateOfBirth": HKHealthStore_dateOfBirth,
        "dateOfBirthComponents": HKHealthStore_dateOfBirthComponents,
        "fitzpatrickSkinType": HKHealthStore_fitzpatrickSkinType,
        "wheelchairUse": HKHealthStore_wheelchairUse,
        "execute": HKHealthStore_execute,
        "preferredUnits": HKHealthStore_preferredUnits,
        "HKUserPreferencesDidChange": HKHealthStore_HKUserPreferencesDidChange,
        "enableBackgroundDelivery": HKHealthStore_enableBackgroundDelivery,
        "startWatchApp": HKHealthStore_startWatchApp,
        "start": HKHealthStore_start,
        "pause": HKHealthStore_pause,
        "resumeWorkoutSession": HKHealthStore_resumeWorkoutSession,
        "activityMoveMode": HKHealthStore_activityMoveMode,
    }, "HKAnchoredObjectQuery": {
        "init": HKAnchoredObjectQuery_init,
        "updateHandler": HKAnchoredObjectQuery_updateHandler,
    }, "PKPaymentRequest": {
        "requiredBillingContactFields": PKPaymentRequest_requiredBillingContactFields,
        "requiredShippingContactFields": PKPaymentRequest_requiredShippingContactFields,
        "billingContact": PKPaymentRequest_billingContact,
        "shippingContact": PKPaymentRequest_shippingContact,
    }, "PKPassLibrary": {
        "passes": PKPassLibrary_passes,
        "pass": PKPassLibrary_pass,
        "containsPass": PKPassLibrary_containsPass,
        "serviceProviderData": PKPassLibrary_serviceProviderData,
        "remoteSecureElementPasses": PKPassLibrary_remoteSecureElementPasses,
        "canAddFelicaPass": PKPassLibrary_canAddFelicaPass,
        "canAddSecureElementPass": PKPassLibrary_canAddSecureElementPass,
        "replacePass": PKPassLibrary_replacePass,
        "present": PKPassLibrary_present,
        "isSuppressingAutomaticPassPresentation": PKPassLibrary_isSuppressingAutomaticPassPresentation,
        "requestAutomaticPassPresentationSuppression": PKPassLibrary_requestAutomaticPassPresentationSuppression,
        "endAutomaticPassPresentationSuppression": PKPassLibrary_endAutomaticPassPresentationSuppression,
        "PKSuppressionRequestToken": PKPassLibrary_PKSuppressionRequestToken,
        "openPaymentSetup": PKPassLibrary_openPaymentSetup,
    }, "CLLocationManager": {
        "significantLocationChangeMonitoringAvailable": CLLocationManager_significantLocationChangeMonitoringAvailable,
        "accuracyAuthorization": CLLocationManager_accuracyAuthorization,
        "isMonitoringAvailable": CLLocationManager_isMonitoringAvailable,
        "isRangingAvailable": CLLocationManager_isRangingAvailable,
        "locationServicesEnabled": CLLocationManager_locationServicesEnabled,
        "headingAvailable": CLLocationManager_headingAvailable,
        "regionMonitoringAvailable": CLLocationManager_regionMonitoringAvailable,
        "regionMonitoringEnabled": CLLocationManager_regionMonitoringEnabled,
        "startUpdatingLocation": CLLocationManager_startUpdatingLocation,
        "requestLocation": CLLocationManager_requestLocation,
        "allowsBackgroundLocationUpdates": CLLocationManager_allowsBackgroundLocationUpdates,
        "showsBackgroundLocationIndicator": CLLocationManager_showsBackgroundLocationIndicator,
        "startMonitoringSignificantLocationChanges": CLLocationManager_startMonitoringSignificantLocationChanges,
        "startUpdatingHeading": CLLocationManager_startUpdatingHeading,
        "startMonitoring": CLLocationManager_startMonitoring,
        "requestState": CLLocationManager_requestState,
        "startRangingBeacons": CLLocationManager_startRangingBeacons,
        "startMonitoringVisits": CLLocationManager_startMonitoringVisits,
        "location": CLLocationManager_location,
        "heading": CLLocationManager_heading,
    }, "CLVisit": {
        "coordinate": CLVisit_coordinate,
        "horizontalAccuracy": CLVisit_horizontalAccuracy,
        "arrivalDate": CLVisit_arrivalDate,
        "departureDate": CLVisit_departureDate,
    }, "ILMessageFilterQueryHandling": {
        "handle": ILMessageFilterQueryHandling_handle,
    }, "PHPhotoLibrary": {
        "shared": PHPhotoLibrary_shared,
        "register": PHPhotoLibrary_register,
    }, "PHAsset": {
        "fetchAssets": PHAsset_fetchAssets,
    }, "PHAssetCollection": {
        "fetchAssetCollections": PHAssetCollection_fetchAssetCollections,
        "fetchMoments": PHAssetCollection_fetchMoments,
    }, "PHCollection": {
        "fetchCollections": PHCollection_fetchCollections,
        "fetchTopleveluserCollections": PHCollection_fetchTopleveluserCollections,
    }, "PHCollectionList": {
        "fetchCollectionListsContaining": PHCollectionList_fetchCollectionListsContaining,
        "fetchCollectionLists": PHCollectionList_fetchCollectionLists,
        "fetchMomentLists": PHCollectionList_fetchMomentLists,
    }, "AVAudioRecorder": {
        "record": AVAudioRecorder_record,
    }, "AudioQueueServices": {
        "AudioQueueNewInput": AudioQueueServices_AudioQueueNewInput,
        "AudioQueueStart": AudioQueueServices_AudioQueueStart,
    }, "UIDevice": {
        "current": UIDevice_current,
        "UIDevicecurrentDevice": UIDevice_UIDevicecurrentDevice,
    }, "DCDevice": {
        "current": DCDevice_current,
    }, "ASIdentifierManager": {
        "sharedManager": ASIdentifierManager_sharedManager,
    }
};

function locationManager_DidUpdateLocations_(args){
    var mockLocation = ObjC.classes.CLLocation.alloc();
    var actualLocation = ObjC.Object(args[3]).lastObject();

    var coord = actualLocation.coordinate();
    coord[0] = 37.0;
    coord[1] = -78.0;

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
    console.log("Mocked location data (+37.000000, -78.000000)");
}

function dispatchAlloc(name, ret){
    var object = ObjC.Object(ret);

    if(undefined !== apis[object.$class]){
        for(var func in apis[object.$class]){
            if(-1 === object.$methods.indexOf("- " + func))
                continue;

            try {
                Interceptor.attach(object[func].implementation, {
                    onEnter: apis[object.$class][func]
                });
                console.log("[+] Hooked " + object.$class + "." + func);
            } catch(e){
                console.log("[-] Failed to hook " + object.$class + "." + func);
            }
        }
    }
}

if (ObjC.available){ 
    Interceptor.attach(eval('ObjC.classes.NSObject.alloc').implementation, {
        onLeave: function(ret){ return dispatchAlloc(className, ret); }
    });

    for(var className in apis){
        if(undefined == ObjC.classes[className]){
            console.log(className + " appears to be an interface!");
            continue;
        }

        for(var func in apis[className]){
            if(-1 === ObjC.classes[className].$methods.indexOf("+ " + func) && -1 === ObjC.classes[className].$methods.indexOf("- " + func))
                console.log(func + " is not a function of " + className);
            if(-1 === ObjC.classes[className].$methods.indexOf("+ " + func))
                continue;

            try {
                Interceptor.attach(ObjC.classes[className][func].implementation, {
                    onEnter: apis[className][func]
                });
                console.log("[+] Hooked " + className + "." + func);
            } catch(e){
                console.log("[-] Failed to hook " + className + "." + func);
            }
        }
    }
}
else {
    console.log("Objective-C Runtime is not available!");
}