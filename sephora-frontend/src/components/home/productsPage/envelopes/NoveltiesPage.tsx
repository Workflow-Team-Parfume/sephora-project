import {Filter, Filters} from "../../data.ts";
import ProductsPage from "../core/ProductsPage.tsx";
import React from "react";
import {useTranslation} from "react-i18next";
import routes from "../../../../common/routes.ts";
import {Directions, Orders} from "../core/SortingOrder.ts";

const NoveltiesPage : React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        defaultOrder={Orders[2]}
        defaultDirection={Directions[0]}
        title={t('header.novelty')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.novelties}
        navigateLink={routes.novelties}/>;
}

export default NoveltiesPage;
