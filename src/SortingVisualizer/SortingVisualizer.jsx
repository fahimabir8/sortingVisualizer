import React from "react";
import './SortingVisualizer.css'
import { mergeSort } from "../sortingAlgorithm/algorithm";

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < 251; i++){
            array.push(randomIntFromInterval( 5, 500 ));
        }
        this.setState({array});
    }

    mergeSort () {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const sortedArray = mergeSort(this.state.array);

        console.log(isEqual(javaScriptSortedArray,sortedArray));
    }

    quickSort () {}

    heapSort () {}

    bubbleSort () {}


    render() {
        const {array} = this.state;

        return (
        <div className="array-container"> 
            { array.map((value , idx) => (
                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    
                </div>
            )) 

            }
            <div>

            </div>
        <button onClick={()=> this.resetArray()}>Generate New Array</button>
        <button onClick={()=> this.mergeSort()}>Merge Sort</button>
        <button onClick={()=> this.heapSort()}>Heap Sort</button>
        <button onClick={()=> this.quickSort()}>Quick Sort</button>
        <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
        </div>
        );     
       
    }

}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEqual(arrayOne, arrayTwo){
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++){
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}