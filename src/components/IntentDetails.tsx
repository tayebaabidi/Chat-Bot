import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/intentDetails';

import { ITrainingData, IExpressionsEntityOrReply } from '../types/IIntentData';
import Expression from './Expression';

interface IIntentDetailsProps {
  openDetails: boolean,
  onDetailsClose: React.MouseEventHandler,
  reply: string,
  expressions: ITrainingData
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IntentDetails = (props: IIntentDetailsProps): React.ReactElement => {

  const classes = useStyles();
  const { openDetails, onDetailsClose, expressions: { expressions, expressionCount }, reply } = props;

  const expressionsList: React.ReactElement[] | any = useMemo(() => (
    expressions && expressions.map((expression: IExpressionsEntityOrReply) => {

      return <Expression key={expression.id} expression={expression.text} />
    })
  ), [expressions]);

  return (
    <Dialog
      open={openDetails}
      TransitionComponent={Transition}
      keepMounted
      onClose={onDetailsClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle>Intent details</DialogTitle>
      <DialogContent>
        <Typography variant='subtitle1' gutterBottom>
          The following are a list of pre defined user experssions that will be part of this Intent and a possible reply
          that the Bot gives. 
        </Typography>
        {expressionsList}
        <Typography variant='subtitle2' gutterBottom>Bot: {reply}</Typography>
        <hr />
        <Typography variant='subtitle1'>
          There are {expressionCount} created expressions for this intent.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button className={classes.closeButton} onClick={onDetailsClose}  variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default IntentDetails;