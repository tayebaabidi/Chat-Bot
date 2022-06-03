import React from 'react';
import Typography from '@material-ui/core/Typography';
// the interface for IExpressionProps to define the datatypes for the props.
interface IExpressionProps {
  key: string,
  expression: string
}

const Expression = (props: IExpressionProps) => {

  const { expression } = props;

  return <Typography variant='subtitle2' gutterBottom>Visitor: {expression}</Typography>
}

export default Expression;