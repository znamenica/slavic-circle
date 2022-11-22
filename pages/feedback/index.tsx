import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Feedback = () => {
    return (
        <>
            <Typography variant="h3" gutterBottom component="div">
                Обратная связь
            </Typography>
            <Box sx={{ padding: 1 }}>
                <Typography variant="body1" gutterBottom>
                    С вопросами о поддержке в данный момент обращайтесь по адресу <a href="mailto:support@novoslovnica.com" target="_blank">support@novoslovnica.com</a>
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

export default Feedback;
