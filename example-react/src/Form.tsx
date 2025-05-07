/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
import {
  IdvFlow,
  IdvFlowProps,
  ProxyConfig,
  ThemeOverride,
} from '@microblink/platform-sdk/react';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';

import { Logo } from './Logo';
import { generateThemeFromAccentColor } from './accent-utils';
import { LocalizationKey, getTranslationMessages } from './translations';

const EXAMPLE_FORM_FIELDS = `
  {
    "first_name": "John",
    "last_name": "Doe",
    "country_code": "HR"
  }
`;

function Form() {
  const [showIdvFlow, setShowIdvFlow] = useState(false);
  const [code, setCode] = useState(EXAMPLE_FORM_FIELDS);
  const [formValuesDisabled, setFormValuesDisabled] = useState(true);

  const [idvFlowParams, setIdvFlowParams] = useState<
    Pick<IdvFlowProps, 'apiConfig'> & {
      localizationKey: LocalizationKey;
      accentColor: string | null;
      buttonBorderRadius: string | null;
      fontFamily: string | null;
      enableD2D: boolean;
    }
  >({
    apiConfig: {
      url: import.meta.env.VITE_PROXY_URL,
      workflowId: import.meta.env.VITE_WORKFLOW_ID,
      d2d: { runAddress: import.meta.env.VITE_D2D_RUN_ADDRESS },
    },
    accentColor: null,
    buttonBorderRadius: null,
    localizationKey: 'EN',
    fontFamily: null,
    enableD2D: false,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formElements = form.elements as typeof form.elements & {
      apiUrl: HTMLInputElement;
      workflowId: HTMLInputElement;
      locales: HTMLSelectElement;
      color: HTMLInputElement;
      buttonBorderRadius: HTMLInputElement;
      fontFamily: HTMLSelectElement;
      enableD2D: HTMLInputElement;
    };

    let parsedCode: Record<string, string> | null = null;

    if (!formValuesDisabled && code) {
      try {
        parsedCode = JSON.parse(code);
      } catch {
        alert('Form fields JSON is not valid.');
        return;
      }
    }

    setIdvFlowParams({
      apiConfig: {
        url: formElements.apiUrl.value,
        formValues: parsedCode !== null ? parsedCode : undefined,
        workflowId: formElements.workflowId.value,
        d2d: { runAddress: import.meta.env.VITE_D2D_RUN_ADDRESS },
      },
      localizationKey: formElements.locales.value as LocalizationKey,
      accentColor:
        formElements.color.value === '#0062F2'
          ? null
          : formElements.color.value,
      buttonBorderRadius: formElements.buttonBorderRadius.value || null,
      fontFamily:
        formElements.fontFamily.value === 'Default'
          ? null
          : formElements.fontFamily.value,
      enableD2D: formElements.enableD2D.checked,
    });

    setShowIdvFlow(true);
  };

  const createThemeOverride = (): ThemeOverride => {
    const themeOverride: ThemeOverride = {};

    if (idvFlowParams.buttonBorderRadius !== null) {
      themeOverride.buttonBorderRadius = idvFlowParams.buttonBorderRadius;
    }

    if (idvFlowParams.accentColor !== null) {
      themeOverride.accent = generateThemeFromAccentColor(
        idvFlowParams.accentColor,
      );
    }

    if (idvFlowParams.fontFamily !== null) {
      themeOverride.fontFamily = idvFlowParams.fontFamily;
    }

    return themeOverride;
  };

  return (
    <div className="p-4 md:p-12 container w-[90%] md:w-screen mx-auto bg-white rounded-2xl my-10">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <Logo />
        <div className="hidden md:block h-10 w-[2px] bg-black" />
        <h1 className="ml-4 text-3xl text-center">Platform Browser SDK</h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col md:grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-3">
          <div>
            <label
              htmlFor="workflowId"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Workflow ID
            </label>
            <input
              defaultValue={(idvFlowParams.apiConfig as ProxyConfig).workflowId}
              type="text"
              id="workflowId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="apiUrl"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Proxy URL
            </label>
            <input
              defaultValue={(idvFlowParams.apiConfig as ProxyConfig).url}
              type="text"
              id="apiUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="locales"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select localization
            </label>
            <select
              defaultValue="EN"
              id="locales"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Choose a country</option>
              <option value="EN">English</option>
              <option value="DE">German</option>
              <option value="HR">Croatian</option>
              <option value="ES">Spanish</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="buttonBorderRadius"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Button border radius
            </label>
            <input
              type="text"
              id="buttonBorderRadius"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="fontFamily"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Font family
            </label>
            <select
              defaultValue="Default"
              id="fontFamily"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="Default">Default</option>
              <option value="Oswald">Oswald</option>
              <option value="Roboto Flex">Roboto</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Accent color
            </label>
            <input id="color" defaultValue="#0062F2" type="color" />
          </div>
          <div className="col-span-2">
            <div className="flex items-center mb-4 gap-2">
              <input
                id="enabled-checkbox"
                type="checkbox"
                checked={!formValuesDisabled}
                onChange={(e) => setFormValuesDisabled(!e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="block text-sm font-medium text-gray-900"
                htmlFor="enabled-checkbox"
              >
                Enable form values
              </label>
            </div>
            <Editor
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:opacity-50 min-h-[200px]"
              value={code}
              disabled={formValuesDisabled}
              onValueChange={setCode}
              padding={15}
              highlight={(code) => code}
              style={{
                opacity: formValuesDisabled ? 0.6 : 1,
                fontFamily: 'monospace',
                fontSize: 12,
              }}
            />
          </div>
          <div className="col-span-2 flex items-center mb-4 gap-2">
            <input
              defaultChecked
              id="enableD2D"
              type="checkbox"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="enableD2D"
              className="block text-sm font-medium text-gray-900"
            >
              Enable Device 2 Device (D2D)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Start
        </button>
      </form>
      {showIdvFlow ? (
        <IdvFlow
          apiConfig={idvFlowParams.apiConfig}
          enableD2D={idvFlowParams.enableD2D}
          consentData={{
            userId: 'idv-web-sdk-react-example',
            note: '',
            givenOn: new Date().toISOString(),
            isTrainingAllowed: true,
            isProcessingStoringAllowed: true,
          }}
          translationsOverride={getTranslationMessages(
            idvFlowParams.localizationKey,
          )}
          themeOverride={createThemeOverride()}
          onTransactionFinished={(result) => {
            console.log('Transaction ID: ', result.transactionId);
            console.log('Transaction verification status: ', result.status);
            setShowIdvFlow(false);
          }}
          onAbort={() => {
            console.log('User aborted Transaction flow');
            setShowIdvFlow(false);
          }}
        />
      ) : null}
    </div>
  );
}

export default Form;
