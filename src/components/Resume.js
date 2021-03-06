import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ResumeRow from './ResumeRow';

function Resume({ data }) {
  const resumeItems = data.map(item => (
    <ResumeRow
      {...item}
      key={item.title}
    />
  ));
  return (
    <Container className="py-3 px-3">
      {resumeItems}
    </Container>
  );
}

Resume.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Resume.defaultProps = {
  data: [],
};


export default Resume;
