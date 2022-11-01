import type {Json} from "./json";

import {isJsonArray} from "./array";

export interface JsonObject {
	[name: string]: Json;
}

export function isJsonObject<T extends JsonObject>(value: Json): value is T {
	return !isJsonArray(value) && typeof value === "object" && value !== null;
}
