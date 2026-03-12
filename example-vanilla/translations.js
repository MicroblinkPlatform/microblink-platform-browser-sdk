/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
const germanTranslations = {
  d2d: {
    title: "Zum Mobilgerät wechseln, um die Verifizierung fortzusetzen.",
    caption: "Zum Mobilgerät wechseln, um die Verifizierung fortzusetzen.",
    qrCodeExpired: "QR-Code ist abgelaufen",
    getNewQrCode: "Neuen QR-Code abrufen",
    proceedWithDesktopCamera: "Mit der Desktop-Kamera fortfahren",
    instructionsTitle: "Anleitung zur Vorgehensweise.",
    scanCodeTitle: "QR-Code scannen oder Link kopieren.",
    scanCodeSubtitle:
      "Verwenden Sie die Kamera Ihres Telefons, um den auf Ihrem Bildschirm angezeigten Code zu scannen.",
    transferToMobilePhoneTitle: "Zum Mobiltelefon übertragen.",
    transferToMobilePhoneSubtitle:
      "Führen Sie die Identitätsprüfung auf dem Mobilgerät durch.",
    returnToThisDeviceTitle: "Zu diesem Gerät zurückkehren.",
    returnToThisDeviceSubtitle:
      "Sobald die Verifizierung abgeschlossen ist, kehren Sie zu diesem Gerät zurück.",
    connectionLimitReachedTitle: "Verbindungslimit erreicht.",
    connectionLimitReachedCaption:
      "Schließen Sie die bestehenden Verbindungen und versuchen Sie es erneut.",
    connectedTitle: "Verbunden. Auf dem Mobilgerät fortfahren.",
    connectedCaption:
      "Die Verifizierung wird durchgeführt. Befolgen Sie die Anweisungen auf Ihrem Telefon.",
    errorTitle: "Fehler: Verbindung konnte nicht hergestellt werden",
    errorCaption:
      "Wir konnten keine Verbindung zu Ihrem Mobilgerät herstellen.",
    inactiveConnectionTitle: "Inaktive Verbindung.",
    inactiveConnectionCaption:
      "Bitte überprüfen Sie Ihr Mobilgerät und versuchen Sie es erneut.",
    deviceDisconnectedTitle: "Gerät getrennt.",
    deviceDisconnectedCaption:
      "Die Verbindung zum Gerät wurde unterbrochen. Mögliche Gründe sind Batterie- oder andere Verbindungsprobleme.",
    continueOnDesktop: "Den Vorgang auf dem Desktop fortsetzen",
    chooseAlternativeMethod: "oder eine alternative Methode wählen",
    copyLink: "Link kopieren",
    expiresIn: "Läuft ab in",
    verificationCanceledTitle: "Verifizierung abgebrochen",
    verificationCanceledCaption:
      "Der Verifizierungsprozess wurde unterbrochen.",
    cancelVerificationTitle:
      "Sie sind dabei, die Verifizierung auf dem Mobilgerät abzubrechen. Sind Sie sicher?",
    cancelVerificationCaption:
      "Ihr Mobilgerät ist verbunden, und die Verifizierung läuft.",
    verificationSuccessfulTitle: "Verifizierung erfolgreich!",
    verificationSuccessfulCaption:
      "Ihre Verifizierung ist abgeschlossen. Bitte kehren Sie zu Ihrem Desktop zurück, um fortzufahren.",
    abortTitle: "Auf dem Desktop fortfahren.",
    abortCaption:
      "Sie können Ihre Verifizierung jetzt auf dem Desktop abschließen.",
    linkCopied:
      "Link kopiert!<br />Öffnen Sie ihn auf Ihrem Mobilgerät, um fortzufahren.",
  },
  actions: {
    done: "Fertig",
    tryAgain: "Erneut versuchen",
    start: "Los geht's",
    continue: "Weiter",
    exit: "Beenden",
    back: "Zurück",
    cancel: "Abbrechen",
    yesContinue: "Ja, fortfahren",
    startOver: "Von vorne beginnen",
    tryScanningAgain: "Erneut scannen",
    switchToDesktopToContinue: "Zum primären Gerät wechseln",
    continueAnotherWay: "Anders fortfahren",
    upload: "Hochladen",
    remove: "Löschen",
  },
  statuses: {
    cameraLoading: "Kamera wird geladen",
    checkingCamera: "Kamera wird überprüft...",
    noInternetConnection: "Keine Internetverbindung",
    processing: "Wird verarbeitet...",
    verificationNotAvailable: "Verifizierung nicht verfügbar",
    cameraPermissionRequiredTitle: "Kamerazugriff erforderlich",
    cameraPermissionRequiredCaption:
      "Wir haben keine Berechtigung, die Kamera zu verwenden. Um fortzufahren, stellen Sie bitte sicher, dass die Kamera aktiviert ist.",
    nextUp: "Als Nächstes",
    completed: "Abgeschlossen",
    retakeSelfieTitle: "Selfie wiederholen",
    retakeSelfieCaption: "Ihr Selfie erfüllt nicht die Anforderungen",
    noCameraDevices: "Keine Kamerageräte gefunden",
    documentNotSupportedTitle: "Dokument nicht akzeptiert",
    documentNotSupportedCaption:
      "Versuchen Sie, ein anderes Dokument zu scannen.",
    documentScanErrorTitle: "Erneut scannen",
    documentScanErrorCaption:
      "Versuchen Sie es erneut und stellen Sie sicher, dass Ihr Dokument vollständig sichtbar und gut beleuchtet ist. Halten Sie das Dokument ruhig, um Unschärfe zu vermeiden.",
    scanTimeoutErrorTitle: "Probleme mit der Scannung?",
    scanTimeoutErrorCaption:
      "Stellen Sie sicher, dass Sie in einem gut beleuchteten Raum ohne Glanz auf dem Dokument sind, halten Sie es im Fokus, vollständig sichtbar und ruhig.",
  },
  faceCapture: {
    centerYourFace: "Positionieren Sie Ihr Gesicht in der Mitte",
    placeFaceInFrame: "Platzieren Sie Ihr Gesicht im Rahmen",
    moveCloser: "Kommen Sie näher",
    lookDirectylIntoCamera: "Schauen Sie direkt in die Kamera",
    onlyOneFaceShouldBeVisible: "Es sollte nur ein Gesicht sichtbar sein",
    keepStill: "Stillhalten",
  },
  documentScanning: {
    cameraLoading: "Kamera wird geladen",
    helpButtonTooltip: "Brauchen Sie Hilfe?",
    helpButtonBack: "Zurück",
    helpButtonNext: "Weiter",
    helpButtonDone: "Fertig",
    helpButtonStartScanning: "Scan starten",
    helpDocInfoTitle: "Halten Sie alle Details sichtbar",
    helpDocInfoDescription:
      "Stellen Sie sicher, dass das Dokument gut beleuchtet ist. Alle Felder des Dokuments sollten auf dem Kamerabildschirm sichtbar sein.",
    helpDocKeepDetailsVisibleTitle: "Halten Sie alle Details sichtbar",
    helpDocKeepDetailsVisibleDescription:
      "Stellen Sie sicher, dass Sie keine Teile des Dokuments mit einem Finger abdecken, einschließlich der unteren Linien. Achten Sie auch auf Hologrammreflexionen, die über die Dokumentfelder gehen.",
    helpDocAvoidHarshLightTitle: "Achten Sie auf starkes Licht",
    helpDocAvoidHarshLightDescription:
      "Vermeiden Sie direktes, starkes Licht, da es vom Dokument reflektiert wird und Teile des Dokuments unlesbar machen kann. Wenn Sie die Daten auf dem Dokument nicht lesen können, wird die Kamera sie auch nicht sehen.",
    helpDocKeepStillTitle: "Bleiben Sie während des Scannens ruhig",
    helpDocKeepStillDescription:
      "Versuchen Sie, das Telefon und das Dokument während des Scannens ruhig zu halten. Bewegung kann das Bild verwischen und die Daten auf dem Dokument unlesbar machen.",
    cameraDisabled: "Kamera deaktiviert",
    cameraNotAllowed: "Kein Zugriff auf die Kamera möglich.",
    cameraInUse:
      "Die Kamera wird bereits von einer anderen Anwendung verwendet.",
    cameraGenericError: "Kein Zugriff auf die Kamera möglich.",
    cameraFeedbackScanFront: "Scannen Sie die Vorderseite des Dokuments",
    cameraFeedbackScanBack: "Scannen Sie die Rückseite des Dokuments",
    cameraFeedbackFlip: "Drehen Sie zur Rückseite",
    cameraFeedbackBarcodeMessage: "Scannen Sie den Barcode",
    cameraFeedbackMoveFarther: "Weiter weg bewegen",
    cameraFeedbackMoveCloser: "Näher heran bewegen",
    cameraFeedbackAdjustAngle: "Dokument parallel zum Telefon aufbewahren",
    cameraFeedbackBlur: "Still halten",
    cameraFeedbackGlare:
      "Kippen oder bewegen Sie das Dokument, um Reflexionen zu entfernen",
    cameraFeedbackWrongSide: "Drehen Sie das Dokument um",
    cameraFeedbackFacePhotoCovered:
      "Halten Sie das Gesichtsfoto vollständig sichtbar",
    cameraFeedbackBarcode: "Scannen Sie den Barcode",
    initializationError:
      "Komponente konnte nicht geladen werden. Versuchen Sie ein anderes Gerät oder aktualisieren Sie Ihren Browser.",
    checkInternetConnection: "Überprüfen Sie die Internetverbindung.",
    networkError: "Netzwerkfehler.",
    scanningNotAvailable: "Scannen ist nicht verfügbar.",
    modalWindowClose: "Schließen",
    documentTooCloseToEdge: "Bewegen Sie das Dokument vom Rand weg",
    cameraFeedbackScanLastPageBarcode:
      "Scannen Sie die letzte Seite mit dem Barcode",
  },
  cardScanning: {
    cameraLoading: "Kamera wird geladen",
    helpButtonTooltip: "Benötigen Sie Hilfe?",
    helpButtonBack: "Zurück",
    helpButtonNext: "Weiter",
    helpButtonDone: "Fertig",
    helpButtonStartScanning: "Scannen starten",
    helpDocInfoTitle: "Zuerst die Kartennummer scannen",
    helpDocInfoDescription:
      "Die Kartennummer ist normalerweise 16-stellig und sollte entweder gedruckt oder in erhabenen Ziffern auf der Karte geprägt sein. Stellen Sie sicher, dass die Karte gut beleuchtet ist und alle Details sichtbar sind.",
    helpDocKeepDetailsVisibleTitle: "Alle Details sichtbar lassen",
    helpDocKeepDetailsVisibleDescription:
      "Stellen Sie sicher, dass Sie keine Teile der Karte mit einem Finger verdecken, einschließlich der unteren Zeilen. Achten Sie auch auf Hologramm-Reflexionen, die über die Kartenfelder gehen.",
    helpDocAvoidHarshLightTitle: "Achten Sie auf starkes Licht",
    helpDocAvoidHarshLightDescription:
      "Vermeiden Sie direktes, starkes Licht, da es von der Karte reflektiert wird und Teile der Karte unlesbar machen kann. Wenn Sie Daten auf der Karte nicht lesen können, sind diese auch für die Kamera nicht sichtbar.",
    helpDocKeepStillTitle: "Beim Scannen ruhig halten",
    helpDocKeepStillDescription:
      "Versuchen Sie, Telefon und Karte beim Scannen ruhig zu halten. Bewegungen können das Bild verwischen und Daten auf der Karte unlesbar machen.",
    cameraDisabled: "Kamera deaktiviert",
    cameraNotAllowed: "Zugriff auf Kamera nicht möglich.",
    cameraInUse: "Kamera wird bereits von einer anderen Anwendung verwendet.",
    cameraGenericError: "Zugriff auf Kamera nicht möglich.",
    cameraFeedbackScanFront: "Vorderseite der Karte scannen",
    cameraFeedbackScanBack: "Rückseite der Karte scannen",
    cameraFeedbackFlip: "Zur Rückseite umdrehen",
    cameraFeedbackBarcodeMessage: "Barcode scannen",
    cameraFeedbackMoveFarther: "Weiter entfernen",
    cameraFeedbackMoveCloser: "Näher herangehen",
    cameraFeedbackAdjustAngle: "Karte parallel zum Bildschirm halten",
    cameraFeedbackWrongSide: "Karte umdrehen",
    cameraFeedbackBarcode: "Barcode scannen",
    initializationError:
      "Fehler beim Laden der Komponente. Versuchen Sie ein anderes Gerät zu verwenden oder Ihren Browser zu aktualisieren.",
    modalWindowClose: "Schließen",
    checkInternetConnection: "Internetverbindung prüfen.",
    networkError: "Netzwerkfehler.",
    scanningNotAvailable: "Scannen nicht verfügbar.",
  },
  manualInput: {
    formTitle: "Weitere Details hinzufügen",
    formSubtitle: "Erzähl uns ein bisschen mehr",
    uploadButtonText: "Hochladen",
    deleteButtonText: "Löschen",
    fileDropText: "Datei hier ablegen",
    submitButtonText: "Absenden",
    clearButtonText: "Löschen",
    requiredFieldMissing: "Dies ist ein Pflichtfeld.",
    tooLong: "Dieser Wert ist zu lang.",
    invalidInteger: "Bitte geben Sie eine gültige ganze Zahl ein.",
    invalidDecimal: "Bitte geben Sie eine gültige Dezimalzahl ein.",
    invalidDateTime:
      "Bitte geben Sie ein gültiges Datum und eine gültige Uhrzeit ein.",
    invalidDate: "Bitte geben Sie ein gültiges Datum ein.",
    invalidTime: "Bitte geben Sie eine gültige Uhrzeit ein.",
    dateOfBirthMustBeInThePast:
      "Das Geburtsdatum muss in der Vergangenheit liegen.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    invalidAddress: "Bitte geben Sie eine gültige Adresse ein.",
    invalidPhoneNumber: "Bitte geben Sie eine gültige Telefonnummer ein.",
    invalidSsn: "Bitte geben Sie eine gültige Sozialversicherungsnummer ein.",
    invalidFileType: "Ungültiger Dateityp.",
    fileTooLarge:
      "Die Datei ist zu groß. Bitte laden Sie eine Datei hoch, die kleiner als ",
    uploadFailed: "Hochladen fehlgeschlagen.",
    optionalHelperText: "optional",
  },
  home: {
    title: "Lassen Sie uns Ihre Identität überprüfen",
    caption: "Das dauert nur ein paar Minuten.",
    additionalActionsCaption:
      "Wir werden Sie möglicherweise um zusätzliche Schritte bitten, um Ihre Verifizierung abzuschließen.",
    documentVerificationStepTitle: "Scannen Sie Ihr Dokument",
    documentVerificationAnotherStepTitle: "Anderes Dokument scannen",
    documentVerificationStepCaption: "Holen Sie Ihren Ausweis",
    cardVerificationStepTitle: "Scannen Sie Ihre Karte",
    cardVerificationAnotherStepTitle: "Andere Zahlungskarte scannen",
    cardVerificationStepCaption: "Holen Sie Ihre Kredit- oder Debitkarte",
    documentExtractionStepTitle: "Scannen Sie Ihr Dokument",
    documentExtractionAnotherStepTitle: "Anderes Dokument scannen",
    documentExtractionStepCaption: "Holen Sie Ihren Ausweis",
    faceMatchStepTitle: "Machen Sie ein Selfie",
    faceMatchStepCaption:
      "Stellen Sie sicher, dass Ihr Gesicht gut beleuchtet ist",
    manualInputStepTitle: "Weitere Details hinzufügen",
    manualInputStepCaption: "Erzähl uns ein bisschen mehr",
    uploadIdDocumentStepTitle: "Dokumente hochladen",
    uploadIdDocumentStepCaption: "Bereiten Sie die Dokumente zum Hochladen vor",
    uploadNonIdDocumentStepTitle: "Dokumente hochladen",
    uploadNonIdDocumentStepCaption:
      "Bereiten Sie die Dokumente zum Hochladen vor",
  },
  end: {
    identityVerifiedTitle: "Identität verifiziert!",
    identityVerifiedCaption:
      "Vielen Dank, dass Sie Ihre Identität nachgewiesen haben - Sie waren es die ganze Zeit!",
    identityNotVerifiedTitle: "Identität nicht verifiziert",
    identityNotVerifiedCaption:
      "Wir konnten Ihre Identität dieses Mal nicht verifizieren. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut, oder kontaktieren Sie den Support für Hilfe.",
    identityVerifyingTitle: "Danke! Wir überprüfen Ihre Identität jetzt",
    identityVerifyingCaption:
      "Wir haben alles, was wir brauchen. Wir benachrichtigen Sie, sobald es abgeschlossen ist.",
    errorTitle: "Etwas ist schiefgelaufen",
    errorCaption:
      "Die Überprüfung konnte nicht abgeschlossen werden. Versuchen wir die Überprüfung noch einmal.",
  },
  consentDialog: {
    title: "Wir benötigen Ihre Zustimmung zu:",
    caption:
      "Speichern und/oder Zugang zu persönlichen Informationen, die biometrische Daten enthalten können, für die Zwecke der Identitätsprüfung.",
    privacyNoticeText:
      "Ihre Entscheidungen helfen uns, Ihre persönlichen Informationen zu schützen und unsere Technologie zu verbessern, während wir die höchsten Standards der Datenschutzbelehrung beibehalten, wie in der",
    privacyNoticeLink: "Datenschutzerklärung.",
    consentCheckboxLabel:
      "Ich stimme der Verwendung meiner persönlichen Daten, einschließlich biometrischer Daten, durch den Anbieter zu, um seine Technologie zu optimieren. (Optional)",
    confirmButtonText: "Zustimmen",
    rejectButtonText: "Nicht zustimmen",
  },
  dropzone: {
    dragAndDropDescription: "oder ziehen Sie die Datei hierher",
    legend: "Datei hochladen",
    supportedTypesDescription: "JPG oder PNG",
  },
};

