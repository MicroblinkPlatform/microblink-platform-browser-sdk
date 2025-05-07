/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */

const germanTranslations = {
  d2d: {
    title: 'Zum Mobilgerät wechseln, um die Verifizierung fortzusetzen.',
    caption: 'Zum Mobilgerät wechseln, um die Verifizierung fortzusetzen.',
    qrCodeExpired: 'QR-Code ist abgelaufen',
    getNewQrCode: 'Neuen QR-Code abrufen',
    proceedWithDesktopCamera: 'Mit der Desktop-Kamera fortfahren',
    instructionsTitle: 'Anleitung zur Vorgehensweise.',
    scanCodeTitle: 'QR-Code scannen oder Link kopieren.',
    scanCodeSubtitle:
      'Verwenden Sie die Kamera Ihres Telefons, um den auf Ihrem Bildschirm angezeigten Code zu scannen.',
    transferToMobilePhoneTitle: 'Zum Mobiltelefon übertragen.',
    transferToMobilePhoneSubtitle:
      'Führen Sie die Identitätsprüfung auf dem Mobilgerät durch.',
    returnToThisDeviceTitle: 'Zu diesem Gerät zurückkehren.',
    returnToThisDeviceSubtitle:
      'Sobald die Verifizierung abgeschlossen ist, kehren Sie zu diesem Gerät zurück.',
    connectionLimitReachedTitle: 'Verbindungslimit erreicht.',
    connectionLimitReachedCaption:
      'Schließen Sie die bestehenden Verbindungen und versuchen Sie es erneut.',
    connectedTitle: 'Verbunden. Auf dem Mobilgerät fortfahren.',
    connectedCaption:
      'Die Verifizierung wird durchgeführt. Befolgen Sie die Anweisungen auf Ihrem Telefon.',
    errorTitle: 'Fehler: Verbindung konnte nicht hergestellt werden',
    errorCaption:
      'Wir konnten keine Verbindung zu Ihrem Mobilgerät herstellen.',
    inactiveConnectionTitle: 'Inaktive Verbindung.',
    inactiveConnectionCaption:
      'Bitte überprüfen Sie Ihr Mobilgerät und versuchen Sie es erneut.',
    deviceDisconnectedTitle: 'Gerät getrennt.',
    deviceDisconnectedCaption:
      'Die Verbindung zum Gerät wurde unterbrochen. Mögliche Gründe sind Batterie- oder andere Verbindungsprobleme.',
    continueOnDesktop: 'Den Vorgang auf dem Desktop fortsetzen',
    chooseAlternativeMethod: 'oder eine alternative Methode wählen',
    copyLink: 'Link kopieren',
    expiresIn: 'Läuft ab in',
    verificationCanceledTitle: 'Verifizierung abgebrochen',
    verificationCanceledCaption:
      'Der Verifizierungsprozess wurde unterbrochen.',
    cancelVerificationTitle:
      'Sie sind dabei, die Verifizierung auf dem Mobilgerät abzubrechen. Sind Sie sicher?',
    cancelVerificationCaption:
      'Ihr Mobilgerät ist verbunden, und die Verifizierung läuft.',
    verificationSuccessfulTitle: 'Verifizierung erfolgreich!',
    verificationSuccessfulCaption:
      'Ihre Verifizierung ist abgeschlossen. Bitte kehren Sie zu Ihrem Desktop zurück, um fortzufahren.',
    abortTitle: 'Auf dem Desktop fortfahren.',
    abortCaption:
      'Sie können Ihre Verifizierung jetzt auf dem Desktop abschließen.',
    linkCopied:
      'Link kopiert!<br />Öffnen Sie ihn auf Ihrem Mobilgerät, um fortzufahren.',
  },
  actions: {
    done: 'Fertig',
    tryAgain: 'Erneut versuchen',
    start: "Los geht's",
    continue: 'Weiter',
    exit: 'Beenden',
    back: 'Zurück',
    cancel: 'Abbrechen',
    yesContinue: 'Ja, fortfahren',
  },
  statuses: {
    cameraLoading: 'Kamera wird geladen',
    checkingCamera: 'Kamera wird überprüft...',
    noInternetConnection: 'Keine Internetverbindung',
    processing: 'Wird verarbeitet...',
    verificationNotAvailable: 'Verifizierung nicht verfügbar',
    cameraPermissionRequiredTitle: 'Kamerazugriff erforderlich',
    cameraPermissionRequiredCaption:
      'Wir haben keine Berechtigung, die Kamera zu verwenden. Um fortzufahren, stellen Sie bitte sicher, dass die Kamera aktiviert ist.',
    nextUp: 'Als Nächstes',
    completed: 'Abgeschlossen',
    retakeSelfieTitle: 'Selfie wiederholen',
    retakeSelfieCaption: 'Ihr Selfie erfüllt nicht die Anforderungen',
    noCameraDevices: 'Keine Kamerageräte gefunden',
    documentNotSupportedTitle: 'Dokument nicht akzeptiert',
    documentNotSupportedCaption:
      'Versuchen Sie, ein anderes Dokument zu scannen.',
    documentScanErrorTitle: 'Erneut scannen',
    documentScanErrorCaption:
      'Versuchen Sie es erneut und stellen Sie sicher, dass Ihr Dokument vollständig sichtbar und gut beleuchtet ist. Halten Sie das Dokument ruhig, um Unschärfe zu vermeiden.',
  },
  faceCapture: {
    centerYourFace: 'Positionieren Sie Ihr Gesicht in der Mitte',
    placeFaceInFrame: 'Platzieren Sie Ihr Gesicht im Rahmen',
    moveCloser: 'Kommen Sie näher',
    lookDirectylIntoCamera: 'Schauen Sie direkt in die Kamera',
    onlyOneFaceShouldBeVisible: 'Es sollte nur ein Gesicht sichtbar sein',
    keepStill: 'Stillhalten',
  },
  documentVerification: {
    cameraLoading: 'Kamera wird geladen',
    helpButtonTooltip: 'Brauchen Sie Hilfe?',
    helpButtonBack: 'Zurück',
    helpButtonNext: 'Weiter',
    helpButtonDone: 'Fertig',
    helpButtonStartScanning: 'Scan starten',
    helpDocInfoTitle: 'Halten Sie alle Details sichtbar',
    helpDocInfoDescription:
      'Stellen Sie sicher, dass das Dokument gut beleuchtet ist. Alle Felder des Dokuments sollten auf dem Kamerabildschirm sichtbar sein.',
    helpDocKeepDetailsVisibleTitle: 'Halten Sie alle Details sichtbar',
    helpDocKeepDetailsVisibleDescription:
      'Stellen Sie sicher, dass Sie keine Teile des Dokuments mit einem Finger abdecken, einschließlich der unteren Linien. Achten Sie auch auf Hologrammreflexionen, die über die Dokumentfelder gehen.',
    helpDocAvoidHarshLightTitle: 'Achten Sie auf starkes Licht',
    helpDocAvoidHarshLightDescription:
      'Vermeiden Sie direktes, starkes Licht, da es vom Dokument reflektiert wird und Teile des Dokuments unlesbar machen kann. Wenn Sie die Daten auf dem Dokument nicht lesen können, wird die Kamera sie auch nicht sehen.',
    helpDocKeepStillTitle: 'Bleiben Sie während des Scannens ruhig',
    helpDocKeepStillDescription:
      'Versuchen Sie, das Telefon und das Dokument während des Scannens ruhig zu halten. Bewegung kann das Bild verwischen und die Daten auf dem Dokument unlesbar machen.',
    cameraDisabled: 'Kamera deaktiviert',
    cameraNotAllowed: 'Kein Zugriff auf die Kamera möglich.',
    cameraInUse:
      'Die Kamera wird bereits von einer anderen Anwendung verwendet.',
    cameraGenericError: 'Kein Zugriff auf die Kamera möglich.',
    cameraFeedbackScanFront: 'Scannen Sie die Vorderseite des Dokuments',
    cameraFeedbackScanBack: 'Scannen Sie die Rückseite des Dokuments',
    cameraFeedbackFlip: 'Drehen Sie zur Rückseite',
    cameraFeedbackBarcodeMessage: 'Scannen Sie den Barcode',
    cameraFeedbackMoveFarther: 'Weiter weg bewegen',
    cameraFeedbackMoveCloser: 'Näher heran bewegen',
    cameraFeedbackAdjustAngle: 'Winkel anpassen',
    cameraFeedbackBlur: 'Still halten',
    cameraFeedbackGlare:
      'Kippen oder bewegen Sie das Dokument, um Reflexionen zu entfernen',
    cameraFeedbackWrongSide: 'Drehen Sie das Dokument um',
    cameraFeedbackFacePhotoCovered:
      'Halten Sie das Gesichtsfoto vollständig sichtbar',
    cameraFeedbackBarcode: 'Scannen Sie den Barcode',
    initializationError:
      'Komponente konnte nicht geladen werden. Versuchen Sie ein anderes Gerät oder aktualisieren Sie Ihren Browser.',
    checkInternetConnection: 'Überprüfen Sie die Internetverbindung.',
    networkError: 'Netzwerkfehler.',
    scanningNotAvailable: 'Scannen ist nicht verfügbar.',
    modalWindowClose: 'Schließen',
  },
  documentExtraction: {
    cameraLoading: 'Kamera wird geladen',
    helpButtonTooltip: 'Brauchen Sie Hilfe?',
    helpButtonBack: 'Zurück',
    helpButtonNext: 'Weiter',
    helpButtonDone: 'Fertig',
    helpButtonStartScanning: 'Scan starten',
    helpDocInfoTitle: 'Halten Sie alle Details sichtbar',
    helpDocInfoDescription:
      'Stellen Sie sicher, dass das Dokument gut beleuchtet ist. Alle Felder des Dokuments sollten auf dem Kamerabildschirm sichtbar sein.',
    helpDocKeepDetailsVisibleTitle: 'Halten Sie alle Details sichtbar',
    helpDocKeepDetailsVisibleDescription:
      'Stellen Sie sicher, dass Sie keine Teile des Dokuments mit einem Finger abdecken, einschließlich der unteren Linien. Achten Sie auch auf Hologrammreflexionen, die über die Dokumentfelder gehen.',
    helpDocAvoidHarshLightTitle: 'Achten Sie auf starkes Licht',
    helpDocAvoidHarshLightDescription:
      'Vermeiden Sie direktes, starkes Licht, da es vom Dokument reflektiert wird und Teile des Dokuments unlesbar machen kann. Wenn Sie die Daten auf dem Dokument nicht lesen können, wird die Kamera sie auch nicht sehen.',
    helpDocKeepStillTitle: 'Bleiben Sie während des Scannens ruhig',
    helpDocKeepStillDescription:
      'Versuchen Sie, das Telefon und das Dokument während des Scannens ruhig zu halten. Bewegung kann das Bild verwischen und die Daten auf dem Dokument unlesbar machen.',
    cameraDisabled: 'Kamera deaktiviert',
    cameraNotAllowed: 'Kein Zugriff auf die Kamera möglich.',
    cameraInUse:
      'Die Kamera wird bereits von einer anderen Anwendung verwendet.',
    cameraGenericError: 'Kein Zugriff auf die Kamera möglich.',
    cameraFeedbackScanFront: 'Scannen Sie die Vorderseite des Dokuments',
    cameraFeedbackScanBack: 'Scannen Sie die Rückseite des Dokuments',
    cameraFeedbackFlip: 'Drehen Sie zur Rückseite',
    cameraFeedbackBarcodeMessage: 'Scannen Sie den Barcode',
    cameraFeedbackMoveFarther: 'Weiter weg bewegen',
    cameraFeedbackMoveCloser: 'Näher heran bewegen',
    cameraFeedbackAdjustAngle: 'Winkel anpassen',
    cameraFeedbackBlur: 'Still halten',
    cameraFeedbackGlare:
      'Kippen oder bewegen Sie das Dokument, um Reflexionen zu entfernen',
    cameraFeedbackWrongSide: 'Drehen Sie das Dokument um',
    cameraFeedbackFacePhotoCovered:
      'Halten Sie das Gesichtsfoto vollständig sichtbar',
    cameraFeedbackBarcode: 'Scannen Sie den Barcode',
    initializationError:
      'Komponente konnte nicht geladen werden. Versuchen Sie ein anderes Gerät oder aktualisieren Sie Ihren Browser.',
    checkInternetConnection: 'Überprüfen Sie die Internetverbindung.',
    networkError: 'Netzwerkfehler.',
    scanningNotAvailable: 'Scannen ist nicht verfügbar.',
    modalWindowClose: 'Schließen',
  },
  manualInput: {
    formTitle: 'Weitere Details hinzufügen',
    formSubtitle: 'Erzähl uns ein bisschen mehr',
    uploadButtonText: 'Hochladen',
    deleteButtonText: 'Löschen',
    fileDropText: 'Datei hier ablegen',
    submitButtonText: 'Absenden',
    requiredFieldMissing: 'Dies ist ein Pflichtfeld.',
    tooLong: 'Dieser Wert ist zu lang.',
    invalidInteger: 'Bitte geben Sie eine gültige ganze Zahl ein.',
    invalidDecimal: 'Bitte geben Sie eine gültige Dezimalzahl ein.',
    invalidDateTime:
      'Bitte geben Sie ein gültiges Datum und eine gültige Uhrzeit ein.',
    invalidDate: 'Bitte geben Sie ein gültiges Datum ein.',
    invalidTime: 'Bitte geben Sie eine gültige Uhrzeit ein.',
    dateOfBirthMustBeInThePast:
      'Das Geburtsdatum muss in der Vergangenheit liegen.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    invalidAddress: 'Bitte geben Sie eine gültige Adresse ein.',
    invalidPhoneNumber: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    invalidSsn: 'Bitte geben Sie eine gültige Sozialversicherungsnummer ein.',
    invalidFileType: 'Ungültiger Dateityp.',
    fileTooLarge: 'Datei ist zu groß.',
    uploadFailed: 'Hochladen fehlgeschlagen.',
  },
  home: {
    title: 'Lassen Sie uns Ihre Identität überprüfen',
    caption: 'Das dauert nur ein paar Minuten.',
    additionalActionsCaption:
      'Wir werden Sie möglicherweise um zusätzliche Schritte bitten, um Ihre Verifizierung abzuschließen.',
    documentVerificationStepTitle: 'Scannen Sie Ihr Dokument',
    documentVerificationStepCaption: 'Holen Sie Ihren Ausweis',
    documentExtractionStepTitle: 'Scannen Sie Ihr Dokument',
    documentExtractionStepCaption: 'Holen Sie Ihren Ausweis',
    faceMatchStepTitle: 'Machen Sie ein Selfie',
    faceMatchStepCaption:
      'Stellen Sie sicher, dass Ihr Gesicht gut beleuchtet ist',
    manualInputStepTitle: 'Weitere Details hinzufügen',
    manualInputStepCaption: 'Erzähl uns ein bisschen mehr',
  },
  end: {
    identityVerifiedTitle: 'Identität verifiziert!',
    identityVerifiedCaption:
      'Vielen Dank, dass Sie Ihre Identität nachgewiesen haben - Sie waren es die ganze Zeit!',
    identityNotVerifiedTitle: 'Identität nicht verifiziert',
    identityNotVerifiedCaption:
      'Wir konnten Ihre Identität dieses Mal nicht verifizieren. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut, oder kontaktieren Sie den Support für Hilfe.',
    identityVerifyingTitle: 'Danke! Wir überprüfen Ihre Identität jetzt',
    identityVerifyingCaption:
      'Wir haben alles, was wir brauchen. Wir benachrichtigen Sie, sobald es abgeschlossen ist.',
  },
};

