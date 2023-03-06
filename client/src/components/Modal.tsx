import { useEffect, useState } from "react";
import "./PopOp.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";
import {
  DescriptionModulFrontType,
  DescriptionModulType,
  InputTypeEnum,
  ModuleAttributes,
  TypeEnum,
} from "../models/Modul";
import { useForm, useFieldArray, useController } from "react-hook-form";
import { addModuledRequest } from "../store/action-creators/module";
import { SelectBtn } from "./Select";
import { PopOpAddSelect } from "./PopOpAddSelect";
import { SelectPop } from "./SelectPop";
import { rootWatcher } from "../store/saga/index";
import { useNavigate } from "react-router-dom";
type date = {
  id: number;
  value: string;
};
type ModuleAtt = {
  name_front: string;
  name_bd: string;
  description: {
    dbSettings: DescriptionModulType;
    frontSettings: DescriptionModulFrontType;
    selects: { select: date }[];
  }[];
};
const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ModuleAttributes>({
    mode: "onSubmit",
    defaultValues: {
      description: [
        {
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
          selects: [{ select: { id: Date.now(), value: "" } }],
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "description",
  });
  const onSubmit = (data: ModuleAttributes) => {
    dispatch(addModuledRequest(data));
    navigate("/");
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };
  const [hideAdd, setHideAdd] = useState(false);
  const onHideAdd = () => {
    setHideAdd(!hideAdd);
  };
  return (
    <>
      <PopOpAddSelect hides={hideAdd} setOneHide={onHideAdd} />
      <form onSubmit={handleSubmit(onSubmit)} className="popup">
        <div className="popup__content">
          <div className="title">Добавление модуля</div>
          <div className="input-group">
            <input
              {...register("name_front")}
              placeholder="Название модуля"
              className="input"
            />
            <input
              {...register("name_bd")}
              placeholder="Название базы данных"
              className="input"
            />
            <div className="text-decor">* Только латинскими символами</div>
          </div>
          <div className="sub-title">Настройка модуля</div>
          <div
            onClick={() => {
              append({
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
                selects: [],
              });
            }}
            className="decor-btn"
          >
            Добавить поле
          </div>
          {fields.map((field, index) => {
            return (
              <div className="input-mini-group" key={field.id}>
                <div className="input-mini-group__content">
                  <div className="small-title">Настройка поля в БД</div>
                  <input
                    placeholder="Название базы данных"
                    {...register(
                      `description.${index}.dbSettings.name` as const,
                      {
                        required: true,
                      }
                    )}
                    className={
                      errors?.description?.[index]?.dbSettings?.name
                        ? "error input"
                        : "input"
                    }
                    defaultValue={field.dbSettings.name}
                  />
                  <div className="select-container">
                    <label className="lebel-select">Тип данных</label>
                    <select
                      className="select"
                      {...register(`description.${index}.dbSettings.type`)}
                    >
                      <option value="text">text</option>
                      <option value="number">number</option>
                      <option value="boolean">boolean</option>
                    </select>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id={`${index}"allowNull"`}
                      {...register(`description.${index}.dbSettings.allowNull`)}
                    />
                    <label htmlFor={`${index}"allowNull"`} className="lebel">
                      Может быть пустым
                    </label>
                  </div>
                </div>
                <div className="input-mini-group__content">
                  <div className="small-title">Настройка поля на фронте</div>
                  <input
                    placeholder="Название заголовка на фронте"
                    {...register(
                      `description.${index}.frontSettings.name_front` as const,
                      {
                        required: true,
                      }
                    )}
                    className={
                      errors?.description?.[index]?.frontSettings?.name_front
                        ? "error input"
                        : "input"
                    }
                    defaultValue={field.frontSettings.name_front}
                  />
                  <div className="select-container">
                    <label className="lebel-select">Тип поля</label>
                    <select
                      className="select"
                      placeholder="Тип поля"
                      defaultValue={`description.${index}.frontSettings.input_type`}
                      {...register(
                        `description.${index}.frontSettings.input_type`
                      )}
                    >
                      <option value="input">input</option>
                      <option value="select">select</option>
                      <option value="checkbox">checkbox</option>
                      <option value="fale">fale</option>
                      <option value="radio">radio </option>
                    </select>
                  </div>
                  {/* <SelectPop
                  control={control}
                  name={`description.${index}.selects`}
                  keys={index}
                  register={register}
                /> */}
                  <SelectBtn
                    watcher={watch}
                    control={control}
                    name={`description.${index}.frontSettings.input_type`}
                    key={index}
                    id={index}
                    register={register}
                    onHideAdd={onHideAdd}
                  />
                </div>
                <div onClick={() => remove(index)} className="btn-closse"></div>
              </div>
            );
          })}
          {/* <div onClick={()=>onSubmit()} className="btn">
          Добавить модуль
        </div> */}
          <input className="btn" type="submit" />
        </div>
      </form>{" "}
    </>
  );
};
export { Modal };