const croatianTranslations = {
  d2d: {
    title: "Prebacite se na mobilni uređaj za nastavak provjere.",
    caption: "Prebacite se na mobilni uređaj za nastavak provjere.",
    qrCodeExpired: "QR kod je istekao",
    getNewQrCode: "Preuzmi novi QR kod",
    proceedWithDesktopCamera: "Nastavi s kamerom na računalu",
    instructionsTitle: "Upute kako to učiniti.",
    scanCodeTitle: "Skeniraj QR kod ili kopiraj poveznicu.",
    scanCodeSubtitle:
      "Upotrijebite kameru svog telefona za skeniranje koda prikazanog na zaslonu.",
    transferToMobilePhoneTitle: "Prebaci na mobilni telefon.",
    transferToMobilePhoneSubtitle:
      "Provedite provjeru identiteta na mobilnom uređaju.",
    returnToThisDeviceTitle: "Vrati se na ovaj uređaj.",
    returnToThisDeviceSubtitle:
      "Nakon završetka provjere, vratite se na ovaj uređaj.",
    connectionLimitReachedTitle: "Dosegnuto ograničenje veze.",
    connectionLimitReachedCaption:
      "Zatvorite postojeće veze i pokušajte ponovo.",
    connectedTitle: "Povezano. Nastavite na mobilnom uređaju.",
    connectedCaption: "Provjera je u tijeku. Slijedite upute na svom telefonu.",
    errorTitle: "Greška: nemoguće uspostaviti vezu",
    errorCaption: "Nismo se mogli povezati s vašim mobilnim uređajem.",
    inactiveConnectionTitle: "Neaktivna veza.",
    inactiveConnectionCaption:
      "Molimo provjerite svoj mobilni uređaj i pokušajte ponovo.",
    deviceDisconnectedTitle: "Uređaj je prekinuo vezu.",
    deviceDisconnectedCaption:
      "Veza s uređajem je izgubljena. Mogući razlozi uključuju probleme s baterijom ili druge probleme s povezivanjem.",
    continueOnDesktop: "Nastavite postupak na radnoj površini",
    chooseAlternativeMethod: "ili odaberite alternativnu metodu",
    copyLink: "Kopiraj poveznicu",
    expiresIn: "Istječe za",
    verificationCanceledTitle: "Provjera je otkazana",
    verificationCanceledCaption: "Postupak provjere je prekinut.",
    cancelVerificationTitle:
      "Upravo ćete otkazati provjeru na mobilnom uređaju. Jeste li sigurni?",
    cancelVerificationCaption:
      "Vaš mobilni uređaj je povezan i provjera je u tijeku.",
    verificationSuccessfulTitle: "Provjera uspješna!",
    verificationSuccessfulCaption:
      "Vaša provjera je završena. Molimo vratite se na radnu površinu kako biste nastavili.",
    abortTitle: "Nastavite na radnoj površini.",
    abortCaption: "Svoju provjeru sada možete dovršiti na radnoj površini.",
    linkCopied:
      "Poveznica kopirana!<br />Otvorite je na svom mobilnom uređaju za nastavak.",
  },
  actions: {
    done: "Gotovo",
    tryAgain: "Pokušaj ponovno",
    start: "Krenimo",
    continue: "Nastavi",
    exit: "Izađi",
    back: "Natrag",
    cancel: "Odustani",
    yesContinue: "Da, nastavi",
    startOver: "Započni iznova",
    tryScanningAgain: "Pokušaj skeniranje ponovno",
    switchToDesktopToContinue: "Nastavi na primarnom uređaju",
    continueAnotherWay: "Nastavi na drugi način",
    upload: "Otpremi",
    remove: "Izbriši",
  },
  statuses: {
    cameraLoading: "Učitavanje kamere",
    checkingCamera: "Provjera kamere...",
    noInternetConnection: "Nema internetske veze",
    processing: "Obrada...",
    verificationNotAvailable: "Provjera nije dostupna",
    cameraPermissionRequiredTitle: "Potrebno dopuštenje za kameru",
    cameraPermissionRequiredCaption:
      "Nemamo vaše dopuštenje za korištenje kamere. Da biste nastavili, provjerite je li kamera omogućena.",
    nextUp: "Sljedeće",
    completed: "Završeno",
    retakeSelfieTitle: "Ponovno snimite selfie",
    retakeSelfieCaption:
      "Pokušajte ponovno, držite oči otvorenima, lice potpuno vidljivo i osigurajte dovoljnu količinu svjetlosti.",
    noCameraDevices: "Nema pronađenih kamera",
    documentNotSupportedTitle: "Dokument nije podržan",
    documentNotSupportedCaption: "Pokušajte skenirati drugi dokument.",
    documentScanErrorTitle: "Skenirajte ponovno",
    documentScanErrorCaption:
      "Pokušajte ponovno, osigurajte da je vaš dokument potpuno vidljiv i dobro osvijetljen. Držite dokument mirno kako biste spriječili zamućenje.",
    scanTimeoutErrorTitle: "Poteškoće sa skeniranjem?",
    scanTimeoutErrorCaption:
      "Provjerite nalazite li se u dobro osvijetljenoj prostoriji bez odsjaja na dokumentu, držite ga u fokusu, potpuno vidljivim i mirnim.",
  },
  faceCapture: {
    centerYourFace: "Poravnajte svoje lice",
    placeFaceInFrame: "Smjestite svoje lice u okvir",
    moveCloser: "Približite se",
    lookDirectylIntoCamera: "Gledajte ravno u kameru",
    onlyOneFaceShouldBeVisible: "Samo jedno lice treba biti vidljivo",
    keepStill: "Ostanite mirni",
  },
  documentScanning: {
    cameraLoading: "Kamera se učitava",
    helpButtonTooltip: "Trebate pomoć?",
    helpButtonBack: "Natrag",
    helpButtonNext: "Dalje",
    helpButtonDone: "Gotovo",
    helpButtonStartScanning: "Započni skeniranje",
    helpDocInfoTitle: "Držite sve detalje vidljivima",
    helpDocInfoDescription:
      "Pobrinite se da je dokument dobro osvijetljen. Sva polja na dokumentu trebaju biti vidljiva na zaslonu kamere.",
    helpDocKeepDetailsVisibleTitle: "Držite sve detalje vidljivima",
    helpDocKeepDetailsVisibleDescription:
      "Pazite da ne prekrivate dijelove dokumenta prstom, uključujući donje linije. Također, pripazite na odsjaje holograma koji prelaze preko polja dokumenta.",
    helpDocAvoidHarshLightTitle: "Pazite na jako svjetlo",
    helpDocAvoidHarshLightDescription:
      "Izbjegavajte direktno jako svjetlo jer se ono reflektira s dokumenta i može učiniti dijelove nečitljivima. Ako ne možete pročitati podatke na dokumentu, kamera ih također neće moći vidjeti.",
    helpDocKeepStillTitle: "Ostanite mirni tijekom skeniranja",
    helpDocKeepStillDescription:
      "Pokušajte držati telefon i dokument mirnima tijekom skeniranja. Pomicanje može zamutiti sliku i učiniti podatke na dokumentu nečitljivima.",
    cameraDisabled: "Kamera je onemogućena",
    cameraNotAllowed: "Nije moguće pristupiti kameri.",
    cameraInUse: "Kameru već koristi druga aplikacija.",
    cameraGenericError: "Nije moguće pristupiti kameri.",
    cameraFeedbackScanFront: "Skenirajte prednju stranu dokumenta",
    cameraFeedbackScanBack: "Skenirajte stražnju stranu dokumenta",
    cameraFeedbackFlip: "Okrenite na stražnju stranu",
    cameraFeedbackBarcodeMessage: "Skenirajte barkod",
    cameraFeedbackMoveFarther: "Udaljite se",
    cameraFeedbackMoveCloser: "Približite se",
    cameraFeedbackAdjustAngle: "Držite dokument paralelno s telefonom",
    cameraFeedbackBlur: "Držite mirno",
    cameraFeedbackGlare:
      "Nagnite ili pomaknite dokument kako biste uklonili odsjaj",
    cameraFeedbackWrongSide: "Okrenite dokument",
    cameraFeedbackFacePhotoCovered: "Držite fotografiju lica potpuno vidljivom",
    cameraFeedbackBarcode: "Skenirajte barkod",
    initializationError:
      "Komponenta se nije učitala. Pokušajte koristiti drugi uređaj ili ažurirajte preglednik.",
    checkInternetConnection: "Provjerite internetsku vezu.",
    networkError: "Mrežna pogreška.",
    scanningNotAvailable: "Skeniranje nije dostupno.",
    modalWindowClose: "Zatvori",
    documentTooCloseToEdge: "Pomaknite dokument od ruba",
    cameraFeedbackScanLastPageBarcode:
      "Skenirajte cijelu posljednju stranicu s barkodom.",
  },
  cardScanning: {
    cameraLoading: "Učitavanje kamere",
    helpButtonTooltip: "Trebate pomoć?",
    helpButtonBack: "Natrag",
    helpButtonNext: "Dalje",
    helpButtonDone: "Gotovo",
    helpButtonStartScanning: "Pokreni skeniranje",
    helpDocInfoTitle: "Prvo skenirajte broj kartice",
    helpDocInfoDescription:
      "Broj kartice obično je 16-znamenkasti i trebao bi biti otisnut ili reljefno ispisan preko kartice. Provjerite je li kartica dobro osvijetljena i svi detalji vidljivi.",
    helpDocKeepDetailsVisibleTitle: "Neka svi detalji budu vidljivi",
    helpDocKeepDetailsVisibleDescription:
      "Pazite da ne prekrivate dijelove kartice prstom, uključujući donje linije. Također, pripazite na odsjaje holograma koji prelaze preko polja kartice.",
    helpDocAvoidHarshLightTitle: "Pripazite na jako svjetlo",
    helpDocAvoidHarshLightDescription:
      "Izbjegavajte izravno, jako svjetlo jer se odbija od kartice i može učiniti dijelove kartice nečitljivima. Ako ne možete pročitati podatke na kartici, neće biti vidljivi ni kameri.",
    helpDocKeepStillTitle: "Budite mirni tijekom skeniranja",
    helpDocKeepStillDescription:
      "Pokušajte držati telefon i karticu mirno tijekom skeniranja. Pomicanje bilo čega može zamutiti sliku i učiniti podatke na kartici nečitljivima.",
    cameraDisabled: "Kamera je onemogućena",
    cameraNotAllowed: "Nije moguće pristupiti kameri.",
    cameraInUse: "Kameru već koristi druga aplikacija.",
    cameraGenericError: "Nije moguće pristupiti kameri.",
    cameraFeedbackScanFront: "Skenirajte prednju stranu kartice",
    cameraFeedbackScanBack: "Skenirajte stražnju stranu kartice",
    cameraFeedbackFlip: "Okrenite na stražnju stranu",
    cameraFeedbackBarcodeMessage: "Skenirajte barkod",
    cameraFeedbackMoveFarther: "Udaljite se",
    cameraFeedbackMoveCloser: "Približite se",
    cameraFeedbackAdjustAngle: "Držite karticu paralelno s ekranom",
    cameraFeedbackWrongSide: "Okrenite karticu",
    cameraFeedbackBarcode: "Skenirajte barkod",
    initializationError:
      "Nije uspjelo učitavanje komponente. Pokušajte koristiti drugi uređaj ili ažurirajte preglednik.",
    modalWindowClose: "Zatvori",
    checkInternetConnection: "Provjerite internetsku vezu.",
    networkError: "Greška mreže.",
    scanningNotAvailable: "Skeniranje nije dostupno.",
  },
  manualInput: {
    formTitle: "Dodaj više detalja",
    formSubtitle: "Recite nam nešto više",
    uploadButtonText: "Učitaj",
    deleteButtonText: "Izbriši",
    fileDropText: "Povuci datoteku ovdje",
    submitButtonText: "Pošalji",
    clearButtonText: "Obriši",
    requiredFieldMissing: "Ovo polje je obavezno.",
    tooLong: "Ova vrijednost je predugačka.",
    invalidInteger: "Molimo unesite valjani cijeli broj.",
    invalidDecimal: "Molimo unesite valjani decimalni broj.",
    invalidDateTime: "Molimo unesite valjani datum i vrijeme.",
    invalidDate: "Molimo unesite valjani datum.",
    invalidTime: "Molimo unesite valjano vrijeme.",
    dateOfBirthMustBeInThePast: "Datum rođenja mora biti u prošlosti.",
    invalidEmail: "Molimo unesite valjanu e-mail adresu.",
    invalidAddress: "Molimo unesite valjanu adresu.",
    invalidPhoneNumber: "Molimo unesite valjani telefonski broj.",
    invalidSsn: "Molimo unesite valjani OIB.",
    invalidFileType: "Nevažeća vrsta datoteke.",
    fileTooLarge: "Datoteka je prevelika. Molimo prenesite datoteku manju od ",
    uploadFailed: "Učitavanje nije uspjelo.",
    optionalHelperText: "opcionalno",
  },
  home: {
    title: "Potvrdimo vaš identitet",
    caption: "To će trajati samo nekoliko minuta.",
    additionalActionsCaption:
      "Možemo vas zamoliti da poduzmete dodatne korake kako biste dovršili provjeru.",
    documentVerificationStepTitle: "Skenirajte svoj dokument",
    documentVerificationAnotherStepTitle: "Skenirajte drugi dokument",
    documentVerificationStepCaption: "Uzmite svoju osobnu iskaznicu",
    cardVerificationStepTitle: "Skenirajte svoju karticu",
    cardVerificationAnotherStepTitle: "Skenirajte drugu platnu karticu",
    cardVerificationStepCaption: "Uzmite svoju kreditnu ili debitnu karticu",
    documentExtractionStepTitle: "Skenirajte svoj dokument",
    documentExtractionAnotherStepTitle: "Skenirajte drugi dokument",
    documentExtractionStepCaption: "Uzmite svoju osobnu iskaznicu",
    faceMatchStepTitle: "Napravite selfie",
    faceMatchStepCaption: "Provjerite je li vaše lice dobro osvijetljeno",
    manualInputStepTitle: "Dodajte više detalja",
    manualInputStepCaption: "Recite nam nešto više",
    uploadIdDocumentStepTitle: "Učitajte dokumente",
    uploadIdDocumentStepCaption: "Pripremite dokumente za učitavanje",
    uploadNonIdDocumentStepTitle: "Učitajte dokumente",
    uploadNonIdDocumentStepCaption: "Pripremite dokumente za učitavanje",
  },
  end: {
    identityVerifiedTitle: "Identitet potvrđen!",
    identityVerifiedCaption:
      "Hvala što ste dokazali svoj identitet - to ste cijelo vrijeme bili vi!",
    identityNotVerifiedTitle: "Identitet nije potvrđen",
    identityNotVerifiedCaption:
      "Ovog puta nismo uspjeli potvrditi vaš identitet. Molimo provjerite svoje podatke i pokušajte ponovno ili kontaktirajte podršku za pomoć.",
    identityVerifyingTitle: "Hvala! Sada potvrđujemo vaš identitet",
    identityVerifyingCaption:
      "Imamo sve što nam treba. Obavijestit ćemo vas čim završimo.",
    errorTitle: "Došlo je do greške",
    errorCaption: "Nismo mogli dovršiti provjeru. Pokušajmo ponovno.",
  },
  consentDialog: {
    title: "Treba nam vaš pristanak za:",
    caption:
      "Pohranu i/ili pristup osobnim podacima, uključujući biometrijske podatke, u svrhu potvrde identiteta.",
    privacyNoticeText:
      "Vaši izbori nam pomažu zaštititi vaše osobne podatke i unaprijediti našu tehnologiju, pritom održavajući najviše standarde privatnosti podataka, kao što je opisano u",
    privacyNoticeLink: "Obavijesti o privatnosti.",
    consentCheckboxLabel:
      "Dajem pristanak za korištenje mojih osobnih podataka, uključujući biometrijske podatke, od strane pružatelja usluge radi unaprjeđenja njegove tehnologije. (Opcionalno)",
    confirmButtonText: "Pristanak",
    rejectButtonText: "Ne dajem pristanak",
  },
  dropzone: {
    dragAndDropDescription: "ili povucite i ispustite datoteku ovdje",
    legend: "Otpremanje datoteke",
    supportedTypesDescription: "JPG ili PNG",
  },
};

