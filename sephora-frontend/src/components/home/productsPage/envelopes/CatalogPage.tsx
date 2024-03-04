import {useTranslation} from "react-i18next";
import ProductsPage from "../core/ProductsPage.tsx";
import {Filter, Filters} from "../../data.ts";
import routes from "../../../../common/routes.ts";
import React from "react";

const CatalogPage: React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        defaultOrder={null}
        defaultDirection={null}
        title={t('header.catalogue')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.pieces}/>;
};

export default CatalogPage;