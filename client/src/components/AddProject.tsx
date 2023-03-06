import { useEffect, useState } from "react";
import "./PopOp.scss";
import "./Project.scss";
import "./Loginform.scss";
import { useDispatch } from "react-redux";
import {
  Control,
  FieldName,
  FieldValues,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { ModuleAddProjectProps, modulStateType } from "../models/Modul";
import { $host } from "../http";
import { useNavigate } from "react-router-dom";

type ModulListProps = {
  moduls: ModuleAddProjectProps;
};
type UseWatchProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>;
  defaultValue?: unknown;
  control?: Control;
};

const AddProject: React.FC<ModulListProps> = ({ moduls }) => {
  const { register, control, watch, handleSubmit, reset, trigger, setError } =
    useForm();
  const navigate = useNavigate();
  const onSubmit = async (datas: any) => {
    const formData = new FormData();
    // formData.append("file", datas.file[0]);
    formData.append("idModul", moduls.modul.id);
    formData.append("idUser", "e8566ef9-9bae-4c8a-b827-587d31d370d8");
    formData.append("project", JSON.stringify(datas.project));
    let fale = Array.from(datas.fale);
    fale.forEach((e: any) => {
      return formData.append("fale", e);
    });
    let fales = Array.from(datas.files);
    fales.forEach((e: any) => {
      return formData.append("files", e);
    });
    let set = (dat: any) => {
      return $host.post("api/modul/project", dat);
    };
    const { data } = await set(formData);
    console.log("====================================");
    console.log(datas);
    console.log("====================================");
    // navigate("/");
  };
  const dispatch = useDispatch();

  const FirstNameWatched: React.FC<UseWatchProps> = ({
    control,
    name,
    defaultValue,
  }) => {
    const firstName = useWatch({
      control,
      name: name, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
      defaultValue: defaultValue, // default value before the render
    });

    return (
      <label className="lebel-file" htmlFor={name}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_423_353)">
            <path
              d="M3.99998 0H20.9929L29.9999 8.97203V30C29.9999 31.105 29.104 32 28 32H3.99998C2.89595 32 2 31.105 2 30V1.99998C2 0.89502 2.89605 0 3.99998 0Z"
              fill="#E2574C"
            />
            <path
              d="M29.9711 9.00001H23C21.896 9.00001 21.0001 8.10406 21.0001 7.00003V0.0200195L29.9711 9.00001Z"
              fill="#B53629"
            />
            <path
              d="M22.498 15.1632C22.833 15.1632 22.997 14.8712 22.997 14.5882C22.997 14.2952 22.826 14.0122 22.498 14.0122H20.59C20.217 14.0122 20.009 14.3212 20.009 14.6622V19.3512C20.009 19.7692 20.247 20.0012 20.569 20.0012C20.889 20.0012 21.1281 19.7692 21.1281 19.3512V18.0642H22.2821C22.6401 18.0642 22.8191 17.7712 22.8191 17.4802C22.8191 17.1953 22.6401 16.9122 22.2821 16.9122H21.1281V15.1632H22.498ZM16.049 14.0122H14.653C14.274 14.0122 14.0049 14.2722 14.0049 14.6582V19.3552C14.0049 19.8342 14.3919 19.9842 14.6689 19.9842H16.134C17.8679 19.9842 19.0129 18.8432 19.0129 17.0822C19.012 15.2202 17.934 14.0122 16.049 14.0122ZM16.1161 18.8263H15.265V15.1702H16.032C17.1931 15.1702 17.698 15.9493 17.698 17.0242C17.698 18.0303 17.202 18.8263 16.1161 18.8263ZM11.002 14.0122H9.61904C9.22802 14.0122 9.01001 14.2702 9.01001 14.6622V19.3512C9.01001 19.7692 9.25999 20.0012 9.59596 20.0012C9.93193 20.0012 10.1819 19.7692 10.1819 19.3512V17.9822H11.0489C12.1189 17.9822 13.0019 17.2241 13.0019 16.0052C13.002 14.8122 12.15 14.0122 11.002 14.0122ZM10.9791 16.8823H10.182V15.1132H10.9791C11.4711 15.1132 11.7841 15.4972 11.7841 15.9982C11.783 16.4983 11.4711 16.8823 10.9791 16.8823Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_423_353">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p> {firstName[0].name ? firstName[0].name : firstName}</p>
      </label>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      key={moduls.modul.id}
      className="container-main"
    >
      <div className="title">Добавить проект в {moduls.modul.name_front}</div>
      <div className="project">
        <div className="project__container">
          <div className="project__left">
            <div className="sub-title">Информация</div>
            <div className="input-group">
              {moduls.description.frontSettings.map((e) => {
                switch (e.input_type) {
                  case "input":
                    return (
                      <input
                        {...register(`project.${e.name_bd}`, {
                          required: false,
                          maxLength: 30,
                        })}
                        placeholder={e.name_front}
                        className="input"
                      />
                    );
                  case "select":
                    return (
                      <div className="select-container">
                        <label className="lebel-select">{e.name_front}</label>
                        <select
                          className="select"
                          {...register(`project.${e.name_bd}`)}
                        >
                          {e.select !== false
                            ? e.select.map((e) => {
                                return (
                                  <option value={e.value}>{e.value}</option>
                                );
                              })
                            : ""}
                        </select>
                      </div>
                    );
                  default:
                    break;
                }
              })}
            </div>
          </div>
          <div className="project__riht">
            <div className="sub-title">Документы</div>
            <div className="doc-group">
              {moduls.description.frontSettings.map((e) => {
                switch (e.input_type) {
                  case "fale":
                    return (
                      <>
                        <FirstNameWatched
                          control={control}
                          name={e.name_bd}
                          defaultValue={e.name_bd}
                        />

                        <input
                          {...register(`fale.${e.input_type}`, {
                            required: true,
                          })}
                          type="file"
                          className="file"
                          id={e.name_bd}
                          name={e.name_bd}
                        />
                      </>
                    );

                  default:
                    break;
                }
              })}
            </div>
            <div className="small-title">Необязательные документы</div>
            <div className="doc-container">
              <label className="lebel-files" htmlFor="files">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.62408 1.18838L3.20458 5.96897C1.73044 7.06677 0.768676 8.7019 0.495304 10.575C0.22113 12.4487 0.674067 14.2908 1.77126 15.7642C2.86906 17.2383 4.50419 18.2001 6.37727 18.4734C8.25015 18.7482 10.0923 18.2953 11.5664 17.1975L17.9827 12.4193L16.7882 10.8152L10.3719 15.5934C9.32684 16.3717 8.01074 16.6922 6.66681 16.4948C5.32266 16.2988 4.15358 15.6147 3.37533 14.5696C2.59768 13.5254 2.27716 12.2093 2.47393 10.8645C2.6699 9.52037 3.35408 8.35129 4.39914 7.57304L10.8154 2.79484L10.2181 1.9928L10.8162 2.79424L10.8186 2.79245C11.4522 2.3206 12.2405 2.12508 13.0393 2.2434C13.8383 2.36032 14.5395 2.7745 15.0146 3.41072C15.2489 3.72589 15.4182 4.08444 15.5129 4.46558C15.6075 4.84672 15.6255 5.24286 15.5658 5.63101C15.5111 6.02102 15.3799 6.39638 15.1797 6.7355C14.9795 7.07463 14.7142 7.37082 14.3991 7.60705L7.98279 12.3853C7.87729 12.4619 7.75769 12.5169 7.63087 12.5471C7.50405 12.5774 7.37251 12.5823 7.24379 12.5615C7.11402 12.5448 6.98886 12.5025 6.87552 12.4371C6.76219 12.3717 6.66293 12.2845 6.58348 12.1805C6.43296 11.9784 6.36888 11.7082 6.40799 11.4409C6.42453 11.3112 6.46666 11.1861 6.53194 11.0729C6.59721 10.9596 6.68433 10.8605 6.78824 10.7812L13.2045 6.00298L12.01 4.39891L5.59369 9.17712C4.96008 9.64896 4.54589 10.3502 4.42916 11.1528C4.31204 11.9532 4.50816 12.7422 4.97941 13.3751C5.45066 14.0079 6.15105 14.4226 6.95426 14.5402C7.34282 14.5998 7.73937 14.5819 8.12095 14.4873C8.50253 14.3928 8.86159 14.2235 9.17734 13.9893L15.5944 9.21053C16.1204 8.81823 16.5635 8.32565 16.8982 7.76122C17.2328 7.19679 17.4524 6.57167 17.5442 5.92194C17.6419 5.27334 17.6102 4.6118 17.4509 3.97552C17.2916 3.33924 17.0078 2.74081 16.6159 2.21479C16.2241 1.68877 15.7319 1.24557 15.1679 0.910778C14.6039 0.575981 13.9791 0.356218 13.3296 0.264175C12.6816 0.165156 12.0203 0.195865 11.3841 0.354518C10.748 0.513172 10.1498 0.796611 9.62408 1.18838Z"
                    fill="#828282"
                  />
                </svg>
                <p>Выбрать файлы...</p>
              </label>{" "}
              <input
                multiple={true}
                type="file"
                {...register(`files`, {
                  required: true,
                })}
                className="file"
                id="files"
              />
            </div>
          </div>
        </div>
      </div>
      <input className="btn" type="submit" />
    </form>
  );
};
export { AddProject };
