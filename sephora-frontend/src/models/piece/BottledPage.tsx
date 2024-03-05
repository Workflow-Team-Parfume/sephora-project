import React from "react";
import {useTranslation} from "react-i18next";
import ProductsPage from "../../components/home/productsPage/core/ProductsPage.tsx";
import {Filter, Filters} from "../../components/home/data.ts";
import routes from "../../common/routes.ts";

const BottledPage: React.FC = () => {
    const {t} = useTranslation();
    return <ProductsPage
        defaultOrder={null}
        defaultDirection={null}
        title={t('header.bottled')}
        filters={Filters}
        mainFilter={Filter}
        link={routes.api.bottled}/>;
};

export default BottledPage;
