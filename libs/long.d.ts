/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
declare class Long {

	/**
	 * 
	 * @param low 
	 * @param high 
	 * @param unsigned? 
	 */
	new(low: number, high: number, unsigned?: boolean | number);
	/**
	 * The low 32 bits as a signed value.
	 * @type {number}
	 */
	low: number;

	/**
	 * The high 32 bits as a signed value.
	 * @type {number}
	 */
	high: number;


	/**
	 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	 * @returns {number}
	 * @return  
	 */
	toInt(): /* !this.low */ any;


	toString():string;

	/**
	 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	 * @returns {number}
	 * @return  
	 */
	toNumber(): number;

	/**
	 * Gets the high 32 bits as a signed integer.
	 * @returns {number} Signed high bits
	 * @return  
	 */
	getHighBits(): /* !this.high */ any;

	/**
	 * Gets the high 32 bits as an unsigned integer.
	 * @returns {number} Unsigned high bits
	 * @return  
	 */
	getHighBitsUnsigned(): number;

	/**
	 * Gets the low 32 bits as a signed integer.
	 * @returns {number} Signed low bits
	 * @return  
	 */
	getLowBits(): /* !this.low */ any;

	/**
	 * Gets the low 32 bits as an unsigned integer.
	 * @returns {number} Unsigned low bits
	 * @return  
	 */
	getLowBitsUnsigned(): number;

	/**
	 * Gets the number of bits needed to represent the absolute value of this Long.
	 * @returns {number}
	 * @return  
	 */
	getNumBitsAbs(): number;

	/**
	 * Tests if this Long's value equals zero.
	 * @returns {boolean}
	 * @return  
	 */
	isZero(): boolean;

	/**
	 * Tests if this Long's value is negative.
	 * @returns {boolean}
	 * @return  
	 */
	isNegative(): boolean;

	/**
	 * Tests if this Long's value is positive.
	 * @returns {boolean}
	 * @return  
	 */
	isPositive(): /* !this.unsigned */ any;

	/**
	 * Tests if this Long's value is odd.
	 * @returns {boolean}
	 * @return  
	 */
	isOdd(): boolean;

	/**
	 * Tests if this Long's value is even.
	 * @returns {boolean}
	 * @return  
	 */
	isEven(): boolean;

	/**
	 * Tests if this Long's value equals the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	equals(other: any): boolean;

	/**
	 * Tests if this Long's value differs from the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	notEquals(other: any): boolean;

	/**
	 * Tests if this Long's value is less than the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	lessThan(other: any): boolean;

	/**
	 * Tests if this Long's value is less than or equal the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	lessThanOrEqual(other: any): boolean;

	/**
	 * Tests if this Long's value is greater than the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	greaterThan(other: any): boolean;

	/**
	 * Tests if this Long's value is greater than or equal the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 * @param other 
	 * @return  
	 */
	greaterThanOrEqual(other: any): boolean;

	/**
	 * Compares this Long's value with the specified's.
	 * @param {!Long|number|string} other Other value
	 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	 *  if the given one is greater
	 * @param other 
	 * @return  
	 */
	compare(other: any): number;

	/**
	 * Negates this Long's value.
	 * @returns {!Long} Negated Long
	 * @return  
	 */
	negate(): Long;

	/**
	 * Returns the sum of this and the specified Long.
	 * @param {!Long|number|string} addend Addend
	 * @returns {!Long} Sum
	 * @param addend 
	 * @return  
	 */
	add(addend: any): Long;

	/**
	 * Returns the difference of this and the specified Long.
	 * @param {!Long|number|string} subtrahend Subtrahend
	 * @returns {!Long} Difference
	 * @param subtrahend 
	 * @return  
	 */
	subtract(subtrahend: any): Long;

	/**
	 * Returns the product of this and the specified Long.
	 * @param {!Long|number|string} multiplier Multiplier
	 * @returns {!Long} Product
	 * @param multiplier 
	 * @return  
	 */
	multiply(multiplier: any): Long;

