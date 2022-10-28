import NavBar from '../NavBar';
import './page.css';
const Page = ({ children, useAbsoluteCenter = false, showNavBar = true, pageTitle = "..." }) => {
  let className = ['page'];
  if (useAbsoluteCenter) {
    className.push('absoluteCenter');
  }
  if (showNavBar) {
    className.push('withNavBar');
  }

  return (
    <>
      {showNavBar && <NavBar title={pageTitle} />}
      <section className={className.join(' ')}>
        <section className="content">
          {children}
        </section>
      </section>
    </>
  );
}

export default Page;