const croatianTranslations = {
  d2d: {
    title: 'Prebacite se na mobilni uređaj za nastavak provjere.',
    caption: 'Prebacite se na mobilni uređaj za nastavak provjere.',
    qrCodeExpired: 'QR kod je istekao',
    getNewQrCode: 'Preuzmi novi QR kod',
    proceedWithDesktopCamera: 'Nastavi s kamerom na računalu',
    instructionsTitle: 'Upute kako to učiniti.',
    scanCodeTitle: 'Skeniraj QR kod ili kopiraj poveznicu.',
    scanCodeSubtitle:
      'Upotrijebite kameru svog telefona za skeniranje koda prikazanog na zaslonu.',
    transferToMobilePhoneTitle: 'Prebaci na mobilni telefon.',
    transferToMobilePhoneSubtitle:
      'Provedite provjeru identiteta na mobilnom uređaju.',
    returnToThisDeviceTitle: 'Vrati se na ovaj uređaj.',
    returnToThisDeviceSubtitle:
      'Nakon završetka provjere, vratite se na ovaj uređaj.',
    connectionLimitReachedTitle: 'Dosegnuto ograničenje veze.',
    connectionLimitReachedCaption:
      'Zatvorite postojeće veze i pokušajte ponovo.',
    connectedTitle: 'Povezano. Nastavite na mobilnom uređaju.',
    connectedCaption: 'Provjera je u tijeku. Slijedite upute na svom telefonu.',
    errorTitle: 'Greška: nemoguće uspostaviti vezu',
    errorCaption: 'Nismo se mogli povezati s vašim mobilnim uređajem.',
    inactiveConnectionTitle: 'Neaktivna veza.',
    inactiveConnectionCaption:
      'Molimo provjerite svoj mobilni uređaj i pokušajte ponovo.',
    deviceDisconnectedTitle: 'Uređaj je prekinuo vezu.',
    deviceDisconnectedCaption:
      'Veza s uređajem je izgubljena. Mogući razlozi uključuju probleme s baterijom ili druge probleme s povezivanjem.',
    continueOnDesktop: 'Nastavite postupak na radnoj površini',
    chooseAlternativeMethod: 'ili odaberite alternativnu metodu',
    copyLink: 'Kopiraj poveznicu',
    expiresIn: 'Istječe za',
    verificationCanceledTitle: 'Provjera je otkazana',
    verificationCanceledCaption: 'Postupak provjere je prekinut.',
    cancelVerificationTitle:
      'Upravo ćete otkazati provjeru na mobilnom uređaju. Jeste li sigurni?',
    cancelVerificationCaption:
      'Vaš mobilni uređaj je povezan i provjera je u tijeku.',
    verificationSuccessfulTitle: 'Provjera uspješna!',
    verificationSuccessfulCaption:
      'Vaša provjera je završena. Molimo vratite se na radnu površinu kako biste nastavili.',
    abortTitle: 'Nastavite na radnoj površini.',
    abortCaption: 'Svoju provjeru sada možete dovršiti na radnoj površini.',
    linkCopied:
      'Poveznica kopirana!<br />Otvorite je na svom mobilnom uređaju za nastavak.',
  },
  actions: {
    done: 'Gotovo',
    tryAgain: 'Pokušaj ponovno',
    start: 'Krenimo',
    continue: 'Nastavi',
    exit: 'Izađi',
    back: 'Natrag',
    cancel: 'Odustani',
    yesContinue: 'Da, nastavi',
  },
  statuses: {
    cameraLoading: 'Učitavanje kamere',
    checkingCamera: 'Provjera kamere...',
    noInternetConnection: 'Nema internetske veze',
    processing: 'Obrada...',
    verificationNotAvailable: 'Provjera nije dostupna',
    cameraPermissionRequiredTitle: 'Potrebno dopuštenje za kameru',
    cameraPermissionRequiredCaption:
      'Nemamo vaše dopuštenje za korištenje kamere. Da biste nastavili, provjerite je li kamera omogućena.',
    nextUp: 'Sljedeće',
    completed: 'Završeno',
    retakeSelfieTitle: 'Ponovno snimite selfie',
    retakeSelfieCaption:
      'Pokušajte ponovno, držite oči otvorenima, lice potpuno vidljivo i osigurajte dovoljnu količinu svjetlosti.',
    noCameraDevices: 'Nema pronađenih kamera',
    documentNotSupportedTitle: 'Dokument nije podržan',
    documentNotSupportedCaption: 'Pokušajte skenirati drugi dokument.',
    documentScanErrorTitle: 'Skenirajte ponovno',
    documentScanErrorCaption:
      'Pokušajte ponovno, osigurajte da je vaš dokument potpuno vidljiv i dobro osvijetljen. Držite dokument mirno kako biste spriječili zamućenje.',
  },
  faceCapture: {
    centerYourFace: 'Poravnajte svoje lice',
    placeFaceInFrame: 'Smjestite svoje lice u okvir',
    moveCloser: 'Približite se',
    lookDirectylIntoCamera: 'Gledajte ravno u kameru',
    onlyOneFaceShouldBeVisible: 'Samo jedno lice treba biti vidljivo',
    keepStill: 'Ostanite mirni',
  },
  documentVerification: {
    cameraLoading: 'Kamera se učitava',
    helpButtonTooltip: 'Trebate pomoć?',
    helpButtonBack: 'Natrag',
    helpButtonNext: 'Dalje',
    helpButtonDone: 'Gotovo',
    helpButtonStartScanning: 'Započni skeniranje',
    helpDocInfoTitle: 'Držite sve detalje vidljivima',
    helpDocInfoDescription:
      'Pobrinite se da je dokument dobro osvijetljen. Sva polja na dokumentu trebaju biti vidljiva na zaslonu kamere.',
    helpDocKeepDetailsVisibleTitle: 'Držite sve detalje vidljivima',
    helpDocKeepDetailsVisibleDescription:
      'Pazite da ne prekrivate dijelove dokumenta prstom, uključujući donje linije. Također, pripazite na odsjaje holograma koji prelaze preko polja dokumenta.',
    helpDocAvoidHarshLightTitle: 'Pazite na jako svjetlo',
    helpDocAvoidHarshLightDescription:
      'Izbjegavajte direktno jako svjetlo jer se ono reflektira s dokumenta i može učiniti dijelove nečitljivima. Ako ne možete pročitati podatke na dokumentu, kamera ih također neće moći vidjeti.',
    helpDocKeepStillTitle: 'Ostanite mirni tijekom skeniranja',
    helpDocKeepStillDescription:
      'Pokušajte držati telefon i dokument mirnima tijekom skeniranja. Pomicanje može zamutiti sliku i učiniti podatke na dokumentu nečitljivima.',
    cameraDisabled: 'Kamera je onemogućena',
    cameraNotAllowed: 'Nije moguće pristupiti kameri.',
    cameraInUse: 'Kameru već koristi druga aplikacija.',
    cameraGenericError: 'Nije moguće pristupiti kameri.',
    cameraFeedbackScanFront: 'Skenirajte prednju stranu dokumenta',
    cameraFeedbackScanBack: 'Skenirajte stražnju stranu dokumenta',
    cameraFeedbackFlip: 'Okrenite na stražnju stranu',
    cameraFeedbackBarcodeMessage: 'Skenirajte barkod',
    cameraFeedbackMoveFarther: 'Udaljite se',
    cameraFeedbackMoveCloser: 'Približite se',
    cameraFeedbackAdjustAngle: 'Podesite kut',
    cameraFeedbackBlur: 'Držite mirno',
    cameraFeedbackGlare:
      'Nagnite ili pomaknite dokument kako biste uklonili odsjaj',
    cameraFeedbackWrongSide: 'Okrenite dokument',
    cameraFeedbackFacePhotoCovered: 'Držite fotografiju lica potpuno vidljivom',
    cameraFeedbackBarcode: 'Skenirajte barkod',
    initializationError:
      'Komponenta se nije učitala. Pokušajte koristiti drugi uređaj ili ažurirajte preglednik.',
    checkInternetConnection: 'Provjerite internetsku vezu.',
    networkError: 'Mrežna pogreška.',
    scanningNotAvailable: 'Skeniranje nije dostupno.',
    modalWindowClose: 'Zatvori',
  },
  documentExtraction: {
    cameraLoading: 'Kamera se učitava',
    helpButtonTooltip: 'Trebate pomoć?',
    helpButtonBack: 'Natrag',
    helpButtonNext: 'Dalje',
    helpButtonDone: 'Gotovo',
    helpButtonStartScanning: 'Započni skeniranje',
    helpDocInfoTitle: 'Držite sve detalje vidljivima',
    helpDocInfoDescription:
      'Pobrinite se da je dokument dobro osvijetljen. Sva polja na dokumentu trebaju biti vidljiva na zaslonu kamere.',
    helpDocKeepDetailsVisibleTitle: 'Držite sve detalje vidljivima',
    helpDocKeepDetailsVisibleDescription:
      'Pazite da ne prekrivate dijelove dokumenta prstom, uključujući donje linije. Također, pripazite na odsjaje holograma koji prelaze preko polja dokumenta.',
    helpDocAvoidHarshLightTitle: 'Pazite na jako svjetlo',
    helpDocAvoidHarshLightDescription:
      'Izbjegavajte direktno jako svjetlo jer se ono reflektira s dokumenta i može učiniti dijelove nečitljivima. Ako ne možete pročitati podatke na dokumentu, kamera ih također neće moći vidjeti.',
    helpDocKeepStillTitle: 'Ostanite mirni tijekom skeniranja',
    helpDocKeepStillDescription:
      'Pokušajte držati telefon i dokument mirnima tijekom skeniranja. Pomicanje može zamutiti sliku i učiniti podatke na dokumentu nečitljivima.',
    cameraDisabled: 'Kamera je onemogućena',
    cameraNotAllowed: 'Nije moguće pristupiti kameri.',
    cameraInUse: 'Kameru već koristi druga aplikacija.',
    cameraGenericError: 'Nije moguće pristupiti kameri.',
    cameraFeedbackScanFront: 'Skenirajte prednju stranu dokumenta',
    cameraFeedbackScanBack: 'Skenirajte stražnju stranu dokumenta',
    cameraFeedbackFlip: 'Okrenite na stražnju stranu',
    cameraFeedbackBarcodeMessage: 'Skenirajte barkod',
    cameraFeedbackMoveFarther: 'Udaljite se',
    cameraFeedbackMoveCloser: 'Približite se',
    cameraFeedbackAdjustAngle: 'Podesite kut',
    cameraFeedbackBlur: 'Držite mirno',
    cameraFeedbackGlare:
      'Nagnite ili pomaknite dokument kako biste uklonili odsjaj',
    cameraFeedbackWrongSide: 'Okrenite dokument',
    cameraFeedbackFacePhotoCovered: 'Držite fotografiju lica potpuno vidljivom',
    cameraFeedbackBarcode: 'Skenirajte barkod',
    initializationError:
      'Komponenta se nije učitala. Pokušajte koristiti drugi uređaj ili ažurirajte preglednik.',
    checkInternetConnection: 'Provjerite internetsku vezu.',
    networkError: 'Mrežna pogreška.',
    scanningNotAvailable: 'Skeniranje nije dostupno.',
    modalWindowClose: 'Zatvori',
  },
  manualInput: {
    formTitle: 'Dodaj više detalja',
    formSubtitle: 'Recite nam nešto više',
    uploadButtonText: 'Učitaj',
    deleteButtonText: 'Izbriši',
    fileDropText: 'Povuci datoteku ovdje',
    submitButtonText: 'Pošalji',
    requiredFieldMissing: 'Ovo polje je obavezno.',
    tooLong: 'Ova vrijednost je predugačka.',
    invalidInteger: 'Molimo unesite valjani cijeli broj.',
    invalidDecimal: 'Molimo unesite valjani decimalni broj.',
    invalidDateTime: 'Molimo unesite valjani datum i vrijeme.',
    invalidDate: 'Molimo unesite valjani datum.',
    invalidTime: 'Molimo unesite valjano vrijeme.',
    dateOfBirthMustBeInThePast: 'Datum rođenja mora biti u prošlosti.',
    invalidEmail: 'Molimo unesite valjanu e-mail adresu.',
    invalidAddress: 'Molimo unesite valjanu adresu.',
    invalidPhoneNumber: 'Molimo unesite valjani telefonski broj.',
    invalidSsn: 'Molimo unesite valjani OIB.',
    invalidFileType: 'Nevažeća vrsta datoteke.',
    fileTooLarge: 'Datoteka je prevelika.',
    uploadFailed: 'Učitavanje nije uspjelo.',
  },
  home: {
    title: 'Potvrdimo vaš identitet',
    caption: 'To će trajati samo nekoliko minuta.',
    additionalActionsCaption:
      'Možemo vas zamoliti da poduzmete dodatne korake kako biste dovršili provjeru.',
    documentVerificationStepTitle: 'Skenirajte svoj dokument',
    documentVerificationStepCaption: 'Uzmite svoju osobnu iskaznicu',
    documentExtractionStepTitle: 'Skenirajte svoj dokument',
    documentExtractionStepCaption: 'Uzmite svoju osobnu iskaznicu',
    faceMatchStepTitle: 'Napravite selfie',
    faceMatchStepCaption: 'Provjerite je li vaše lice dobro osvijetljeno',
    manualInputStepTitle: 'Dodajte više detalja',
    manualInputStepCaption: 'Recite nam nešto više',
  },
  end: {
    identityVerifiedTitle: 'Identitet potvrđen!',
    identityVerifiedCaption:
      'Hvala što ste dokazali svoj identitet - to ste cijelo vrijeme bili vi!',
    identityNotVerifiedTitle: 'Identitet nije potvrđen',
    identityNotVerifiedCaption:
      'Ovog puta nismo uspjeli potvrditi vaš identitet. Molimo provjerite svoje podatke i pokušajte ponovno ili kontaktirajte podršku za pomoć.',
    identityVerifyingTitle: 'Hvala! Sada potvrđujemo vaš identitet',
    identityVerifyingCaption:
      'Imamo sve što nam treba. Obavijestit ćemo vas čim završimo.',
  },
};

