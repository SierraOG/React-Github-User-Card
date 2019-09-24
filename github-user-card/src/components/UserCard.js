import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 400,
    marginTop: 40,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
    marginBottom: 10,
  },
});

const UserCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} >
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.user.name}
            </Typography>
            <Typography variant="h5" component="h2" >
                {props.user.login}
            </Typography>
            <CardMedia
                className={classes.media}
                image={props.user.avatar_url}
                title="Avatar image"
                />
            <Typography variant="body2" component="p">
                Location: {props.user.location}
                <br />
                Profile:  <a href={props.user.html_url}>{props.user.html_url}</a>
                <br />
                Followers: {props.user.followers}
                <br />
                Following: {props.user.following}
                {/* <br /> */}
                { props.user.bio ? <> <br/> Bio: {props.user.bio} </> : null }
                <br/>
                Contributions: 
            </Typography>
            <img style={{width: '350px'}} src={`http://ghchart.rshah.org/409ba5/${props.user.login}`} alt={`${props.user.login} Github activity chart`} wrapped />
            </CardContent>
        </Card>
    )
}

export default UserCard