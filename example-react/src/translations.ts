/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
import { TranslationMessages } from '@microblink/platform-sdk/react';

export type LocalizationKey = 'EN' | 'DE' | 'HR' | 'ES';

const germanTranslations: TranslationMessages = {
  actions: {
    done: 'Fertig',
    tryAgain: 'Erneut versuchen',
    start: "Los geht's",
    continue: 'Weiter',
    exit: 'Beenden',
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
  home: {
    title: 'Lassen Sie uns Ihre Identität überprüfen',
    caption: 'Das dauert nur ein paar Minuten.',
    additionalActionsCaption:
      'Wir werden Sie möglicherweise um zusätzliche Schritte bitten, um Ihre Verifizierung abzuschließen.',
    documentVerificationStepTitle: 'Scannen Sie Ihr Dokument',
    documentVerificationStepCaption: 'Holen Sie Ihren Ausweis',
    faceMatchStepTitle: 'Machen Sie ein Selfie',
    faceMatchStepCaption:
      'Stellen Sie sicher, dass Ihr Gesicht gut beleuchtet ist',
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

const croatianTranslations: TranslationMessages = {
  actions: {
    done: 'Gotovo',
    tryAgain: 'Pokušaj ponovno',
    start: 'Krenimo',
    continue: 'Nastavi',
    exit: 'Izađi',
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
  home: {
    title: 'Potvrdimo vaš identitet',
    caption: 'To će trajati samo nekoliko minuta.',
    additionalActionsCaption:
      'Možemo vas zamoliti da poduzmete dodatne korake kako biste dovršili provjeru.',
    documentVerificationStepTitle: 'Skenirajte svoj dokument',
    documentVerificationStepCaption: 'Uzmite svoju osobnu iskaznicu',
    faceMatchStepTitle: 'Napravite selfie',
    faceMatchStepCaption: 'Provjerite je li vaše lice dobro osvijetljeno',
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

const spanishTranslations: TranslationMessages = {
  actions: {
    done: 'Hecho',
    tryAgain: 'Intentar de nuevo',
    start: 'Comencemos',
    continue: 'Continuar',
    exit: 'Salir',
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
  home: {
    title: 'Verifiquemos tu identidad',
    caption: 'Esto solo tomará un par de minutos.',
    additionalActionsCaption:
      'Podríamos pedirte que realices acciones adicionales para completar tu verificación.',
    documentVerificationStepTitle: 'Escanea tu documento',
    documentVerificationStepCaption: 'Toma tu identificación',
    faceMatchStepTitle: 'Hazte un selfie',
    faceMatchStepCaption: 'Asegúrate de que tu rostro esté bien iluminado',
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

export function getTranslationMessages(
  key: LocalizationKey,
): TranslationMessages | undefined {
  switch (key) {
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
