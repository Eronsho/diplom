import { useState } from "react";
import "./PopOp.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";
import { addContractdRequest } from "../store/action-creators/contract";
import { ContractAttributes } from "../models/Contract";
const PopOpContract: React.FC = () => {
  const dispatch = useDispatch();

  const [contract, setContract] = useState<number>(0);
  const [organization_fullname, setOrganization_fullname] =
    useState<string>("");
  const [director_fullname, setDirector_fullname] = useState<string>("");
  const [organization_inn, setOrganization_inn] = useState<number>(0);
  const [organization_ogrn, setOrganization_ogrn] = useState<number>(0);
  const [user_fullname, setUser_fullname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone_number, setPhone_number] = useState<number>(+7);
  const [baced_doc, setBaced_doc] = useState<string>("");
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 3);
  const [date, setDate] = useState(defaultDate);
  const onSetDate = (event: { target: { value: string | number | Date } }) => {
    setDate(new Date(event.target.value));
  };
  const click = () => {
    const contractAdd: ContractAttributes = {
      contract,
      organization_fullname,
      director_fullname,
      organization_inn,
      organization_ogrn,
      user_fullname,
      address,
      phone_number,
      baced_doc,
      data: date,
    };
    dispatch(addContractdRequest(contractAdd));
  };
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="title">Новый договор</div>
        <div className="input-group">
          <input
            type="number"
            className="input"
            onChange={(e) => setContract(parseInt(e.target.value))}
            value={contract}
            placeholder="Номер договора"
          />
          <input
            type="text"
            className="input"
            name="organization_fullname"
            placeholder="Полное название организации"
            id=""
            onChange={(e) => setOrganization_fullname(e.target.value)}
            value={organization_fullname}
          />
          <input
            type="text"
            className="input"
            name="director_fullname"
            placeholder="ФИО руководителя организации"
            id=""
            onChange={(e) => setDirector_fullname(e.target.value)}
            value={director_fullname}
          />
          <div className="input-mini">
            <input
              type="number"
              className="input"
              name="organization_inn"
              placeholder="ИНН"
              id=""
              onChange={(e) => setOrganization_inn(parseInt(e.target.value))}
              value={organization_inn}
            />

            <input
              type="number"
              className="input"
              name="organization_ogrn"
              placeholder="ОГРН"
              id=""
              onChange={(e) => setOrganization_ogrn(parseInt(e.target.value))}
              value={organization_ogrn}
            />
          </div>

          <input
            type="text"
            className="input"
            name="user_fullname"
            placeholder="ФИО ответственного лица"
            id=""
            onChange={(e) => setUser_fullname(e.target.value)}
            value={user_fullname}
          />
          <div className="input-mini-group">
            <div className="input-mini-group__content">
              <input
                type="text"
                className="input"
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="input-mini-group__content">
              <input
                type="tel"
                className="input"
                name="phone_number"
                placeholder="Номер телефона"
                onChange={(e) => setPhone_number(parseInt(e.target.value))}
                value={phone_number}
              />
            </div>
            <div className="input-mini-group__content">
              <input
                type="text"
                className="input"
                name="baced_doc"
                placeholder="Устав"
                id=""
                onChange={(e) => setBaced_doc(e.target.value)}
                value={baced_doc}
              />
            </div>
            <div className="input-mini-group__content">
              <input
                type="date"
                className="input"
                name="data"
                placeholder="Дата "
                id=""
                value={date.toLocaleDateString("en-CA")}
                onChange={onSetDate}
              />
            </div>
          </div>
        </div>
        <div onClick={click} className="btn">
          Добавить договор
        </div>
      </div>
    </div>
  );
};
export { PopOpContract };
