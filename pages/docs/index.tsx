import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Documents = () => {
    return (
        <>
            <Typography variant="h3" gutterBottom component="div">
                Документы
            </Typography>
            <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="body1" gutterBottom component="div">
                    Скоро здесь появится первый документ
                </Typography>
            </Box>
        </>
    )
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default Documents;
