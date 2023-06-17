import PropTypes from 'prop-types';

const ContactList = ({ children }) => {
  return <ul>{children}</ul>;
};

ContactList.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContactList;
