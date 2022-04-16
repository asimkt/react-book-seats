import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';
import { Link } from 'react-router-dom';

export const Admin = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={
        <div className="container mx-auto">
          App Component
          <Link to="/book">Start booking</Link>
        </div>
      }
    ></BaseLayout>
  );
};
