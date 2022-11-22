import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {NewsItem} from "../../pages/api/news";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const NewsItem = ({ item }: { item: NewsItem }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const goToItem = () => {
        router.push(`/news/${item.id}`);
    };
    return (
        <Box
          sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}
        >
            <Card sx={{ maxWidth: 350, minWidth: 350, marginTop: 4 }} onClick={goToItem}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="194"
                        image={item.cover_uri}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                            {item.abstract}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {t('read_all')}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default NewsItem;
