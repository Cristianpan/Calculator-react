import { useState } from "react";
import Screen from "./Components/Screen";
import ButtonCalculator from "./Components/ButtonCalculator";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState({
    operation: "",
    result: "",
  });

  const calculatedResult = (operation) => {
    //ER para comprobar que la operación sea correcta
    let result = '';

    const expresion = /^(\-[0-9\.]+|[0-9\.]+)((\+|\-|x|\/)[0-9\.]+)*$/;

    if (expresion.test(operation)) {
      result = evaluate(operation.replaceAll("x", "*")).toString();
      if (result.length > 10) {
        result = result.substring(0, 10);
      }
    }
    return result;
  };

  const handleUpdateInput = (value) => {
    //Declaracion de valores del input
    let operation; 
    
    if (input.operation.length < 15) {
      if (input.result !== '' && input.operation === '' && (value === '+' | value === '-' | value === '/' | value === 'x'))
        operation = input.result + value; 
      else
        operation = input.operation + value;
      
      const result = calculatedResult(operation);

      const newInput = {
        operation,
        result,
      };

      
      setInput(newInput);
    }
  };

  const handleDeleteInput = (value) => {
    let operation = ''; 
    let result = ''; 

    if (value !== "C" && input.operation.length !== 1) {
      operation = input.operation.substring(0,input.operation.length - 1); 
      result = calculatedResult(operation); 
    } 
    setInput({operation, result}); 
  };

  const getResult = () => {
    setInput({operation: '', result: input.result}); 
  }

  return (
    <div className="w-[320px] h-[480px] rounded-xl shadow-2xl">
      <Screen operacion={input.operation} resultado={input.result} />
      <div className="grid grid-rows-5 h-[70%]">
        <div className="grid grid-cols-4">
          <ButtonCalculator
            style={
              "bg-grayPrimary hover:bg-graySecundary border-b border-r col-start-1 col-end-3"
            }
            handleClick={handleDeleteInput}
          >
            C
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-grayPrimary hover:bg-graySecundary border-b border-r"}
            handleClick={handleDeleteInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-backspace"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
              <path d="M12 10l4 4m0 -4l-4 4" />
            </svg>
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-pinkPrimary hover:bg-pinkSecundary border-b"}
            handleClick={handleUpdateInput}
          >
            /
          </ButtonCalculator>
        </div>
        <div className="grid grid-cols-4">
          <ButtonCalculator
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
            handleClick={handleUpdateInput}
          >
            7
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
            handleClick={handleUpdateInput}
          >
            8
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
            handleClick={handleUpdateInput}
          >
            9
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-pinkPrimary hover:bg-pinkSecundary border-b"}
            handleClick={handleUpdateInput}
          >
            x
          </ButtonCalculator>
        </div>
        <div className="grid grid-cols-4">
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            4
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            5
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            6
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-pinkPrimary hover:bg-pinkSecundary border-b"}
          >
            -
          </ButtonCalculator>
        </div>
        <div className="grid grid-cols-4">
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            1
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            2
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary border-b border-r"}
          >
            3
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-pinkPrimary hover:bg-pinkSecundary border-b"}
          >
            +
          </ButtonCalculator>
        </div>
        <div className="grid grid-cols-4">
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={
              "bg-whitePrimary hover:bg-whiteSecundary  border-r rounded-bl-xl"
            }
          >
            00
          </ButtonCalculator>
          <ButtonCalculator
            handleClick={handleUpdateInput}
            style={"bg-whitePrimary hover:bg-whiteSecundary  border-r"}
          >
            0
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-whitePrimary hover:bg-whiteSecundary  border-r"}
            handleClick={handleUpdateInput}
          >
            .
          </ButtonCalculator>
          <ButtonCalculator
            style={"bg-pinkPrimary hover:bg-pinkSecundary rounded-br-xl"}
            handleClick={getResult}
          >
            =
          </ButtonCalculator>
        </div>
      </div>
    </div>
  );
}

export default App;
