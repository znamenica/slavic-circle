import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {useTranslation} from "next-i18next";
import Box from "@mui/material/Box";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const kolozorIcon = "/images/info/kolozor.jpeg";
const interslavicIcon = "/images/info/interslavic.jpeg";
const newsIcon = "/images/info/news.jpeg";

const imageHeight = 250;

const Info = () => {
    const { t } = useTranslation('common');
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
                <Typography variant="h3" gutterBottom component="div">
                    {t('info')}
                </Typography>
                <Box sx={{ marginBottom: 2 }}>
                    <Paper>
                        <Box sx={{ padding: 1 }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Межславянский круг - это организация, отвечающая за развитие и поддержку межславянского языка. Обладающая представительным фактором, позволяет осуществлять демократичность и прозрачность принимаемых решений и возможность осуществления обратной связи.
                            </Typography>
                            <Typography variant="body1">
                                Межславянский круг полагает следующие цели для межславянского языка:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Простота изучения"
                                        secondary="Возможность для славяноязычных людей не учить, а доучивать язык"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Легкость понимания"
                                        secondary="Возможность облегчения понимания природных славянских языков как современных, так и исторических, для славяноязычных, так и для инозычных"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Международное общение"
                                        secondary="Возможность использования как языка международного общения, как между славянами, так и не славяноязычными, для различного рода целей влючая: туризм, бизнес, бытовое и попредметное общение, церковную тематику
"
                                    />
                                </ListItem>
                            </List>

                        </Box>
                    </Paper>
                </Box>
                    <Typography variant="h4" gutterBottom>
                        Наши ресурсы
                    </Typography>
                    <div style={{ gap: '10px', display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Card sx={{ display: "flex" }}>
                            <Box sx={{ width: `${imageHeight}px` }}>
                                <CardMedia
                                    component="img"
                                    height={imageHeight}
                                    image={interslavicIcon}
                                    alt="green iguana"
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: `${imageHeight}px` }}>
                                <CardActionArea>
                                    <CardContent sx={{ height: "150px", width: `${imageHeight}px` }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Межславянский язык
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Группа для общения на межславянском языке.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        VK
                                    </Button>
                                    <Button size="small" color="primary">
                                        Telegram
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                        <Card sx={{ display: "flex" }}>
                            <Box sx={{ width: `${imageHeight}px` }}>
                                <CardMedia
                                    component="img"
                                    height={imageHeight}
                                    image={newsIcon}
                                    alt="green iguana"
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: `${imageHeight}px` }}>
                                <CardActionArea>
                                    <CardContent sx={{ height: "150px", width: `${imageHeight}px` }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Межславянские вести
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Новости на межславянском языке (стандарт правописания около 2017 года)
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Telegram
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                        <Card sx={{ display: "flex" }}>
                            <Box sx={{ width: `${imageHeight}px` }}>
                                <CardMedia
                                    component="img"
                                    height={imageHeight}
                                    image={kolozorIcon}
                                    alt="green iguana"
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", height: `${imageHeight}px` }}>
                                <CardActionArea>
                                    <CardContent sx={{ height: "150px", width: `${imageHeight}px` }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Колозор
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Интересные материалы на и о межславянском языке.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        VK
                                    </Button>
                                    <Button size="small" color="primary">
                                        Telegram
                                    </Button>
                                    <Button size="small" color="primary">
                                        Zen
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </div>
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default Info;
