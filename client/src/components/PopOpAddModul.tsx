import { useEffect, useState } from "react";
import "./PopOp.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";
import {
  DescriptionModulFrontType,
  DescriptionModulType,
  InputTypeEnum,
  TypeEnum,
} from "../models/Modul";
import { useForm, SubmitHandler } from "react-hook-form";

type info = {
  id: number;
  dbSettings: DescriptionModulType;
  frontSettings: DescriptionModulFrontType;
};
const PopOpAddModul: React.FC = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState<info[]>([]);
  const [nameModul, setNameModul] = useState<string>("");
  const [nameBd, setNameBd] = useState<string>("");
  const addInfo = () => {
    console.log(info);
    setInfo([
      ...info,
      {
        id: Date.now(),
        dbSettings: {
          id: Date.now().toLocaleString(),
          name: "",
          allowNull: false,
          type: TypeEnum.text,
        },
        frontSettings: {
          id: Date.now().toLocaleString(),
          name_front: "",
          select: false,
          input_type: InputTypeEnum.input,
        },
      },
    ]);
  };

  const removeInfo = (id: number) => {
    debugger;
    setInfo(info.filter((i) => (i.id !== id ? true : false)));
  };
  const changeInfoDb = (
    e: { target: { name: any; value: any } },
    id: number,
    obj: string
  ) => {
    const { name, value } = e.target;

    switch (obj) {
      case "dbSettings":
        return setInfo(
          info.map((i) =>
            i.id === id
              ? { ...i, dbSettings: { ...i.dbSettings, [name]: value } }
              : i
          )
        );
      case "frontSettings":
        return setInfo(
          info.map((i) =>
            i.id === id
              ? {
                  ...i,
                  frontSettings: {
                    ...i.frontSettings,
                    [name]: value,
                  },
                }
              : i
          )
        );
      case "dbSettingsChek":
        return setInfo(
          info.map((i) =>
            i.id === id
              ? {
                  ...i,
                  dbSettings: {
                    ...i.dbSettings,
                    [name]: !i.dbSettings.allowNull,
                  },
                }
              : i
          )
        );
      case "frontSettingsChek":
        debugger;
        return setInfo(
          info.map((i) =>
            i.id === id
              ? {
                  ...i,
                  frontSettings: {
                    ...i.frontSettings,
                    [name]: !i.frontSettings.select,
                  },
                }
              : i
          )
        );
      default:
        return info;
    }
  };

  const click = () => {
    const formData = new FormData();
    formData.append("name_front", nameModul);
    formData.append("name_bd", nameBd);
    formData.append("description", JSON.stringify(info));
    console.log("====================================");
    console.log(formData);
    console.log("====================================");
    const data = {
      name_front: nameModul,
      name_bd: nameBd,
      description: info,
    };
    console.log("====================================");
    console.log(info);
    console.log("====================================");
  };
  return (
    <form className="popup">
      <div className="popup__content">
        <div className="title">???????????????????? ????????????</div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(e) => setNameModul(e.target.value)}
            value={nameModul}
            placeholder="???????????????? ????????????"
          />
          <input
            type="text"
            className="input"
            onChange={(e) => setNameBd(e.target.value)}
            value={nameBd}
            placeholder="???????????????? ???????? ????????????"
          />
          <div className="text-decor">* ???????????? ???????????????????? ??????????????????</div>
        </div>
        <div className="sub-title">?????????????????? ????????????</div>
        <div onClick={addInfo} className="decor-btn">
          ???????????????? ????????
        </div>

        {info.map((i) => (
          <div className="input-mini-group">
            <div className="input-mini-group__content">
              <div className="small-title">?????????????????? ???????? ?? ????</div>
              <input
                type="string"
                className="input"
                name="name"
                placeholder="???????????????? ???????? ????????????"
                onChange={(e) => changeInfoDb(e, i.id, "dbSettings")}
                value={i.dbSettings.name}
              />
              <div className="select-container">
                <select
                  defaultValue={i.dbSettings.type}
                  className="select"
                  name="type"
                  id="category"
                  onChange={(e) => changeInfoDb(e, i.id, "dbSettings")}
                >
                  <option className="select__value" value="??????????">
                    ??????????
                  </option>
                  <option className="select__value" value="????????????">
                    ????????????
                  </option>
                </select>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  name="allowNull"
                  id={`${i.id}"allowNull"`}
                  onChange={(e) => changeInfoDb(e, i.id, "dbSettingsChek")}
                  checked={i.dbSettings.allowNull}
                />
                <label className="lebel" htmlFor={`${i.id}"allowNull"`}>
                  ?????????? ???????? ????????????
                </label>
              </div>
            </div>
            <div className="input-mini-group__content">
              <div className="small-title">?????????????????? ???????? ?? ????</div>
              <input
                type="email"
                className="input"
                name="name_front"
                placeholder="???????????????? ???????? ????????????"
                onChange={(e) => changeInfoDb(e, i.id, "frontSettings")}
                value={i.frontSettings.name_front}
              />
              <div className="select-container">
                <select
                  className="select"
                  name="input_type"
                  onChange={(e) => changeInfoDb(e, i.id, "frontSettings")}
                  defaultValue={i.frontSettings.input_type}
                >
                  <option className="select__value" value="1">
                    ??????????
                  </option>
                  <option className="select__value" value="2">
                    ????????????
                  </option>
                </select>
              </div>

              <div className="form__content checkbox-container">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  name="select"
                  id={`${i.id}select`}
                  onChange={(e) => changeInfoDb(e, i.id, "frontSettingsChek")}
                  checked={i.frontSettings.select}
                />
                <label className="lebel" htmlFor={`${i.id}select`}>
                  ?????????? ???????? ????????????
                </label>
              </div>
            </div>
            <div onClick={() => removeInfo(i.id)} className="btn-closse"></div>
          </div>
        ))}

        <div onClick={click} className="btn">
          ???????????????? ????????????
        </div>
      </div>
    </form>
  );
};
export { PopOpAddModul };
