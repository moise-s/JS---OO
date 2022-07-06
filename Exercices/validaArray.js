function validaArray(array,num) {

    try {
        if (!array && !num) { 
            throw new ReferenceError('Envie parâmetros!!')
        }
    
        if (typeof array !== 'object') {
            throw new TypeError('Envie elemento do tipo array!')
        }
    
        if (typeof num !== 'number') {
            throw new TypeError('Envie elemento do tipo number!')
        }
    
        if (array.length !== num) {
            throw new RangeError('Tamanho inválido de array!')
        }
    } catch (e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
            
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
    }
}

// validaArray([1,2,3,4,5], 5)

// validaArray([1,2,3], 1)

// validaArray('oi', 1)

validaArray([2,3,4], 'oi')