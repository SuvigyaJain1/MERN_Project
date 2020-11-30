import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import img from './img.png';
import Posts from './Posts';

const useStyles = makeStyles({

  container:{
    overflow:'hidden',
    margin:'0',
    'minHeight':'100%',
  },
  statBar : {
    width:'100%',
    height:'10%',
    color:'white',
    fontSize: '40px',
    'marginRight':'20px',
    // background: '#556270',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #FF6B6B, #556270)',  /* Chrome 10-25, Safari 5.1-6 */
    // background: 'linear-gradient(to right, #FF6B6B, #556270)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  },
  posts:{},
  pfp:{
    position:'fixed',
    top:'calc(30% - 145px)',
    right:'calc(50% - 70px)',
    zIndex:'2',
    height:'140px',
    width:'140px',
    padding:'0px',
    borderRadius:'70px'
  },
  cover:{
    background: '#485563',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #29323c, #485563)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #29323c, #485563)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width:'100%',
    display:'block',
    position: 'fixed',
    top: '0',
    height:'30%',
  },
  profile:{
    width:'100%',
    display:'block',
    position: 'fixed',
    top: '30%',
    height:'70%',
  }
});

export default function ProfilePage(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    posts:[
      {
        "author": 'loading..',
        "caption": 'loading..',
        "content": "loading.."
      },
    ],

  });

  useEffect( () => {
    const dataToSubmit = {group: 'home'}
    axios.post('/api/posts/getposts', dataToSubmit)
      .then( res => {
      setState({...state, posts:res.data});
    })
    .catch(err => console.error(err.message))
  }, [])

  return (
    <div className={classes.container}>

      <Avatar className={classes.pfp} alt="Profile Image here" src={img}/>

      <div className={classes.cover}></div>

      <div className={classes.profile}>

        <div className={classes.statBar}>
          <Typography variant="overline" style={{display:'inline', fontSize:'17px', margin:'0px 40px 0px 10px'}}>Followers: </Typography>
          <Typography variant="overline" style={{display:'inline', fontSize:'17px', margin:'0px 40px 0px 10px'}}>Following: </Typography>
          <Typography variant="overline" style={{display:'inline', fontSize:'17px', margin:'0px 40px 0px 10px'}}>Posts: </Typography>
        </div>

        <div className={classes.posts}>
          <Posts posts={ state.posts } />        </div>
      </div>

    </div>
  );
}
