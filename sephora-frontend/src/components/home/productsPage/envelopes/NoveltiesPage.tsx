import {Filter, Filters} from "../../data.ts";
import ProductsPage from "../core/ProductsPage.tsx";
import React from "react";
import {useTranslation} from "react-i18next";
import routes from "../../../../common/routes.ts";

const NoveltiesPage : React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        title={t('common.title.novelty')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.novelties}/>;
}

export default NoveltiesPage;
