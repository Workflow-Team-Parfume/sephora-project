import ProductsPage from "../core/ProductsPage.tsx";
import {Filter, Filters} from "../../data.ts";
import routes from "../../../../common/routes.ts";
import React from "react";
import {useTranslation} from "react-i18next";

const CarePage: React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        title={t('common.title.care')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.care}/>;
};

export default CarePage;
