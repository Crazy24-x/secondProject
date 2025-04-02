import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";

const PlanetsPage = () => {
    const navigate = useNavigate();  // Replaces history
    const { id } = useParams();      // Replaces match.params

    return (
        <Row
            left={<PlanetList onItemSelected={(id) => navigate(id)} />}
            right={<PlanetDetails itemId={id} />}
        />
    );
};

export default PlanetsPage;