import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './header-nav-bar.module.css';
import activeStyles from './navlink.module.css';

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ` ${activeStyles['active']}`;
  }
  // console.log(pathname);
  return (
    <Link href={href}>
      <a className={styles['navbar-button']} {...props}>
        {children}
      </a>
    </Link>
  );
}
