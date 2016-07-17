function minLengthValidatorTest() {
	
	function lengthTest(value, condition, isValid) {
		let validator = new MinLengthValidator();
		validator.condition = condition;
		it("Value `" + value + "` should be " + ( isValid ? '' : 'in' ) + "valid for condition length >= " + condition, function() {
			chai.assert.equal(validator.isValid(value), isValid);
		});
	}
	lengthTest('abcde', 4, true);
	lengthTest('abcd', 4, true);
	lengthTest('abc', 4, false);
	lengthTest('ab', 4, false);
};