import Typography from "@mui/material/Typography";
import {Card, CardContent} from "@mui/material";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Contacts = () => {
    return (
        <>
            <Typography variant="h3" gutterBottom component="div">
                Контакты
            </Typography>
            <Card variant="outlined" sx={{ width: "400px" }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Секретариат межславянского круга
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        временный адрес
                    </Typography>
                    <Typography variant="body2">
                        <a href="mailto:support@novoslovnica.com">support@novoslovnica.com</a>
                    </Typography>
                </CardContent>
            </Card>
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

export default Contacts;
