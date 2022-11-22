import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Home = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace("/news");
    }, []);

    return null;
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default Home;
