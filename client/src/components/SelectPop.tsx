import { useEffect, useState } from "react";
import "./PopOp.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";

import {
  useForm,
  useFieldArray,
  Control,
  RegisterOptions,
  UseFormRegister,
  FieldArrayPath,
} from "react-hook-form";
import {
  DescriptionModulFrontType,
  DescriptionModulType,
  ModuleAttributes,
} from "../models/Modul";
import {
  AddNewSelectRequest,
  FetcSelectAllRequest,
} from "../store/action-creators/select";
import { useTypeSelector } from "../hooks/useTypeSelector";
type SelectProps<
  TFieldArrayName extends FieldArrayPath<ModuleAttributes> = FieldArrayPath<ModuleAttributes>
> = {
  name: TFieldArrayName;
  control: Control<ModuleAttributes>;
  register: UseFormRegister<ModuleAttributes>;
  keys: number;
  hides: boolean;
  setOneHide: () => void;
};

const SelectPop: React.FC<SelectProps> = ({
  control,
  name,
  register,
  keys,
  hides,
  setOneHide,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });
  const dispatch = useDispatch();
  const { select } = useTypeSelector((state) => state.selecs);
  useEffect(() => {
    dispatch(FetcSelectAllRequest());
  }, []);
  let Onclick = () => {
    setOneHide();
  };
  return (
    <div className="modal" key={keys} style={!hides ? { display: "none" } : {}}>
      <div className="popup__content">
        <div className="btn-closse" onClick={() => Onclick()}></div>
        <div className="title">Добавление значение для "SELECT" </div>
        <div className="sub-title">Настройка модуля</div>
        <div
          onClick={() => {
            append({
              select: {
                id: Date.now(),
                value: "",
              },
            });
          }}
          className="decor-btn"
        >
          Добавить поле
        </div>
        <div className="input-mini-group">
          {fields.map((field, index) => {
            return (
              <div className="input-mini-group__content" key={field.id}>
                <div className="select-container">
                  <div
                    onClick={() => remove(index)}
                    className="btn-closse"
                  ></div>
                  <label htmlFor={`select-${index}`} className="lebel-select">
                    Значение
                  </label>
                  <select
                    className="select"
                    id={`select-${index}`}
                    {...register(
                      `description.${keys}.selects.${index}.select.value`
                    )}
                  >
                    {select?.map((e) => {
                      return <option value={e.value}>{e.value}</option>;
                    })}
                  </select>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn" onClick={() => Onclick()}>
          Закрыть
        </div>
      </div>
    </div>
  );
};
export { SelectPop };
