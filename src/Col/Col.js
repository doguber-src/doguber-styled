import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Col8,
  Col9,
  Col10,
  Col11,
  Col12,
  Col1Sm,
  Col2Sm,
  Col3Sm,
  Col4Sm,
  Col5Sm,
  Col6Sm,
  Col7Sm,
  Col8Sm,
  Col9Sm,
  Col10Sm,
  Col11Sm,
  Col12Sm,
} from './StyledComponents';

const colWidths = ['col', 'sm'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    offset: stringOrNumberProp,
  }),
]);

const propTypes = {
  sm: columnProps,
  className: PropTypes.string,
  offset: PropTypes.number,
  widths: PropTypes.array,
};

const defaultProps = {
  sm: null,
  className: null,
  offset: null,
  widths: colWidths,
};

const getColumnSizeClass = (isDesktop, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isDesktop ? 'Col' : `Col${colWidth}`;
  }
  return isDesktop ? `Col${colSize}` : `Col${colSize}${colWidth === 'sm' && 'Sm'}`;
};

const Col = (props) => {
  const {
    className,
    offset,
    widths,
    ...attributes
  } = props;
  let colClasses;
  let colOffset;

  widths.forEach((colWidth, i) => {
    const columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    const isDesktop = !i;

    if (offset) {
      const colSizeInterfix = isDesktop ? '' : `${colWidth}`;
      const colClass = getColumnSizeClass(isDesktop, colWidth, columnProp);
      const colOff = `${colSizeInterfix}${offset}`;
      colClasses = colClass;
      colOffset = colOff;
    } else {
      const colClass = getColumnSizeClass(isDesktop, colWidth, columnProp);
      colClasses = colClass;
    }
  });

  if (!colClasses) {
    colClasses = 'Col';
  }

  const classes = classNames(
    className,
    colClasses
  );

  switch (classes) {
    case 'Col1': return <Col1 {...attributes} className={classes} offset={colOffset} />;
    case 'Col2': return <Col2 {...attributes} className={classes} offset={colOffset} />;
    case 'Col3': return <Col3 {...attributes} className={classes} offset={colOffset} />;
    case 'Col4': return <Col4 {...attributes} className={classes} offset={colOffset} />;
    case 'Col5': return <Col5 {...attributes} className={classes} offset={colOffset} />;
    case 'Col6': return <Col6 {...attributes} className={classes} offset={colOffset} />;
    case 'Col7': return <Col7 {...attributes} className={classes} offset={colOffset} />;
    case 'Col8': return <Col8 {...attributes} className={classes} offset={colOffset} />;
    case 'Col9': return <Col9 {...attributes} className={classes} offset={colOffset} />;
    case 'Col10': return <Col10 {...attributes} className={classes} offset={colOffset} />;
    case 'Col11': return <Col11 {...attributes} className={classes} offset={colOffset} />;
    case 'Col12': return <Col12 {...attributes} className={classes} offset={colOffset} />;
    case 'Col1Sm': return <Col1Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col2Sm': return <Col2Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col3Sm': return <Col3Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col4Sm': return <Col4Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col5Sm': return <Col5Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col6Sm': return <Col6Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col7Sm': return <Col7Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col8Sm': return <Col8Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col9Sm': return <Col9Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col10Sm': return <Col10Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col11Sm': return <Col11Sm {...attributes} className={classes} offset={colOffset} />;
    case 'Col12Sm': return <Col12Sm {...attributes} className={classes} offset={colOffset} />;
    default: return <Col1 {...attributes} className={classes} offset={colOffset} />;
  }
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
