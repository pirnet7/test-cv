import "./translationComponent.css";
import { useTranslation } from "react-i18next";

const TraComp = () => {
  const { t } = useTranslation();
  return (
    <div className="container margin-bottom-4">
      <sdx-select
        label="Which device do you want to test?"
        placeholder="Choose your device…"
      >
        <sdx-select-option value="de"></sdx-select-option>
        <sdx-select-option value="it"></sdx-select-option>
      </sdx-select>

      <div>
        <p>{t("greeting")}</p>
      </div>
    </div>
  );
};

export default TraComp;
