/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
import { createIdvFlow } from '@microblink/platform-sdk/vanilla';

import { generateThemeFromAccentColor } from './accent-utils';
import './style.css';
import { getTranslationMessages } from './translations';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#idv-container');
  const configForm = document.querySelector('#idv-config');

  if (!configForm || !rootElement) {
    alert('Missing button or root element');
    return;
  }

  configForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const idvParams = {
      proxyConfig: { url: form.elements.apiUrl.value },
      workflowId: form.elements.workflowId.value,
      localizationKey: form.elements.locales.value,
      accentColor:
        form.elements.color.value === '#0062F2'
          ? null
          : form.elements.color.value,
      buttonBorderRadius: form.elements.buttonBorderRadius.value || null,
      fontFamily:
        form.elements.fontFamily.value === 'Default'
          ? null
          : form.elements.fontFamily.value,
    };

    const getThemeOverrideObject = () => {
      const themeOverride = {};

      if (idvParams.buttonBorderRadius !== null) {
        themeOverride.buttonBorderRadius = buttonBorderRadius;
      }

      if (idvParams.accentColor !== null) {
        themeOverride.accent = generateThemeFromAccentColor(
          idvParams.accentColor,
        );
      }

      if (idvParams.fontFamily !== null) {
        themeOverride.fontFamily = fontFamily;
      }

      return themeOverride;
    };

    createIdvFlow({
      proxyConfig: idvParams.proxyConfig,
      workflowId: idvParams.workflowId,
      themeOverride: getThemeOverrideObject(),
      translationsOverride: getTranslationMessages(idvParams.localizationKey),
    });
  });
});
