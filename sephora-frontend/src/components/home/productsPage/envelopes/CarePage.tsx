import ProductsPage from "../core/ProductsPage.tsx";
import {Filter, Filters} from "../../data.ts";
import routes from "../../../../common/routes.ts";
import React from "react";
import {useTranslation} from "react-i18next";

const CarePage: React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        defaultOrder={null}
        defaultDirection={null}
        title={t('header.care')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.care}
        navigateLink={routes.care}/>;
};

export default CarePage;