const spanishTranslations = {
  d2d: {
    title: "Cambia al dispositivo móvil para continuar la verificación.",
    caption: "Cambia al dispositivo móvil para continuar la verificación.",
    qrCodeExpired: "El código QR ha expirado",
    getNewQrCode: "Obtener nuevo código QR",
    proceedWithDesktopCamera: "Continuar con la cámara de escritorio",
    instructionsTitle: "Instrucciones sobre cómo hacerlo.",
    scanCodeTitle: "Escanear código QR o copiar enlace.",
    scanCodeSubtitle:
      "Usa la cámara de tu teléfono para escanear el código que aparece en tu pantalla.",
    transferToMobilePhoneTitle: "Transferir al teléfono móvil.",
    transferToMobilePhoneSubtitle:
      "Realiza la verificación de identidad en el dispositivo móvil.",
    returnToThisDeviceTitle: "Volver a este dispositivo.",
    returnToThisDeviceSubtitle:
      "Una vez que la verificación esté completa, vuelve a este dispositivo.",
    connectionLimitReachedTitle: "Límite de conexión alcanzado.",
    connectionLimitReachedCaption:
      "Cierra las conexiones existentes e intenta de nuevo.",
    connectedTitle: "Conectado. Continúa en el dispositivo móvil.",
    connectedCaption:
      "La verificación está en curso. Sigue las instrucciones en tu teléfono.",
    errorTitle: "Error: no se pudo establecer la conexión",
    errorCaption: "No pudimos conectar con tu dispositivo móvil.",
    inactiveConnectionTitle: "Conexión inactiva.",
    inactiveConnectionCaption:
      "Por favor, revisa tu dispositivo móvil e inténtalo de nuevo.",
    deviceDisconnectedTitle: "Dispositivo desconectado.",
    deviceDisconnectedCaption:
      "El dispositivo ha perdido la conexión. Las posibles razones incluyen problemas de batería u otros problemas de conectividad.",
    continueOnDesktop: "Continuar el flujo en el escritorio",
    chooseAlternativeMethod: "o elige un método alternativo",
    copyLink: "Copiar enlace",
    expiresIn: "Expira en",
    verificationCanceledTitle: "Verificación cancelada",
    verificationCanceledCaption:
      "El proceso de verificación ha sido interrumpido.",
    cancelVerificationTitle:
      "Estás a punto de cancelar la verificación en el dispositivo móvil. ¿Estás seguro?",
    cancelVerificationCaption:
      "Tu dispositivo móvil está conectado y la verificación está en curso.",
    verificationSuccessfulTitle: "¡Verificación exitosa!",
    verificationSuccessfulCaption:
      "Tu verificación se ha completado. Por favor, vuelve a tu escritorio para continuar.",
    abortTitle: "Continuar en el escritorio.",
    abortCaption: "Ahora puedes completar tu verificación en el escritorio.",
    linkCopied:
      "¡Enlace copiado!<br />Ábrelo en tu dispositivo móvil para continuar.",
  },
  actions: {
    done: "Hecho",
    tryAgain: "Intentar de nuevo",
    start: "Comencemos",
    continue: "Continuar",
    exit: "Salir",
    back: "Atrás",
    cancel: "Cancelar",
    yesContinue: "Sí, continuar",
    startOver: "Comenzar de nuevo",
    tryScanningAgain: "Intentar de nuevo",
    switchToDesktopToContinue: "Continuar en el escritorio",
    continueAnotherWay: "Continuar de otra manera",
    upload: "Subir",
    remove: "Eliminar",
  },
  statuses: {
    cameraLoading: "Cargando cámara",
    checkingCamera: "Verificando la cámara...",
    noInternetConnection: "Sin conexión a internet",
    processing: "Procesando...",
    verificationNotAvailable: "La verificación no está disponible",
    cameraPermissionRequiredTitle: "Se requiere permiso para la cámara",
    cameraPermissionRequiredCaption:
      "No tenemos tu permiso para usar la cámara. Para continuar, asegúrate de que la cámara esté habilitada.",
    nextUp: "A continuación",
    completed: "Completado",
    retakeSelfieTitle: "Vuelve a tomar un selfie",
    retakeSelfieCaption: "Tu selfie no cumple con los requisitos",
    noCameraDevices: "No se encontraron dispositivos de cámara",
    documentNotSupportedTitle: "Documento no aceptado",
    documentNotSupportedCaption: "Intenta escanear un documento diferente.",
    documentScanErrorTitle: "Escanea nuevamente",
    documentScanErrorCaption:
      "Inténtalo de nuevo, asegurándote de que tu documento sea completamente visible y esté bien iluminado. Mantén el documento estable para evitar borrosidad.",
    scanTimeoutErrorTitle: "¿Tienes problemas para escanear?",
    scanTimeoutErrorCaption:
      "Asegúrate de estar en un espacio bien iluminado sin reflejos en el documento, mantén el documento en foco, completamente visible y quieto.",
  },
  faceCapture: {
    centerYourFace: "Centra tu rostro",
    placeFaceInFrame: "Coloca tu rostro en el marco",
    moveCloser: "Acércate más",
    lookDirectylIntoCamera: "Mira directamente a la cámara",
    onlyOneFaceShouldBeVisible: "Solo debe ser visible un rostro",
    keepStill: "Mantente quieto",
  },
  documentScanning: {
    cameraLoading: "Cargando la cámara",
    helpButtonTooltip: "¿Necesitas ayuda?",
    helpButtonBack: "Atrás",
    helpButtonNext: "Siguiente",
    helpButtonDone: "Hecho",
    helpButtonStartScanning: "Iniciar escaneo",
    helpDocInfoTitle: "Mantén todos los detalles visibles",
    helpDocInfoDescription:
      "Asegúrate de mantener el documento bien iluminado. Todos los campos del documento deben ser visibles en la pantalla de la cámara.",
    helpDocKeepDetailsVisibleTitle: "Mantén todos los detalles visibles",
    helpDocKeepDetailsVisibleDescription:
      "Asegúrate de no cubrir partes del documento con un dedo, incluidas las líneas inferiores. También evita reflejos de hologramas sobre los campos del documento.",
    helpDocAvoidHarshLightTitle: "Evita la luz intensa",
    helpDocAvoidHarshLightDescription:
      "Evita la luz directa e intensa, ya que puede reflejarse en el documento y hacer que algunas partes sean ilegibles. Si no puedes leer los datos en el documento, la cámara tampoco podrá hacerlo.",
    helpDocKeepStillTitle: "Mantente quieto mientras escaneas",
    helpDocKeepStillDescription:
      "Intenta mantener el teléfono y el documento quietos mientras escaneas. Mover cualquiera de los dos puede desenfocar la imagen y hacer que los datos sean ilegibles.",
    cameraDisabled: "Cámara deshabilitada",
    cameraNotAllowed: "No se puede acceder a la cámara.",
    cameraInUse: "La cámara ya está siendo utilizada por otra aplicación.",
    cameraGenericError: "No se puede acceder a la cámara.",
    cameraFeedbackScanFront: "Escanea el lado frontal del documento",
    cameraFeedbackScanBack: "Escanea el lado trasero del documento",
    cameraFeedbackFlip: "Voltea al lado trasero",
    cameraFeedbackBarcodeMessage: "Escanea el código de barras",
    cameraFeedbackMoveFarther: "Aléjate más",
    cameraFeedbackMoveCloser: "Acércate más",
    cameraFeedbackAdjustAngle: "Mantenga el documento paralelo al teléfono",
    cameraFeedbackBlur: "Mantente quieto",
    cameraFeedbackGlare: "Inclina o mueve el documento para eliminar reflejos",
    cameraFeedbackWrongSide: "Voltea el documento",
    cameraFeedbackFacePhotoCovered:
      "Mantén la foto del rostro completamente visible",
    cameraFeedbackBarcode: "Escanea el código de barras",
    initializationError:
      "Error al cargar el componente. Intenta usar otro dispositivo o actualizar tu navegador.",
    checkInternetConnection: "Verifica la conexión a internet.",
    networkError: "Error de red.",
    scanningNotAvailable: "Escaneo no disponible.",
    modalWindowClose: "Cerrar",
    documentTooCloseToEdge: "Mueve el documento lejos del borde",
    cameraFeedbackScanLastPageBarcode:
      "Escanea toda la última página con el código de barras.",
  },
  cardScanning: {
    cameraLoading: "Cargando cámara",
    helpButtonTooltip: "¿Necesitas ayuda?",
    helpButtonBack: "Atrás",
    helpButtonNext: "Siguiente",
    helpButtonDone: "Listo",
    helpButtonStartScanning: "Iniciar escaneo",
    helpDocInfoTitle: "Primero escanee el número de tarjeta",
    helpDocInfoDescription:
      "El número de tarjeta suele tener 16 dígitos y debe estar impreso o grabado en relieve en la tarjeta. Asegúrese de que la tarjeta esté bien iluminada y todos los detalles sean visibles.",
    helpDocKeepDetailsVisibleTitle: "Mantenga todos los detalles visibles",
    helpDocKeepDetailsVisibleDescription:
      "Asegúrese de no cubrir partes de la tarjeta con un dedo, incluidas las líneas inferiores. Además, tenga cuidado con los reflejos de hologramas que cubran los campos de la tarjeta.",
    helpDocAvoidHarshLightTitle: "Cuidado con la luz fuerte",
    helpDocAvoidHarshLightDescription:
      "Evite la luz directa y fuerte, ya que se refleja en la tarjeta y puede hacer que partes de la misma sean ilegibles. Si no puede leer los datos de la tarjeta, tampoco serán visibles para la cámara.",
    helpDocKeepStillTitle: "Manténgase quieto mientras escanea",
    helpDocKeepStillDescription:
      "Intente mantener el teléfono y la tarjeta quietos mientras escanea. Mover cualquiera de ellos puede difuminar la imagen y hacer que los datos de la tarjeta sean ilegibles.",
    cameraDisabled: "Cámara deshabilitada",
    cameraNotAllowed: "No se puede acceder a la cámara.",
    cameraInUse: "La cámara ya está siendo utilizada por otra aplicación.",
    cameraGenericError: "No se puede acceder a la cámara.",
    cameraFeedbackScanFront: "Escanee la parte frontal de una tarjeta",
    cameraFeedbackScanBack: "Escanee la parte trasera de una tarjeta",
    cameraFeedbackFlip: "Girar a la parte trasera",
    cameraFeedbackBarcodeMessage: "Escanear el código de barras",
    cameraFeedbackMoveFarther: "Aléjate más",
    cameraFeedbackMoveCloser: "Acércate más",
    cameraFeedbackAdjustAngle: "Mantén la tarjeta paralela a la pantalla",
    cameraFeedbackWrongSide: "Girar la tarjeta",
    cameraFeedbackBarcode: "Escanear el código de barras",
    initializationError:
      "Error al cargar el componente. Intente usar otro dispositivo o actualice su navegador.",
    modalWindowClose: "Cerrar",
    checkInternetConnection: "Comprobar conexión a internet.",
    networkError: "Error de red.",
    scanningNotAvailable: "Escaneo no disponible.",
  },
  manualInput: {
    formTitle: "Añadir más detalles",
    formSubtitle: "Cuéntanos un poco más",
    uploadButtonText: "Subir",
    deleteButtonText: "Eliminar",
    fileDropText: "Arrastra el archivo aquí",
    submitButtonText: "Enviar",
    clearButtonText: "Limpiar",
    requiredFieldMissing: "Este campo es obligatorio.",
    tooLong: "Este valor es demasiado largo.",
    invalidInteger: "Por favor, introduce un número entero válido.",
    invalidDecimal: "Por favor, introduce un número decimal válido.",
    invalidDateTime: "Por favor, introduce una fecha y hora válidas.",
    invalidDate: "Por favor, introduce una fecha válida.",
    invalidTime: "Por favor, introduce una hora válida.",
    dateOfBirthMustBeInThePast: "La fecha de nacimiento debe ser en el pasado.",
    invalidEmail:
      "Por favor, introduce una dirección de correo electrónico válida.",
    invalidAddress: "Por favor, introduce una dirección válida.",
    invalidPhoneNumber: "Por favor, introduce un número de teléfono válido.",
    invalidSsn: "Por favor, introduce un número de seguro social válido.",
    invalidFileType: "Tipo de archivo no válido.",
    fileTooLarge: "El archivo es demasiado grande.",
    uploadFailed:
      "El archivo es demasiado grande. Por favor, suba un archivo más pequeño que ",
    optionalHelperText: "opcionalno",
  },
  home: {
    title: "Verifiquemos tu identidad",
    caption: "Esto solo tomará un par de minutos.",
    additionalActionsCaption:
      "Podríamos pedirte que realices acciones adicionales para completar tu verificación.",
    documentVerificationStepTitle: "Escanea tu documento",
    documentVerificationAnotherStepTitle: "Escanear otro documento",
    documentVerificationStepCaption: "Toma tu identificación",
    cardVerificationStepTitle: "Escanee su tarjeta",
    cardVerificationAnotherStepTitle: "Escanear otra tarjeta de pago",
    cardVerificationStepCaption: "Vaya a buscar su tarjeta de crédito o débito",
    documentExtractionStepTitle: "Escanea tu documento",
    documentExtractionAnotherStepTitle: "Escanear otro documento",
    documentExtractionStepCaption: "Toma tu identificación",
    faceMatchStepTitle: "Hazte un selfie",
    faceMatchStepCaption: "Asegúrate de que tu rostro esté bien iluminado",
    manualInputStepTitle: "Añadir más detalles",
    manualInputStepCaption: "Cuéntanos un poco más",
    uploadIdDocumentStepTitle: "Subir documentos",
    uploadIdDocumentStepCaption: "Preparar documentos para subir",
    uploadNonIdDocumentStepTitle: "Subir documentos",
    uploadNonIdDocumentStepCaption: "Preparar documentos para subir",
  },
  end: {
    identityVerifiedTitle: "¡Identidad verificada!",
    identityVerifiedCaption:
      "Gracias por demostrar tu identidad, ¡siempre fuiste tú!",
    identityNotVerifiedTitle: "Identidad no verificada",
    identityNotVerifiedCaption:
      "No pudimos verificar tu identidad esta vez. Por favor, verifica tu información e inténtalo nuevamente, o contacta al soporte para obtener ayuda.",
    identityVerifyingTitle: "¡Gracias! Estamos verificando tu identidad",
    identityVerifyingCaption:
      "Ya tenemos todo lo que necesitamos. Te notificaremos tan pronto como terminemos.",
    errorTitle: "Algo salió mal",
    errorCaption:
      "No pudimos completar la verificación. Intentémosla de nuevo.",
  },
  consentDialog: {
    title: "Necesitamos tu consentimiento para:",
    caption:
      "Guardar y/o acceder a información personal que puede incluir datos biométricos, con el fin de verificar tu identidad.",
    privacyNoticeText:
      "Tus elecciones nos ayudan a proteger tu información personal y mejorar nuestra tecnología, manteniendo los más altos estándares de privacidad de datos, como se describe en la",
    privacyNoticeLink: "Aviso de privacidad.",
    consentCheckboxLabel:
      "Doy mi consentimiento para el uso de mis datos personales, incluyendo datos biométricos, por parte del proveedor para mejorar su tecnología. (Opcional)",
    confirmButtonText: "Consentir",
    rejectButtonText: "No consentir",
  },
  dropzone: {
    dragAndDropDescription: "o arrastra el archivo aquí",
    legend: "Subir archivo",
    supportedTypesDescription: "JPG o PNG",
  },
};

export function getTranslationMessages(key) {
  switch (key?.toUpperCase()) {
    case "HR":
      return croatianTranslations;
    case "DE":
      return germanTranslations;
    case "ES":
      return spanishTranslations;
    default:
      return undefined; // Use default english translations
  }
}
