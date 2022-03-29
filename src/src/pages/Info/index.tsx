import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";

const Info = () => {
    const { t } = useTranslation();
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
                <Typography variant="h2" gutterBottom component="div">
                    {t('info')}
                </Typography>
                <Paper>
                    <Box sx={{ padding: '20px' }}>
                        <Typography variant="body1" gutterBottom>
                            Межславянский круг - это организация, отвечающая за развитие и поддержку межславянского языка.
                        </Typography>
                    </Box>
                </Paper>
            </div>
        </div>
    )
};

export default Info;
