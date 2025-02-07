/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */

// Function to convert hex to HSL
export function hexToHSL(hex: string) {
  // Convert hex to RGB first
  let { r, g, b } = hexToRGB(hex);

  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

// Function to convert HSL to hex
function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Function to convert hex to RGB
export function hexToRGB(hex: string) {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}

/**
 * Function to generate text color based on background color
 * @param hex - Background color in hex format
 * @returns 'black' or 'white'
 */
export const generateTextColor = (hex: string) => {
  const { r, g, b } = hexToRGB(hex);
  const brightness = r * 0.299 + g * 0.587 + b * 0.114;

  return brightness >= 128 ? 'black' : 'white';
};

// Function to create shades
export function generateShades(
  h: number,
  s: number,
  l: number,
): TokenizedColors {
  // Define lightness values for each shade
  const lightnessValues: Record<string, number> = {
    50: l + 45,
    100: l + 40,
    200: l + 35,
    300: l + 25,
    400: l + 20,
    500: l + 10,
    600: l, // Original accent color
    700: l - 10,
    800: l - 20,
    900: l - 30,
  };

  const result: Record<number, string> = {};

  // Ensure lightness values stay within bounds (0-100)
  for (const weight in lightnessValues) {
    const adjustedLightness = Math.min(
      100,
      Math.max(0, lightnessValues[weight]),
    );

    result[Number(weight)] = hslToHex(h, s, adjustedLightness);
  }

  return result as TokenizedColors;
}

type TokenizedColors = {
  25: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// Set CSS variables
export function generateThemeFromAccentColor(hex: string): TokenizedColors {
  // Add trailing zeros to hex if needed
  while (hex.length < 7) {
    hex += '0';
  }

  const { h, s, l } = hexToHSL(hex);
  return generateShades(h, s, l);
}
