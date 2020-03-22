import * as React from "react";
import { Link } from "react-router-dom";

// Types
import { Ward } from "../../datatypes/ListView.types";

// Styles
import "./StationRow.scss";

interface StationRow {
  stationData: Ward;
}

const StationRow: React.FunctionComponent<StationRow> = ({
  stationData
}: StationRow) => {
  const [vacant, setVacant] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [percentage, setPercentage] = React.useState(100);

  React.useEffect(() => {
    if (stationData) {
      const bedsVacant = stationData.bed.filter(bed => {
        return bed.bed_state.name === "frei";
      }).length;

      const bedsMax = stationData.bed.length;
      const bedsPercentage = Math.round((bedsVacant / bedsMax) * 100);

      setVacant(bedsVacant);
      setMax(bedsMax);
      setPercentage(bedsPercentage);
    }
  }, [stationData]);

  const getColorFromPercentage = (percent: number): string => {
    if (percent >= 25) {
      return "#6ab04c";
    }

    if (percent > 0) {
      return "#f9ca24";
    }

    return "#eb4d4b";
  };

  return (
    <>
      <tr className="station-row">
        <td>
          <div
            className="station-row__status"
            style={{
              backgroundColor: getColorFromPercentage(percentage)
            }}
          />
        </td>
        <td>
          <p className="station-row__title">{stationData.name}</p>
          <Link to={`/wardBedManagement/${stationData.id}`}>Vacancy</Link>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
        <td>
          <p className="station-row__vacancy">
            {vacant} / {max}
          </p>
        </td>
      </tr>
    </>
  );
};

export default StationRow;
