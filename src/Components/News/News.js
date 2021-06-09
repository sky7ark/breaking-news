import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
   // border: '1px solid red',
    margin: '5px',
    padding: '5px',
    //width: '300px',

}
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    const classes = useStyles();
    const [seeMore, setSeeMore] = useState(false)
    
    return (
        <div style={styles}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={urlToImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {seeMore?description: description.slice(0,50)}
                            <a onClick={() => setSeeMore(!seeMore)}>{seeMore?<b>  Show less</b>:<b>  Read More</b>}</a>
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                   </Button>
                    <Button size="small" color="primary">
                        Learn More
                   </Button>
                </CardActions>
            </Card>
        </div>
    );
};
export default News;