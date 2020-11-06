import React from "react";
import TextInput from "../commonComponents/TextInput";

const OrganizationSettings = ({ orgSettings, updateOrgSettings }) => {
  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newOrgSettings = { ...orgSettings, [name]: value };
    updateOrgSettings(newOrgSettings);
  };

  let { name, cliaNumber } = { ...orgSettings };
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="prime-container usa-card__container">
          <div className="usa-card__header">
            <h2> Facility Information </h2>
          </div>
          <div className="usa-card__body">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col">
                <TextInput
                  label={"Testing Facility Name"}
                  placeholder={`Facility Name`}
                  value={name || ""}
                  onChange={onInputChange}
                  name="name"
                />
              </div>
              <div className="tablet:grid-col">
                <TextInput
                  label={"CLIA Number"}
                  placeholder={``}
                  value={cliaNumber}
                  onChange={onInputChange}
                  name="cliaNumber"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSettings;