const spanishTranslations = {
  d2d: {
    title: 'Cambia al dispositivo móvil para continuar la verificación.',
    caption: 'Cambia al dispositivo móvil para continuar la verificación.',
    qrCodeExpired: 'El código QR ha expirado',
    getNewQrCode: 'Obtener nuevo código QR',
    proceedWithDesktopCamera: 'Continuar con la cámara de escritorio',
    instructionsTitle: 'Instrucciones sobre cómo hacerlo.',
    scanCodeTitle: 'Escanear código QR o copiar enlace.',
    scanCodeSubtitle:
      'Usa la cámara de tu teléfono para escanear el código que aparece en tu pantalla.',
    transferToMobilePhoneTitle: 'Transferir al teléfono móvil.',
    transferToMobilePhoneSubtitle:
      'Realiza la verificación de identidad en el dispositivo móvil.',
    returnToThisDeviceTitle: 'Volver a este dispositivo.',
    returnToThisDeviceSubtitle:
      'Una vez que la verificación esté completa, vuelve a este dispositivo.',
    connectionLimitReachedTitle: 'Límite de conexión alcanzado.',
    connectionLimitReachedCaption:
      'Cierra las conexiones existentes e intenta de nuevo.',
    connectedTitle: 'Conectado. Continúa en el dispositivo móvil.',
    connectedCaption:
      'La verificación está en curso. Sigue las instrucciones en tu teléfono.',
    errorTitle: 'Error: no se pudo establecer la conexión',
    errorCaption: 'No pudimos conectar con tu dispositivo móvil.',
    inactiveConnectionTitle: 'Conexión inactiva.',
    inactiveConnectionCaption:
      'Por favor, revisa tu dispositivo móvil e inténtalo de nuevo.',
    deviceDisconnectedTitle: 'Dispositivo desconectado.',
    deviceDisconnectedCaption:
      'El dispositivo ha perdido la conexión. Las posibles razones incluyen problemas de batería u otros problemas de conectividad.',
    continueOnDesktop: 'Continuar el flujo en el escritorio',
    chooseAlternativeMethod: 'o elige un método alternativo',
    copyLink: 'Copiar enlace',
    expiresIn: 'Expira en',
    verificationCanceledTitle: 'Verificación cancelada',
    verificationCanceledCaption:
      'El proceso de verificación ha sido interrumpido.',
    cancelVerificationTitle:
      'Estás a punto de cancelar la verificación en el dispositivo móvil. ¿Estás seguro?',
    cancelVerificationCaption:
      'Tu dispositivo móvil está conectado y la verificación está en curso.',
    verificationSuccessfulTitle: '¡Verificación exitosa!',
    verificationSuccessfulCaption:
      'Tu verificación se ha completado. Por favor, vuelve a tu escritorio para continuar.',
    abortTitle: 'Continuar en el escritorio.',
    abortCaption: 'Ahora puedes completar tu verificación en el escritorio.',
    linkCopied:
      '¡Enlace copiado!<br />Ábrelo en tu dispositivo móvil para continuar.',
  },
  actions: {
    done: 'Hecho',
    tryAgain: 'Intentar de nuevo',
    start: 'Comencemos',
    continue: 'Continuar',
    exit: 'Salir',
    back: 'Atrás',
    cancel: 'Cancelar',
    yesContinue: 'Sí, continuar',
  },
  statuses: {
    cameraLoading: 'Cargando cámara',
    checkingCamera: 'Verificando la cámara...',
    noInternetConnection: 'Sin conexión a internet',
    processing: 'Procesando...',
    verificationNotAvailable: 'La verificación no está disponible',
    cameraPermissionRequiredTitle: 'Se requiere permiso para la cámara',
    cameraPermissionRequiredCaption:
      'No tenemos tu permiso para usar la cámara. Para continuar, asegúrate de que la cámara esté habilitada.',
    nextUp: 'A continuación',
    completed: 'Completado',
    retakeSelfieTitle: 'Vuelve a tomar un selfie',
    retakeSelfieCaption: 'Tu selfie no cumple con los requisitos',
    noCameraDevices: 'No se encontraron dispositivos de cámara',
    documentNotSupportedTitle: 'Documento no aceptado',
    documentNotSupportedCaption: 'Intenta escanear un documento diferente.',
    documentScanErrorTitle: 'Escanea nuevamente',
    documentScanErrorCaption:
      'Inténtalo de nuevo, asegurándote de que tu documento sea completamente visible y esté bien iluminado. Mantén el documento estable para evitar borrosidad.',
  },
  faceCapture: {
    centerYourFace: 'Centra tu rostro',
    placeFaceInFrame: 'Coloca tu rostro en el marco',
    moveCloser: 'Acércate más',
    lookDirectylIntoCamera: 'Mira directamente a la cámara',
    onlyOneFaceShouldBeVisible: 'Solo debe ser visible un rostro',
    keepStill: 'Mantente quieto',
  },
  documentVerification: {
    cameraLoading: 'Cargando la cámara',
    helpButtonTooltip: '¿Necesitas ayuda?',
    helpButtonBack: 'Atrás',
    helpButtonNext: 'Siguiente',
    helpButtonDone: 'Hecho',
    helpButtonStartScanning: 'Iniciar escaneo',
    helpDocInfoTitle: 'Mantén todos los detalles visibles',
    helpDocInfoDescription:
      'Asegúrate de mantener el documento bien iluminado. Todos los campos del documento deben ser visibles en la pantalla de la cámara.',
    helpDocKeepDetailsVisibleTitle: 'Mantén todos los detalles visibles',
    helpDocKeepDetailsVisibleDescription:
      'Asegúrate de no cubrir partes del documento con un dedo, incluidas las líneas inferiores. También evita reflejos de hologramas sobre los campos del documento.',
    helpDocAvoidHarshLightTitle: 'Evita la luz intensa',
    helpDocAvoidHarshLightDescription:
      'Evita la luz directa e intensa, ya que puede reflejarse en el documento y hacer que algunas partes sean ilegibles. Si no puedes leer los datos en el documento, la cámara tampoco podrá hacerlo.',
    helpDocKeepStillTitle: 'Mantente quieto mientras escaneas',
    helpDocKeepStillDescription:
      'Intenta mantener el teléfono y el documento quietos mientras escaneas. Mover cualquiera de los dos puede desenfocar la imagen y hacer que los datos sean ilegibles.',
    cameraDisabled: 'Cámara deshabilitada',
    cameraNotAllowed: 'No se puede acceder a la cámara.',
    cameraInUse: 'La cámara ya está siendo utilizada por otra aplicación.',
    cameraGenericError: 'No se puede acceder a la cámara.',
    cameraFeedbackScanFront: 'Escanea el lado frontal del documento',
    cameraFeedbackScanBack: 'Escanea el lado trasero del documento',
    cameraFeedbackFlip: 'Voltea al lado trasero',
    cameraFeedbackBarcodeMessage: 'Escanea el código de barras',
    cameraFeedbackMoveFarther: 'Aléjate más',
    cameraFeedbackMoveCloser: 'Acércate más',
    cameraFeedbackAdjustAngle: 'Ajusta el ángulo',
    cameraFeedbackBlur: 'Mantente quieto',
    cameraFeedbackGlare: 'Inclina o mueve el documento para eliminar reflejos',
    cameraFeedbackWrongSide: 'Voltea el documento',
    cameraFeedbackFacePhotoCovered:
      'Mantén la foto del rostro completamente visible',
    cameraFeedbackBarcode: 'Escanea el código de barras',
    initializationError:
      'Error al cargar el componente. Intenta usar otro dispositivo o actualizar tu navegador.',
    checkInternetConnection: 'Verifica la conexión a internet.',
    networkError: 'Error de red.',
    scanningNotAvailable: 'Escaneo no disponible.',
    modalWindowClose: 'Cerrar',
  },
  documentExtraction: {
    cameraLoading: 'Cargando la cámara',
    helpButtonTooltip: '¿Necesitas ayuda?',
    helpButtonBack: 'Atrás',
    helpButtonNext: 'Siguiente',
    helpButtonDone: 'Hecho',
    helpButtonStartScanning: 'Iniciar escaneo',
    helpDocInfoTitle: 'Mantén todos los detalles visibles',
    helpDocInfoDescription:
      'Asegúrate de mantener el documento bien iluminado. Todos los campos del documento deben ser visibles en la pantalla de la cámara.',
    helpDocKeepDetailsVisibleTitle: 'Mantén todos los detalles visibles',
    helpDocKeepDetailsVisibleDescription:
      'Asegúrate de no cubrir partes del documento con un dedo, incluidas las líneas inferiores. También evita reflejos de hologramas sobre los campos del documento.',
    helpDocAvoidHarshLightTitle: 'Evita la luz intensa',
    helpDocAvoidHarshLightDescription:
      'Evita la luz directa e intensa, ya que puede reflejarse en el documento y hacer que algunas partes sean ilegibles. Si no puedes leer los datos en el documento, la cámara tampoco podrá hacerlo.',
    helpDocKeepStillTitle: 'Mantente quieto mientras escaneas',
    helpDocKeepStillDescription:
      'Intenta mantener el teléfono y el documento quietos mientras escaneas. Mover cualquiera de los dos puede desenfocar la imagen y hacer que los datos sean ilegibles.',
    cameraDisabled: 'Cámara deshabilitada',
    cameraNotAllowed: 'No se puede acceder a la cámara.',
    cameraInUse: 'La cámara ya está siendo utilizada por otra aplicación.',
    cameraGenericError: 'No se puede acceder a la cámara.',
    cameraFeedbackScanFront: 'Escanea el lado frontal del documento',
    cameraFeedbackScanBack: 'Escanea el lado trasero del documento',
    cameraFeedbackFlip: 'Voltea al lado trasero',
    cameraFeedbackBarcodeMessage: 'Escanea el código de barras',
    cameraFeedbackMoveFarther: 'Aléjate más',
    cameraFeedbackMoveCloser: 'Acércate más',
    cameraFeedbackAdjustAngle: 'Ajusta el ángulo',
    cameraFeedbackBlur: 'Mantente quieto',
    cameraFeedbackGlare: 'Inclina o mueve el documento para eliminar reflejos',
    cameraFeedbackWrongSide: 'Voltea el documento',
    cameraFeedbackFacePhotoCovered:
      'Mantén la foto del rostro completamente visible',
    cameraFeedbackBarcode: 'Escanea el código de barras',
    initializationError:
      'Error al cargar el componente. Intenta usar otro dispositivo o actualizar tu navegador.',
    checkInternetConnection: 'Verifica la conexión a internet.',
    networkError: 'Error de red.',
    scanningNotAvailable: 'Escaneo no disponible.',
    modalWindowClose: 'Cerrar',
  },
  manualInput: {
    formTitle: 'Añadir más detalles',
    formSubtitle: 'Cuéntanos un poco más',
    uploadButtonText: 'Subir',
    deleteButtonText: 'Eliminar',
    fileDropText: 'Arrastra el archivo aquí',
    submitButtonText: 'Enviar',
    requiredFieldMissing: 'Este campo es obligatorio.',
    tooLong: 'Este valor es demasiado largo.',
    invalidInteger: 'Por favor, introduce un número entero válido.',
    invalidDecimal: 'Por favor, introduce un número decimal válido.',
    invalidDateTime: 'Por favor, introduce una fecha y hora válidas.',
    invalidDate: 'Por favor, introduce una fecha válida.',
    invalidTime: 'Por favor, introduce una hora válida.',
    dateOfBirthMustBeInThePast: 'La fecha de nacimiento debe ser en el pasado.',
    invalidEmail:
      'Por favor, introduce una dirección de correo electrónico válida.',
    invalidAddress: 'Por favor, introduce una dirección válida.',
    invalidPhoneNumber: 'Por favor, introduce un número de teléfono válido.',
    invalidSsn: 'Por favor, introduce un número de seguro social válido.',
    invalidFileType: 'Tipo de archivo no válido.',
    fileTooLarge: 'El archivo es demasiado grande.',
    uploadFailed: 'Error al subir.',
  },
  home: {
    title: 'Verifiquemos tu identidad',
    caption: 'Esto solo tomará un par de minutos.',
    additionalActionsCaption:
      'Podríamos pedirte que realices acciones adicionales para completar tu verificación.',
    documentVerificationStepTitle: 'Escanea tu documento',
    documentVerificationStepCaption: 'Toma tu identificación',
    documentExtractionStepTitle: 'Escanea tu documento',
    documentExtractionStepCaption: 'Toma tu identificación',
    faceMatchStepTitle: 'Hazte un selfie',
    faceMatchStepCaption: 'Asegúrate de que tu rostro esté bien iluminado',
    manualInputStepTitle: 'Añadir más detalles',
    manualInputStepCaption: 'Cuéntanos un poco más',
  },
  end: {
    identityVerifiedTitle: '¡Identidad verificada!',
    identityVerifiedCaption:
      'Gracias por demostrar tu identidad, ¡siempre fuiste tú!',
    identityNotVerifiedTitle: 'Identidad no verificada',
    identityNotVerifiedCaption:
      'No pudimos verificar tu identidad esta vez. Por favor, verifica tu información e inténtalo nuevamente, o contacta al soporte para obtener ayuda.',
    identityVerifyingTitle: '¡Gracias! Estamos verificando tu identidad',
    identityVerifyingCaption:
      'Ya tenemos todo lo que necesitamos. Te notificaremos tan pronto como terminemos.',
  },
};

export function getTranslationMessages(key) {
  switch (key?.toUpperCase()) {
    case 'HR':
      return croatianTranslations;
    case 'DE':
      return germanTranslations;
    case 'ES':
      return spanishTranslations;
    default:
      return undefined; // Use default english translations
  }
}
