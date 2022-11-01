import type {Json} from "./json";

import {isJsonArray} from "./array";
import {isJsonObject} from "./object";

export type JsonPrimitive = string | number | boolean | null;

export function isJsonPrimitive<T extends JsonPrimitive>(value: Json): value is T {
	return !isJsonArray(value) && !isJsonObject(value);
}
