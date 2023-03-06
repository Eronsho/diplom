import { useEffect, useState } from "react";
import "./PopOp.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { FormSelectAddValues } from "../models/Select";
import {
  AddNewSelectRequest,
  FetcSelectAllRequest,
} from "../store/action-creators/select";
import { useTypeSelector } from "../hooks/useTypeSelector";

type selectProps = {
  hides: boolean;
  setOneHide: () => void;
};
const PopOpAddSelect: React.FC<selectProps> = ({ hides, setOneHide }) => {
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSelectAddValues>({
    mode: "onBlur",
    defaultValues: {
      select: [
        {
          id: Date.now(),
          value: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "select",
  });
  const onSubmit = (data: FormSelectAddValues) => {
    dispatch(AddNewSelectRequest(data));
    dispatch(FetcSelectAllRequest());
    setOneHide();
    remove();
  };

  return (
    <form
      className="modal"
      onSubmit={handleSubmit(onSubmit)}
      key={1}
      style={!hides ? { display: "none" } : {}}
    >
      <div className="popup__content">
        <div className="btn-closse" onClick={() => setOneHide()}></div>

        <div className="title">Добавление новых значение в список </div>

        <div className="sub-title">Настройка модуля</div>
        <div
          onClick={() => {
            append({
              id: Date.now(),
              value: "",
            });
          }}
          className="decor-btn"
        >
          Добавить поле
        </div>
        <div className="input-mini-group">
          {fields
            ? fields.map((field, index) => {
                return (
                  <div className="input-mini-group__content" key={field.id}>
                    <div
                      onClick={() => remove(index)}
                      className="btn-closse"
                    ></div>

                    <input
                      placeholder="Название"
                      id={`input-${index}`}
                      {...register(`select.${index}.value` as const, {
                        required: true,
                      })}
                      className={
                        errors?.select?.[index]?.value ? "error input" : "input"
                      }
                      defaultValue={field.value}
                    />
                  </div>
                );
              })
            : ""}
        </div>

        <input className="btn" type="submit" />
      </div>
    </form>
  );
};
export { PopOpAddSelect };
