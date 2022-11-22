import Head from "next/head";
import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from "react";
import {Box, Button, Chip} from "@mui/material";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getNewsItems, setPage} from "../../store/news";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useRouter} from "next/router";
import NewsItem from "../../components/news/NewsItem";
import {NewsTag} from "../api/news";

const News = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector(state => state.news.items);
    const page = useAppSelector(state => state.news.page);
    const loadAll = useAppSelector(state => state.news.loadAll);
    const { t } = useTranslation('common');
    const onLoadMore = () => {
        dispatch(setPage(page + 1));
        dispatch(getNewsItems());
    };

    useEffect(() => {
        dispatch(setPage(0));
        dispatch(getNewsItems());
    }, [dispatch]);
    return (
        <Box
            sx={{ marginTop: 1, flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column' }}
        >
            <Head>
                <title>{t('news')}</title>
                <meta name="description" content={t('news_desc')} />
            </Head>
            <Typography variant="h3" gutterBottom component="div">
                {t('news')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                {news?.map(item => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </Box>
            {!loadAll && (
                <Box sx={{ display: 'flex', marginTop: 5 }}>
                    <Button
                        onClick={onLoadMore}
                        variant="outlined"
                    >
                        Загрузить еще
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

export default News;
