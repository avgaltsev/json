import {JsonPrimitive} from "./primitive";
import {JsonObject, isJsonObject} from "./object";
import {JsonArray, isJsonArray} from "./array";

export type Json = JsonPrimitive | JsonObject | JsonArray;

export function getJsonValue(value: Json | undefined, path: Array<string | number>): Json | undefined {
	return path.reduce<Json | undefined>((result, fieldName) => {
		if (result === undefined) {
			return undefined;
		}

		if (isJsonObject(result) && typeof fieldName === "string") {
			return result[fieldName];
		}

		if (isJsonArray(result) && typeof fieldName === "number") {
			return result[fieldName];
		}

		return undefined;
	}, value);
}
