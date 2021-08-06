import React from 'react';
import { useState, useEffect } from 'react';
import JavaData from './JavaData';
// import Counter from './Counter';

let Employee = () => {
    const [emp, setEmp] = useState('');
    const [parentEmp, setParentEmp] = useState({}); // parent state  
    const [parentEmpHike, setParentEmpHke] = useState(0); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback    

    useEffect(() => {

        setParentEmp({
            eid: 201,
            ename: 'Monu',
            salary: 20.5
        }
        );

        setParentEmpHke(10);
    }, []);

    const handleCallback = (childEmpData) => {
        setChildEmp(childEmpData);
        console.log(childEmpData);
    }

    return (
        <div>
            <h1 >Employee Component</h1>
            <p> parent {parentEmp.ename}</p>
            <p> parent {parentEmpHike}</p>
            {/* <JavaData></JavaData> */}
            <p>parent {childEmp.ename}</p>
            <JavaData
                parentEmp={parentEmp}
                parentEmpHike={parentEmpHike}
                parentCallback={handleCallback}
            ></JavaData>
            {/* <Counter></Counter> */}
        </div>
    )
}
export default Employee;




// import React from 'react';
// import { useState } from 'react';
// import JavaData from './JavaData';
// import Hello from './Hello';

// // // pass data from child to parent 
// // // parent - Employee (this component), child - JavaData 
// // export default function Employee() {
// //     const [data, setData] = useState('');
// //     const childToParent = (childdata) => {
// //         setData(childdata);
// //     }
// //     return (
// //         <div>
// //             <h1 className="display-1 text-primary">Employee Component</h1>
// //             <p>data in parent {data}</p>
// //             <JavaData childToParent={childToParent} />
// //         </div>
// //     )
// // }

// // parent component of JavaData 
// class Employee extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             parentName: 'Sonu',
//             childName: ''
//         }
//     }

//     childCallBack = (chilldInfo) => {
//         this.setState({ childName: chilldInfo });
//         console.log('aaaa');
//     }


//     render() {
//         return (<div>
//             <h1 className="display-1 text-primary">Employee Component</h1>
//             {/* <JavaData dataFromParent={this.state.parentName} ></JavaData> */}
        
//             <JavaData getCall={this.state.childCallBack} ></JavaData>
//             <p> {this.state.parentName} </p>
//             {/* <parentCallback={this.state.childCallBack} /> */}
//             <p> {this.state.childName} </p>
//             {/* <Hello /> */}
//             {/* <MyTable/> */}
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';
// import Hello from './Hello';
// import MyTable from './MyTable';

// class Employee extends React.Component {

//     constructor() {
//         super();
//     }


//     render() {
//         return (<div>
//             <h1 className="display-1 text-primary">Employee Component</h1>
//             <p className=" text-warning"> Employee info</p>
//             <Hello />
//             {/* <MyTable/> */}
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';

// class Employee extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Sumit",
//             salary: 10.5
//         };
//     }

//     increaseSalary = () => {
//         console.log("Pay hiked!")
//         this.setState({ salary: this.state.salary + 10 });
//     };

//     setMyName = (evt) => {
//         this.setState({ name: evt.target.value });
//     }

//     render() {
//         return (
//         <div className="App">
//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>

//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>

//             <form>
//                 <h1 style={{ color: "orange" }} >Data Form</h1>
//                 <p>Name:</p>
//                 <input type="text"
//                     onChange={evt => this.setMyName(evt)}></input>
//             </form>
//         </div>
//         );
//     }
// }
// export default Employee;




// // import React from 'react';
// // // import './App.css';
// // class Employee extends React.Component {
// //     constructor() {
// //         super();
// //         this.state = {
// //              name: "Sth", salary: 22.5, 
// //              phones: { first: 1010, second: 4141 }
// //              };
// //     } 
// //     render() {
// //         return (<div className="App">
// //             <h1 > Hi! I am {this.state.name}          and my salary is {this.state.salary}.</h1>
// //             <p> {this.state.phones.second} </p>        </div>);
// //     }
// // }
// // export default Employee;