import countryData from "country-list-js";

export interface Country {
  code: string;
  name: string;
}

const raw = countryData.all as Record<string, { name: string }>;

export const COUNTRIES: Country[] = Object.entries(raw)
  .map(([code, data]) => ({ code, name: data.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const COUNTRY_NAMES: string[] = COUNTRIES.map((c) => c.name);
