import { useState, setState } from "react";
import { Button } from "antd";

function AddData() {
    
    const [inputField, setInputFields] = useState([{ value: 'Input' }])

    function createData(){
        setInputFields(inputField);
        console.log("input field updated to: " + inputField.value);
        this.setState((inputField, props) => {
            return{
                value: props.inputField.value
            }
        },[]);
    }

    return (
        <>
            <div>
            <label>Please Add Data: </label>
            <input type="text" value={inputField.value} onChange={(e) => {
                inputField.value = e.target.value;
                setInputFields(inputField)
            }}/>
            </div>
            <div>
                <Button type="primary" onClick={createData}>Create</Button>
            </div>
            <div>Entered Data: {inputField.value}</div>
        </>
    )
}

export default AddData;