import { useEffect, useState } from "react";
import "./Modul.scss";
import { useDispatch } from "react-redux";
import {
  fetchModuledRequest,
  fetchOneModuledRequest,
} from "../store/action-creators/module";
import {
  ModuleAttributes,
  descriptionType,
  modulStateType,
} from "../models/Modul";
import { useNavigate } from "react-router-dom";
import { ADD_PROJECT } from "../utils/consts";
import { ProjectItem } from "./ProjectItem";
type ModulListProps = {
  dec: descriptionType[];
};
const Table: React.FC<ModulListProps> = ({ dec }) => {
  return (
    <>kl</>
    // <div className="modul__content modul-content">
    //   <table>
    //     {dec.map((e) => (
    //         e.frontSettings.map((i)=>{

    //         })
    //     ))}
    //     <tr>
    //       <th>Name</th>
    //       <th>Age</th>
    //       <th>Gender</th>
    //     </tr>
    //     { {data.map((val, key) => {
    //         return (
    //           <tr key={key}>
    //             <td>{val.name}</td>
    //             <td>{val.age}</td>
    //             <td>{val.gender}</td>
    //           </tr>
    //         );
    //       })} }
    //   </table>
    //   {/* <div className="modul-content__header">
    //     {dec.frontSettings.map((e) => (
    //       <div key={e.id} className="modul-content__title">
    //         <p>{e.name_front}</p>
    //       </div>
    //     ))}
    //   </div> */}

    //   {/* {moduls.description.projects.map(
    //       (e) => e.map((i) => <ProjectItem projects={i} />)

    //       // <div className="modul-content__content">
    //       //   {e.map((p) => (
    //       //     <div className="modul-content__text">
    //       //       <p>{p.name}</p>
    //       //     </div>
    //       //   ))}
    //       // </div>
    //     )} */}
    // </div>
  );
};
export { Table };