	/**
	 * Returns this Long divided by the specified. The result is signed if this Long is signed or
	 *  unsigned if this Long is unsigned.
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Quotient
	 * @param divisor 
	 * @return  
	 */
	divide(divisor: any): /* !this */ any;

	/**
	 * Returns this Long modulo the specified.
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Remainder
	 * @param divisor 
	 * @return  
	 */
	modulo(divisor: any): Long;

	/**
	 * Returns the bitwise NOT of this Long.
	 * @returns {!Long}
	 * @return  
	 */
	not(): Long;

	/**
	 * Returns the bitwise AND of this Long and the specified.
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 * @param other 
	 * @return  
	 */
	and(other: any): Long;

	/**
	 * Returns the bitwise OR of this Long and the specified.
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 * @param other 
	 * @return  
	 */
	or(other: any): Long;

	/**
	 * Returns the bitwise XOR of this Long and the given one.
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 * @param other 
	 * @return  
	 */
	xor(other: any): Long;

	/**
	 * Returns this Long with bits shifted to the left by the given amount.
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 * @param numBits 
	 * @return  
	 */
	shiftLeft(numBits: number | Long): /* !this */ any;

	/**
	 * Returns this Long with bits arithmetically shifted to the right by the given amount.
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 * @param numBits 
	 * @return  
	 */
	shiftRight(numBits: number | Long): /* !this */ any;

	/**
	 * Returns this Long with bits logically shifted to the right by the given amount.
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 * @param numBits 
	 * @return  
	 */
	shiftRightUnsigned(numBits: number | Long): /* !this */ any;

	/**
	 * Converts this Long to signed.
	 * @returns {!Long} Signed long
	 * @return  
	 */
	toSigned(): /* !this */ any;

	/**
	 * Converts this Long to unsigned.
	 * @returns {!Long} Unsigned long
	 * @return  
	 */
	static toUnsigned(): /* !this */ any;

	/**
	 * @function
	 * @param {*} obj Object
	 * @returns {boolean}
	 * @inner
	 * @param obj 
	 * @return  
	 */
	isLong(obj: any): boolean;

	/**
	 * @param {number} value
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 * @param value 
	 * @param unsigned? 
	 * @return  
	 */
	static fromInt(value: number, unsigned?: boolean): Long;

	/**
	 * @param {number} value
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 * @param value 
	 * @param unsigned? 
	 * @return  
	 */
	static fromNumber(value: any, unsigned?: boolean): Long;

	/**
	 * @param {number} lowBits
	 * @param {number} highBits
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 * @param lowBits 
	 * @param highBits 
	 * @param unsigned? 
	 * @return  
	 */
	static fromBits(lowBits: number, highBits: number, unsigned?: boolean | number): Long;

	/**
	 * @function
	 * @param {number} base
	 * @param {number} exponent
	 * @returns {number}
	 * @inner
	 * @param undefined 
	 * @param undefined 
	 * @return  
	 */
	static pow_dbl(param1: number, param2: number): number;

	/**
	 * @param {string} str
	 * @param {(boolean|number)=} unsigned
	 * @param {number=} radix
	 * @returns {!Long}
	 * @inner
	 * @param str 
	 * @param unsigned? 
	 * @param radix? 
	 * @return  
	 */
	static fromString(str: any, unsigned?: boolean | number, radix?: boolean | number): any;
	/**
	 * @param {string} str
	 * @param {(boolean|number)=} unsigned
	 * @param {number=} radix
	 * @returns {!Long}
	 * @inner
	 */
	static fromString();

	/**
	 * @function
	 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 * @param val 
	 * @param unsigned? 
	 * @return  
	 */
	static fromValue(val: any, unsigned?: boolean): Long;
	/**
	 * @function
	 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 */
	static fromValue();

}
