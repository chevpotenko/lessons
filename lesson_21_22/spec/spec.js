var test1=require('../js/createTest.js');

describe('app',function(){
	
	it('createModal()',function(){
		var result;
		
		result = test1.createOverlay();
		
		expect(result).not.toBeUndefined();
	})
	
	it('methodTest()',function(){
		var result;
		
		result = test1.methodTest(1,2);
		
		expect(result).toBe(3);
	})
	
})