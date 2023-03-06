import {
  Control,
  FieldArrayPath,
  FieldArrayPathValue,
  FieldName,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
  useController,
  useWatch,
} from "react-hook-form";
import {
  DescriptionModulFrontType,
  DescriptionModulType,
  ModuleAttributes,
} from "../models/Modul";
import { PopOpAddSelect } from "./PopOpAddSelect";
import { useEffect, useState } from "react";
import { SelectPop } from "./SelectPop";
type UseControllerProp<TFieldValues extends FieldValues = ModuleAttributes> = {
  name: string;
  control: Control<ModuleAttributes>;
  defaultValue?: unknown;
  watcher: UseFormWatch<TFieldValues>;
  register: UseFormRegister<ModuleAttributes>;
  id: number;
  onHideAdd: () => void;
};
export const SelectBtn: React.FC<UseControllerProp> = ({
  name,
  control,
  defaultValue,
  watcher,
  register,
  id,
  onHideAdd,
}) => {
  const firstName = watcher(
    `description.${id}.frontSettings.input_type` // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
  );

  const [hideSelect, setHideSelect] = useState(false);

  const onHideSelect = () => {
    setHideSelect(!hideSelect);
  };
  return (
    <>
      {firstName === "select" ? (
        <div className="mini-btn-container">
          <div onClick={() => onHideAdd()} className="mini-btn">
            Добавить новый
          </div>
          <SelectPop
            control={control}
            name={`description.${id}.selects`}
            keys={id}
            key={id}
            register={register}
            hides={hideSelect}
            setOneHide={onHideSelect}
          />

          <div onClick={() => onHideSelect()} className="mini-btn">
            Выбрать из базы
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
