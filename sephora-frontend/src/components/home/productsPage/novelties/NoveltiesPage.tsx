import {Filter, Filters} from "../../data.ts";
import ProductsPage from "../core/ProductsPage.tsx";
import React from "react";
import {useTranslation} from "react-i18next";

const NoveltiesPage : React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        title={t('common.title.novelty')}
        filters={Filters}
        mainFilter={Filter}/>;
}

export default NoveltiesPage;
