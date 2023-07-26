import {titleCase, esMayorDeEdad} from '../app/components/ProfileCard'


describe('Probando funciones dentro del componente Profilecards', ()=>{

    describe('funcion titleCase',()=>{
        test('la funcion debe retornar un string',()=>{
            const result = titleCase('hola');
            expect(typeof result).toBe('string');
        })

        test('Debe retornar el string transformado',()=>{
            expect(titleCase('hola mundo')).toBe('Hola Mundo')
        })

        test('Si el valor ingresado en la funcion es vacio, debe retornar un vacio',()=>{
            expect(titleCase('')).toBe('');
        })
    })

    describe('esMayorDeEdad',()=>{
        test('Debe devolver un boolean',()=>{
            expect(typeof esMayorDeEdad(19)).toBe('boolean')
        })
        test('si es mayor de edad devuelve true',()=>{
            expect(esMayorDeEdad(20)).toBeTruthy()
        })
        test('si la edad es 18 debe retornar verdadero',()=>{
            expect(esMayorDeEdad(18)).toBeTruthy()
        })
        test('si es menor de 18 retorna false',()=>{
            expect(esMayorDeEdad(10)).toBeFalsy()
        })
        test('si la edad es un numero negativo retorna null',()=>{
            expect(esMayorDeEdad(-10)).toBeNull()
        })
    })
})