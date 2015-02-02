describe("Karma jasmine sample test", function(){
	var aValue;
	beforeEach(function(){
		aValue = 1;
	});

	it("aValue should be 1", function(){
		expect(aValue).toEqual(1);
	});
});