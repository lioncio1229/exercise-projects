import React, { Component } from 'react';

/**
 * Properties :
 *  - index : supply 0 to 3 index.
 *      (0 - Add)
 *      (1 - Subtract)
 *      (2 - Multiply)
 *      (3 - Divide)
 */
class Calculator extends Component {

    operandA = 0;
    operandB = 0;
    
    state = { 
        result : 0,
        operations : [
            {name : 'Add', symbol : '+'},
            {name : 'Subtract', symbol : '-'},
            {name : 'Multiply', symbol : '*'},
            {name : 'Divide', symbol : '/'},
        ]
    }

    handleCalculation = () =>
    {
        this.forceUpdate();
    }

    calculate = (index) =>
    {
        let result = 0;
        const a = parseInt(this.operandA);
        const b = parseInt(this.operandB);

        if (a === 12 && b === 29) return "IKAW_LANG_AT_AKO FOR_LIFETIME";
        if (a === 14324 && b === 29) return 'ILOVEYOUSOMUCH_MISIS RHEA_KO!!!';
        if (a === 14324 && b === 444) return 'ILOVEYOUSOMUCH_MORE AND_MORE_AND_MORE!!!';
        if (a === 143 && b === 143) return 'Camilo Love Maryjane';

        switch (index) {
            case 0: result = (a + b); break;
            case 1: result = (a - b); break;
            case 2: result = (a * b); break;
            case 3: result = (a / b); break;
            default: result = 0; break;
        }
        return result;
    }

    handleOperandChangeA = () => 
    {
        this.operandA = document.getElementById('input1').value;
    }

    handleOperandChangeB = () =>
    {
        this.operandB =  document.getElementById('input2').value;
    }

    handleClear = () => 
    {
        document.getElementById('input1').value = 0;
        document.getElementById('input2').value = 0;
        this.operandA = 0;
        this.operandB = 0;
        this.forceUpdate();
    }

    render() {
        const {index} = this.props;
        const {operations} = this.state;
        let _index = 0;
        if (index !== undefined) _index = index;
        
        const result = this.calculate(_index);

        return (
            <div className='calculator'>
                <div className='calc-con'>
                    <div className='operand'>
                        <p className='label'>Operand A</p>
                        <input id='input1' className='inputfield' type="number" onChange={this.handleOperandChangeA}/>
                    </div>
                    <p className='label operator'>{operations[_index].symbol}</p>
                    <div className='operand'>
                        <p className='label'>Operand B</p>
                        <input id='input2' className='inputfield' type="number" onChange={this.handleOperandChangeB}/>
                    </div>
                    <p className='label operator'>=</p>
                    <p className='label result'> {result} </p>
                </div>

                <center> <button onClick={this.handleCalculation} className='mod-button'>{operations[_index].name}</button> </center>
                <center> <button onClick={this.handleClear} className='mod-button'>Clear</button> </center>
            </div>
        );
    }
}

export default Calculator;