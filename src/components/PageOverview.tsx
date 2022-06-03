import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/pageOverview';

// An overview to the user to know about what to do.
// This can be made in a more interactive way to make it even more user friendly.
const PageOverview = () => {

  const classes = useStyles();

  return (
    <section className={classes.pageOverViewCont}>
      <section className={classes.pageDescriptionCont}>
        <Typography variant='h5'>Pre trained Intents</Typography>
        <Typography variant='subtitle1' gutterBottom>For humans, conversation comes naturally, but for bots, it’s harder.</Typography>
        <Typography variant='subtitle1' gutterBottom>In order to understand what the user wants to express, our AI Bot is trained to recognize different intents.
          For every intent the AI Bot gets a list of user messages (we call them expressions) as data to learn how users express that intent.
          For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent.
        </Typography>
        <Typography variant='subtitle1'>To help you setup your bot, we have created a selection of pre defined Intents based on your industry.
          You can personalize all the bot replies and create your own intents at later stage.</Typography>
      </section>
    </section>
  );
}

export default PageOverview;