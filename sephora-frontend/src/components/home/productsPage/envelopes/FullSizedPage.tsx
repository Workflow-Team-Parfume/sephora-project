import React from "react";
import ProductsPage from "../core/ProductsPage.tsx";
import {Filter, Filters} from "../../data.ts";
import routes from "../../../../common/routes.ts";
import {useTranslation} from "react-i18next";

const FullSizedPage : React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        title={t('header.fullSizePerfume')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.full_sized}/>;
};

export default FullSizedPage;
