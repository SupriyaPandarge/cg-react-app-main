import axios from "axios";
import { useState, useEffect } from 'react';

let JavaData = (props) => {
    const [empList, setEmpList] = useState([]); // from axios
    const [emp, setEmp] = useState(''); // from axios 
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
    // const url = `/Employee/`;
    // const url = `/getall/`;
    // const url      =`/eid/`;

    useEffect(() => {

        setParentEmp(props.parentEmp);
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );

        axios.get(`/getall/`)
            .then((response) => {
                setEmpList(response.data);
            })

        // axios.get(`${url}/103`)
        axios.get(`/getemp/102`)
            .then((response) => {
                setEmp(response.data);
            }
            )
            .catch((error)=>{
                console.log.apply(error);
            });
         
        
            axios.post(`/addemp`, {
                "eid": 103,
                "ename": "Supriya",
                "salary": 50.5
            })
                .then((response) => {
                    console.log(response.data);
                })


    }, []);

    const onTrigger = () => {
        props.parentCallback(childEmp);
    };

    return (
        <div>
            <p>JavaData Component</p>
            <p>axios {empList.map(e => <div>{e.ename}</div>)}</p>
            <p>axios {emp.ename}</p>
            <p>child {parentEmp.name}</p>
            <p> child {parentEmpHike} </p>
            <button onClick={onTrigger}>Pass child emp to parent</button>
        </div>
    )
}
export default JavaData;

// import axios from "axios";
// import { useState } from 'react';

// // // pass data from child to parent 
// // // parent - Employee, child - JavaData (this component) 
// // export default function JavaData({ childToParent }) {
// //     let data = 'Sonu';
// //     return (
// //         <div>
// //             <p>data in child {data}</p>
// //             <button onClick={() => childToParent(data)}>Click to pass data from child to parent</button>
// //         </div>
// //     )
// // }

// let getCall = (event) => {
//     // this.props.parentCallback('Tonu');
//     event.childCallBack('Monu');
//     console.log('getCall');
//     event.preventDefault(); // important
// }

// // child component of Employee 
// let JavaData = (props) => {

//     const [data, setData] = useState('');

//     // axios.get('/hello').then((abc) => {
//     //     console.log(abc.data);
//     // });

//     // axios.get('/getall').then((abc) => {
//     //     console.log(abc.data.name);
//     // });

//     // axios.get('/getemp/103').then((abc) => {
//     //     console.log(abc.data);
//     // });

//     return (
//         <div>
//             <p>Java Data</p>
//             <p onLoad={getCall}> </p>
//             <p> {props.dataFromParent} </p>
            
//         </div>
//     )
// }

// export default JavaData;
