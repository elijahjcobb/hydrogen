/**
 * Copyright 2019
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://github.com/elijahjcobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * ORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

export enum HMethod { GET, POST, PUT , DELETE, UNKNOWN }

export abstract class HMethodHelper {

	public static methodFromString(method: string): HMethod {
		switch (method) {
			case "GET":
				return HMethod.GET;
			case "POST":
				return HMethod.POST;
			case "PUT":
				return HMethod.PUT;
			case "DELETE":
				return HMethod.DELETE;
			default:
				return HMethod.UNKNOWN;
		}
	}

	public static stringFromMethod(method: HMethod): string {
		switch (method) {
			case HMethod.GET:
				return "GET";
			case HMethod.POST:
				return "POST";
			case HMethod.PUT:
				return "PUT";
			case HMethod.DELETE:
				return "DELETE";
			default:
				return "UNKNOWN";
		}
	}

}
